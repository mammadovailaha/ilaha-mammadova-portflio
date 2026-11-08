import type { FC } from "react";

interface Props {
  title: string;
  src: string;
  onClick?: () => void;
}

const ProjectCard: FC<Props> = ({ title, src, onClick }) => (
  <div role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined} onClick={onClick} onKeyDown={onClick ? (event) => { if (event.key === "Enter" || event.key === " ") onClick(); } : undefined} aria-label={onClick ? `View ${title} project details` : undefined} className={`project-card group block w-full text-left ${onClick ? "cursor-pointer" : ""}`}>
    <div className="project-card-image aspect-[16/9] overflow-hidden bg-[var(--surface-soft)]">
      <img className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" src={src} alt={`${title} preview`} />
      <span className="project-card-overlay" aria-hidden="true">Explore project <b>↗</b></span>
    </div>
  </div>
);

export default ProjectCard;
