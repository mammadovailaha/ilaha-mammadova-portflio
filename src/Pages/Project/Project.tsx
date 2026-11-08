import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/icons/projectPhoto1.png";
import agilePulse from "../../assets/images/agilePluse.png";
import portfolio from "../../assets/images/designerProtfolio.png";
import avtohesab from "../../assets/images/avtohesab.png";
import binahesabi from "../../assets/images/binahesabi.png";
import Navbar from "../../Layout/Navbar";
import ProjectCard from "./ProjectCard";
import { useT } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";
import ScrollAnimation from "../../components/ScrollAnimation";

const projects = [
  { id: 1, titleKey: "avtohesab" as TranslationKey, image: avtohesab, typeKey: "businessPlatform" as TranslationKey, descriptionKey: "avtohesabDescription" as TranslationKey, externalUrl: "https://avtohesab.com/" },
  { id: 2, titleKey: "binahesabi" as TranslationKey, image: binahesabi, typeKey: "propertyPlatform" as TranslationKey, descriptionKey: "binahesabiDescription" as TranslationKey, externalUrl: "https://binahesabi.com/" },
  { id: 3, titleKey: "agile" as TranslationKey, image: agilePulse, typeKey: "saas" as TranslationKey, descriptionKey: "projectTwoDescription" as TranslationKey },
  { id: 4, titleKey: "educationProject" as TranslationKey, image: photo, typeKey: "fullstack" as TranslationKey, descriptionKey: "projectOneDescription" as TranslationKey },
  { id: 5, titleKey: "portfolio" as TranslationKey, image: portfolio, typeKey: "creative" as TranslationKey, descriptionKey: "projectThreeDescription" as TranslationKey },
];

const Project: FC = () => {
  const navigate = useNavigate();
  const t = useT();
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <section className="projects-page mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
        <ScrollAnimation><div className="projects-intro"><p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]">{t("selected")}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-6xl">{t("projectTitle")}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">{t("projectIntro")}</p></div></ScrollAnimation>
        <div className="project-grid mt-12">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id}><article className={`project-tile ${index < 2 ? "project-tile-featured" : ""}`}>
              <div className="project-tile-visual">
                {project.externalUrl ? <a href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={`${t(project.titleKey)} website`}><ProjectCard title={t(project.titleKey)} src={project.image} /></a> : <ProjectCard onClick={() => navigate(`/project/project-detail/${project.id}`)} title={t(project.titleKey)} src={project.image} />}
                <span className="project-tile-number">0{index + 1}</span>
              </div>
              <div className="project-tile-content"><div className="project-tile-heading"><div><p className="project-tile-type">{t(project.typeKey)}</p><h2>{t(project.titleKey)}</h2></div>
                {project.externalUrl ? <a href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${t(project.titleKey)}`} className="project-tile-link">↗</a> : <button type="button" aria-label={`View ${t(project.titleKey)} details`} onClick={() => navigate(`/project/project-detail/${project.id}`)} className="project-tile-link">↗</button>}
              </div><p className="project-tile-description">{t(project.descriptionKey)}</p></div>
            </article></ScrollAnimation>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
