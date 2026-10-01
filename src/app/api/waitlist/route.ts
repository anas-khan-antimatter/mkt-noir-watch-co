import { NextRequest, NextResponse } from "next/server";

interface WaitlistEntry {
  name: string;
  email: string;
  model?: string;
  created: string;
}

// In-memory store (resets on deploy — real production would use a DB)
let entries: WaitlistEntry[] = [];

export async function GET() {
  return NextResponse.json({
    ok: true,
    count: entries.length,
    message: "Waitlist is open. POST to { name, email, model? } to join.",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, model } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 },
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "A valid email address is required." },
        { status: 400 },
      );
    }

    if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { ok: false, error: "This email is already on the waitlist." },
        { status: 409 },
      );
    }

    const validModels = ["l-ombre", "minuit", "heritage"];
    if (model && !validModels.includes(model)) {
      return NextResponse.json(
        {
          ok: false,
          error: `Invalid model. Valid options: ${validModels.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const entry: WaitlistEntry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      model: model || undefined,
      created: new Date().toISOString(),
    };

    entries.push(entry);

    return NextResponse.json(
      {
        ok: true,
        message: `You're on the waitlist, ${entry.name}. We'll notify you when your model is ready.`,
        position: entries.length,
        entry,
      },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }
}