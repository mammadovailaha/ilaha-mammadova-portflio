import type { FC } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { useT } from "../context/Preferences";
import type { TranslationKey } from "../context/Preferences";

interface DataItem {
  institution?: string;
  year?: string;
  degree?: string;
  description?: string;
  institutionKey?: TranslationKey;
  degreeKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  date?: string;
}

const educationItems: DataItem[] = [
  {
    institution: "Azerbaijan State Pedagogical University",
    degreeKey: "degree",
    year: "2020 – 2024",
    descriptionKey: "educationDescription",
  },
  { institution: "Turing Academy · Baku, Azerbaijan", degreeKey: "turingCourse", descriptionKey: "turingDescription" },
  { institution: "Network Training Center · Baku, Azerbaijan", degreeKey: "networkCourse", descriptionKey: "networkDescription" },
];

const experienceItems: DataItem[] = [
  { institution: "Agile Pulse (Startup) · Baku, Azerbaijan", degreeKey: "frontendRole", date: "May 2025 – January 2026", descriptionKey: "agileDescription" },
  { institution: "Intern Intelligence · Baku, Azerbaijan", degreeKey: "internRole", date: "July 2025 – August 2025", descriptionKey: "internDescription" },
  { institution: "Flup Agency · Baku, Azerbaijan", degreeKey: "internRole", date: "August 2025 – November 2025", descriptionKey: "flupDescription" },
  { institution: "Is Hesabi MMC · Baku, Azerbaijan", degreeKey: "frontendRole", date: "December 2025 – Present", descriptionKey: "isHesabiDescription" },
];

interface Props {
  title: string;
  data?: DataItem[];
  listClassName:string;
}

const SectionList: FC<Props> = ({ title, data = title === "Education" ? educationItems : experienceItems, listClassName }) => {
  const t = useT();
  return (
   <ScrollAnimation>
     <section id={title === "Experience" ? "experience" : undefined} className={`${listClassName} section-wrap my-8 rounded-[2rem] px-6 py-12 sm:px-10 lg:px-16`}>
      <h2 className="mb-10 text-3xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-4xl">
        {title === "Education" ? t("education") : t("difference")}
      </h2>

      <div className="experience-list">
        {data.map((item, index) => (
          <article key={`${item.institution ?? item.institutionKey}-${index}`} className="experience-row">
            <div className="experience-topline">
              <div>
                <p className="experience-index">{item.year || `0${index + 1}`}</p>
                <h3>{item.institutionKey ? t(item.institutionKey) : item.institution}</h3>
                {item.degreeKey && <h4>{t(item.degreeKey)}</h4>}
              </div>
              {item.date && <p className="experience-date">{item.date}</p>}
            </div>
            <p className="experience-description">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
          </article>
        ))}
      </div>
    </section>
   </ScrollAnimation>
  );
};

export default SectionList;
