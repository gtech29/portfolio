"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
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

type FieldErrors = Partial<Record<"firstName" | "email" | "message", string>>;

export default function ContactPage() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const validate = (fd: FormData): FieldErrors => {
    const errs: FieldErrors = {};
    const firstName = String(fd.get("firstName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!firstName) errs.firstName = "Please enter your first name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address.";
    if (!message) errs.message = "Please write a brief message.";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: if filled, drop silently
    if (fd.get("website")) return;

    const errs = validate(fd);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus("Please fix the highlighted fields.");
      return;
    }

    if (!captchaValue) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    const secondsOnForm = Math.max(
      0,
      Math.round((Date.now() - startTimeRef.current) / 1000)
    );

    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
      captcha: captchaValue,
      meta: {
        secondsOnForm,
        ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
      },
    };

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      // Success UI
      setStatus("Message sent successfully! I’ll get back to you soon.");
      form.reset();
      setCaptchaValue(null);
      // Optionally scroll to status
      // document.getElementById("contact-status")?.scrollIntoView({ behavior: "smooth" });
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
        <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6 text-center">
          Want to collaborate or ask about a project? Drop a note—happy to chat.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
          aria-describedby="contact-status"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "err-firstName" : undefined
                }
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p id="err-firstName" className="mt-1 text-xs text-red-600">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name (optional)"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p id="err-email" className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company (optional)"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p id="err-message" className="mt-1 text-xs text-red-600">
                {errors.message}
              </p>
            )}
          </div>

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

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-5 py-2.5 rounded-full font-medium transition-colors duration-200 ${
              isSubmitting
                ? "bg-[#b9ccee] text-gray-500 cursor-not-allowed"
                : "bg-[#8badec] hover:bg-[#79a0dc] text-black"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8badec]`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p
              id="contact-status"
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

        <p className="text-xs text-gray-500 text-center">
          Protected by reCAPTCHA. <span className="underline">Privacy</span> •{" "}
          <span className="underline">Terms</span>
        </p>
      </div>
    </section>
  );
}
