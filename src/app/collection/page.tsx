import Link from "next/link";
import { collections } from "../data/collections";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-noir-950">
      {/* Header */}
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">The Collection</p>
        <h1 className="section-title">Three Archetypes</h1>
        <div className="divider-platinum mt-6 mb-8" />
        <p className="text-noir-300 text-sm max-w-2xl leading-relaxed">
          Three distinct voices, one philosophy. Each collection explores a different
          facet of mechanical horology — from the transparent purity of the skeleton
          to the deep-tech darkness of forged carbon.
        </p>
      </section>

      {/* Grid */}
      <section className="section-container pb-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {collections.map((c, i) => (
            <Link
              key={c.slug}
              href={`/collection/${c.slug}`}
              className={`card group relative overflow-hidden ${i === 1 ? "md:col-start-2" : ""}`}
            >
              {/* Image placeholder — macro-detail */}
              <div className="aspect-[4/3] bg-noir-900 border border-noir-750 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-noir-500 text-[40px] block font-serif tracking-widest">
                      {c.name[0]}
                    </span>
                    <span className="text-noir-600 text-[10px] uppercase tracking-[0.4em]">
                      MACRO
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-serif text-noir-50 font-light">{c.name}</h2>
                <span className="text-noir-400 text-[9px] tracking-[0.25em] uppercase">{c.subtitle}</span>
              </div>
              <p className="text-noir-200 text-xs leading-relaxed mb-5">{c.tagline}</p>
              <p className="text-noir-400 text-[10px] leading-relaxed mb-6 line-clamp-3">
                {c.description.slice(0, 180)}…
              </p>

              {/* Horology meta */}
              <div className="grid grid-cols-2 gap-3 text-[9px] uppercase tracking-[0.3em]">
                <div>
                  <span className="text-noir-500">Case</span>
                  <p className="text-noir-300">{c.caseDiameter} mm</p>
                </div>
                <div>
                  <span className="text-noir-500">Movement</span>
                  <p className="text-noir-300">{c.movement.split(",")[0]}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-noir-50 font-serif text-lg">
                  CHF {c.price.toLocaleString("en")}—
                </span>
                <span className="text-noir-400 text-[9px] tracking-[0.35em] uppercase">
                  View → 
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Technical footnote */}
      <div className="section-container py-8 border-t border-noir-700/20">
        <p className="text-noir-500 text-[9px] tracking-[0.4em] leading-relaxed">
          All prices in Swiss Francs, exclusive of duties. Each piece assembled
          and regulated in La Chaux-de-Fonds. Delivery 12–16 weeks.
        </p>
      </div>
    </div>
  );
}