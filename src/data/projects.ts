import type { TranslationKey } from "../context/Preferences";
import photo from "../assets/icons/projectPhoto1.png";
import agilePulse from "../assets/images/agilePluse.png";
import portfolio from "../assets/images/designerProtfolio.png";
import avtohesab from "../assets/images/avtohesab.png";
import binahesabi from "../assets/images/binahesabi.png";

export type Project = {
  id: number;
  titleKey: TranslationKey;
  typeKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  externalUrl?: string;
};

export const projects: Project[] = [
  { id: 1, titleKey: "avtohesab", image: avtohesab, typeKey: "businessPlatform", descriptionKey: "avtohesabDescription", externalUrl: "https://avtohesab.com/" },
  { id: 2, titleKey: "binahesabi", image: binahesabi, typeKey: "propertyPlatform", descriptionKey: "binahesabiDescription", externalUrl: "https://binahesabi.com/" },
  { id: 3, titleKey: "agile", image: agilePulse, typeKey: "saas", descriptionKey: "projectTwoDescription" },
  { id: 4, titleKey: "educationProject", image: photo, typeKey: "fullstack", descriptionKey: "projectOneDescription" },
  { id: 5, titleKey: "portfolio", image: portfolio, typeKey: "creative", descriptionKey: "projectThreeDescription" },
];
