export interface OptionGroup {
  id: string;
  label: string;
  options: ConfigOption[];
}

export interface ConfigOption {
  id: string;
  label: string;
  priceMod: number;
  description: string;
}

export const caseOptions: OptionGroup = {
  id: "case",
  label: "Case Material",
  options: [
    { id: "platinum-950", label: "Platinum 950", priceMod: 0, description: "Bright white, exceptionally dense. Aged patina deepens over decades." },
    { id: "palladium", label: "Palladium 950", priceMod: -1200, description: "Lighter than platinum, cooler tone. Rare and lustrous." },
    { id: "rose-gold-5n", label: "18K Rose Gold (5N)", priceMod: 800, description: "Warm copper hue. 5N alloy — high copper content for deep color." },
    { id: "yellow-gold-3n", label: "18K Yellow Gold (3N)", priceMod: 600, description: "Classic haute horology. 3N alloy, 75% pure gold." },
    { id: "carbon", label: "Forged Carbon Fiber", priceMod: -2800, description: "Aerospace-grade. No two cases match; each grain is unique." },
    { id: "black-zirconium", label: "Black Zirconium Carbide", priceMod: 4200, description: "Ultra-hard ceramic-like material. Jet black that cannot scratch." },
  ],
};

export const strapOptions: OptionGroup = {
  id: "strap",
  label: "Strap / Bracelet",
  options: [
    { id: "black-alligator", label: "Black Alligator", priceMod: 0, description: "Mississippiensis alligator, hand-cut and hand-stitched. Lined with calf." },
    { id: "dark-brown-alligator", label: "Dark Brown Alligator", priceMod: 0, description: "Same alligator, warm umber dye. Ages to a cognac patina." },
    { id: "matte-grey-calf", label: "Matte Grey Calf", priceMod: -400, description: "Grained calf leather, matte finish. Casual elegance." },
    { id: "platinum-chain", label: "Platinum Chain Bracelet (950)", priceMod: 8400, description: "Hand-assembled chain links in platinum 950. 18+7 cm adjustable." },
    { id: "carbon-fiber", label: "Carbon Fiber / Titanium Links", priceMod: 3200, description: "Forged carbon center links, grade-5 titanium outer links." },
    { id: "black-ceramic", label: "Black Ceramic Bracelet", priceMod: 5100, description: "Zirconium oxide ceramic, monobloc links. Scratchproof." },
  ],
};

export const dialOptions: OptionGroup = {
  id: "dial",
  label: "Dial",
  options: [
    { id: "matte-black", label: "Matte Black Sunburst", priceMod: 0, description: "Fine radial brushing catches light at a single angle. Deepest black." },
    { id: "guilloche-silver", label: "Hand Guilloché — Silver", priceMod: 1800, description: "Rose-engine engraved moire pattern. 6 hours of hand work." },
    { id: "guilloche-blue", label: "Hand Guilloché — Bleu", priceMod: 2200, description: "Same rose-engine work, dial then galvanically blued. Midnight blue." },
    { id: "skeleton", label: "Skeleton — Open Work", priceMod: 6400, description: "Mainplate, bridges, and gear train fully exposed. Extra hand-finishing." },
    { id: "meteorite", label: "Meteorite — Gibeon Slices", priceMod: 9800, description: "Thin slice of Gibeon meteorite. Widmanstätten pattern etched in acid." },
    { id: "enamel-grand-feu", label: "Grand Feu Enamel — Black", priceMod: 5100, description: "Vitreous enamel fired at 800°C. Deep gloss with microscopic depth." },
  ],
};

export const allGroups: OptionGroup[] = [caseOptions, strapOptions, dialOptions];

export interface ConfigSelection {
  caseId: string;
  strapId: string;
  dialId: string;
}

export function computePrice(sel: ConfigSelection): number {
  const base = 28500;
  const cMod = caseOptions.options.find((o) => o.id === sel.caseId)?.priceMod ?? 0;
  const sMod = strapOptions.options.find((o) => o.id === sel.strapId)?.priceMod ?? 0;
  const dMod = dialOptions.options.find((o) => o.id === sel.dialId)?.priceMod ?? 0;
  return base + cMod + sMod + dMod;
}

export function computeSku(sel: ConfigSelection): string {
  return `NWC-${sel.caseId.toUpperCase().slice(0, 4)}-${sel.strapId.toUpperCase().slice(0, 4)}-${sel.dialId.toUpperCase().slice(0, 4)}`;
}