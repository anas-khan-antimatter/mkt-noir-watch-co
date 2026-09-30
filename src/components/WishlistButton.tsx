"use client";

import { useEffect, useState } from "react";

interface WishlistItem {
  slug: string;
  name: string;
  price: number;
}

export default function WishlistButton({
  slug,
  name,
  price,
}: {
  slug: string;
  name: string;
  price: number;
}) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("noir_wishlist");
      if (stored) setWishlist(JSON.parse(stored));
    } catch {}
  }, []);

  const inWishlist = wishlist.some((w) => w.slug === slug);

  const toggle = () => {
    let next: WishlistItem[];
    if (inWishlist) {
      next = wishlist.filter((w) => w.slug !== slug);
    } else {
      next = [...wishlist, { slug, name, price }];
    }
    setWishlist(next);
    localStorage.setItem("noir_wishlist", JSON.stringify(next));
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-4 py-2 border text-sm tracking-widest uppercase transition-all duration-300 ${
        inWishlist
          ? "border-gold-500 bg-gold-500/10 text-gold-500"
          : "border-noir-500 text-noir-400 hover:border-gold-500 hover:text-gold-500"
      }`}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={inWishlist ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {inWishlist ? "Wishlisted" : "Wishlist"}
    </button>
  );
}