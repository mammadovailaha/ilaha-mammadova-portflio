import type { FC } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { useT } from "../context/Preferences";
import { education, experience, type ExperienceItem } from "../data/experience";

interface Props {
  title: string;
  data?: ExperienceItem[];
  listClassName:string;
}

const SectionList: FC<Props> = ({ title, data = title === "Education" ? education : experience, listClassName }) => {
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
