import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollection } from "../../data/collections";

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollection(params.slug);
  if (!collection) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-noir-950">
      {/* Back link */}
      <div className="section-container pt-24 pb-8">
        <Link
          href="/collection"
          className="text-noir-400 text-[9px] tracking-[0.35em] uppercase hover:text-noir-100 transition-colors inline-flex items-center gap-2"
        >
          ← Collection
        </Link>
      </div>

      {/* Hero */}
      <section className="section-container pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="micro-label mb-3">{collection.subtitle}</p>
            <h1 className="section-title">{collection.name}</h1>
            <div className="divider-platinum mt-6 mb-6" />
            <p className="text-noir-200 text-sm leading-relaxed">
              {collection.heroDescription}
            </p>
            <p className="text-noir-400 text-[10px] leading-relaxed mt-4">
              {collection.description.slice(0, 300)}…
            </p>
          </div>

          {/* Product image placeholder — macro photography feel */}
          <div className="aspect-[4/5] bg-noir-900 border border-noir-700/30 overflow-hidden">
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-10">
                <span className="text-noir-50 text-6xl font-serif block tracking-widest">
                  {collection.name[0]}
                </span>
                <span className="text-noir-500 text-[8px] tracking-[0.45em] uppercase block mt-4">
                  macro-photograph
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-container py-16 border-t border-noir-700/20">
        <p className="micro-label mb-6">Technical Specifications</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-noir-700/30 p-6">
            <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase">Case</p>
            <p className="text-noir-200 text-sm mt-2">{collection.caseMaterial}</p>
            <p className="text-noir-400 text-[10px]">
              {collection.caseDiameter} mm × {collection.caseHeight} mm
            </p>
          </div>
          <div className="border border-noir-700/30 p-6">
            <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase">Movement</p>
            <p className="text-noir-200 text-sm mt-2">{collection.movement}</p>
          </div>
          <div className="border border-noir-700/30 p-6">
            <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase">Reserve</p>
            <p className="text-noir-200 text-sm mt-2">{collection.powerReserve}</p>
            <p className="text-noir-400 text-[10px] mt-1">{collection.waterResistance} water resistance</p>
            <p className="text-noir-400 text-[10px]">{collection.crystals}</p>
          </div>
        </div>
      </section>

      {/* Complications / Explainer toggles */}
      <section className="section-container py-16">
        <p className="micro-label mb-6">Complications</p>
        <div className="grid gap-6">
          {collection.complications.map((comp, i) => (
            <details key={i} className="border border-noir-700/30 p-6 group open={i === 0}">
              <summary className="text-noir-50 text-sm font-serif tracking-wider flex items-center justify-between cursor-pointer">
                <span>{comp.name}</span>
                <span className="text-noir-400 text-[9px]">+</span>
              </summary>
              <div className="mt-4">
                <p className="text-noir-300 text-xs leading-relaxed">{comp.description}</p>
                <p className="text-noir-500 text-[10px] leading-relaxed mt-3">{comp.detail}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Price and CTA */}
      <section className="section-container py-16 border-t border-noir-700/20">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="micro-label mb-1">Starting price</p>
            <span className="text-noir-50 font-serif text-3xl tracking-tight">
              CHF {collection.price.toLocaleString("en")}—
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/configure" className="btn-primary">Configure Yours</Link>
            <Link href="/waitlist" className="btn-outline">Notify Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
}