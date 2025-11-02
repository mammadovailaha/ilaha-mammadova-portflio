import type { FC } from "react"


interface skillCardProps{
  url:string;
  title:string
}
const SkillCard:FC<skillCardProps> = ({url, title}) => {
  return (
    <div className="w-45 h-45 md:w-55 md:h-55 shadow border border-[#FD853A] shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-[#ffffff19] backdrop-blur-md rounded-4xl flex flex-col justify-center items-center group">
      <img className="w-[50%] h-[50%]  object-cover  transform-gpu transition-transform duration-500 ease-out
           will-change-transform [backface-visibility:hidden]
           group-hover:[transform:perspective(1000px)_rotateY(70deg)]" src={url} alt={`${title} icon`} />
           <p className="text-[#f2f2f2] font-normal font-[lufga] text-base xl:text-xl">{title}</p>
    </div>
  )
}

export default SkillCard
