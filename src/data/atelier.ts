export interface AtelierChapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  processDescription: string;
  materials: string[];
  detailImage: string;
}

export const atelierChapters: AtelierChapter[] = [
  {
    slug: "conception",
    number: 1,
    title: "Conception & Design",
    subtitle: "Where every line has purpose",
    duration: "8–12 weeks",
    description:
      "Every Noir timepiece begins as a sketch on 100gsm vellum. Our design director works in graphite and ink — no CAD until the proportions feel right on paper. The golden ratio governs every case curve, every lug sweep, every crown profile.",
    processDescription:
      "Initial sketches→proportion study→clay modeling→3D CAD→printed resin prototype→wear testing→final approval. Each step requires unanimous sign-off from the founding family.",
    materials: [
      "100gsm vellum paper",
      "Graphite pencils (2H–6B)",
      "French curve set",
      "Industrial clay for full-scale model",
      "Brass for machining prototypes",
    ],
    detailImage: "/atelier/conception.jpg",
  },
  {
    slug: "case-finishing",
    number: 2,
    title: "Case Finishing",
    subtitle: "Light as a material",
    duration: "6–10 weeks",
    description:
      "A Noir case alternates between mirror-polished and satin-brushed surfaces. The line between them is a crisp, razor-sharp bevel cut by hand on a lapidary wheel. Master finishers train for seven years before touching a production case.",
    processDescription:
      "CNC roughing→heat treatment→satin brushing with 400-grit→mirror polishing on tin-lead lap→bevel cutting→final inspection under 40x microscope→hand-rejection of any piece with a single micro-scratch.",
    materials: [
      "904L stainless steel (superior corrosion resistance)",
      "Forged carbon fiber (proprietary blend)",
      "Tantalum (refractory metal, 2× density of steel)",
      "Platinum 950",
      "18K rose gold (5N alloy)",
    ],
    detailImage: "/atelier/case-finishing.jpg",
  },
  {
    slug: "dial-creation",
    number: 3,
    title: "Dial Creation",
    subtitle: "The face of time",
    duration: "4–16 weeks",
    description:
      "The dial is the first thing you see and the last thing you forget. Our dials are produced by a single workshop in the Swiss Jura that has supplied grand complications since 1845. Guilloché, Grand Feu enamel, meteorite, aventurine — each material demands a different mastery.",
    processDescription:
      "Base blanking→electroplating→guilloché engraving (rose engine)→printing (pad printing or tampography)→appliqué placement (hand by tweezers)→lume application→aging (for heritage dials)→final QC under 100x microscope.",
    materials: [
      "Grand Feu enamel (powdered glass fired at 800°C)",
      "Guilloché engraved brass (rose engine cut)",
      "Natural meteorite (Muonionalusta, 4.5bn years old)",
      "Aventurine glass (deep blue with copper inclusions)",
      "Sunburst lacquer (hand-sprayed, 12 coats)",
    ],
    detailImage: "/atelier/dial-creation.jpg",
  },
  {
    slug: "movement-assembly",
    number: 4,
    title: "Movement Assembly",
    subtitle: "200 hours of concentration",
    duration: "10–20 weeks",
    description:
      "Our master horologists assemble each movement by hand in a clean room with HEPA-filtered air. A single hair or dust particle can disrupt a balance spring. Every pivot is oiled with a human hair-thin applicator under a binocular microscope.",
    processDescription:
      "Mainplate preparation→train wheel installation→barrel assembly→escapement adjustment→balance spring pinning→jewel installation→bridges→chronograph module→final regulation on timing machine→24-hour test in six positions.",
    materials: [
      "Glucydur balance wheel",
      "Anachron hairspring",
      "Synthetic ruby jewels (pierced by laser)",
      "Palisade lever (nickel-phosphorus, LIGA process)",
      "22K gold oscillating weight (skeletonized)",
    ],
    detailImage: "/atelier/movement-assembly.jpg",
  },
  {
    slug: "finishing-decoration",
    number: 5,
    title: "Finishing & Decoration",
    subtitle: "The invisible made beautiful",
    duration: "4–8 weeks",
    description:
      "Finishing is the soul of haute horlogerie. Anglage (hand-bevelling), Côtes de Genève, perlage, circular graining, black polish — techniques that add nothing to timekeeping and everything to meaning. Components that no one will ever see are finished to the same standard as the dial.",
    processDescription:
      "Anglage→Côtes de Genève milling→perlage on mainplate→black polish on steel parts→circular graining→screws with polished slots→final rhodium plating→inspection under 60x.",
    materials: [
      "Rhodium plating (for lustre and corrosion resistance)",
      "Wooden peg for anglage polishing",
      "Diamond paste (0.25 micron)",
      "Crocus cloth for final mirror finish",
      "Berlin blue for screw slot alignment",
    ],
    detailImage: "/atelier/finishing.jpg",
  },
  {
    slug: "regulation-testing",
    number: 6,
    title: "Regulation & Testing",
    subtitle: "The pursuit of precision",
    duration: "4–6 weeks",
    description:
      "Every Noir movement undergoes 15 days of testing in five positions and three temperatures. Our regulation standard exceeds COSC: we demand −2/+4 seconds per day across all positions, not just the COSC average. Watches that fail are returned to the bench.",
    processDescription:
      "Pre-regulation on Timing Machine→5-position test (dial up, dial down, crown left, crown right, crown up)→3-temperature test (8°C, 23°C, 38°C)→power reserve test→water resistance test→shock test→magnetic field test→final timing→certification.",
    materials: [
      "Witschi Timing Machine",
      "Pressure test rig (up to 20 ATM)",
      "Magnetic field generator (4,800 A/m)",
      "Shock test hammer (1m drop on hardwood)",
      "Temperature chamber (−10°C to +60°C)",
    ],
    detailImage: "/atelier/regulation.jpg",
  },
];

export function getChapterBySlug(slug: string): AtelierChapter | undefined {
  return atelierChapters.find((c) => c.slug === slug);
}