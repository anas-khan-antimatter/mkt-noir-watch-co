"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface WishlistItem {
  slug: string;
  name: string;
  price: number;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("noir_wishlist");
      if (stored) setWishlist(JSON.parse(stored));
    } catch {}
  }, []);

  const remove = (slug: string) => {
    const next = wishlist.filter((w) => w.slug !== slug);
    setWishlist(next);
    localStorage.setItem("noir_wishlist", JSON.stringify(next));
  };

  const handleNotifyAll = async () => {
    if (!email) return;
    try {
      await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, items: wishlist }),
      });
    } catch {}
    setSent(true);
  };

  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Header */}
      <section className="py-20 bg-noir-800 border-b border-noir-700/50">
        <div className="section-container">
          <p className="section-subtitle mb-3">Your Collection</p>
          <h1 className="section-title mb-2">Wishlist</h1>
          <div className="w-16 h-px bg-gold-500 mt-6" />
          <p className="text-noir-400 mt-6">
            {wishlist.length === 0
              ? "Your wishlist is empty. Explore our collections and save the timepieces that speak to you."
              : `${wishlist.length} timepiece${wishlist.length === 1 ? "" : "s"} saved`}
          </p>
        </div>
      </section>

      {/* Wishlist items */}
      <section className="py-16 section-container">
        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-noir-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-noir-500">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <p className="text-noir-400 mb-8">Nothing saved yet.</p>
            <Link href="/collections" className="btn-primary">
              Explore Collections
            </Link>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div
                  key={item.slug}
                  className="bg-noir-800/30 border border-noir-700/30 p-6 group hover:border-gold-500/30 transition-all duration-300"
                >
                  {/* Watch icon */}
                  <div className="w-full aspect-[4/3] bg-noir-900 mb-4 flex items-center justify-center border border-noir-700/30">
                    <div className="w-16 h-16 rounded-full border-2 border-noir-600 flex items-center justify-center">
                      <span className="text-noir-500 font-serif text-lg">N</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-serif text-noir-50 tracking-wider mb-1">
                    {item.name}
                  </h2>
                  <p className="text-gold-500 font-mono text-sm mb-4">
                    CHF {item.price.toLocaleString()}
                  </p>

                  <div className="flex gap-2">
                    <Link
                      href={`/collections/${item.slug}`}
                      className="text-sm tracking-widest uppercase text-noir-400 hover:text-gold-500 transition-colors flex-1 text-center py-2 border border-noir-600"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => remove(item.slug)}
                      className="text-xs tracking-widest uppercase text-noir-500 hover:text-red-400 transition-colors py-2 px-3 border border-noir-600"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Notify Me */}
            <div className="mt-16 p-8 border border-noir-700/30 bg-noir-800/20 max-w-lg mx-auto text-center">
              {sent ? (
                <p className="text-gold-500">
                  ✓ We&apos;ll notify you at {email} when any of these
                  timepieces become available.
                </p>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-3">
                    Notify Me
                  </p>
                  <p className="text-noir-400 text-sm mb-4">
                    Get notified when your wishlisted timepieces are available
                    for order.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-noir-900 border border-noir-600 px-4 py-2 text-noir-50 text-sm focus:border-gold-500 outline-none"
                    />
                    <button
                      onClick={handleNotifyAll}
                      className="btn-primary text-xs whitespace-nowrap"
                    >
                      Notify All
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}