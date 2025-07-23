import type { FC } from "react";
import pointLine from "../assets/icons/pointLine.svg";
import ScrollAnimation from "./ScrollAnimation";

interface DataItem {
  institution: string;
  year: string;
  degree: string;
  description: string;
}

interface Props {
  title: string;
  data: DataItem[];
  listClassName:string;
}

const SectionList: FC<Props> = ({ title, data, listClassName }) => {
  return (
   <ScrollAnimation>
     <div className={`${listClassName} w-full min-h-[640px] flex flex-col justify-center items-center pt-5 gap-10 xl:gap-16`}>
      <h1 className="text-[#FD853A] font-medium text-4xl md:text-6xl font-[lufga] flex gap-4">
        <span className="text-[#344054] font-medium text-4xl md:text-6xl font-[lufga]">My</span>
        {title}
      </h1>

      <div className="w-[90%] flex justify-center items-center gap-6 md:gap-16 ">
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-start gap-12 md:gap-11 xl:gap-7">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-start gap-2">
              <h2 className="text-lg md:text-3xl xl:text-4xl font-semibold font-[lufga] text-[#344054]">
                {item.institution}
              </h2>
              <p className="text-[#98A2B3] font-normal font-[lufga] text-base xl:text-xl">{item.year}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <img src={pointLine} alt="design" />
        </div>

        <div className="w-full lg:w-[40%] flex flex-col justify-center items-start gap-2 md:gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <h2 className="text-base md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-[lufga] text-[#344054]">{item.degree}</h2>
              <p className="text-[#98A2B3] font-normal font-[lufga] text-xs md:text-sm lg:text-base xl:text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </ScrollAnimation>
  );
};

export default SectionList;
