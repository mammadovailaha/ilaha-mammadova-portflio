import type { FC } from "react";
import reactIcon from ".././assets/icons/react-svgrepo-com.svg";
import htmlIcon from ".././assets/icons/html-5-svgrepo-com.svg";
import cssIcon from ".././assets/icons/css-3-svgrepo-com.svg";
import jsIcon from ".././assets/icons/js-svgrepo-com.svg";
import nodejsIcon from ".././assets/icons/node-js-svgrepo-com.svg";
import nextjsIcon from ".././assets/icons/next-js-svgrepo-com.svg";
import mangodbIcon from ".././assets/icons/mangodb.png";
import tailwindIcon from ".././assets/icons/tailwind-svgrepo-com.svg";
import scssIcon from ".././assets/icons/scss-svgrepo-com.svg";
import typescriptIcon from ".././assets/icons/typescript-svgrepo-com.svg";
import bgImage from ".././assets/images/skillSection.png"
import SkillCard from "./SkillCard";


const skills = [
  { url: htmlIcon, title: "HTML5" },
  { url: cssIcon, title: "CSS3" },
  { url: scssIcon, title: "SASS/SCSS" },
  { url: tailwindIcon, title: "Tailwind CSS" },
  { url: jsIcon, title: "JavaScript(ES6+)" },
  { url: typescriptIcon, title: "TypeScript" },
  { url: reactIcon, title: "React.js" },
  { url: nextjsIcon, title: "Next.js" },
  { url: nodejsIcon, title: "Node.js" },
  { url: mangodbIcon, title: "MangoDB" },
];

const Skills: FC = () => {
  return (
     <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    className="w-full h-auto flex flex-col justify-start items-center gap-11 py-5 rounded-4xl ">
      <h2 className="text-[#FD853A] font-medium text-4xl md:text-6xl font-[lufga]">My Core Skills</h2>
      <div className="w-[50%] md:w-[65%] lg:w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-5">
        {skills.map((data)=>(
          <SkillCard url={data.url} title={data.title}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
