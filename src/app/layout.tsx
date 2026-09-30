import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}