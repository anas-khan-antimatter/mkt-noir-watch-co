import Link from "next/link";

export default function AtelierPage() {
  return (
    <div className="min-h-screen bg-noir-950">
      <section className="section-container pt-24 pb-16">
        <p className="micro-label mb-4">Atelier</p>
        <h1 className="section-title">Craftsmanship Chapters</h1>
        <div className="divider-platinum mt-6 mb-8" />
        <p className="text-noir-300 text-xs max-w-xl leading-relaxed mb-6">
          Every Noir timepiece passes through fourteen ateliers. Each chapter
          focuses on a single craft — from the initial billet to the final
          regulation on the timing machine.
        </p>
      </section>

      <section className="section-container pb-24">
        <div className="grid gap-6">
          {[
            {
              title: "I — Design & Sculpture",
              years: "Months 1–3",
              desc: "The case and dial are conceived in clay and CAD. Every curve is carved, then scanned into 3D for CNC routing of the master dies.",
            },
            {
              title: "II — Mainplate Finishing",
              years: "Week 4–6",
              desc: "The nickel-silver mainplate is faced on a rose-engine lathe, then circular-grained by hand with a rotating boxwood tool and diamantine paste.",
            },
            {
              title: "III — Gear Train Assembly",
              years: "Week 7–10",
              desc: "Eighteen gears, twelve pinions, and the barrel are assembled into the going train. End shakes are adjusted to 0.02 mm tolerance.",
            },
            {
              title: "IV — Escapement & Balance",
              years: "Week 11–14",
              desc: "The swiss lever escapement is fitted and the balance wheel is poised statically and dynamically to within 0.005 mg·mm.",
            },
            {
              title: "V — Hand-Finishing Bridges",
              years: "Week 15–18",
              desc: "Each bridge is bevelled by hand with a graver, then polished on a tin-lead wheel charged with rouge. No two bridges reflect identically.",
            },
            {
              title: "VI — Dial Craft",
              years: "Week 19–24",
              desc: "The dial is engraved on a rose engine, or painted with grand feu enamel, or cut for skeleton work. Lume is applied by hand in three coats.",
            },
            {
              title: "VII — Hand Polishing & Casing Up",
              years: "Week 25–28",
              desc: "The case is polished on a mop wheel with green compound, then cased up with the movement. The crown is fitted and tested for 200 winds.",
            },
            {
              title: "VIII — Timing & Regulation",
              years: "Week 29–32",
              desc: "The assembled watch is placed on a Witschi timing machine for 7 days. Regulation adjusts the balance screw to ±2 s/day.",
            },
          ].map((chapter) => (
            <details key={chapter.title} className="border border-noir-700/30 p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-noir-50 font-serif text-lg">
                <span>{chapter.title}</span>
                <span className="text-noir-400 text-[9px] tracking-[0.3em] uppercase">
                  {chapter.years}
                </span>
              </summary>
              <div className="mt-4">
                <p className="text-noir-300 text-sm leading-relaxed">{chapter.desc}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Heritage footnote */}
      <section className="section-container py-12 border-t border-noir-700/20">
        <div className="text-center">
          <p className="micro-label mb-4">The Atelier</p>
          <p className="text-noir-200 text-sm max-w-xl mx-auto leading-relaxed">
            Since 1893, our workshops in La Chaux-de-Fonds have produced fewer
            than 800 timepieces. Each is signed, numbered, and entered into the
            permanent register.
          </p>
          <div className="divider-platinum mt-6 mb-8" />
          <Link href="/collection" className="btn-primary">
            View Collections
          </Link>
        </div>
      </section>
    </div>
  );
}