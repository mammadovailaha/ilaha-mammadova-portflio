import type { FC } from "react";
import { Link } from "react-router-dom";
interface Props{
  className:string;
}
const Logo:FC<Props> = ({className}) => {
  return (
 <Link to={"/"}>
    <div className={ `flex px-3.5 py-0.5 items-center gap-2 bg-[#d6d1d163] backdrop-blur-2xl rounded-4xl ${className}`}>
      <div className="w-11 h-11 bg-[#FD853A]  rounded-full flex justify-center items-center font-[lufga] text-white leading-4 lg:leading-5 text-base lg:text-lg">
        IM
      </div>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-black md:text-white font-[lufga] text-lg">Ilaha</h2>
        <p className="text-black md:text-white font-[lufga] text-lg ">
          Mammadova
        </p>
      </div>
    </div>
 </Link>
  );
};

export default Logo;
