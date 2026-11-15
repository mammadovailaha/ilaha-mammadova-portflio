import type { TranslationKey } from "../context/Preferences";

export type ExperienceItem = {
  institution?: string;
  year?: string;
  degree?: string;
  description?: string;
  institutionKey?: TranslationKey;
  degreeKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  date?: string;
};

export const education: ExperienceItem[] = [
  { institution: "Azerbaijan State Pedagogical University", degreeKey: "degree", year: "2020 – 2024", descriptionKey: "educationDescription" },
  { institution: "Turing Academy · Baku, Azerbaijan", degreeKey: "turingCourse", descriptionKey: "turingDescription" },
  { institution: "Network Training Center · Baku, Azerbaijan", degreeKey: "networkCourse", descriptionKey: "networkDescription" },
];

export const experience: ExperienceItem[] = [
  { institution: "Agile Pulse (Startup) · Baku, Azerbaijan", degreeKey: "frontendRole", date: "May 2025 – January 2026", descriptionKey: "agileDescription" },
  { institution: "Intern Intelligence · Baku, Azerbaijan", degreeKey: "internRole", date: "July 2025 – August 2025", descriptionKey: "internDescription" },
  { institution: "Flup Agency · Baku, Azerbaijan", degreeKey: "internRole", date: "August 2025 – November 2025", descriptionKey: "flupDescription" },
  { institution: "Is Hesabi MMC · Baku, Azerbaijan", degreeKey: "frontendRole", date: "December 2025 – Present", descriptionKey: "isHesabiDescription" },
];
