import type { FC } from "react";

interface SkillCardProps {
  url: string | null;
  title: string;
  category: string;
  "aria-hidden"?: boolean | "true";
}

const SkillCard: FC<SkillCardProps> = ({ url, title, category, "aria-hidden": hidden }) => (
  <article aria-hidden={hidden || undefined} className="skill-card group">
    <div className="skill-card-top"><span className="skill-card-category">{category}</span><span className="skill-card-dot" /></div>
    <div className="skill-logo">
      {url ? <img src={url} alt="" /> : <span aria-hidden="true">{title.split(/[ &.]/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("")}</span>}
    </div>
    <p className="skill-card-name">{title}</p>
    <span className="skill-card-rule" />
  </article>
);

export default SkillCard;
