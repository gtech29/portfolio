"use client";

import React, { useState, FormEvent } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

if (!siteKey) {
  console.warn(
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing from your environment."
  );
}

export default function ContactPage() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) return; // honeypot

    if (!captchaValue) {
      setStatus("Please verify you're not a robot.");
      return;
    }

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      captcha: captchaValue,
    };

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Message sent successfully!");
      form.reset();
      setCaptchaValue(null);
    } catch (err) {
      console.error(err);
      setStatus(
        err instanceof Error
          ? `Failed to send: ${err.message}`
          : "An unexpected error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
          If something here resonates or you just want to connect, feel free to
          reach out. I welcome questions, conversations, and collaboration. You
          can use the form below to send a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            className="w-full px-4 py-2 border rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Honeypot for bots */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* reCAPTCHA */}
          {siteKey ? (
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(val) => setCaptchaValue(val)}
              className="pt-2"
            />
          ) : (
            <p className="text-red-600 text-sm">reCAPTCHA is not configured.</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full px-5 py-2.5 rounded-full font-medium transition-colors duration-200
              ${
                isSubmitting
                  ? "bg-[#b9ccee] text-gray-500 cursor-not-allowed"
                  : "bg-[#8badec] hover:bg-[#79a0dc] text-black"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8badec]
            `}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm pt-2 ${
                status.toLowerCase().includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
