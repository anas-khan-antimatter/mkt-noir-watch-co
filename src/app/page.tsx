import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir-950">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-noir-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111_0%,_#050505_70%)]" />
          {/* Subtle micro-detail pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='20' cy='20' r='0.6' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center section-container">
          <p className="micro-label mb-6">Horlogerie Suisse · Since 1893</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.12em] text-noir-50 mb-6 leading-tight font-light">
            Precision in
            <br />
            <span className="text-noir-200 italic tracking-wider">Every Detail</span>
          </h1>
          <p className="text-noir-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
            Born in the Jura Mountains. Assembled by hand. Regulated to the
            standards of the Swiss observatory. Every Noir timepiece is a
            statement of mechanical purity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection" className="btn-primary">
              Explore Collection
            </Link>
            <Link href="/atelier" className="btn-outline">
              The Atelier
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-noir-500 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-noir-200/40 to-transparent" />
        </div>
      </section>

      {/* ─── Collection overview ─── */}
      <section className="py-28 bg-noir-900">
        <div className="section-container">
          <div className="mb-16">
            <p className="micro-label mb-3">The Collection</p>
            <h2 className="section-title">Three Voices, One Philosophy</h2>
            <div className="divider-platinum mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "L'Ombre",
                sub: "The Shadow",
                desc: "Skeletonized movement suspended in sapphire. Every bridge hand-polished, every screw mirror-finished. Transparency as a statement.",
                slug: "/collection/lombre",
              },
              {
                name: "Minuit",
                sub: "Midnight",
                desc: "Forged carbon case, sunburst black dial, luminous hands that read in absolute darkness. Aerospace materials meet traditional finishing.",
                slug: "/collection/minuit",
              },
              {
                name: "Héritage",
                sub: "Heritage",
                desc: "Hand-guilloché dial on a 1920s rose engine. Blued steel Breguet hands. A Belle Époque pocket watch reimagined for the modern wrist.",
                slug: "/collection/heritage",
              },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.slug}
                className="card group"
              >
                <div className="mb-6">
                  <span className="text-noir-50 text-5xl font-serif">{c.name[0]}</span>
                </div>
                <h3 className="text-2xl font-serif text-noir-50 mb-1 tracking-wider font-light">
                  {c.name}
                </h3>
                <p className="text-noir-500 text-[9px] uppercase tracking-[0.3em] mb-4">
                  {c.sub}
                </p>
                <p className="text-noir-300 text-xs leading-relaxed mb-6">
                  {c.desc}
                </p>
                <span className="text-noir-400 text-[9px] tracking-wider uppercase inline-flex items-center gap-2">
                  Discover →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Craftsmanship ─── */}
      <section className="py-28 bg-noir-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="micro-label mb-3">Craftsmanship</p>
              <h2 className="section-title mb-8">
                The Art of
                <br />
                <span className="text-noir-200 font-light">Fine Watchmaking</span>
              </h2>
              <div className="divider-platinum mb-8" />
              <p className="text-noir-300 text-sm leading-relaxed mb-6">
                Every Noir timepiece begins its journey in the Jura Mountains of
                Switzerland. Our master horologists spend over 200 hours
                assembling, regulating, and finishing each movement by hand.
              </p>
              <p className="text-noir-400 text-xs leading-relaxed mb-8">
                From the circular graining on the mainplate to the hand-bevelled
                edges of every bridge — no detail is too small. The unseen should
                be as beautiful as the face you wear.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "200+", label: "Hours per movement" },
                  { value: "35", label: "Master horologists" },
                  { value: "5yr", label: "International warranty" },
                  { value: "1893", label: "Founded" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l border-noir-400/40 pl-4"
                  >
                    <p className="text-3xl font-serif text-noir-50">{stat.value}</p>
                    <p className="text-noir-500 text-[10px] uppercase tracking-[0.2em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/atelier" className="btn-outline">
                  View All Chapters
                </Link>
              </div>
            </div>

            {/* Craftsmanship visual panel */}
            <div className="relative aspect-[4/5] bg-noir-900 border border-noir-700/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-noir-400/30 flex items-center justify-center">
                    <span className="text-noir-50 text-2xl font-serif">N</span>
                  </div>
                  <p className="text-noir-500 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Hand assembled in
                  </p>
                  <p className="text-noir-50 text-xl font-serif tracking-wider font-light">
                    La Chaux-de-Fonds
                  </p>
                  <div className="divider-platinum mt-6 mb-6" />
                  <p className="text-noir-500 text-[9px] tracking-[0.4em] uppercase">
                    Switzerland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Configurator teaser ─── */}
      <section className="py-20 bg-noir-900">
        <div className="section-container text-center">
          <p className="micro-label mb-3">Configurator</p>
          <h2 className="section-title mb-6">
            Compose Your
            <br />
            <span className="text-noir-200">Timepiece</span>
          </h2>
          <div className="divider-platinum mb-8" />
          <p className="text-noir-300 text-xs max-w-lg mx-auto leading-relaxed mb-8">
            Choose your case, strap, and dial. Each combination generates a
            live price and SKU.
          </p>
          <Link href="/configure" className="btn-primary">
            Open Configurator
          </Link>
        </div>
      </section>

      {/* ─── Size guide teaser ─── */}
      <section className="py-20 bg-noir-950">
        <div className="section-container text-center">
          <p className="micro-label mb-3">Size Guide</p>
          <h2 className="section-title mb-6">
            Find Your
            <br />
            <span className="text-noir-200">Proportion</span>
          </h2>
          <div className="divider-platinum mb-8" />
          <p className="text-noir-300 text-xs max-w-lg mx-auto leading-relaxed mb-8">
            Measure your wrist and discover the ideal case diameter for your
            silhouette.
          </p>
          <Link href="/size-guide" className="btn-outline">
            Measure Now
          </Link>
        </div>
      </section>

      {/* ─── Waitlist ─── */}
      <section className="py-20 bg-noir-900 border-t border-noir-700/20">
        <div className="section-container text-center">
          <p className="micro-label mb-3">Private Client</p>
          <h2 className="section-title mb-6">
            Register Your
            <br />
            <span className="text-noir-200">Interest</span>
          </h2>
          <div className="divider-platinum mb-8" />
          <p className="text-noir-300 text-xs max-w-lg mx-auto leading-relaxed mb-8">
            Join the waitlist for priority access when your chosen collection
            becomes available.
          </p>
          <Link href="/waitlist" className="btn-primary">
            Notify Me
          </Link>
        </div>
      </section>
    </>
  );
}