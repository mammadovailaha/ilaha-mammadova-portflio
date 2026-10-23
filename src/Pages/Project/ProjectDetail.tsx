import type { FC } from "react";
import photo from "../../assets/icons/projectPhoto1.png";
import agilePulse from "../../assets/images/agilePluse.png";
import portfolio from "../../assets/images/designerProtfolio.png";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { useT } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";
const projectData = [
  {
    id: 1,
    titleKey: "educationProject" as TranslationKey,
    descriptionKey: "projectOneDescription" as TranslationKey,
    image: photo,
    githubLink: "https://github.com/mammadovailaha/Final-project",
    liveDemo: "https://edu-project-pi.vercel.app/",
  },
  {
    id: 2,
    titleKey: "agile" as TranslationKey,
    descriptionKey: "projectTwoDescription" as TranslationKey,
    image: agilePulse,
    liveDemo: "https://agilepulse.org/",
  },
  {
    id: 3,
    titleKey: "portfolio" as TranslationKey,
    descriptionKey: "projectThreeDescription" as TranslationKey,
    image: portfolio,
    githubLink: "https://github.com/mammadovailaha/parvin_gasimova",
    liveDemo: "https://parvingasimova.vercel.app/",
  },
];
const ProjectDetail: FC = () => {
  const { id } = useParams();
  const t = useT();
  const data = projectData.find((item) => item.id === Number(id));
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="mx-auto flex min-h-[75vh] w-[94%] max-w-[1280px] flex-col items-start justify-center gap-10 py-12 md:flex-row md:items-center">
        <div className="w-full overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] shadow-[var(--shadow-card)] md:w-1/2">
          <img
            className="aspect-[4/3] w-full object-cover"
            src={data?.image}
            alt="project photo"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4 md:w-[42%]">
          <h2 className="flex gap-1 font-[lufga] text-2xl font-medium text-[var(--accent)] md:gap-3 md:text-4xl lg:text-6xl">
            {data && t(data.titleKey)}
          </h2>
          <p className="text-base leading-7 text-[var(--muted)]">{data && t(data.descriptionKey)}</p>
          {data?.githubLink && (
            <Link
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 font-[lufga] text-[var(--text)] transition hover:text-[var(--accent)]"
              to={data.githubLink}
            >
              {" "}
              <IoLogoGithub className="text-lg lg:text-2xl" />{" "}
              GitHub link
            </Link>
          )}
          {data?.liveDemo && (
            <Link
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 font-[lufga] text-[var(--text)] transition hover:text-[var(--accent)]"
              to={data.liveDemo}
            >
              {" "}
              <CgWebsite className="text-lg lg:text-2xl" /> Web
              site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
