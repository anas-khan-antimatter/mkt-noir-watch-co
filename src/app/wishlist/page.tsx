"use client";
import { useState } from "react";

interface WishItem {
  collection: string;
  label: string;
  notified: boolean;
}

export default function WishlistPage() {
  const [items, setItems] = useState<WishItem[]>([
    { collection: "lombre", label: "L'Ombre — Platinum 950", notified: false },
    { collection: "minuit", label: "Minuit — Forged Carbon", notified: true },
  ]);

  function toggleNotify(slug: string) {
    setItems((prev) =>
      prev.map((i) =>
        i.collection === slug ? { ...i, notified: !i.notified } : i
      )
    );
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.collection !== slug));
  }

  return (
    <div className="min-h-screen bg-noir-950">
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">Client</p>
        <h1 className="section-title">Your Wishlist</h1>
        <div className="divider-platinum mt-6 mb-8" />
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-noir-400 text-sm">Your wishlist is empty.</p>
            <a href="/collection" className="btn-outline mt-6 inline-block">
              Explore Collection
            </a>
          </div>
        ) : (
          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item.collection}
                className="border border-noir-700/30 p-6 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-noir-50 text-sm font-serif">{item.label}</p>
                  <p className="text-noir-500 text-[10px] tracking-[0.3em] uppercase mt-1">
                    Ref: NWC-{item.collection.toUpperCase().slice(0, 4)}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => toggleNotify(item.collection)}
                    className={`text-[10px] uppercase tracking-[0.3em] ${
                      item.notified ? "text-noir-50" : "text-noir-500"
                    }`}
                  >
                    {item.notified ? "Notify On" : "Notify Off"}
                  </button>
                  <button
                    onClick={() => removeItem(item.collection)}
                    className="text-noir-500 text-[10px] hover:text-accent-red transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}