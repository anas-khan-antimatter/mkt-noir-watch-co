import { NextRequest, NextResponse } from "next/server";

interface WishlistItem {
  slug: string;
  name: string;
  price: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, items } = body;

    // Deterministic fallback — always works, no API key needed
    if (!email || !items || !Array.isArray(items)) {
      return NextResponse.json(
        { ok: false, message: "Email and items required" },
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

    console.log(
      "[wishlist] Notify",
      email,
      items.map((i: WishlistItem) => i.name)
    );

    return NextResponse.json({
      ok: true,
      message: `Notification registered for ${items.length} timepiece(s)`,
      eta: "You'll hear from us within 24 hours when stock arrives.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body" },
      { status: 400 }
    );
  }
}