"use client";
import { useState } from "react";
import {
  caseOptions,
  strapOptions,
  dialOptions,
  allGroups,
  computePrice,
  computeSku,
} from "../data/configurator";

const groupMap: Record<string, typeof caseOptions> = {
  case: caseOptions,
  strap: strapOptions,
  dial: dialOptions,
};

export default function ConfigurePage() {
  const [caseId, setCaseId] = useState(caseOptions.options[0].id);
  const [strapId, setStrapId] = useState(strapOptions.options[0].id);
  const [dialId, setDialId] = useState(dialOptions.options[0].id);
  const [activeGroup, setActiveGroup] = useState("case");

  const sel = { caseId, strapId, dialId };
  const price = computePrice(sel);
  const sku = computeSku(sel);

  const currentGroup = groupMap[activeGroup];
  const currentOpts = currentGroup.options;
  const currentSel =
    activeGroup === "case" ? caseId : activeGroup === "strap" ? strapId : dialId;

  const groupLabels: Record<string, string> = { case: "Case Material", strap: "Strap / Bracelet", dial: "Dial" };

  function getLabel(groupId: string, optId: string) {
    const grp = groupMap[groupId];
    const opt = grp.options.find((o) => o.id === optId);
    return opt ? opt.label : "";
  }

  return (
    <div className="min-h-screen bg-noir-950">
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">Configurator</p>
        <h1 className="section-title">Compose Your Timepiece</h1>
        <div className="divider-platinum mt-6 mb-8" />
        <p className="text-noir-300 text-xs max-w-xl leading-relaxed">
          Select case, strap, and dial. Each choice updates the composition and
          price. The SKU below is generated in real time.
        </p>
      </section>

      <div className="section-container grid md:grid-cols-2 gap-10 items-start">
        {/* Left — Option selectors */}
        <div>
          {/* Group tabs */}
          <div className="flex gap-4 mb-8 border-b border-noir-700/30">
            {["case", "strap", "dial"].map((g) => (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`pb-2 px-1 text-[10px] uppercase tracking-[0.3em] transition-all ${
                  activeGroup === g
                    ? "text-noir-50 border-b border-noir-50"
                    : "text-noir-500"
                }`}
              >
                {groupLabels[g]}
              </button>
            ))}
          </div>

          {/* Option cards */}
          <div className="grid gap-3">
            {currentOpts.map((opt) => (
              <label
                key={opt.id}
                className={`border p-4 pl-3 pr-3 flex items-start gap-3 cursor-pointer transition-all ${
                  currentSel === opt.id
                    ? "border-platinum-700 bg-noir-850"
                    : "border-noir-700/30 bg-noir-900"
                }`}
              >
                <input
                  type="radio"
                  name={activeGroup}
                  value={opt.id}
                  checked={currentSel === opt.id}
                  onChange={() => {
                    if (activeGroup === "case") setCaseId(opt.id);
                    else if (activeGroup === "strap") setStrapId(opt.id);
                    else setDialId(opt.id);
                  }}
                  className="appearance-none w-3 h-3 rounded-full border border-noir-500 checked:bg-noir-50"
                />
                <div className="flex-1">
                  <p className="text-noir-50 text-xs font-medium mb-1">{opt.label}</p>
                  <p className="text-noir-400 text-[10px] leading-snug">{opt.description}</p>
                </div>
                <span className="text-noir-400 text-[10px]">
                  {opt.priceMod === 0
                    ? "—"
                    : opt.priceMod > 0
                    ? `+CHF ${opt.priceMod.toLocaleString("en")}`
                    : `−CHF ${Math.abs(opt.priceMod).toLocaleString("en")}`}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Right — Live preview panel */}
        <div className="bg-noir-900 border border-noir-700/30 p-8 max-h-[580px] overflow-y-auto">
          <p className="micro-label mb-4">Composition</p>

          {/* Visual preview placeholder */}
          <div className="aspect-square max-w-[240px] mx-auto mb-6 bg-noir-850 rounded-full border border-noir-700/30 overflow-hidden">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <span className="text-noir-400 text-[8px] uppercase tracking-[0.45em] block">
                  macro rendering
                </span>
                <span className="text-noir-600 text-[7px] block mt-1">live composition</span>
              </div>
            </div>
          </div>

          {/* Selection summary */}
          <div className="grid gap-4 text-[10px] uppercase tracking-[0.2em]">
            <div className="border-b border-noir-700/20 pb-2 flex justify-between">
              <span className="text-noir-400">Case</span>
              <span className="text-noir-50">{getLabel("case", caseId)}</span>
            </div>
            <div className="border-b border-noir-700/20 pb-2 flex justify-between">
              <span className="text-noir-400">Strap</span>
              <span className="text-noir-50">{getLabel("strap", strapId)}</span>
            </div>
            <div className="border-b border-noir-700/20 pb-2 flex justify-between">
              <span className="text-noir-400">Dial</span>
              <span className="text-noir-50">{getLabel("dial", dialId)}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-6 pt-4 border-t border-noir-700/30">
            <p className="text-noir-400 text-[9px] tracking-[0.35em] uppercase mb-1">
              Estimated price
            </p>
            <p className="font-serif text-3xl text-noir-50 tracking-tight">
              CHF {price.toLocaleString("en")}—
            </p>
          </div>

          {/* SKU */}
          <div className="mt-4">
            <p className="text-noir-500 text-[9px] tracking-[0.35em] uppercase mb-1">Reference SKU</p>
            <p className="font-mono text-[11px] text-noir-300 tracking-wider">{sku}</p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a href="/waitlist" className="btn-primary w-full text-center block">
              Register Interest
            </a>
          </div>
        </div>
      </div>

      {/* All groups summary */}
      <section className="section-container py-12 mt-12 border-t border-noir-700/20">
        <p className="micro-label mb-6">All Options</p>
        <div className="grid md:grid-cols-3 gap-6 text-[10px] leading-relaxed">
          {allGroups.map((g) => (
            <div key={g.id} className="border border-noir-700/30 p-4">
              <p className="text-noir-400 uppercase tracking-[0.3em] mb-2">{g.label}</p>
              <ul className="list-disc text-noir-500">
                {g.options.map((o) => (
                  <li key={o.id} className="mb-1">
                    {o.label}{" "}
                    <span className="text-noir-600">
                      ({o.priceMod === 0 ? "incl." : o.priceMod > 0 ? `+${o.priceMod}` : `${o.priceMod}`})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}