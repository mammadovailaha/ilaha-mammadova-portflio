import type { FC } from "react";
import upRight from "../assets/icons/up right.svg"
import { useState } from "react";
import CV from "../../public/cv/İlahə_Məmmədova_CV.pdf"

interface Props{
className?:string
}

const ActionToggleButtons:FC<Props> = ({className}) => {
      const [activeButton, setActiveButton] = useState<"resume" | "hire">("resume");

  const resumeClick = () => {
    setActiveButton("resume");

    // ✅ CV faylını yüklə
    const link = document.createElement("a");
    link.href = CV; 
    link.download = "Ilaha-Memmedova-CV.pdf";
    link.click();
  };

  const hireMeClick = () => {
    setActiveButton("hire");

    // ✅ Page-in contact hissəsinə scroll
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
 <div className={`w-56 md:w-74 h-10 md:h-14 border  rounded-[60px] flex justify-center items-center gap-2 ${className}`}>
      <button
        onClick={resumeClick}
        className={`w-24 md:w-32 h-8 md:h-10 rounded-4xl flex justify-center items-center gap-2  transition-all duration-300 text-xs md:text-sm
          ${
            activeButton === "resume"
              ? "bg-[#FD853A] text-white border-white"
              : "bg-transparent text-[#FD853A] "
          }`}
      >
        Resume
        <img
          className={`w-5 lg:w-7 h-5 lg:h-7 transition-all duration-500 text-[#FD853A]  ${
            activeButton === "resume" ? "rotate-45 text-white" : " "
          }`}
          src={upRight}
          alt="arrow icon"
        />
      </button>

      <button
        onClick={hireMeClick}
        className={`w-24 md:w-32 h-8 md:h-10 rounded-4xl flex justify-center items-center gap-2  transition-all duration-300 text-xs md:text-sm
          ${
            activeButton === "hire"
              ? "bg-[#FD853A] text-white border-white"
              : "bg-transparent text-[#FD853A] "
          }`}
      >
        Hire me
          <img
          className={`w-5 lg:w-7 h-5 lg:h-7 transition-all duration-500 text-[#FD853A]  ${
            activeButton === "hire" ? "rotate-45 text-white" : "text-transparent"
          }`}
          src={upRight}
          alt="arrow icon"
        />
      </button>
    </div>
  )
}

export default ActionToggleButtons
