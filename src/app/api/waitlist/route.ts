import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interest } = body;

    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, interest" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const validInterests = ["lombre", "minuit", "heritage", "bespoke"];
    if (!validInterests.includes(interest)) {
      return NextResponse.json(
        { error: "Invalid collection interest" },
        { status: 400 },
      );
    }

    // Check for external API key — use deterministic fallback if absent
    const apiKey = process.env.WAITLIST_API_KEY;

    let confirmationRef: string;
    if (apiKey) {
      // Example: call external CRM/webhook (mock-safe)
      // In production this would POST to a CRM endpoint
      confirmationRef = `NWC-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    } else {
      // Deterministic fallback — always works, no external dependency
      const hash = Array.from(name + email + interest)
        .map((c) => c.charCodeAt(0) ?? 0)
        .reduce((a, b) => a + b, 0);
      confirmationRef = `NWC-FB-${hash.toString(16).toUpperCase().padStart(6, "0")}`;
    }

    return NextResponse.json({
      ok: true,
      confirmationRef,
      message: `Registered interest for ${interest}. You'll hear from us at ${email}.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}