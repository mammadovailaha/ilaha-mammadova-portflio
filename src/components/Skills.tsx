import { useRef } from "react";
import type { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import reactIcon from "../assets/icons/react-svgrepo-com.svg";
import htmlIcon from "../assets/icons/html-5-svgrepo-com.svg";
import cssIcon from "../assets/icons/css-3-svgrepo-com.svg";
import jsIcon from "../assets/icons/js-svgrepo-com.svg";
import nodejsIcon from "../assets/icons/node-js-svgrepo-com.svg";
import nextjsIcon from "../assets/icons/next-js-svgrepo-com.svg";
import mongodbIcon from "../assets/icons/mangodb.png";
import tailwindIcon from "../assets/icons/tailwind-svgrepo-com.svg";
import scssIcon from "../assets/icons/scss-svgrepo-com.svg";
import typescriptIcon from "../assets/icons/typescript-svgrepo-com.svg";
import figmaIcon from "../assets/icons/figma-svgrepo-com.svg";
import SkillCard from "./SkillCard";
import { useT } from "../context/Preferences";

const skills = [
  { url: reactIcon, title: "React.js", category: "FRONTEND" },
  { url: typescriptIcon, title: "TypeScript", category: "LANGUAGE" },
  { url: jsIcon, title: "JavaScript", category: "LANGUAGE" },
  { url: nextjsIcon, title: "Next.js", category: "FRAMEWORK" },
  { url: htmlIcon, title: "HTML5", category: "MARKUP" },
  { url: cssIcon, title: "CSS3", category: "STYLING" },
  { url: tailwindIcon, title: "Tailwind CSS", category: "STYLING" },
  { url: scssIcon, title: "Sass / SCSS", category: "STYLING" },
  { url: null, title: "Bootstrap", category: "STYLING" },
  { url: null, title: "Git & GitHub", category: "TOOLS" },
  { url: figmaIcon, title: "Figma", category: "DESIGN" },
  { url: null, title: "Redux", category: "STATE" },
  { url: null, title: "React Router", category: "ROUTING" },
  { url: null, title: "jQuery", category: "LIBRARY" },
  { url: nodejsIcon, title: "Node.js", category: "BACKEND" },
  { url: null, title: "Express.js", category: "BACKEND" },
  { url: mongodbIcon, title: "MongoDB", category: "DATABASE" },
  { url: null, title: "REST APIs", category: "INTEGRATION" },
  { url: null, title: "Axios", category: "LIBRARY" },
  { url: null, title: "Jira · ClickUp · Trello", category: "WORKFLOW" },
];

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
