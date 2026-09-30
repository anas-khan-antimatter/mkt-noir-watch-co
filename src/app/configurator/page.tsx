"use client";

import { useState } from "react";
import {
  caseOptions,
  strapOptions,
  dialOptions,
  defaultConfig,
  type ConfigSelection,
  getCaseStyle,
  getDialStyle,
} from "@/data/configurator";
import Link from "next/link";

const caseColors: Record<string, string> = {
  "steel-polished": "from-gray-300 via-gray-100 to-gray-200",
  "steel-satin": "from-gray-400 via-gray-300 to-gray-400",
  "rose-gold": "from-amber-400 via-yellow-500 to-amber-600",
  carbon: "from-gray-800 via-gray-700 to-gray-900",
  tantalum: "from-gray-600 via-blue-900 to-gray-700",
  platinum: "from-gray-200 via-white to-gray-300",
};

const dialPreviews: Record<string, string> = {
  "sunburst-black": "bg-gradient-to-br from-gray-900 via-black to-gray-800",
  skeleton: "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600",
  guilloche: "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900",
  aventurine: "bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950",
  "enamel-white": "bg-gradient-to-br from-white via-gray-100 to-gray-200",
  meteorite: "bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700",
};

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<ConfigSelection>(defaultConfig);
  const [showNotify, setShowNotify] = useState(false);
  const [email, setEmail] = useState("");
  const [notifySent, setNotifySent] = useState(false);

  const update = (key: keyof ConfigSelection, id: string) => {
    setConfig((prev) => ({ ...prev, [key]: id }));
  };

  const handleNotify = async () => {
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, config }),
      });
    } catch {}
    setNotifySent(true);
  };

  const currentCase = caseOptions.find((o) => o.id === config.case);
  const currentStrap = strapOptions.find((o) => o.id === config.strap);
  const currentDial = dialOptions.find((o) => o.id === config.dial);

  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Header */}
      <section className="py-12 border-b border-noir-700/50 bg-noir-800/50">
        <div className="section-container">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-noir-500 hover:text-gold-500 text-xs tracking-widest uppercase mb-4 transition-colors"
          >
            ← Collections
          </Link>
          <h1 className="section-title mb-2">Watch Configurator</h1>
          <p className="text-noir-400">
            Choose your case, strap, and dial. Every configuration is built to
            order in our atelier.
          </p>
        </div>
      </section>

      <section className="py-12 section-container">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Controls — 3 cols */}
          <div className="lg:col-span-3 space-y-10">
            {/* Case */}
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
                Case Material
              </legend>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {caseOptions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => update("case", o.id)}
                    className={`p-3 border text-left transition-all duration-300 ${
                      config.case === o.id
                        ? "border-gold-500 bg-gold-500/5"
                        : "border-noir-600 bg-noir-800/30 hover:border-noir-400"
                    }`}
                  >
                    <div
                      className={`w-full h-6 rounded mb-2 bg-gradient-to-r ${caseColors[o.id]}`}
                    />
                    <p className="text-noir-50 text-sm font-medium">{o.name}</p>
                    <p className="text-noir-500 text-xs">{o.label}</p>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Strap */}
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
                Strap
              </legend>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {strapOptions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => update("strap", o.id)}
                    className={`p-3 border text-left transition-all duration-300 ${
                      config.strap === o.id
                        ? "border-gold-500 bg-gold-500/5"
                        : "border-noir-600 bg-noir-800/30 hover:border-noir-400"
                    }`}
                  >
                    <p className="text-noir-50 text-sm font-medium">{o.name}</p>
                    <p className="text-noir-500 text-xs">{o.label}</p>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Dial */}
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
                Dial
              </legend>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dialOptions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => update("dial", o.id)}
                    className={`p-3 border text-left transition-all duration-300 ${
                      config.dial === o.id
                        ? "border-gold-500 bg-gold-500/5"
                        : "border-noir-600 bg-noir-800/30 hover:border-noir-400"
                    }`}
                  >
                    <div
                      className={`w-full h-6 rounded mb-2 ${dialPreviews[o.id]}`}
                    />
                    <p className="text-noir-50 text-sm font-medium">{o.name}</p>
                    <p className="text-noir-500 text-xs">{o.label}</p>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Notify me */}
            <div className="border-t border-noir-700/30 pt-6">
              {!showNotify ? (
                <button
                  onClick={() => setShowNotify(true)}
                  className="btn-outline text-xs"
                >
                  Save Configuration &amp; Get Notified
                </button>
              ) : notifySent ? (
                <p className="text-gold-500 text-sm">
                  ✓ We&apos;ll notify you when this configuration is available.
                </p>
              ) : (
                <div className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-noir-800 border border-noir-600 px-4 py-2 text-noir-50 text-sm focus:border-gold-500 outline-none"
                  />
                  <button
                    onClick={handleNotify}
                    className="btn-primary text-xs whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Live preview — 2 cols */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-[0.2em] text-noir-500 mb-4">
                Live Preview
              </p>

              {/* Watch face preview */}
              <div className="aspect-square bg-noir-800 border border-noir-700/50 flex items-center justify-center overflow-hidden mb-4">
                <div className="w-3/4 aspect-square rounded-full border-8 border-noir-600 relative flex items-center justify-center">
                  {/* Dial */}
                  <div
                    className={`absolute inset-2 rounded-full ${dialPreviews[config.dial]} flex items-center justify-center`}
                  >
                    {/* Hour markers */}
                    <div className="absolute inset-[15%]">
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                        (deg) => (
                          <div
                            key={deg}
                            className="absolute w-0.5 h-2 bg-gold-500/60 origin-bottom"
                            style={{
                              left: "calc(50% - 0.5px)",
                              top: "0",
                              transform: `rotate(${deg}deg)`,
                              transformOrigin: "bottom center",
                              height: deg % 90 === 0 ? "12%" : "8%",
                            }}
                          />
                        )
                      )}
                      {/* Hands */}
                      <div
                        className="absolute w-0.5 h-[30%] bg-gold-500 origin-bottom left-1/2 top-[20%]"
                        style={{ transform: "rotate(-15deg)" }}
                      />
                      <div
                        className="absolute w-px h-[38%] bg-noir-300 origin-bottom left-1/2 top-[12%]"
                        style={{ transform: "rotate(42deg)" }}
                      />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-gold-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  {/* Case ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-4 ${
                      config.case.includes("rose") || config.case.includes("platinum")
                        ? "border-amber-400/30"
                        : config.case.includes("carbon")
                        ? "border-gray-700"
                        : "border-gray-400/20"
                    }`}
                  />
                </div>
              </div>

              {/* Configuration summary */}
              <div className="bg-noir-800/50 border border-noir-700/50 p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-noir-500">Case</span>
                  <span className="text-noir-200">
                    {currentCase?.label ?? "—"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-noir-500">Strap</span>
                  <span className="text-noir-200">
                    {currentStrap?.label ?? "—"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-noir-500">Dial</span>
                  <span className="text-noir-200">
                    {currentDial?.label ?? "—"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-noir-700/30 pt-2 mt-2">
                  <span className="text-gold-500 text-xs uppercase tracking-widest">
                    Est. Price
                  </span>
                  <span className="text-gold-500 font-serif text-lg">
                    CHF 18,900 – 128,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}