import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/icons/projectPhoto1.png";
import agilePulse from "../../assets/images/agilePluse.png";
import portfolio from "../../assets/images/designerProtfolio.png";
import Navbar from "../../Layout/Navbar";
import ProjectCard from "./ProjectCard";
import { useT } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";

const projects = [
  { id: 1, titleKey: "educationProject" as TranslationKey, image: photo, typeKey: "fullstack" as TranslationKey },
  { id: 2, titleKey: "agile" as TranslationKey, image: agilePulse, typeKey: "saas" as TranslationKey },
  { id: 3, titleKey: "portfolio" as TranslationKey, image: portfolio, typeKey: "creative" as TranslationKey },
];

const Project: FC = () => {
  const navigate = useNavigate();
  const t = useT();
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]">{t("selected")}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-6xl">{t("projectTitle")}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">{t("projectIntro")}</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className={`overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] ${index === 0 ? "md:col-span-2 xl:col-span-2" : ""}`}>
              <ProjectCard onClick={() => navigate(`/project/project-detail/${project.id}`)} title={t(project.titleKey)} src={project.image} />
              <div className="flex items-center justify-between px-5 pb-5 pt-2 sm:px-7">
                <p className="text-xs font-medium tracking-[0.16em] text-[var(--accent)]">{t(project.typeKey)}</p>
                <span aria-hidden="true" className="text-xl text-[var(--accent)]">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
