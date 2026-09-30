export interface ConfigOption {
  id: string;
  name: string;
  label: string;
}

export interface ConfigSelection {
  case: string;
  strap: string;
  dial: string;
}

export const caseOptions: ConfigOption[] = [
  { id: "steel-polished", name: "Steel", label: "904L Polished Steel" },
  { id: "steel-satin", name: "Steel", label: "904L Satin Steel" },
  { id: "rose-gold", name: "Rose Gold", label: "18K Rose Gold (5N)" },
  { id: "carbon", name: "Carbon", label: "Forged Carbon Fiber" },
  { id: "tantalum", name: "Tantalum", label: "Tantalum" },
  { id: "platinum", name: "Platinum", label: "Platinum 950" },
];

export const strapOptions: ConfigOption[] = [
  { id: "alligator-black", name: "Alligator", label: "Obsidian Black Alligator" },
  { id: "alligator-navy", name: "Alligator", label: "Navy Alligator" },
  { id: "alligator-honey", name: "Alligator", label: "Honey Brown Alligator" },
  { id: "calfskin-brown", name: "Calfskin", label: "Honey Brown Calfskin" },
  { id: "rubber-black", name: "Rubber", label: "Black FKM Rubber" },
  { id: "nato-black", name: "NATO", label: "Black Woven NATO" },
];

export const dialOptions: ConfigOption[] = [
  { id: "sunburst-black", name: "Sunburst", label: "Black Sunburst" },
  { id: "skeleton", name: "Skeleton", label: "Open-worked Skeleton" },
  { id: "guilloche", name: "Guilloché", label: "Hand-engraved Guilloché" },
  { id: "aventurine", name: "Aventurine", label: "Deep Blue Aventurine" },
  { id: "enamel-white", name: "Enamel", label: "Grand Feu White Enamel" },
  { id: "meteorite", name: "Meteorite", label: "Muonionalusta Meteorite" },
];

export const defaultConfig: ConfigSelection = {
  case: "steel-polished",
  strap: "alligator-black",
  dial: "sunburst-black",
};

export function getCaseStyle(id: string): string {
  const c = caseOptions.find((o) => o.id === id);
  return c?.name ?? "Steel";
}

export function getDialStyle(id: string): string {
  const d = dialOptions.find((o) => o.id === id);
  return d?.name ?? "Black Sunburst";
}