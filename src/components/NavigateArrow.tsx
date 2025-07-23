
import { useNavigate } from "react-router-dom";
import defaultArrowIcon from "../assets/icons/rightArrow.svg";

interface NavigateArrowProps {
  className?: string;
  iconSrc?: string;
}

const NavigateArrow = ({
  className = "",
  iconSrc = defaultArrowIcon,
}: NavigateArrowProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={`absolute w-20 h-20  z-30`}>
      <img
        src={iconSrc}
        onClick={handleBack}
        alt="əvvəlki səhifəyə qayıt"
        className={`w-10 h-10 cursor-pointer rotate-180 ${className}`}
      />
    </div>
  );
};

export default NavigateArrow;