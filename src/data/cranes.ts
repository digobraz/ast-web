export interface Crane {
  slug: string;
  name: string;
  capacity: string;
  capacityValue: number;
  category: "autozeriav" | "plosina" | "podvalnik" | "stavebny-stroj";
  description?: string;
  image?: string;
}

export const cranes: Crane[] = [
  {
    slug: "grove-gmk-4100l",
    name: "GROVE GMK 4100L",
    capacity: "100 t",
    capacityValue: 100,
    category: "autozeriav",
    description: "Vlajková loď nášho parku. Mobilný autožeriav s nosnosťou až 100 ton, ideálny pre veľké stavby a priemyselné montáže.",
  },
  {
    slug: "luna-at-60-42",
    name: "LUNA AT 60/42",
    capacity: "60 t",
    capacityValue: 60,
    category: "autozeriav",
    description: "Univerzálny autožeriav s nosnosťou 60 ton a dosahom 42 m. Spoľahlivý všestranný pracant pre stredne náročné úlohy.",
  },
  {
    slug: "luna-gt-60-42",
    name: "LUNA GT 60/42",
    capacity: "60 t",
    capacityValue: 60,
    category: "autozeriav",
    description: "Žeriav na podvozku DAF s nosnosťou 60 ton. Rýchla preprava medzi stavbami, výborná manévrovateľnosť.",
  },
  {
    slug: "mercedes-actros-45-30",
    name: "Mercedes-Benz ACTROS 45/30",
    capacity: "45 t",
    capacityValue: 45,
    category: "autozeriav",
    description: "Strednotonážny žeriav na podvozku Mercedes-Benz ACTROS. Optimálny pre montáže v mestskej zástavbe.",
  },
  {
    slug: "luna-at-40-32",
    name: "LUNA AT 40/32",
    capacity: "40 t",
    capacityValue: 40,
    category: "autozeriav",
    description: "Pružný 40-tonový žeriav pre stavebné a montážne práce. Vhodný pre prácu v obmedzenom priestore.",
  },
  {
    slug: "faun-rtf-40-3",
    name: "FAUN RTF 40-3",
    capacity: "40 t",
    capacityValue: 40,
    category: "autozeriav",
    description: "Terénny žeriav FAUN s nosnosťou 40 ton. Skvelý pre staveniská bez spevnenej cesty.",
  },
];

export const stats = [
  { value: 28, label: "Autožeriavov", desc: "Sme slovenská firma s vlastným parkom" },
  { value: 4, label: "Žeriavové parky", desc: "Trnava, Bratislava, Trenčín, Dubnica n. V." },
  { value: 16, label: "Žeriavnikov", desc: "Všetci s platným preukazom a oprávnením" },
  { value: 3, label: "Vysokozdvižné plošiny", desc: "Plošiny s obsluhou a bohatým príslušenstvom" },
  { value: 3, label: "Ťahače s podvalníkmi", desc: "Kompletný prevoz nadrozmerných nákladov" },
  { value: 24, label: "Hodín na linke", desc: "V súrnych prípadoch prídeme aj v noci" },
];
