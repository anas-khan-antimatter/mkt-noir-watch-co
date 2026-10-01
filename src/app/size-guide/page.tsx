"use client";

import { useState } from "react";

interface SizeResult {
  range: string;
  recommendation: string;
  models: string[];
}

function suggestSize(mm: number): SizeResult {
  if (mm < 140) {
    return {
      range: "Small (< 140mm)",
      recommendation: `For your ${mm}mm wrist, we recommend case diameters of 34–38mm. The Héritage (40mm) may also sit well with a short lug-to-lug.`,
      models: ["heritage"],
    };
  } else if (mm >= 140 && mm < 160) {
    return {
      range: "Medium (140–159mm)",
      recommendation: `For your ${mm}mm wrist, case diameters of 38–42mm are ideal. The L'Ombre (41mm) and Héritage (40mm) will both wear elegantly.`,
      models: ["l-ombre", "heritage"],
    };
  } else if (mm >= 160 && mm < 185) {
    return {
      range: "Medium-Large (160–184mm)",
      recommendation: `For your ${mm}mm wrist, all three models will wear superbly. The Minuit (43mm) will have a commanding presence.`,
      models: ["l-ombre", "minuit", "heritage"],
    };
  } else if (mm >= 185 && mm < 205) {
    return {
      range: "Large (185–204mm)",
      recommendation: `For your ${mm}mm wrist, we recommend the Minuit (43mm) for a bold look. The L'Ombre (41mm) with a longer strap also works.`,
      models: ["minuit", "l-ombre"],
    };
  } else {
    return {
      range: "Extra Large (≥ 205mm)",
      recommendation: `For your ${mm}mm wrist, the Minuit (43mm) with an extended strap is our recommended fit. Contact our atelier for a custom length.`,
      models: ["minuit"],
    };
  }
}

export default function SizeGuidePage() {
  const [wristMm, setWristMm] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<SizeResult | null>(null);
  const [showTool, setShowTool] = useState(false);

  const handleMeasure = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 100 || parsed > 300) {
      return;
    }
    setWristMm(parsed);
    setResult(suggestSize(parsed));
    setShowTool(false);
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            &mdash; SIZE GUIDE
          </p>
          <h1 className="section-title">
            Find Your Case Diameter
          </h1>
          <div className="w-12 h-px bg-mirror/30 mt-6" />
          <p className="text-mirror-muted text-sm max-w-xl mt-6 leading-relaxed">
            The perfect watch sits on the wrist &mdash; not over it. Measure your
            wrist circumference and we&apos;ll recommend the ideal case size
            from our collection.
          </p>
        </div>

        {/* How to measure */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
              &mdash; HOW TO MEASURE
            </p>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Wrap a tape measure",
                  desc: "Use a flexible measuring tape or a piece of string around your wrist, just below the wrist bone (the ulnar styloid).",
                },
                {
                  step: "02",
                  title: "Note the circumference",
                  desc: "If using string, lay it flat against a ruler. Record the measurement in millimetres where the end meets the mark.",
                },
                {
                  step: "03",
                  title: "Compare to our guide",
                  desc: "Enter your measurement below to see which case diameters and models will fit your wrist best.",
                },
              ].map((item) => (
                <li key={item.step} className="border-l-2 border-mirror/20 pl-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-mono text-detail text-mirror tracking-extra">
                      {item.step}
                    </p>
                    <span className="w-6 h-px bg-mirror/10" />
                  </div>
                  <h3 className="font-display text-lg text-mirror mb-1">{item.title}</h3>
                  <p className="text-sm text-mirror-muted leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Measure tool */}
          <div>
            <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
              &mdash; WRIST MEASURE TOOL
            </p>

            {!showTool && wristMm === null && (
              <div className="card p-8 text-center">
                <p className="font-display text-4xl text-mirror/40 mb-4">⌚</p>
                <p className="text-mirror-muted text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                  Enter your wrist circumference in millimetres to get a
                  personalised case diameter recommendation.
                </p>
                <button
                  onClick={() => setShowTool(true)}
                  className="btn-primary"
                >
                  <span className="w-4 h-px bg-noir-950" />
                  Measure Now
                </button>
              </div>
            )}

            {showTool && (
              <div className="card p-8">
                <div className="mb-6">
                  <label className="font-mono text-micro text-mirror-muted tracking-extra mb-3 block">
                    Wrist Circumference (mm)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="e.g. 165"
                      min="100"
                      max="300"
                      className="flex-1"
                    />
                    <span className="font-mono text-detail text-mirror-muted">
                      mm
                    </span>
                  </div>
                  <p className="text-mirror-muted text-micro mt-2">
                    Typical range: 140mm &ndash; 210mm
                  </p>
                </div>

                <button
                  onClick={handleMeasure}
                  className="btn-primary w-full"
                  disabled={isNaN(parseInt(inputValue, 10)) || parseInt(inputValue, 10) < 100}
                >
                  <span className="w-4 h-px bg-noir-950" />
                  Get Recommendation
                </button>
              </div>
            )}

            {result && (
              <div className="card p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-4 h-px bg-mirror" />
                  <p className="font-mono text-detail text-mirror tracking-extra">
                    YOUR RESULT
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">
                    Wrist Size
                  </p>
                  <p className="font-display text-3xl text-mirror">
                    {wristMm} <span className="font-mono text-detail text-mirror-muted">mm</span>
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">
                    Category
                  </p>
                  <p className="font-mono text-detail text-mirror">
                    {result.range}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-2">
                    Recommendation
                  </p>
                  <p className="text-sm text-mirror-muted leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>

                <div className="border-t border-mirror/5 pt-6">
                  <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
                    Recommended Models
                  </p>
                  <div className="space-y-4">
                    {result.models.map((slug) => {
                      const modelMap: Record<string, { name: string; subtitle: string; diameter: string }> = {
                        "l-ombre": { name: "L'Ombre", subtitle: "The Shadow", diameter: "41mm" },
                        "minuit": { name: "Minuit", subtitle: "Midnight", diameter: "43mm" },
                        "heritage": { name: "H\u00e9ritage", subtitle: "Heritage", diameter: "40mm" },
                      };
                      const m = modelMap[slug];
                      return (
                        <a
                          key={slug}
                          href={`/collection/${slug}`}
                          className="flex items-center justify-between p-3 border border-mirror/10 hover:border-mirror/30 transition-colors group"
                        >
                          <div>
                            <p className="font-display text-base text-mirror group-hover:text-mirror-light transition-colors">
                              {m.name}
                            </p>
                            <p className="font-mono text-micro text-mirror-muted mt-0.5">
                              {m.subtitle}
                            </p>
                          </div>
                          <span className="font-mono text-micro text-mirror-muted">
                            {m.diameter}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="divider-mirror my-6" />

                <div className="text-center">
                  <button
                    onClick={() => {
                      setShowTool(true);
                      setResult(null);
                      setInputValue("");
                    }}
                    className="btn-outline"
                  >
                    Measure Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reference table */}
        <div className="border-t border-mirror/5 pt-12 mb-12">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-6">
            &mdash; REFERENCE TABLE
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-mirror/5">
                  <th className="font-mono text-micro text-mirror-muted tracking-extra p-3">Wrist Range</th>
                  <th className="font-mono text-micro text-mirror-muted tracking-extra p-3">Recommended Case</th>
                  <th className="font-mono text-micro text-mirror-muted tracking-extra p-3">Fit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { range: "&lt; 140mm", case: "34&ndash;38mm", fit: "Snug &mdash; chose smaller cases" },
                  { range: "140&ndash;159mm", case: "38&ndash;41mm", fit: "Classic &mdash; most versatile" },
                  { range: "160&ndash;184mm", case: "40&ndash;43mm", fit: "Balanced &mdash; all models fit well" },
                  { range: "185&ndash;204mm", case: "42&ndash;45mm", fit: "Bold &mdash; larger cases ideal" },
                  { range: "&ge; 205mm", case: "43mm+", fit: "Extended straps available" },
                ].map((row) => (
                  <tr key={row.range} className="border-b border-mirror/5 hover:bg-mirror/[0.02]">
                    <td className="p-3 font-mono text-detail text-mirror">{row.range}</td>
                    <td className="p-3 text-sm text-mirror">{row.case}</td>
                    <td className="p-3 text-sm text-mirror-muted">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-mirror/5 pt-12 pb-12">
          <p className="font-mono text-micro text-mirror-muted tracking-extra mb-4">
            &mdash; NEED MORE HELP?
          </p>
          <h2 className="font-display text-3xl text-mirror mb-6">
            Visit Our Atelier
          </h2>
          <p className="text-mirror-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Our master horologists in La Chaux-de-Fonds will measure your wrist
            personally and help you find the perfect fit.
          </p>
          <a
            href="mailto:atelier@noirwatch.co"
            className="btn-primary"
          >
            <span className="w-4 h-px bg-noir-950" />
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}