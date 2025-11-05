"use client";
import React, { useRef, useState } from "react";

export default function EmailContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle" });

  const validate = (fd) => {
    const name = String(fd.get("from_name") || "").trim();
    const email = String(fd.get("from_email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) return "Please fill out name, email, and message.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);

    // honeypot
    if (String(fd.get("honeypot") || "")) {
      setStatus({ type: "success", message: "Thanks!" });
      formRef.current.reset();
      return;
    }

    const err = validate(fd);
    if (err) return setStatus({ type: "error", message: err });

    console.log("Submitting contact form…");
    setStatus({ type: "loading" });

    const payload = {
      from_name: fd.get("from_name"),
      from_email: fd.get("from_email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
      page_url: typeof window !== "undefined" ? window.location.href : "",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    try {
      const r = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await r.text();
      console.log("send-email status:", r.status, "body:", text);

      if (r.ok) {
        setStatus({ type: "success", message: "Thanks! Your message was sent." });
        formRef.current?.reset();
      } else {
        setStatus({ type: "error", message: text || "Failed to send. Try again." });
      }
    } catch (e) {
      console.error("Send error:", e);
      setStatus({ type: "error", message: e?.message || "Network error." });
    }
  };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-sm text-gray-500 mb-4">Have a project in mind? Send a note and we'll reply by email.</p>

      {status.type === "success" && <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-3 text-sm">{status.message}</div>}
      {status.type === "error" && <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm">{status.message}</div>}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input name="from_name" type="text" required className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input name="from_email" type="email" required className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Subject</label>
          <input name="subject" type="text" className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Message</label>
          <textarea name="message" required rows={6} className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>

        <input type="hidden" name="page_url" value={typeof window !== "undefined" ? window.location.href : ""} />
        <input type="hidden" name="user_agent" value={typeof navigator !== "undefined" ? navigator.userAgent : ""} />

        <button type="submit" disabled={status.type === "loading"} className="w-full rounded-2xl bg-black px-5 py-3 text-white disabled:opacity-60">
          {status.type === "loading" ? "Sending…" : status.type === "success" ? "Sent!" : "Send message"}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">No auto-reply is sent to the user.</p>
      </form>
    </div>
  );
}

