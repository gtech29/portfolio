// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { z } from "zod";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const ContactSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().max(100).optional(),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(1).max(2000),
  captcha: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, company, message, captcha } =
      parsed.data;

    // Verify reCAPTCHA
    if (RECAPTCHA_SECRET_KEY) {
      const verifyRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        }
      );
      const captchaResult = await verifyRes.json();

      if (!captchaResult.success) {
        return NextResponse.json(
          { error: "Failed captcha verification" },
          { status: 403 }
        );
      }
    }

    if (!db) {
      return NextResponse.json(
        { error: "Database not initialized" },
        { status: 500 }
      );
    }

    await db.collection("contact_submissions").add({
      firstName,
      lastName,
      email,
      company: company || null,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Message stored successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
