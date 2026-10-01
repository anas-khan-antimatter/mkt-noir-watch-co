"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { watches } from "../../lib/watches";

export default function WatchDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const watch = watches.find((w) => w.slug === slug);
  const [openComplication, setOpenComplication] = useState<number | null>(null);

  if (!watch) {
    return (
      <div className="py-32 section-container text-center">
        <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">&mdash; 404</p>
        <h1 className="font-display text-3xl text-mirror mb-4">Timepiece Not Found</h1>
        <Link href="/collection" className="btn-outline">
          View Collection
        </Link>
      </div>
    );
  }

  const toggleComplication = (index: number) => {
    setOpenComplication(openComplication === index ? null : index);
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-12 font-mono text-micro text-mirror-muted">
          <Link href="/collection" className="hover:text-mirror transition-colors">Collection</Link>
          <span className="text-noir-500">/</span>
          <span className="text-mirror">{watch.name}</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Visual panel */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-noir-gradient border border-mirror/5 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,232,232,0.03)_0%,_transparent_70%)]" />
              <div className="text-center relative z-10">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full border border-mirror/10 flex items-center justify-center">
                  <span className="font-display text-7xl text-mirror/20 font-bold">
                    {watch.name.charAt(0)}
                  </span>
                </div>
                <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">
                  {watch.subtitle}
                </p>
                <p className="font-display text-2xl text-mirror mb-2">
                  {watch.name}
                </p>
                <p className="font-mono text-detail text-mirror-muted italic">
                  &ldquo;{watch.tagline}&rdquo;
                </p>
                <div className="w-8 h-px bg-mirror/20 mx-auto my-6" />
                <p className="font-display text-3xl text-mirror/80">
                  CHF {watch.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
              &mdash; {watch.name.toUpperCase()}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-mirror mb-4">
              {watch.name}
            </h1>
            <p className="font-mono text-detail text-mirror-muted tracking-extra mb-6">
              {watch.subtitle}
            </p>
            <p className="text-mirror-muted leading-relaxed mb-10 max-w-xl">
              {watch.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 border-t border-mirror/5 pt-8">
              {[
                { label: "Case", value: `${watch.caseMaterial} \u00b7 ${watch.caseDiameter}` },
                { label: "Thickness", value: watch.caseThickness },
                { label: "Water Resistance", value: watch.waterResistance },
                { label: "Movement", value: watch.movement },
                { label: "Power Reserve", value: watch.powerReserve },
                { label: "Dial", value: watch.dialColor },
                { label: "Strap", value: watch.strap },
                { label: "Crystal", value: watch.crystal },
              ].map((spec) => (
                <div key={spec.label}>
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-1">
                    {spec.label}
                  </p>
                  <p className="text-sm text-mirror leading-relaxed">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Complication explainer toggles */}
            <div className="border-t border-mirror/5 pt-8">
              <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
                &mdash; COMPLICATIONS
              </p>
              <div className="space-y-3">
                {watch.complications.map((comp, i) => (
                  <div key={comp.name} className="border border-mirror/10">
                    <button
                      onClick={() => toggleComplication(i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-mirror/[0.02] transition-colors"
                    >
                      <div>
                        <p className="font-mono text-detail text-mirror tracking-extra">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="font-display text-lg text-mirror mt-1">
                          {comp.name}
                        </p>
                        <p className="text-sm text-mirror-muted mt-1">
                          {comp.description}
                        </p>
                      </div>
                      <span
                        className={`font-mono text-micro text-mirror-muted transition-transform duration-300 ${
                          openComplication === i ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openComplication === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-mirror/5">
                        <p className="text-sm text-mirror-muted leading-relaxed mt-4">
                          {comp.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/configure" className="btn-primary">
                <span className="w-4 h-px bg-noir-950" />
                Configure Similar
              </Link>
              <Link href="/collection" className="btn-outline">
                Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}