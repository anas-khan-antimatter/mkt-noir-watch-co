import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollectionBySlug, getAllSlugs } from "@/data/collections";
import WishlistButton from "@/components/WishlistButton";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCollectionBySlug(params.slug);
  if (!c) notFound();

  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Hero section */}
      <section className="relative min-h-[60vh] bg-noir-800 flex items-center border-b border-noir-700/50">
        <div className="section-container py-20 w-full">
          <div className="max-w-4xl">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-noir-500 hover:text-gold-500 text-xs tracking-widest uppercase mb-8 transition-colors"
            >
              ← All Collections
            </Link>
            <p className="section-subtitle mb-2">{c.tagline}</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-[0.08em] text-noir-50 mb-3">
              {c.name}
            </h1>
            <p className="text-gold-500 text-xl font-light tracking-wider mb-8">
              &ldquo;{c.subtitle}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Description + Wishlist */}
      <section className="py-16 section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-noir-200 text-lg leading-relaxed mb-8">
              {c.description}
            </p>

            {/* Heritage */}
            <div className="border-l-2 border-gold-500/40 pl-6 py-2 mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-2">
                Heritage
              </p>
              <p className="text-noir-400 leading-relaxed">{c.heritage}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-noir-800/50 border border-noir-700/50 p-6 sticky top-28">
              <p className="text-3xl font-serif text-gold-500 mb-6">
                CHF {c.price.toLocaleString()}
              </p>

              <WishlistButton slug={c.slug} name={c.name} price={c.price} />

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Movement</span>
                  <span className="text-noir-200 text-right">{c.movement}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Power Reserve</span>
                  <span className="text-noir-200">{c.powerReserve}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Water Resistance</span>
                  <span className="text-noir-200">{c.waterResistance}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Diameter</span>
                  <span className="text-noir-200">{c.diameter}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Thickness</span>
                  <span className="text-noir-200">{c.thickness}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Case</span>
                  <span className="text-noir-200 text-right">{c.caseMaterial}</span>
                </div>
                <div className="flex justify-between border-b border-noir-700/30 pb-2">
                  <span className="text-noir-500">Crystal</span>
                  <span className="text-noir-200 text-right">{c.crystal}</span>
                </div>
                <div>
                  <span className="text-noir-500">Strap</span>
                  <p className="text-noir-200 mt-1">{c.strap}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-noir-800/50 border-y border-noir-700/30">
        <div className="section-container">
          <h2 className="text-2xl font-serif text-noir-50 tracking-wider mb-8">
            Defining Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((f, i) => (
              <div
                key={f}
                className="flex items-center gap-4 p-4 border border-noir-700/30"
              >
                <span className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 text-sm font-serif">
                  {i + 1}
                </span>
                <span className="text-noir-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator CTA */}
      <section className="py-20 section-container text-center">
        <p className="text-noir-500 text-sm uppercase tracking-[0.2em] mb-4">
          Make it yours
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-noir-50 tracking-wider mb-6">
          Configure Your {c.name}
        </h2>
        <p className="text-noir-400 max-w-xl mx-auto mb-8">
          Choose your case finish, strap material, and dial style. Every
          configuration is hand-assembled to your specification.
        </p>
        <Link
          href="/configurator"
          className="btn-primary"
        >
          Open Configurator
        </Link>
      </section>
    </main>
  );
}