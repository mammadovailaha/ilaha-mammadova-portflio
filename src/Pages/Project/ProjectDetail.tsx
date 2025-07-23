import type { FC } from "react";
import photo from "../../assets/icons/projectPhoto1.png";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
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
const ProjectDetail: FC = () => {
  const { id } = useParams();
  const data = projectData.find((item) => item.id === Number(id));
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-full h-screen flex  flex-col md:flex-row justify-center items-start gap-10 p-10 ">
        <div className="w-64 md:w-88 h-54 md:h-78 rounded-4xl shadow-lg">
          <img
            className="w-full h-full object-cover rounded-4xl"
            src={data?.image}
            alt="project photo"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 md:gap-5 w-[90%] md:w-[50%]">
          <h2 className=" text-[#FD853A]  font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga] flex gap-1 md:gap-3 ">
            {data?.title}
          </h2>
          <p className="text-sm md:text-base font-[lufga]">{data?.description}</p>
          {data?.githubLink && (
            <Link
              className="flex justify-center items-center gap-2 font-[lufga]"
              to={data.githubLink}
            >
              {" "}
              <IoLogoGithub className="text-lg lg:text-2xl text-[#344054] " />{" "}
              GitHub link
            </Link>
          )}
          {data?.liveDemo && (
            <Link
              className="flex justify-center items-center gap-2 font-[lufga]"
              to={data.liveDemo}
            >
              {" "}
              <CgWebsite className="text-lg lg:text-2xl text-[#344054]" /> Web
              site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
