"use client";

import { useState, useRef, useEffect } from "react";

interface Measurement {
  circumferenceMm: number;
  suggestedSize: string;
  caseDiameter: string;
  lugToLug: string;
}

function getSizeRecommendation(mm: number): Measurement {
  if (mm < 150)
    return {
      circumferenceMm: mm,
      suggestedSize: "Extra Small (XS)",
      caseDiameter: "34–36mm",
      lugToLug: "40–42mm",
    };
  if (mm < 165)
    return {
      circumferenceMm: mm,
      suggestedSize: "Small (S)",
      caseDiameter: "36–39mm",
      lugToLug: "42–45mm",
    };
  if (mm < 180)
    return {
      circumferenceMm: mm,
      suggestedSize: "Medium (M)",
      caseDiameter: "39–42mm",
      lugToLug: "45–48mm",
    };
  if (mm < 200)
    return {
      circumferenceMm: mm,
      suggestedSize: "Large (L)",
      caseDiameter: "42–44mm",
      lugToLug: "48–50mm",
    };
  return {
    circumferenceMm: mm,
    suggestedSize: "Extra Large (XL)",
    caseDiameter: "44–46mm",
    lugToLug: "50–52mm",
  };
}

export default function SizeGuidePage() {
  const [mode, setMode] = useState<"manual" | "paper">("manual");
  const [manualMm, setManualMm] = useState<number>(175);
  const result = getSizeRecommendation(manualMm);

  // Paper strip "camera" — we simulate measurement with a slider
  const [paperFit, setPaperFit] = useState<number>(50); // 0-100 slider mapped to 140-220mm

  const paperMm = Math.round(140 + (paperFit / 100) * 80);
  const paperResult = getSizeRecommendation(paperMm);

  return (
    <main className="pt-20 min-h-screen bg-noir-900">
      {/* Header */}
      <section className="py-20 bg-noir-800 border-b border-noir-700/50">
        <div className="section-container">
          <p className="section-subtitle mb-3">Find Your Fit</p>
          <h1 className="section-title mb-2">Size Guide</h1>
          <div className="w-16 h-px bg-gold-500 mt-6" />
          <p className="text-noir-400 mt-6 max-w-2xl">
            A properly fitted watch sits securely without sliding, with the
            case diameter proportional to your wrist. Use the methods below
            to determine your ideal size.
          </p>
        </div>
      </section>

      {/* Mode toggle */}
      <section className="py-12 section-container">
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setMode("manual")}
            className={`px-6 py-3 text-sm tracking-widest uppercase transition-all ${
              mode === "manual"
                ? "bg-gold-500 text-noir-900"
                : "border border-noir-600 text-noir-400 hover:border-noir-400"
            }`}
          >
            Manual Measure
          </button>
          <button
            onClick={() => setMode("paper")}
            className={`px-6 py-3 text-sm tracking-widest uppercase transition-all ${
              mode === "paper"
                ? "bg-gold-500 text-noir-900"
                : "border border-noir-600 text-noir-400 hover:border-noir-400"
            }`}
          >
            Paper Strip Method
          </button>
        </div>

        {mode === "manual" ? (
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Adjustable wrist visual */}
            <div>
              <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-6">
                1. Measure Your Wrist
              </h2>
              <div className="aspect-[4/3] bg-noir-800 border border-noir-700/50 flex items-center justify-center mb-8">
                {/* Wrist visual */}
                <div className="relative w-48 h-48">
                  {/* Wrist ring */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <ellipse
                      cx="100"
                      cy="100"
                      rx={30 + manualMm / 8}
                      ry={20 + manualMm / 10}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-noir-500"
                    />
                    <ellipse
                      cx="100"
                      cy="100"
                      rx={28 + manualMm / 8}
                      ry={18 + manualMm / 10}
                      fill="none"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="text-gold-500/40"
                    />
                    <text
                      x="100"
                      y="110"
                      textAnchor="middle"
                      className="fill-gold-500 text-xs font-serif"
                    >
                      {manualMm} mm
                    </text>
                  </svg>
                </div>
              </div>

              {/* Slider */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-noir-500 mb-3 block">
                  Adjust to your wrist circumference
                </label>
                <input
                  type="range"
                  min="130"
                  max="230"
                  value={manualMm}
                  onChange={(e) => setManualMm(Number(e.target.value))}
                  className="w-full h-1 bg-noir-600 appearance-none cursor-pointer range-thumb-gold"
                  style={{
                    accentColor: "#c9a84c",
                  }}
                />
                <div className="flex justify-between text-xs text-noir-500 mt-1">
                  <span>130 mm</span>
                  <span>230 mm</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div>
              <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-6">
                2. Your Recommendation
              </h2>
              <div className="bg-noir-800/50 border border-noir-700/50 p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Wrist Circumference
                </p>
                <p className="text-4xl font-serif text-noir-50 mb-6">
                  {result.circumferenceMm} <span className="text-lg text-noir-400">mm</span>
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-noir-700/30 pb-2">
                    <span className="text-noir-500 text-sm">Suggested Size</span>
                    <span className="text-gold-500 text-sm font-medium">
                      {result.suggestedSize}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-noir-700/30 pb-2">
                    <span className="text-noir-500 text-sm">Case Diameter</span>
                    <span className="text-noir-200 text-sm">{result.caseDiameter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-noir-500 text-sm">Lug-to-Lug</span>
                    <span className="text-noir-200 text-sm">{result.lugToLug}</span>
                  </div>
                </div>

                <div className="border-l-2 border-gold-500/40 pl-4 py-2">
                  <p className="text-noir-400 text-sm leading-relaxed">
                    <span className="text-gold-500 text-xs uppercase tracking-widest block mb-1">
                      Tip
                    </span>
                    For dress watches, choose the smaller end of the range. For
                    tool/sports watches, the larger end works well. Always
                    consider lug-to-lug — it determines how the watch sits on
                    your wrist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Paper Strip Method */
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-4">
                Paper Strip Method
              </h2>
              <ol className="space-y-4 text-noir-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Cut a strip of paper about 1 cm wide and 25 cm long.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    Wrap it around your wrist just below the wrist bone (where
                    you&apos;d wear a watch).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    Mark where the paper overlaps, then measure that length
                    against a ruler.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    Use the slider below to match your measurement.
                  </span>
                </li>
              </ol>

              <div className="mt-8">
                <label className="text-xs uppercase tracking-[0.2em] text-noir-500 mb-3 block">
                  Your measured circumference
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={paperFit}
                  onChange={(e) => setPaperFit(Number(e.target.value))}
                  className="w-full h-1 bg-noir-600 appearance-none cursor-pointer"
                  style={{ accentColor: "#c9a84c" }}
                />
                <div className="flex justify-between text-xs text-noir-500 mt-1">
                  <span>140 mm</span>
                  <span>220 mm</span>
                </div>
              </div>
            </div>

            {/* Paper result */}
            <div>
              <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-6">
                Your Result
              </h2>
              <div className="bg-noir-800/50 border border-noir-700/50 p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Wrist Circumference
                </p>
                <p className="text-4xl font-serif text-noir-50 mb-6">
                  {paperResult.circumferenceMm}{" "}
                  <span className="text-lg text-noir-400">mm</span>
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-noir-700/30 pb-2">
                    <span className="text-noir-500 text-sm">Suggested Size</span>
                    <span className="text-gold-500 text-sm font-medium">
                      {paperResult.suggestedSize}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-noir-700/30 pb-2">
                    <span className="text-noir-500 text-sm">Case Diameter</span>
                    <span className="text-noir-200 text-sm">
                      {paperResult.caseDiameter}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-noir-500 text-sm">Lug-to-Lug</span>
                    <span className="text-noir-200 text-sm">
                      {paperResult.lugToLug}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Collection diameter reference */}
      <section className="py-16 bg-noir-800/30 border-y border-noir-700/30">
        <div className="section-container">
          <h2 className="text-xl font-serif text-noir-50 tracking-wider mb-8 text-center">
            Our Collection Diameters
          </h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              { name: "L'Ombre", diameter: "41mm", lugToLug: "48mm" },
              { name: "Minuit", diameter: "43mm", lugToLug: "50mm" },
              { name: "Héritage", diameter: "39mm", lugToLug: "46mm" },
              { name: "Chronographe", diameter: "42mm", lugToLug: "49mm" },
              { name: "Nocturne", diameter: "44mm", lugToLug: "51mm" },
            ].map((w) => (
              <div
                key={w.name}
                className="flex items-center justify-between p-4 border border-noir-700/30"
              >
                <span className="text-noir-50 font-serif">{w.name}</span>
                <div className="flex gap-6 text-sm">
                  <span className="text-noir-400">
                    Case:{" "}
                    <span className="text-noir-200">{w.diameter}</span>
                  </span>
                  <span className="text-noir-400">
                    Lug-to-Lug:{" "}
                    <span className="text-noir-200">{w.lugToLug}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}