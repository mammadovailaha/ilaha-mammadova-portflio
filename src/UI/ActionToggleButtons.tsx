import type { FC } from "react";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useT } from "../context/Preferences";
import { useNavigate } from "react-router-dom";

interface Props{
className?:string
}

const ActionToggleButtons:FC<Props> = ({className}) => {
      const [activeButton, setActiveButton] = useState<"resume" | "hire">("resume");
  const t = useT();
  const navigate = useNavigate();

  const hireMeClick = () => {
    setActiveButton("hire");

    // ✅ Page-in contact hissəsinə scroll
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };
  return (
 <div className={`action-buttons flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="/cv/Ilaha_Mammadova.pdf"
        download="Ilaha_Mammadova_cv.pdf"
        aria-label="Download Ilaha Mammadova CV"
        onClick={() => setActiveButton("resume")}
        className={`action-button ${activeButton === "resume" ? "action-button-active" : ""}`}
      >
        {t("resume")}
        <FiArrowUpRight aria-hidden="true" />
      </a>

      <button
        type="button"
        onClick={hireMeClick}
        className={`action-button ${activeButton === "hire" ? "action-button-active" : ""}`}
      >
        {t("hire")}
          <FiArrowUpRight aria-hidden="true" />
      </button>
    </div>
  )
}

export default ActionToggleButtons
