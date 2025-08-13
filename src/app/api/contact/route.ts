// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { z } from "zod";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// --- Schemas ---
const MetaSchema = z
  .object({
    secondsOnForm: z.number().int().min(0).max(3600).optional(),
    ua: z.string().max(1024).optional(),
  })
  .optional();

const ContactSchema = z.object({
  firstName: z.string().min(1, "First name required").max(100),
  lastName: z.string().max(100).optional(),
  email: z.string().email("Invalid email"),
  company: z.string().max(100).optional(),
  message: z.string().min(1, "Message required").max(2000),
  captcha: z.string().min(1, "Captcha required"),
  // optional honeypot - if provided on client
  website: z.string().max(100).optional(),
  meta: MetaSchema,
});

// --- Simple in-memory rate limiter (per server instance) ---
const WINDOW_MS = 60_000; // 1 minute window
const MAX_REQ = 10; // max requests per IP within window
const hits = new Map<string, { count: number; ts: number }>();
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return true;
  }
  if (rec.count >= MAX_REQ) return false;
  rec.count++;
  return true;
}

// --- Helpers ---
function jsonError(message: string, status = 400, extra?: unknown) {
  return NextResponse.json(
    { error: message, ...(extra ? { details: extra } : {}) },
    { status }
  );
}

export async function POST(req: NextRequest) {
  try {
    // Extract IP (works on Vercel/most proxies)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "0.0.0.0";

    if (!rateLimit(ip)) {
      return jsonError("Too many requests. Try again shortly.", 429);
    }

    const raw = await req.json();
    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      return jsonError("Invalid input", 400, parsed.error.flatten());
    }

    const {
      firstName,
      lastName,
      email,
      company,
      message,
      captcha,
      website,
      meta,
    } = parsed.data;

    // Honeypot: if filled, treat as spam and return success (do not leak signal)
    if (website && website.trim().length > 0) {
      return NextResponse.json({ message: "Message stored successfully" });
    }

    // Verify reCAPTCHA
    if (RECAPTCHA_SECRET_KEY) {
      let captchaResult: {
        success: boolean;
        score?: number;
        action?: string;
        ["error-codes"]?: string[];
      };
      try {
        const verifyRes = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              secret: RECAPTCHA_SECRET_KEY,
              response: captcha,
            }),
          }
        );
        captchaResult = await verifyRes.json();
      } catch {
        return jsonError("Captcha verification service unavailable.", 503);
      }

      if (!captchaResult.success) {
        return jsonError("Failed captcha verification", 403, {
          codes: captchaResult["error-codes"],
        });
      }

      // Optional stricter gate for v3 (score 0.0–1.0). Tweak as needed.
      if (
        typeof captchaResult.score === "number" &&
        captchaResult.score < 0.4
      ) {
        return jsonError("Captcha score too low.", 403);
      }
    }

    if (!db) return jsonError("Database not initialized", 500);

    // Additional light anti-bot signal: secondsOnForm
    const secondsOnForm = meta?.secondsOnForm ?? 0;
    const userAgent = meta?.ua || req.headers.get("user-agent") || "";

    // Persist submission (do not store captcha token)
    await db.collection("contact_submissions").add({
      firstName,
      lastName: lastName || null,
      email,
      company: company || null,
      message,
      ip, // useful for abuse triage; avoid using for marketing
      ua: userAgent, // same note as above
      secondsOnForm, // helps spot bots submitting instantly
      referrer: req.headers.get("referer") || null,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Message stored successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return jsonError("Internal Server Error", 500);
  }
}
