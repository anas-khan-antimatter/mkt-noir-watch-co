import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noir Watch Co — Haute Horlogerie",
  description:
    "Swiss haute horlogerie maison. Pure black, mirror silver, microscopic precision. Define your legacy.",
};

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-950/80 backdrop-blur-xl border-b border-mirror/5">
      <div className="section-container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-8 h-px bg-mirror/60 group-hover:bg-mirror transition-colors" />
          <span className="font-display text-lg tracking-[0.3em] text-mirror font-medium">
            NOIR
          </span>
          <span className="font-mono text-micro text-mirror-muted self-end pb-0.5">
            &mdash;01
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/collection"
            className="font-mono text-detail text-mirror-muted hover:text-mirror transition-colors"
          >
            Collection
          </Link>
          <Link
            href="/configure"
            className="font-mono text-detail text-mirror-muted hover:text-mirror transition-colors"
          >
            Configure
          </Link>
          <Link
            href="/size-guide"
            className="font-mono text-detail text-mirror-muted hover:text-mirror transition-colors"
          >
            Size Guide
          </Link>
          <Link
            href="/collection"
            className="btn-primary text-micro"
          >
            Explore
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <details className="md:hidden group">
          <summary className="list-none cursor-pointer text-mirror-muted hover:text-mirror">
            <span className="font-mono text-micro tracking-extra">Menu</span>
          </summary>
          <div className="absolute top-full right-0 left-0 bg-noir-950/95 backdrop-blur-xl border-t border-mirror/5 p-6 flex flex-col gap-4">
            <Link href="/collection" className="font-mono text-detail text-mirror-muted hover:text-mirror">
              Collection
            </Link>
            <Link href="/configure" className="font-mono text-detail text-mirror-muted hover:text-mirror">
              Configure
            </Link>
            <Link href="/size-guide" className="font-mono text-detail text-mirror-muted hover:text-mirror">
              Size Guide
            </Link>
          </div>
        </details>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mirror/5 mt-24">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-mirror/40" />
              <span className="font-display text-lg tracking-[0.3em] text-mirror">NOIR</span>
            </div>
            <p className="text-mirror-muted text-sm max-w-md leading-relaxed">
              Founded 1893 in La Chaux-de-Fonds, Switzerland. Every movement hand-assembled,
              regulated, and finished by our master horologists.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-micro text-mirror-muted uppercase tracking-extra mb-4">Maison</h4>
            <ul className="space-y-2">
              <li><Link href="/collection" className="text-sm text-mirror-muted hover:text-mirror transition-colors">Collection</Link></li>
              <li><Link href="/configure" className="text-sm text-mirror-muted hover:text-mirror transition-colors">Configure</Link></li>
              <li><Link href="/size-guide" className="text-sm text-mirror-muted hover:text-mirror transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-micro text-mirror-muted uppercase tracking-extra mb-4">Service</h4>
            <ul className="space-y-2">
              <li><Link href="/waitlist" className="text-sm text-mirror-muted hover:text-mirror transition-colors">Waitlist</Link></li>
              <li><span className="text-sm text-mirror-muted">info@noirwatch.co</span></li>
            </ul>
          </div>
        </div>
        <div className="divider-mirror mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-micro text-mirror-muted">
            &copy; 2025 Noir Watch Co. Haute Horlogerie Suisse.
          </p>
          <p className="font-mono text-micro text-noir-500">
            La Chaux-de-Fonds &mdash; Gen&egrave;ve
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}