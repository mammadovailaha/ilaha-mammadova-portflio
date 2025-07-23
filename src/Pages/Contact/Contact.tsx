
import bgImage from "../../assets/icons/contactBg.svg";
import ScrollAnimation from "../../components/ScrollAnimation";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import Navbar from "../../Layout/Navbar";

const Contact = () => {
  return (
<div className="">
        <Navbar />
    <ScrollAnimation>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full h-auto flex flex-col justify-start items-center gap-10"
      >
        <h2 className=" text-[#344054] font-medium text-4xl md:text-6xl font-[lufga] flex  gap-3 mt-5">
          Let’s
          <span className="text-[#FD853A] font-medium text-4xl md:text-6xl font-[lufga] flex gap-4">
            Connect
          </span>
          There
        </h2>
        <div className="w-[90%] flex flex-col justify-center items-center gap-10 ">
          <div className="w-[95%] md:w-[60%] lg:w-[45%] h-76 bg-[#474e5a15] backdrop-blur-xs rounded-4xl border border-[#FD853A] flex flex-col justify-center items-start gap-5 p-5">
            <div className="flex justify-center items-center gap-3">
              <ImLocation2 className="text-3xl text-[#FD853A]" />
              <p className="text-base text-[#344054]">
                Khatai district, Baku, Azerbaijan, AZ1129
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaPhoneAlt className="text-3xl text-[#FD853A]" />{" "}
              <p className="text-base text-[#344054]">+994 50 993 45 14</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <MdOutlineMail className="text-3xl text-[#FD853A]" />
              <p className="text-base text-[#344054]">
                mammadovailah03@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 ">
            <Link to={"https://www.linkedin.com/in/ilaha-mammadova-0ab538356"}>
              <FaLinkedin className="text-4xl lg:text-5xl text-[#344054]" />
            </Link>
            <Link to={"https://github.com/mammadovailaha"}>
              <IoLogoGithub className="text-4xl lg:text-5xl text-[#344054]" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
</div>
  );
};

export default Contact;
