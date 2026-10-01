import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noir Watch Co — Precision Crafted Timepieces",
  description:
    "Discover the art of horology. Noir Watch Co fuses Swiss precision with avant-garde design for the discerning collector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-noir-950 text-noir-100 antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-950/80 backdrop-blur-lg border-b border-noir-700/30">
          <div className="section-container flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-[0.2em] text-noir-50 font-light">
                N O I R
              </span>
              <span className="text-noir-500 text-[10px] tracking-[0.4em] hidden md:inline">
                WATCH CO
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/collection" className="micro-label hover:text-noir-200 transition-colors">Collection</Link>
              <Link href="/configure" className="micro-label hover:text-noir-200 transition-colors">Configure</Link>
              <Link href="/atelier" className="micro-label hover:text-noir-200 transition-colors">Atelier</Link>
              <Link href="/size-guide" className="micro-label hover:text-noir-200 transition-colors">Size Guide</Link>
              <Link href="/waitlist" className="btn-outline text-[11px]">Notify Me</Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-noir-950 border-t border-noir-700/20 mt-24 py-12">
          <div className="section-container grid md:grid-cols-4 gap-8">
            <div>
              <p className="font-serif text-lg tracking-wider text-noir-50 mb-2">N O I R</p>
              <p className="text-noir-500 text-[10px] tracking-[0.3em]">WATCH CO</p>
              <p className="text-noir-600 text-[9px] mt-4">La Chaux-de-Fonds, Suisse</p>
            </div>
            <div>
              <p className="micro-label mb-3">Collection</p>
              <div className="flex flex-col gap-1 text-[10px]">
                <Link href="/collection/lombre" className="text-noir-400 hover:text-noir-100 transition-colors">L&apos;Ombre</Link>
                <Link href="/collection/minuit" className="text-noir-400 hover:text-noir-100 transition-colors">Minuit</Link>
                <Link href="/collection/heritage" className="text-noir-400 hover:text-noir-100 transition-colors">Héritage</Link>
              </div>
            </div>
            <div>
              <p className="micro-label mb-3">Explore</p>
              <div className="flex flex-col gap-1 text-[10px]">
                <Link href="/configure" className="text-noir-400 hover:text-noir-100 transition-colors">Configurator</Link>
                <Link href="/atelier" className="text-noir-400 hover:text-noir-100 transition-colors">Atelier</Link>
                <Link href="/size-guide" className="text-noir-400 hover:text-noir-100 transition-colors">Size Guide</Link>
              </div>
            </div>
            <div>
              <p className="micro-label mb-3">Client</p>
              <div className="flex flex-col gap-1 text-[10px]">
                <Link href="/waitlist" className="text-noir-400 hover:text-noir-100 transition-colors">Waitlist</Link>
                <Link href="/wishlist" className="text-noir-400 hover:text-noir-100 transition-colors">Wishlist</Link>
              </div>
            </div>
          </div>
          <div className="section-container mt-8 pt-4 border-t border-noir-700/10">
            <p className="text-noir-500 text-[9px] tracking-[0.3em]">
              © 2025 Noir Watch Co — Horlogerie Suisse
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}