import type { FC } from "react";
import photo from "../../assets/icons/projectPhoto1.png";
import ProjectCard from "./ProjectCard";
import bgImage from "../../assets/icons/projectPageBg.jpg";
import NavigateArrow from "../../components/NavigateArrow";
import { useNavigate } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Education Saytı",
    description:
      "Təhsil mövzulu veb sayt. HTML, CSS, JavaScript və React ilə hazırlanıb. Responsiv dizayn və interaktiv komponentlərlə təchiz olunub.",
    image: photo,
    githubLink: "https://github.com/mammadovailaha/Final-project",
    liveDemo: "https://edu-project-pi.vercel.app/",
  },
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
      className="relative z-0 w-full h-screen "
    >
      <div className="absolute inset-0 bg-[#00000030] z-0 " />
      <NavigateArrow className="left-5 top-2.5" />
      <div className="flex flex-col justify-start items-center gap-6 p-10">
        <h2 className=" text-[#FD853A]  font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga] flex gap-1 md:gap-3 relative z-10">
          Lets have a look at my{" "}
          <span className="text-[#344054] font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga] flex gap-2 md:gap-4 relative z-10">
            Projects
          </span>
        </h2>
        <div className="w-[90%] flex justify-start items-center relative z-10">
          {projectData.map((data) => (
            <ProjectCard  onClick={()=>navigate(`/project/project-detail/${data.id}`)} key={data.id} title={data.title} src={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
