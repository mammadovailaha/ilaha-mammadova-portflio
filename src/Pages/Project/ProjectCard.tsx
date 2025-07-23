import type { FC } from "react"

interface Props{
    title:string;
    src:string;
    onClick:()=>void;
}

const ProjectCard:FC<Props> = ({title,src, onClick}) => {
  return (
    <div onClick={onClick} className="w-78 h-70 shadow border border-[#FD853A] bg-[#ffffff19] backdrop-blur-md rounded-4xl flex flex-col justify-end items-center gap-6">
    <h3 className="text-2xl font-medium text-[#344054]">{title}</h3>
<div className="w-full h-50 rounded-4xl"><img className="w-full h-full object-cover rounded-4xl" src={src} alt="project photo" /></div>
    </div>
  )
}

export default ProjectCard
