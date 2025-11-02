import type { FC } from "react";
import photo from "../../assets/icons/projectPhoto1.png";
import ProjectCard from "./ProjectCard";
import bgImage from "../../assets/icons/projectPageBg.jpg";
import NavigateArrow from "../../components/NavigateArrow";
import { useNavigate } from "react-router-dom";
import agilePulse from "../../assets/images/agilePluse.png"
import protfolio from "../../assets/images/designerProtfolio.png"
const projectData = [
  {
    id: 1,
    title: "Edu Company",
    description:
      "Təhsil mövzulu veb sayt. HTML, Tailwind CSS, JavaScript və React ilə hazırlanıb. Responsiv dizayn və interaktiv komponentlərlə təchiz olunub.",
    image: photo,
    githubLink: "https://github.com/mammadovailaha/Final-project",
    liveDemo: "https://edu-project-pi.vercel.app/",
  },
  {
    id: 2,  
    title: "Agile Pulse",
    description:
      "Agile Pulse is a startup that serves as an interactive platform for learning and applying Agile methodologies. It was developed using HTML, Tailwind CSS, JavaScript, and React, where I contributed as a Frontend Developer",
    image: agilePulse,
    liveDemo: "https://agilepulse.org/",
  },
  {
    id: 3,
    title: "Designer Portfolio",
    description:
      "Designer Portfolio is a showcase of my design projects, featuring a clean and modern layout. It was built with HTML, Tailwind CSS, and React.",
    image: protfolio,
    githubLink: "https://github.com/mammadovailaha/parvin_gasimova",
    liveDemo: "https://parvingasimova.vercel.app/",
  }
];

const Project: FC = () => {
  const navigate=useNavigate();
 
  
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative z-0 w-full h-full lg:h-screen "
    >
      <div className="absolute inset-0 bg-[#00000030] z-0 w-full h-full" />
      <NavigateArrow className="left-5 top-2.5" />
      <div className="flex flex-col justify-start items-center gap-6 p-10">
        <h2 className=" text-[#FD853A]  font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga] flex gap-1 md:gap-3 relative z-10">
          Lets have a look at my{" "}
          <span className="text-[#344054] font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga] flex gap-2 md:gap-4 relative z-10">
            Projects
          </span>
        </h2>
        <div className="w-[90%] flex flex-col md:flex-row justify-start items-center relative z-10 gap-5">
          {projectData.map((data) => (
            <ProjectCard  onClick={()=>navigate(`/project/project-detail/${data.id}`)} key={data.id} title={data.title} src={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
