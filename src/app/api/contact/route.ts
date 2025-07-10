import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

// Optional: validate captcha server-side
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Optional: Validate reCAPTCHA token
    if (!body.captcha) {
      return NextResponse.json(
        { error: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    if (RECAPTCHA_SECRET_KEY) {
      const verifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${RECAPTCHA_SECRET_KEY}&response=${body.captcha}`,
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

    // Save to Firestore
    const submissionRef = db.collection("contact_submissions").doc();
    await submissionRef.set({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company || null,
      message: body.message,
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
