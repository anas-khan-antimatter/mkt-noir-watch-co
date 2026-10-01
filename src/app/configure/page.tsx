"use client";

import { useState } from "react";
import { caseOptions, strapOptions, dialOptions, basePrice } from "../lib/watches";

export default function ConfigurePage() {
  const [selectedCase, setSelectedCase] = useState(caseOptions[0]);
  const [selectedStrap, setSelectedStrap] = useState(strapOptions[0]);
  const [selectedDial, setSelectedDial] = useState(dialOptions[0]);
  const [showPanel, setShowPanel] = useState(true);

  const totalPrice = basePrice + selectedCase.price + selectedStrap.price + selectedDial.price;

  const generateSku = () => {
    const caseId = selectedCase.id.split("-")[0].slice(0, 3).toUpperCase();
    const strapId = selectedStrap.id.split("-")[0].slice(0, 3).toUpperCase();
    const dialId = selectedDial.id.split("-")[0].slice(0, 3).toUpperCase();
    return `NOIR-${caseId}-${strapId}-${dialId}`;
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            — CONFIGURATOR
          </p>
          <h1 className="section-title">Compose Your Timepiece</h1>
          <div className="w-12 h-px bg-mirror/30 mt-6" />
          <p className="text-mirror-muted text-sm max-w-xl mt-6 leading-relaxed">
            Select your case, dial, and strap. Every component is hand-finished 
            in our atelier. The price updates in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Options */}
          <div className="lg:col-span-3 space-y-10">
            {/* Case */}
            <fieldset>
              <legend className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                — CASE
              </legend>
              <div className="grid sm:grid-cols-3 gap-3">
                {caseOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCase(opt)}
                    className={`text-left p-4 border transition-all duration-300 ${
                      selectedCase.id === opt.id
                        ? "border-mirror bg-mirror/5"
                        : "border-mirror/10 hover:border-mirror/30"
                    }`}
                  >
                    <p className="font-mono text-detail text-mirror">{opt.label}</p>
                    {opt.price > 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">
                        +CHF {opt.price.toLocaleString()}
                      </p>
                    )}
                    {opt.price === 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">Included</p>
                    )}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Dial */}
            <fieldset>
              <legend className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                — DIAL
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {dialOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedDial(opt)}
                    className={`text-left p-4 border transition-all duration-300 ${
                      selectedDial.id === opt.id
                        ? "border-mirror bg-mirror/5"
                        : "border-mirror/10 hover:border-mirror/30"
                    }`}
                  >
                    <p className="font-mono text-detail text-mirror">{opt.label}</p>
                    {opt.price > 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">
                        +CHF {opt.price.toLocaleString()}
                      </p>
                    )}
                    {opt.price === 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">Included</p>
                    )}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Strap */}
            <fieldset>
              <legend className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                — STRAP
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {strapOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedStrap(opt)}
                    className={`text-left p-4 border transition-all duration-300 ${
                      selectedStrap.id === opt.id
                        ? "border-mirror bg-mirror/5"
                        : "border-mirror/10 hover:border-mirror/30"
                    }`}
                  >
                    <p className="font-mono text-detail text-mirror">{opt.label}</p>
                    {opt.price > 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">
                        +CHF {opt.price.toLocaleString()}
                      </p>
                    )}
                    {opt.price === 0 && (
                      <p className="font-mono text-micro text-mirror-muted mt-1">Included</p>
                    )}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Live preview panel */}
          <div className="lg:col-span-2">
            <div className="card sticky top-28 p-6">
              <div className="aspect-square bg-noir-gradient border border-mirror/5 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,232,232,0.03)_0%,_transparent_70%)]" />
                <div className="text-center relative z-10">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full border border-mirror/10 flex items-center justify-center">
                    <span className="font-display text-5xl text-mirror/20 font-bold">N</span>
                  </div>
                  <p className="font-mono text-micro text-mirror-muted tracking-extra">
                    {selectedCase.material}
                  </p>
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mt-1">
                    {selectedDial.color}
                  </p>
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mt-1">
                    {selectedStrap.material}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-mirror/5 pb-3">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra">Base</p>
                  <p className="font-mono text-detail text-mirror">CHF {basePrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center border-b border-mirror/5 pb-3">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra">Case</p>
                  <p className="font-mono text-detail text-mirror">
                    {selectedCase.price > 0 ? `+CHF ${selectedCase.price.toLocaleString()}` : "—"}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-mirror/5 pb-3">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra">Dial</p>
                  <p className="font-mono text-detail text-mirror">
                    {selectedDial.price > 0 ? `+CHF ${selectedDial.price.toLocaleString()}` : "—"}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-mirror/5 pb-3">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra">Strap</p>
                  <p className="font-mono text-detail text-mirror">
                    {selectedStrap.price > 0 ? `+CHF ${selectedStrap.price.toLocaleString()}` : "—"}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <p className="font-mono text-detail text-mirror tracking-extra">TOTAL</p>
                  <p className="font-display text-2xl text-mirror">
                    CHF {totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="divider-platinum my-6" />

              <div className="text-center">
                <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">SKU</p>
                <p className="font-mono text-detail text-mirror tracking-wider">
                  {generateSku()}
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    const sku = generateSku();
                    const subject = encodeURIComponent(`Bespoke Inquiry — ${sku}`);
                    window.location.href = `mailto:atelier@noirwatch.co?subject=${subject}`;
                  }}
                  className="btn-primary w-full text-center"
                >
                  <span className="w-4 h-px bg-noir-950" />
                  Submit Enquiry
                </button>
                <p className="font-mono text-micro text-mirror-muted text-center mt-3">
                  Delivery 12–16 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}