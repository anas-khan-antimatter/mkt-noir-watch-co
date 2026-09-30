export interface WatchCollection {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  heroImage: string;
  description: string;
  heritage: string;
  strap: string;
  movement: string;
  powerReserve: string;
  waterResistance: string;
  diameter: string;
  thickness: string;
  caseMaterial: string;
  crystal: string;
  price: number;
  features: string[];
  gallery: string[];
}

export const collections: WatchCollection[] = [
  {
    slug: "l-ombre",
    name: "L'Ombre",
    tagline: "The Shadow",
    subtitle: "Skeletonized Minimalism",
    heroImage: "/collections/l-ombre-hero.jpg",
    description:
      "A masterwork of minimalism where the very soul of the timepiece is laid bare. The skeletonized dial reveals the heartbeat of the movement — polished bridges, ruby jewels, and the oscillating weight finished in 22K gold. Every gear train, every spring, every pivot is visible through the sapphire crystal, a testament to the art within.",
    heritage:
      "Inspired by the open-worked pocket watches of 19th-century Geneva, L'Ombre pushes transparency to its logical extreme. The bridges are hand-engraved with a gilloché pattern and the mainplate features circular graining visible only under magnification. Each movement takes 280 hours to skeletonize and finish.",
    strap: "Hand-stitched alligator leather in deep obsidian black with gold-tone pin buckle",
    movement: "Calibre N-1924 — manual-wind, in-house skeletonized movement",
    powerReserve: "72 hours",
    waterResistance: "30m (splash resistant)",
    diameter: "41mm",
    thickness: "9.8mm",
    caseMaterial: "904L stainless steel with polished chamfers",
    crystal: "Box-domed sapphire with anti-reflective coating",
    price: 28500,
    features: [
      "Skeletonized dial with hand-engraved bridges",
      "22K gold oscillating weight",
      "Exhibition sapphire caseback",
      "Hand-stitched alligator strap",
      "Certified chronometer (COSC)",
    ],
    gallery: [
      "/collections/l-ombre-1.jpg",
      "/collections/l-ombre-2.jpg",
      "/collections/l-ombre-3.jpg",
    ],
  },
  {
    slug: "minuit",
    name: "Minuit",
    tagline: "Midnight",
    subtitle: "Forged Carbon · Lume · Shadow",
    heroImage: "/collections/minuit-hero.jpg",
    description:
      "Encased in forged carbon fiber with a deep black sunburst dial, Minuit is designed for the night. LumiNova Super-LumiNova hands glow like distant stars against the void, while the ceramic bezel offers near-diamond hardness. It is a tool watch reimagined through the lens of haute horlogerie.",
    heritage:
      "Born from a collaboration with a former aerospace composites engineer, Minuit uses a proprietary forged carbon blend that is both lighter than titanium and harder than ceramic. Each case is unique — the carbon marbling ensures no two watches are identical.",
    strap: "Black rubber strap with titanium deployant clasp, plus additional woven NATO strap",
    movement: "Calibre N-2077 — automatic, 28,800 vph",
    powerReserve: "70 hours",
    waterResistance: "200m",
    diameter: "43mm",
    thickness: "12.5mm",
    caseMaterial: "Forged carbon fiber with ceramic bezel insert",
    crystal: "Flat sapphire with double AR coating",
    price: 18900,
    features: [
      "Forged carbon fiber case — each unique",
      "Ceramic bezel with luminous markers",
      "Super-LumiNova C3 X1 hands and indices",
      "200m water resistance",
      "Dual strap system (rubber + NATO)",
    ],
    gallery: [
      "/collections/minuit-1.jpg",
      "/collections/minuit-2.jpg",
      "/collections/minuit-3.jpg",
    ],
  },
  {
    slug: "heritage",
    name: "Héritage",
    tagline: "Heritage",
    subtitle: "Guilloché · Blued Steel · Tradition",
    heroImage: "/collections/heritage-hero.jpg",
    description:
      "Inspired by the vintage pocket watches of the Belle Époque, Héritage is a tribute to classical watchmaking. The dial is hand-engraved on a rose engine — a 19th-century machine that cuts repeating geometric patterns with hypnotic precision. Blued steel hands and a hand-wound movement visible through the exhibition caseback complete the picture.",
    heritage:
      "The rose engine used to create the Héritage dial dates to 1876 and was purchased from a closing dial workshop in the Vallée de Joux. Our master guillocheur spent two years learning the machine's unique grain before producing the first dial. Each dial takes six hours to cut.",
    strap: "Honey-brown calfskin leather with tone-on-tone stitching and a steel pin buckle",
    movement: "Calibre N-1893 — manual-wind, 21,600 vph with swan-neck regulator",
    powerReserve: "55 hours",
    waterResistance: "30m",
    diameter: "39mm",
    thickness: "10.2mm",
    caseMaterial: "18K rose gold (5N) with polished and brushed surfaces",
    crystal: "Box-domed sapphire with anti-reflective coating",
    price: 42000,
    features: [
      "Hand-guilloché dial on rose engine",
      "Blued steel hands (flame-oxidized)",
      "18K rose gold case",
      "Exhibition caseback with hand-engraved movement",
      "Swan-neck regulator for precision adjustment",
    ],
    gallery: [
      "/collections/heritage-1.jpg",
      "/collections/heritage-2.jpg",
      "/collections/heritage-3.jpg",
    ],
  },
  {
    slug: "chronographe",
    name: "Chronographe",
    tagline: "Chronograph",
    subtitle: "Monopusher · Column Wheel · Flyback",
    heroImage: "/collections/chronographe-hero.jpg",
    description:
      "A monopusher chronograph with a column-wheel mechanism and flyback function. The single pusher at 2 o'clock controls start, stop, and reset — a purist's interaction that mirrors the chronographs of the 1940s. The smoked sapphire dial offers a glimpse of the heart-cam and coupling clutch in action.",
    heritage:
      "The column-wheel chronograph is the most prestigious (and expensive) chronograph mechanism to produce. Unlike cam-actuated chronographs, the column wheel offers a crisp, tactile actuation that connoisseurs prize. Our version adds a modern flyback complication, allowing instant reset without stopping first.",
    strap: "Dark brown racing leather with perforations and a steel deployant clasp",
    movement: "Calibre N-1941 — automatic column-wheel chronograph, flyback",
    powerReserve: "46 hours",
    waterResistance: "50m",
    diameter: "42mm",
    thickness: "13.2mm",
    caseMaterial: "Tantalum with platinum bezel ring",
    crystal: "Smoked sapphire with AR coating",
    price: 36500,
    features: [
      "Monopusher column-wheel chronograph",
      "Flyback function",
      "Smoked sapphire dial open at 9 and 3",
      "Tantalum case — rare and heavy",
      "Platinum bezel with engraved tachymeter",
    ],
    gallery: [
      "/collections/chronographe-1.jpg",
      "/collections/chronographe-2.jpg",
      "/collections/chronographe-3.jpg",
    ],
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    tagline: "Nocturne",
    subtitle: "Equation of Time · Moon · Sky",
    heroImage: "/collections/nocturne-hero.jpg",
    description:
      "An astronomical watch that tracks the equation of time, moon phase, and the star chart of the northern hemisphere night sky. The aventurine dial mimics the deep blue of midnight, with 18K gold stars scattered across its surface. A true celestial instrument for the wrist.",
    heritage:
      "Equation of time complications correct for the difference between mean solar time and actual solar time — a complication so rare that fewer than ten watchmakers in the world produce it. Our version required three years of development and a new patent-pending differential mechanism.",
    strap: "Navy blue alligator leather with 18K white gold pin buckle",
    movement: "Calibre N-1789 — manual-wind, astronomical module on base movement",
    powerReserve: "48 hours",
    waterResistance: "30m",
    diameter: "44mm",
    thickness: "14.2mm",
    caseMaterial: "Platinum 950",
    crystal: "Domed sapphire with multi-layer AR coating",
    price: 128000,
    features: [
      "Equation of time indication",
      "Moon phase (accurate to one day in 122 years)",
      "Star chart of the northern hemisphere",
      "Aventurine dial with gold stars",
      "Platinum case — the heaviest precious metal",
    ],
    gallery: [
      "/collections/nocturne-1.jpg",
      "/collections/nocturne-2.jpg",
      "/collections/nocturne-3.jpg",
    ],
  },
];

export function getCollectionBySlug(slug: string): WatchCollection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return collections.map((c) => c.slug);
}
