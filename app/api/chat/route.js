import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const systemPrompt = `
      You are Holt's Drones Virtual Assistant.
      You answer questions about drone photography, aerial inspections, pricing,
      and services in Fresno, CA. Keep replies concise, professional, and friendly.
      Include helpful details only related to Holt’s Drones.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      {
        reply:
          "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly at (559) 213-3403.",
      },
      { status: 500 }
    );
  }
}


