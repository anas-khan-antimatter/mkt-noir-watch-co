"use client";

import Link from "next/link";
import { strapOptions, dialOptions } from "../../lib/watches";

export default function StrapDialPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-16">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            &mdash; STRAP &amp; DIAL
          </p>
          <h1 className="section-title">Strap &amp; Dial Finishes</h1>
          <div className="w-12 h-px bg-mirror/30 mt-6" />
          <p className="text-mirror-muted text-sm max-w-xl mt-6 leading-relaxed">
            The strap and dial define the character of your timepiece. Each
            finish is applied by hand in our atelier using materials sourced
            from the finest tanneries and enamellers in Europe.
          </p>
        </div>

        {/* Straps */}
        <div className="mb-20">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
            &mdash; STRAPS
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {strapOptions.map((strap) => (
              <div key={strap.id} className="card p-6 group">
                <div className="aspect-square bg-noir-gradient border border-mirror/5 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,232,232,0.03)_0%,_transparent_70%)]" />
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border border-mirror/10 flex items-center justify-center">
                      <span className="font-mono text-detail text-mirror/40">
                        {strap.material.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-base text-mirror mb-1">{strap.label}</h3>
                <p className="font-mono text-micro text-mirror-muted tracking-extra">
                  {strap.price > 0 ? `+CHF ${strap.price.toLocaleString()}` : "Included"}
                </p>
                <p className="text-sm text-mirror-muted mt-2 leading-relaxed">
                  {strap.id === "black-alligator" && "Hand-stitched alligator with calfskin lining. Signed 18K buckle."}
                  {strap.id === "brown-alligator" && "Espresso brown alligator with matching 18K tang buckle."}
                  {strap.id === "black-rubber" && "High-grade vulcanised rubber with titanium deployant clasp."}
                  {strap.id === "steel-bracelet" && "Platinum-finished steel with NOIR-signed micro-adjustment."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dials */}
        <div className="mb-20">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
            &mdash; DIALS
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {dialOptions.map((dial) => (
              <div key={dial.id} className="card p-6 group">
                <div className="aspect-square bg-noir-gradient border border-mirror/5 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,232,232,0.03)_0%,_transparent_70%)]" />
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border border-mirror/10 flex items-center justify-center">
                      <span className="font-mono text-detail text-mirror/40">
                        {dial.id.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-base text-mirror mb-1">{dial.label}</h3>
                <p className="font-mono text-micro text-mirror-muted tracking-extra">
                  {dial.price > 0 ? `+CHF ${dial.price.toLocaleString()}` : "Included"}
                </p>
                <p className="text-sm text-mirror-muted mt-2 leading-relaxed">
                  {dial.id === "skeleton" && "Openworked mainplate revealing the gear train. Bridges hand-bevelled."}
                  {dial.id === "sunburst-black" && "Deep black sunburst with Super-LumiNova indexes."}
                  {dial.id === "grand-feu" && "Hand-engraved guilloché wave under translucent Grand Feu enamel."}
                  {dial.id === "matte-black" && "Minimal matte black with no indexes. Pure darkness."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-mirror/5 pt-12 pb-12">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            &mdash; BUILD YOURS
          </p>
          <h2 className="font-display text-3xl text-mirror mb-6">
            Combine with a Case
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <Link href="/configure" className="btn-primary">
              <span className="w-4 h-px bg-noir-950" />
              Open Configurator
            </Link>
            <Link href="/collection" className="btn-outline">
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}