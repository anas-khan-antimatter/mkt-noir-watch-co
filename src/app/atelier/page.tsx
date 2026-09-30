import Link from "next/link";
import { atelierChapters } from "@/data/atelier";
import { collections } from "@/data/collections";

export default function AtelierPage() {
  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Hero */}
      <section className="py-28 bg-noir-800 border-b border-noir-700/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23c9a84c'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="section-container text-center relative z-10">
          <p className="section-subtitle mb-3">The Atelier</p>
          <h1 className="section-title mb-6">Craftsmanship Chapters</h1>
          <div className="w-16 h-px bg-gold-500 mx-auto mb-8" />
          <p className="text-noir-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Each Noir timepiece is the culmination of six distinct chapters of
            craftsmanship — from the first pencil stroke on vellum to the final
            timing certification. Explore the journey of a watch born in the
            Jura Mountains.
          </p>
        </div>
      </section>

      {/* Chapter timeline */}
      <section className="py-20 section-container">
        <div className="max-w-4xl mx-auto">
          {atelierChapters.map((chapter, index) => (
            <div key={chapter.slug} className="relative pl-12 pb-16 last:pb-0">
              {/* Timeline line */}
              {index < atelierChapters.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-px bg-noir-600" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-[34px] h-[34px] rounded-full border-2 border-gold-500 bg-noir-900 flex items-center justify-center">
                <span className="text-gold-500 text-xs font-serif">
                  {chapter.number}
                </span>
              </div>

              {/* Card */}
              <Link
                href={`/atelier/${chapter.slug}`}
                className="block group bg-noir-800/30 border border-noir-700/30 hover:border-gold-500/30 p-8 transition-all duration-500"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-noir-500 mb-1">
                      Chapter {chapter.number}
                    </p>
                    <h2 className="text-2xl font-serif text-noir-50 tracking-wider group-hover:text-gold-500 transition-colors">
                      {chapter.title}
                    </h2>
                    <p className="text-noir-400 text-sm mt-1">
                      &ldquo;{chapter.subtitle}&rdquo;
                    </p>
                  </div>
                  <span className="text-noir-500 text-xs uppercase tracking-widest whitespace-nowrap">
                    {chapter.duration}
                  </span>
                </div>
                <p className="text-noir-400 leading-relaxed mb-4">
                  {chapter.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapter.materials.slice(0, 3).map((m) => (
                    <span
                      key={m}
                      className="text-xs text-noir-500 border border-noir-600 px-2 py-1"
                    >
                      {m}
                    </span>
                  ))}
                  {chapter.materials.length > 3 && (
                    <span className="text-xs text-gold-500/60 border border-noir-600 px-2 py-1">
                      +{chapter.materials.length - 3}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-widest uppercase mt-4 group-hover:gap-3 transition-all">
                  Read Chapter <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Collections CTA */}
      <section className="py-20 bg-noir-800/30 border-y border-noir-700/30 text-center">
        <div className="section-container">
          <p className="text-noir-500 text-sm uppercase tracking-[0.2em] mb-4">
            The Result
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-noir-50 tracking-wider mb-6">
            See Our Collections
          </h2>
          <p className="text-noir-400 max-w-xl mx-auto mb-8">
            Every chapter leads here. Explore the five families that embody our
            atelier&apos;s craft.
          </p>
          <Link href="/collections" className="btn-primary">
            View Collections
          </Link>
        </div>
      </section>
    </main>
  );
}