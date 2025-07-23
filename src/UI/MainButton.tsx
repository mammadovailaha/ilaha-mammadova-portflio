import type { FC } from "react"
import upRight from "../assets/icons/up right.svg"

interface Props{
    text:string;
    buttonClassName:string;
    onClick:()=>void
}

const MainButton:FC<Props> = ({text, buttonClassName, onClick}) => {
  return (
    <button 
    onClick={onClick}
    className={`${buttonClassName} bg-[#FD853A] text-white font-[lufga] text-sm lg:text-xl rounded-4xl group flex justify-center items-center gap-1` }>
        {text} <img className="w-7 lg:w-10 h-7 lg:h-10 group-hover:rotate-45 transition-all duration-500" src={upRight} alt="arrow icon" />
    </button>
  )
}

export default MainButton
