import type { FC } from "react";

interface Props {
  title: string;
  src: string;
  onClick: () => void;
}

const ProjectCard: FC<Props> = ({ title, src, onClick }) => (
  <button type="button" onClick={onClick} aria-label={`View ${title} project details`} className="project-card group block w-full cursor-pointer text-left">
    <div className="aspect-[16/9] overflow-hidden bg-[var(--surface-soft)]">
      <img className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" src={src} alt={`${title} preview`} />
    </div>
    <h2 className="px-5 pt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:px-7 sm:text-3xl">{title}</h2>
  </button>
);

export default ProjectCard;
