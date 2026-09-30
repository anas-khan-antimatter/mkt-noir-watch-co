"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/configurator", label: "Configurator" },
  { href: "/atelier", label: "Atelier" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/size-guide", label: "Size Guide" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-900/90 backdrop-blur-md border-b border-noir-700/50">
      <div className="section-container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
            <span className="text-noir-900 font-bold text-sm">N</span>
          </span>
          <span className="font-serif text-xl tracking-widest text-noir-50">
            NOIR
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive =
              pathname === l.href || pathname?.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-gold-500"
                    : "text-noir-400 hover:text-gold-500"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-noir-50"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-noir-900/98 backdrop-blur-md border-t border-noir-700/50">
          <div className="section-container py-6 flex flex-col gap-4">
            {links.map((l) => {
              const isActive =
                pathname === l.href || pathname?.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-gold-500"
                      : "text-noir-400 hover:text-gold-500"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}