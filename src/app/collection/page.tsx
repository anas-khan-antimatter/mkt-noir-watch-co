import Link from "next/link";
import { watches } from "../lib/watches";

export default function CollectionPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-16">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            — COLLECTION
          </p>
          <h1 className="section-title">Three Philosophies of Time</h1>
          <div className="w-12 h-px bg-mirror/30 mt-6" />
          <p className="text-mirror-muted text-sm max-w-xl mt-6 leading-relaxed">
            Each model represents a distinct approach to haute horlogerie.
            Explore the technical details, complications, and craftsmanship
            that define our maison.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <Link
              key={watch.slug}
              href={`/collection/${watch.slug}`}
              className="card group block"
            >
              {/* Visual panel */}
              <div className="aspect-[4/5] bg-noir-gradient flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,232,232,0.03)_0%,_transparent_70%)]" />
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border border-mirror/10 flex items-center justify-center">
                    <span className="font-display text-5xl text-mirror/30 font-bold tracking-tight">
                      {watch.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">
                    {watch.subtitle}
                  </p>
                  <p className="font-display text-xl text-mirror mb-3">
                    {watch.name}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="tag">{watch.caseDiameter}</span>
                    <span className="tag">{watch.movement.split("—")[0].trim()}</span>
                  </div>
                  <p className="font-mono text-detail text-mirror-muted">
                    CHF {watch.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Info panel */}
              <div className="p-6">
                <p className="text-mirror-muted text-sm leading-relaxed line-clamp-3">
                  {watch.description}
                </p>
                <div className="mt-4 flex items-center gap-2 font-mono text-micro text-mirror-muted group-hover:text-mirror transition-colors">
                  <span>View complications</span>
                  <span className="w-4 h-px bg-mirror/40 group-hover:w-6 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}