import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { from_name, from_email, subject, message, page_url, user_agent } = body || {};

    // Log env presence (not values)
    console.log("send-email envs", {
      service: !!process.env.EMAILJS_SERVICE_ID,
      template: !!process.env.EMAILJS_TEMPLATE_ID,
      hasPrivate: !!process.env.EMAILJS_PRIVATE_KEY,
      hasPublic: !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    // Minimal validation
    if (!from_name || !from_email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailjsPayload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      accessToken: process.env.EMAILJS_PRIVATE_KEY || "",
      template_params: {
        from_name,
        from_email,
        subject: subject || "",
        message,
        page_url: page_url || "",
        user_agent: user_agent || "",
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailjsPayload),
    });

    const text = await res.text();
    console.log("emailjs response", res.status, text);

    if (!res.ok) {
      return NextResponse.json({ error: text }, { status: res.status });
    }

    return NextResponse.json({ success: true });

  } catch (e) {
    console.error("send-email error", e);
    return new NextResponse(e?.message || "Server error", { status: 500 });
  }
}

