export interface Park {
  city: string;
  location: string;
  people: { name: string; phone: string; phoneClean: string }[];
  email: string;
}

export const parks: Park[] = [
  {
    city: "Trenčín",
    location: "Kostolná-Záriečie",
    people: [
      { name: "Michal Laco", phone: "0903 439 157", phoneClean: "+421903439157" },
      { name: "Vladimír Staňo", phone: "0948 909 909", phoneClean: "+421948909909" },
    ],
    email: "trencin@astcrane.sk",
  },
  {
    city: "Dubnica n. V.",
    location: "Kameničany",
    people: [
      { name: "Michal Laco", phone: "0903 439 157", phoneClean: "+421903439157" },
      { name: "Vladimír Staňo", phone: "0948 909 909", phoneClean: "+421948909909" },
    ],
    email: "trencin@astcrane.sk",
  },
  {
    city: "Trnava",
    location: "Trnava",
    people: [
      { name: "Marián Kerek", phone: "0918 900 200", phoneClean: "+421918900200" },
    ],
    email: "trnava@astcrane.sk",
  },
  {
    city: "Bratislava",
    location: "Bratislava",
    people: [
      { name: "Marián Kerek", phone: "0918 900 200", phoneClean: "+421918900200" },
    ],
    email: "bratislava@astcrane.sk",
  },
];

export const company = {
  name: "AST Crane Slovakia, s. r. o.",
  shortName: "AST Crane",
  tagline: "Autožeriavy a plošiny na prenájom — Trenčín, Trnava, Bratislava, Dubnica n. V.",
  facebook: "https://www.facebook.com/ASTCRANE/",
  email: "info@astcrane.sk",
};
