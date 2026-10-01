"use client";
import { useState } from "react";

export default function SizeGuidePage() {
  const [wristMm, setWristMm] = useState(175);
  const [wristInput, setWristInput] = useState("175");

  function suggestedDiameter(wrist: number): number {
    // Rule of thumb: case diameter ≈ wrist mm / 4.0 to 4.5
    const ideal = Math.round(wrist / 4.25);
    return Math.max(34, Math.min(48, ideal));
  }

  const diameter = suggestedDiameter(wristMm);

  function fitLabel(d: number): string {
    if (d <= 36) return "Petite — vintage proportion";
    if (d <= 39) return "Classic — traditional dress watch";
    if (d <= 42) return "Contemporary — modern silhouette";
    if (d <= 45) return "Presence — assertive case";
    return "Grande — bold architectural statement";
  }

  const collectionsMatched: { name: string; slug: string; d: number }[] = [
    { name: "L'Ombre", slug: "lombre", d: 41 },
    { name: "Minuit", slug: "minuit", d: 43 },
    { name: "Héritage", slug: "heritage", d: 39 },
  ];

  return (
    <div className="min-h-screen bg-noir-950">
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">Size Guide</p>
        <h1 className="section-title">Find Your Proportion</h1>
        <div className="divider-platinum mt-6 mb-8" />
        <p className="text-noir-300 text-xs max-w-xl leading-relaxed">
          Wrist measurement and case diameter are intimately related. Enter your
          wrist circumference below to determine the ideal case size.
        </p>
      </section>

      <div className="section-container grid md:grid-cols-2 gap-12 items-start">
        {/* Left — Wrist measure tool */}
        <div>
          <div className="border border-noir-700/30 p-6">
            <p className="micro-label mb-4">Your Wrist</p>

            <label className="block mb-6">
              <span className="text-noir-400 text-[10px] uppercase tracking-[0.3em] block mb-3">
                Wrist circumference (mm)
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="130"
                  max="260"
                  value={wristMm}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setWristMm(v);
                    setWristInput(String(v));
                  }}
                  className="input-range w-full"
                />
              </div>
              <input
                type="number"
                value={wristInput}
                onChange={(e) => {
                  setWristInput(e.target.value);
                  const v = Number(e.target.value);
                  if (v >= 130 && v <= 260) setWristMm(v);
                }}
                className="bg-noir-900 border border-noir-700/40 p-2 text-noir-50 text-sm w-24 mt-2"
              />
              <span className="text-noir-400 text-[10px] ml-2">mm</span>
            </label>

            <div className="mt-4 border-t border-noir-700/20 pt-4">
              <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase mb-1">
                How to measure
              </p>
              <p className="text-noir-500 text-[10px] leading-relaxed">
                Wrap a flexible tape around your wrist just behind the wrist bone
                (the styloid process). Take note of the point where the tape
                overlaps — this is your circumference. If no tape is available,
                use a string and then measure against a ruler.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Suggestion panel */}
        <div>
          <div className="border border-noir-700/30 p-6">
            <p className="micro-label mb-4">Recommendation</p>

            <div className="mb-6">
              <p className="text-noir-400 text-[10px] uppercase tracking-[0.3em]">
                Suggested case diameter
              </p>
              <p className="value-display mt-2">{diameter} mm</p>
              <p className="text-noir-300 text-xs mt-1">{fitLabel(diameter)}</p>
            </div>

            <div className="border-t border-noir-700/20 pt-4 mt-4">
              <p className="text-noir-400 text-[9px] tracking-[0.3em] uppercase mb-3">
                Nearest collections
              </p>
              <div className="grid gap-3">
                {collectionsMatched.map((c) => {
                  const diff = Math.abs(c.d - diameter);
                  const match = diff <= 2 ? "Ideal" : diff <= 4 ? "Good" : "Alternative";
                  return (
                    <div
                      key={c.slug}
                      className={`flex items-center justify-between border-b border-noir-700/20 pb-2 ${
                        match === "Ideal" ? "border-platinum-700/40" : ""
                      }`}
                    >
                      <div>
                        <span className="text-noir-50 text-sm font-serif">{c.name}</span>
                        <span className="text-noir-400 text-[10px] ml-2">{c.d} mm</span>
                      </div>
                      <span
                        className={`text-[9px] tracking-[0.3em] uppercase ${
                          match === "Ideal"
                            ? "text-noir-50"
                            : match === "Good"
                            ? "text-noir-300"
                            : "text-noir-500"
                        }`}
                      >
                        {match}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Wrist-to-case ratio display */}
            <div className="mt-4 pt-4 border-t border-noir-700/20">
              <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase">Wrist-to-Case Ratio</p>
              <p className="text-noir-50 font-mono text-sm mt-1">
                {wristMm} mm / {diameter} mm ={" "}
                {(wristMm / diameter).toFixed(2)}:1
              </p>
              <p className="text-noir-500 text-[10px] leading-relaxed mt-2">
                A ratio between 4.0 and 4.5 is considered the classic proportion
                for a dress watch. Ratios below 3.8 indicate a case that may wear
                large; above 5.0 may wear small.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Size chart table */}
      <section className="section-container py-16 mt-12 border-t border-noir-700/20">
        <p className="micro-label mb-6">Reference Table</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] uppercase tracking-[0.2em] border-collapse">
            <thead>
              <tr className="border-b border-noir-700/30 text-noir-400 text-left">
                <th className="py-2 px-3">Wrist (mm)</th>
                <th className="py-2 px-3">Ideal case</th>
                <th className="py-2 px-3">Fit</th>
                <th className="py-2 px-3">Character</th>
              </tr>
            </thead>
            <tbody>
              {[
                [140, 33, "Petite", "Delicate, vintage-inspired"],
                [155, 36, "Petite–Classic", "Traditional dress"],
                [170, 40, "Classic", "The standard proportion"],
                [185, 44, "Contemporary", "Modern silhouette"],
                [200, 47, "Presence", "Assertive wrist presence"],
                [215, 50, "Grande", "Architectural timepiece"],
              ].map(([w, d, fit, character]) => (
                <tr
                  key={w}
                  className={`border-b border-noir-700/20 ${
                    Math.abs(w - wristMm) <= 5 ? "bg-noir-850" : ""
                  }`}
                >
                  <td className="py-2 px-3 text-noir-50">{w}</td>
                  <td className="py-2 px-3 text-noir-200">{d} mm</td>
                  <td className="py-2 px-3 text-noir-400">{fit}</td>
                  <td className="py-2 px-3 text-noir-500">{character}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}