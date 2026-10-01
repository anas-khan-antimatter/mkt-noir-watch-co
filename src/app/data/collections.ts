export interface Complication {
  name: string;
  description: string;
  detail: string;
}

export interface CollectionItem {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  caseMaterial: string;
  caseDiameter: number;
  caseHeight: number;
  movement: string;
  powerReserve: string;
  waterResistance: string;
  crystals: string;
  price: number;
  image: string;
  complications: Complication[];
}

export const collections: CollectionItem[] = [
  {
    slug: "lombre",
    name: "L'Ombre",
    subtitle: "The Shadow",
    tagline: "Transparency as a statement",
    description:
      "A masterwork of minimalism. The skeletonized dial reveals the heartbeat of the movement — polished bridges, ruby jewels, and the oscillating weight in 22K gold. Every surface is hand-chamfered, every screw head polished to a mirror finish.",
    heroDescription:
      "Skeletonized movement suspended in sapphire crystal. A meditation on mechanical purity.",
    caseMaterial: "Platinum 950",
    caseDiameter: 41,
    caseHeight: 11.2,
    movement: "Calibre NOIR-01, hand-wound, 216 components",
    powerReserve: "70 hours",
    waterResistance: "30 m",
    crystals: "Box-domed sapphire, front & exhibition caseback",
    price: 42800,
    image: "lombre",
    complications: [
      {
        name: "Skeleton Bridges",
        description: "Hand-polished bridges reveal the gear train in motion.",
        detail:
          "Five bridges are cut, bevelled, and polished by hand over three weeks. Each receives a circular-grained finish on the upper surface and a mirror polish on the flanks. The central bridge is heat-blued to a deep violet.",
      },
      {
        name: "Ruby Index Jewels",
        description: "Synthetic ruby cap jewels reduce friction at pivot points.",
        detail:
          "Twelve ruby jewels (1.2 mm each) are press-set into the mainplate. Their deep crimson catches light through the skeleton openings — a nod to the rubies used in 18th-century English pocket watches.",
      },
      {
        name: "22K Oscillating Weight",
        description: "A rose-gold segment glides along the rack, visible through the dial.",
        detail:
          "The automatic winding weight is carved from a single billet of 22K rose gold. Its visible arc across the upper dial tracks the mainspring state — a living power-reserve indicator.",
      },
    ],
  },
  {
    slug: "minuit",
    name: "Minuit",
    subtitle: "Midnight",
    tagline: "Darkness refined",
    description:
      "Encased in forged carbon fiber with a deep black sunburst dial. LumiNova Super-LumiNova hands glow like distant stars. The combination of aerospace materials and traditional finishing creates a watch that belongs equally in a boardroom and a deep-sea submersible.",
    heroDescription:
      "Forged carbon case, sunburst black dial, luminous hands that read in absolute darkness.",
    caseMaterial: "Forged carbon fiber + grade-5 titanium bezel",
    caseDiameter: 43,
    caseHeight: 13.5,
    movement: "Calibre NOIR-02, automatic, 198 components",
    powerReserve: "70 hours",
    waterResistance: "200 m",
    crystals: "Flat sapphire, double anti-reflective coating",
    price: 31500,
    image: "minuit",
    complications: [
      {
        name: "Forged Carbon Case",
        description: "Layered carbon-fiber sheets compressed at high pressure.",
        detail:
          "Each case begins as 48 sheets of unidirectional carbon pre-preg, layered at alternating angles, then cured at 130°C under 8 bar pressure. The resulting material is 30% lighter than titanium yet exceptionally rigid. No two cases share the same grain pattern.",
      },
      {
        name: "Super-LumiNova BGW9",
        description: "Hand-painted luminous compound on hands and indices.",
        detail:
          "Swiss Super-LumiNova Grade A BGW9 is applied by hand in three coats. The compound charges to full brightness in 30 minutes of ambient light and remains readable for 8+ hours. Emission peaks at 460 nm — the cool blue of starlight.",
      },
      {
        name: "Helium Escape Valve",
        description: "Automatic pressure relief for saturation diving.",
        detail:
          "A miniature tungsten valve at 9 o'clock automatically vents helium molecules during decompression, preventing crystal blow-off. The valve is tested to 250 m saturation depth.",
      },
    ],
  },
  {
    slug: "heritage",
    name: "Héritage",
    subtitle: "Heritage",
    tagline: "Belle Époque reborn",
    description:
      "Inspired by the pocket watches of the Belle Époque. A guilloché dial hand-engraved on a 1920s rose engine, blued steel Breguet-style hands, and a hand-wound movement visible through the exhibition caseback. Each dial is unique.",
    heroDescription:
      "Hand-guilloché dial, blued steel hands, a movement finished entirely by hand.",
    caseMaterial: "18K rose gold (5N) or platinum 950",
    caseDiameter: 39,
    caseHeight: 10.8,
    movement: "Calibre NOIR-03, hand-wound, 174 components",
    powerReserve: "48 hours",
    waterResistance: "30 m",
    crystals: "Domed sapphire, box-domed exhibition back",
    price: 56200,
    image: "heritage",
    complications: [
      {
        name: "Rose-Engine Guilloché",
        description: "Dial pattern cut on a 1927 rose-engine lathe.",
        detail:
          "The dial blank is mounted on an original Béguelin rose engine. The master guillocheur advances the pattern by hand-geared increments, cutting each groove individually. A single dial takes 6 hours. The resulting moire pattern catches light differently at every angle.",
      },
      {
        name: "Blued Steel Hands",
        description: "Thermally oxidized Breguet-style hands.",
        detail:
          "Hands are cut from 0.3 mm steel sheet, then heated in a brass box over a gas flame until they reach the precise blue — 290°C to 310°C. The oxide layer is 40–50 nm thick, producing interference blue without pigments.",
      },
      {
        name: "Swiss Lever Escapement",
        description: "Traditional swiss lever with hand-polished pallets.",
        detail:
          "The escape wheel and pallet fork are hand-polished with diamantine paste. The pallet stones are natural garnet, selected for hardness and color. The beat is regulated to 28,800 vibrations per hour.",
      },
    ],
  },
];

export function getCollection(slug: string): CollectionItem | undefined {
  return collections.find((c) => c.slug === slug);
}