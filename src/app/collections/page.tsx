import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Hero */}
      <section className="py-28 bg-noir-800 border-b border-noir-700/50">
        <div className="section-container text-center">
          <p className="section-subtitle mb-3">Our Collections</p>
          <h1 className="section-title mb-6">
            Where Art Meets Engineering
          </h1>
          <div className="w-16 h-px bg-gold-500 mx-auto mb-8" />
          <p className="text-noir-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Five distinct families. One philosophy: that a wristwatch should be
            as beautiful inside as it appears on the wrist. From the
            skeletonized transparency of L&apos;Ombre to the astronomical
            complexity of Nocturne, each collection represents years of
            development by our atelier in La Chaux-de-Fonds.
          </p>
        </div>
      </section>

      {/* Collection cards */}
      <section className="py-16 section-container">
        <div className="grid md:grid-cols-2 gap-10">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="group relative bg-noir-800/50 border border-noir-700/50 hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Visual panel */}
              <div className="aspect-[16/9] bg-noir-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold-500/30 flex items-center justify-center">
                      <span className="text-gold-500 text-xl font-serif">N</span>
                    </div>
                    <p className="text-noir-500 text-xs tracking-[0.3em] uppercase">{c.subtitle}</p>
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900/80 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-serif text-noir-50 tracking-wider group-hover:text-gold-500 transition-colors">
                      {c.name}
                    </h2>
                    <p className="text-noir-500 text-xs uppercase tracking-[0.2em] mt-1">
                      {c.tagline}
                    </p>
                  </div>
                  <span className="text-gold-500 font-mono text-sm">
                    CHF {c.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-noir-400 text-sm leading-relaxed line-clamp-3">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs text-noir-500 border border-noir-600 px-2 py-1"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-widest uppercase mt-6 group-hover:gap-3 transition-all">
                  Discover <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}