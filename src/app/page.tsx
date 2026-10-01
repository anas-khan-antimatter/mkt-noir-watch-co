import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-noir-950">
          <div className="absolute inset-0 bg-radial-subtle" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23e8e8e8' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 text-center section-container max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-px bg-mirror/20" />
            <span className="font-mono text-micro text-mirror-muted tracking-extra">
              HAUTE HORLOGERIE SUISSE
            </span>
            <span className="w-12 h-px bg-mirror/20" />
          </div>

          <div className="mb-8">
            <span className="block font-display text-[clamp(3rem,8vw,6rem)] text-mirror leading-[0.85] font-semibold tracking-[-0.02em]">
              Define Your
            </span>
            <span className="block font-display text-[clamp(3.5rem,10vw,8rem)] text-mirror/20 leading-[0.85] font-bold italic tracking-[-0.03em] mt-2 select-none">
              Legacy
            </span>
          </div>

          <p className="text-mirror-muted text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Founded 1893. Every movement hand-assembled in La Chaux-de-Fonds. 
            We believe the unseen should be as beautiful as the face you wear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection" className="btn-primary">
              <span className="w-4 h-px bg-noir-950" />
              View Collection
            </Link>
            <Link href="/configure" className="btn-outline">
              Configure
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-micro text-mirror-muted animate-pulse-subtle">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-mirror/30 to-transparent" />
        </div>
      </section>

      {/* ─── Collection Preview ─── */}
      <section className="py-32 bg-noir-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            <div>
              <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                — SECTION 01
              </p>
              <h2 className="section-title mb-6">
                The Collection
              </h2>
              <div className="w-12 h-px bg-mirror/30 mb-6" />
              <p className="text-mirror-muted leading-relaxed text-sm">
                Three pillars. Three distinct philosophies of time. From the 
                skeletonized L&apos;Ombre to the forged-carbon Minuit and the 
                guilloché-dial Héritage — each represents a different answer 
                to the same question: what makes time worth keeping?
              </p>
              <Link
                href="/collection"
                className="inline-flex items-center gap-3 mt-8 font-mono text-detail text-mirror hover:text-mirror-light transition-colors group"
              >
                Explore all models
                <span className="w-6 h-px bg-mirror/40 group-hover:w-10 transition-all duration-300" />
              </Link>
            </div>

            <div className="space-y-6">
              {[
                { slug: "l-ombre", name: "L&apos;Ombre", subtitle: "The Shadow", desc: "Skeletonized. 22K gold winding rotor. Hand-bevelled bridges." },
                { slug: "minuit", name: "Minuit", subtitle: "Midnight", desc: "Forged carbon case. Super-LumiNova. 70-hour reserve." },
                { slug: "heritage", name: "Héritage", subtitle: "Heritage", desc: "Guilloché dial. Blued steel hands. Exhibition caseback." },
              ].map((watch) => (
                <Link
                  key={watch.slug}
                  href={`/collection/${watch.slug}`}
                  className="card block p-6 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-mirror group-hover:text-mirror-light transition-colors">
                        {watch.name}
                      </h3>
                      <p className="font-mono text-micro text-mirror-muted tracking-extra mt-1">
                        {watch.subtitle}
                      </p>
                    </div>
                    <span className="font-mono text-micro text-mirror-muted/40 group-hover:text-mirror-muted transition-colors">
                      →
                    </span>
                  </div>
                  <p className="text-mirror-muted text-sm mt-3 leading-relaxed">{watch.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="py-32 bg-noir-950 border-t border-mirror/5">
        <div className="section-narrow">
          <div className="text-center mb-16">
            <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
              — SECTION 02
            </p>
            <h2 className="section-title">
              The Art of Fine Watchmaking
            </h2>
            <div className="w-12 h-px bg-mirror/20 mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: "200+", label: "Hours per movement", desc: "Each caliber is assembled, regulated, and finished by hand in our Jura Mountains atelier." },
              { number: "1893", label: "Founded", desc: "Four generations of master horologists. Our archives hold over 6,000 original blueprints." },
              { number: "0", label: "Compromise", desc: "Every component — including screws invisible to the wearer — is hand-polished and bevelled." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-5xl md:text-6xl text-mirror/90 mb-2">{stat.number}</p>
                <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">{stat.label}</p>
                <div className="w-8 h-px bg-mirror/10 mx-auto mb-4" />
                <p className="text-mirror-muted text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-noir-950 border-t border-mirror/5">
        <div className="section-container text-center">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
            — COMMENCER
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-mirror mb-6">
            Begin Your Configuration
          </h2>
          <p className="text-mirror-muted text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Choose your case, dial, and strap. Every option is finished by hand 
            in our atelier. Delivery within 12–16 weeks.
          </p>
          <Link href="/configure" className="btn-primary">
            <span className="w-4 h-px bg-noir-950" />
            Configure Now
          </Link>
        </div>
      </section>
    </>
  );
}