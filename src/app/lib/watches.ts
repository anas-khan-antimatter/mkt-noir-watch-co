export interface WatchComplication {
  name: string;
  description: string;
  detail: string;
}

export interface Watch {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number;
  description: string;
  caseMaterial: string;
  caseDiameter: string;
  caseThickness: string;
  waterResistance: string;
  movement: string;
  powerReserve: string;
  complications: WatchComplication[];
  dialColor: string;
  strap: string;
  crystal: string;
}

export const watches: Watch[] = [
  {
    slug: "l-ombre",
    name: "L'Ombre",
    subtitle: "The Shadow",
    tagline: "Skeletonized. Revealed. Perfected.",
    price: 28400,
    description:
      "A masterwork of minimalism. The L'Ombre strips away everything unnecessary, exposing the beating heart of mechanical timekeeping. Every bridge is hand-bevelled, every ruby jewel set in polished gold chatons. The 22K gold winding rotor oscillates like a metronome against the darkened mainplate.",
    caseMaterial: "950 Platinum",
    caseDiameter: "41mm",
    caseThickness: "11.2mm",
    waterResistance: "50m",
    movement: "Calibre NO-101 \u2014 Manual Wind",
    powerReserve: "72 hours",
    dialColor: "Skeleton \u2014 Openworked",
    strap: "Black Alligator \u2014 Calfskin Lining",
    crystal: "Sapphire \u2014 Double AR Coating",
    complications: [
      {
        name: "Skeletonization",
        description: "Mainplate and bridges removed to reveal the gear train.",
        detail:
          "The NO-101 caliber starts as a solid German silver mainplate. Our artisans spend 40 hours removing material by hand until only the essential structure remains \u2014 a lattice of polished bridges that reveal every wheel, spring, and jewel beneath.",
      },
      {
        name: "22K Gold Winding Rotor",
        description: "Solid 22K rose gold rotor with circular graining.",
        detail:
          "Unlike standard rotors that hide beneath a full bridge, the L'Ombre's rotor sits on top \u2014 a full 22K rose gold semi-circle with hand-applied circular graining. The mass ensures efficient winding with every motion of the wrist.",
      },
      {
        name: "Hand-Bevelled Bridges",
        description: "Every edge finished by hand with wooden filed edges.",
        detail:
          "Using a centuries-old technique, our beveller runs a file along every interior and exterior edge of each bridge at precisely 45 degrees. The result catches light differently from every angle \u2014 a hallmark of true haute horlogerie.",
      },
      {
        name: "Swiss Lever Escapement",
        description: "Traditional Swiss lever with 21,600 vph.",
        detail:
          "The beating heart. A 15-tooth escape wheel meshes with a pallet fork crafted from hardened steel. Each tick advances the gear train by exactly one tooth, dividing time into 21,600 precise increments per hour.",
      },
    ],
  },
  {
    slug: "minuit",
    name: "Minuit",
    subtitle: "Midnight",
    tagline: "Light against the void.",
    price: 32600,
    description:
      "Encased in forged carbon fiber \u2014 a material born from aerospace engineering \u2014 the Minuit is built for those who operate in darkness. The deep black sunburst dial is punctuated by Super-LumiNova hands that glow with an icy blue luminescence. Beneath the surface, a 70-hour power reserve ensures precision through the longest nights.",
    caseMaterial: "Forged Carbon Fiber",
    caseDiameter: "43mm",
    caseThickness: "12.8mm",
    waterResistance: "100m",
    movement: "Calibre NO-202 \u2014 Automatic",
    powerReserve: "70 hours",
    dialColor: "Sunburst Black \u2014 LumiNova Indexes",
    strap: "Black Rubber \u2014 Titanium Deployant",
    crystal: "Sapphire \u2014 Box Shape \u2014 AR Coated",
    complications: [
      {
        name: "Forged Carbon Case",
        description: "Multi-directional carbon fiber compression molding.",
        detail:
          "Sheets of carbon fiber infused with epoxy resin are compressed at 300 bar in a precision mold. The result is a case that is lighter than titanium, harder than steel, and exhibits a unique chaotic pattern \u2014 no two cases are identical.",
      },
      {
        name: "Super-LumiNova C3",
        description: "Premium grade luminous material on hands and indexes.",
        detail:
          "Applied in multiple layers to achieve a brightness 60% greater than standard Grade A. Charged by any light source, the emission lasts over 8 hours with a distinctive ice-blue glow that is legible at any depth.",
      },
      {
        name: "70-Hour Power Reserve",
        description: "Extended mainspring with twin barrels.",
        detail:
          "Two series-coupled mainspring barrels store energy for 70 consecutive hours \u2014 enough to power through a weekend off the wrist. The twin-barrel layout also delivers more consistent torque to the gear train, improving rate stability.",
      },
      {
        name: "Magnetic Field Protection",
        description: "Soft iron inner case shields the movement.",
        detail:
          "A cage of mu-metal (a nickel-iron alloy) surrounds the movement, deflecting magnetic fields up to 80,000 A/m \u2014 far exceeding the ISO 764 standard. A necessity for modern life surrounded by electronics.",
      },
    ],
  },
  {
    slug: "heritage",
    name: "H\u00e9ritage",
    subtitle: "Heritage",
    tagline: "The past, reimagined.",
    price: 35200,
    description:
      "Inspired by the pocket watches of the Belle \u00c9poque, the H\u00e9ritage marries 19th-century decorative arts with 21st-century precision engineering. The guilloch\u00e9 dial \u2014 hand-engraved on a 120-year-old rose engine \u2014 shimmers with a wave pattern that has no beginning and no end. Blued steel hands, a Breguet-style moonphase, and an exhibition caseback complete the homage.",
    caseMaterial: "18K White Gold",
    caseDiameter: "40mm",
    caseThickness: "10.5mm",
    waterResistance: "30m",
    movement: "Calibre NO-303 \u2014 Hand Wind",
    powerReserve: "80 hours",
    dialColor: "Grand Feu Enamel \u2014 Guilloch\u00e9 Wave",
    strap: "Brown Alligator \u2014 18K Tang Buckle",
    crystal: "Sapphire \u2014 Cambered \u2014 AR Coated",
    complications: [
      {
        name: "Guilloch\u00e9 Dial",
        description: "Hand-engraved wave pattern on solid gold dial blank.",
        detail:
          "Using a 1903 rose engine lathe from the Vall\u00e9e de Joux, our master guillocheur cuts a repeating wave pattern into the solid 18K gold dial blank. Each cut is precise to 0.02mm, and a single dial takes 12 hours to complete. The pattern is then coated in translucent Grand Feu enamel.",
      },
      {
        name: "Breguet Moonphase",
        description: "Precision moonphase \u2014 one day error per 122 years.",
        detail:
          "A 135-tooth gear driven by the hour wheel advances the moon disc once per month. The disc itself is engraved with a hand-painted moon against a star-burst sky. The mechanism is accurate to one day per 122 years \u2014 adjust it once in a lifetime.",
      },
      {
        name: "Blued Steel Hands",
        description: "Thermally blued in a copper pan over charcoal.",
        detail:
          "Hands are shaped from high-carbon steel, then heated in a copper pan filled with brass filings over a charcoal fire. At exactly 290\u00b0C the steel turns a deep, even blue \u2014 the result of a controlled oxide layer that also provides corrosion resistance.",
      },
      {
        name: "Exhibition Caseback",
        description: "Sapphire display back revealing the hand-wound movement.",
        detail:
          "The NO-303 movement is visible through a full sapphire caseback, held by six screws. The mainplate features Geneva stripes, the bridges are anglage-finished, and all 34 jewels sit in polished gold chatons. The hand-winding crown operates with a tactile, precise click.",
      },
    ],
  },
];

export const caseOptions = [
  { id: "platinum-950", label: "950 Platinum", price: 0, material: "950 Platinum" },
  { id: "forged-carbon", label: "Forged Carbon Fiber", price: 4200, material: "Forged Carbon Fiber" },
  { id: "white-gold-18k", label: "18K White Gold", price: 6800, material: "18K White Gold" },
];

export const strapOptions = [
  { id: "black-alligator", label: "Black Alligator", price: 0, material: "Black Alligator" },
  { id: "brown-alligator", label: "Brown Alligator", price: 400, material: "Brown Alligator" },
  { id: "black-rubber", label: "Black Rubber", price: 200, material: "Black Rubber" },
  { id: "steel-bracelet", label: "Platinum Steel Bracelet", price: 2400, material: "Steel Bracelet" },
];

export const dialOptions = [
  { id: "skeleton", label: "Skeleton \u2014 Openworked", price: 0, color: "Openworked" },
  { id: "sunburst-black", label: "Sunburst Black", price: 800, color: "Sunburst Black" },
  { id: "grand-feu", label: "Grand Feu Enamel \u2014 Wave", price: 4200, color: "Grand Feu Enamel" },
  { id: "matte-black", label: "Matte Black \u2014 No Indexes", price: 0, color: "Matte Black" },
];

export const basePrice = 22000;