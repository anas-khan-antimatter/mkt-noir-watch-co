import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, config } = body;

    if (!email || !config) {
      return NextResponse.json(
        { ok: false, message: "Email and configuration required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("[notify] Config saved for", email, config);

    return NextResponse.json({
      ok: true,
      message: "Configuration saved. We'll notify you when available.",
      eta: "Typically 2–4 weeks for bespoke configurations.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body" },
      { status: 400 }
    );
  }
}