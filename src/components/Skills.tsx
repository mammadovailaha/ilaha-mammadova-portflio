import { useRef } from "react";
import type { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SkillCard from "./SkillCard";
import { useT } from "../context/Preferences";
import { skills } from "../data/skills";

const Skills: FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const t = useT();
  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({ left: direction === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section id="skills" className="skills-editorial section-wrap">
      <div className="skills-copy">
        <p className="eyebrow">{t("skillsLabel")}</p>
        <h2 className="editorial-heading">{t("skillsTitle")}</h2>
        <p className="section-description">{t("skillsIntro")}</p>
        <div className="skills-controls">
          <button type="button" aria-label="Scroll skills left" onClick={() => scroll("left")}><FiArrowLeft /></button>
          <button type="button" aria-label="Scroll skills right" onClick={() => scroll("right")}><FiArrowRight /></button>
          <span>{t("skillHint")}</span>
        </div>
      </div>
      <div ref={sliderRef} className="skills-marquee">
        <div className="skills-track" aria-label="Technology skills">
          {skills.map((skill) => <SkillCard key={skill.title} {...skill} />)}
          {skills.map((skill) => <SkillCard key={`${skill.title}-repeat`} {...skill} aria-hidden="true" />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
