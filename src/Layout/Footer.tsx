import { FaLinkedin } from "react-icons/fa";
import MainButton from "../UI/MainButton";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Project", path: "/project" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="w-full min-h-[500px] rounded-tl-4xl rounded-tr-4xl bg-[#272727] flex justify-center items-start">
      <div className="w-[95%] md:w-[85%] flex flex-col justify-center items-center gap-6 md:gap-20 mt-5">
        <div className="w-full h-[140px]  md:h-[180px] border-b-2 border-[#475467] flex justify-between items-center ">
          <div className="text-2xl md:text-4xl lg:text-6xl font-semibold font-[lufga] text-white">
            Lets Connect there
          </div>
          <MainButton
            text="Hire me"
            buttonClassName="px-2 md:px-6 lg:px-8 py-2"
            onClick={() => {}}
          />
        </div>
        <div className="w-full flex  flex-col md:flex-row justify-center items-start gap-10 md:gap-20 lg:gap-56  ">
          <div className="w-full flex  justify-center items-center gap-10  md:gap-20 lg:gap-56">
            <div className=" flex flex-col justify-start items-center md:items-center gap-4 md:gap-5">
              <Link to={"/"}>
                <div
                  className={`flex px-3.5 py-0.5 items-center gap-2 rounded-4xl `}
                >
                  <div className="w-11 h-11 bg-[#FD853A]  rounded-full flex justify-center items-center font-[lufga] text-white leading-4 lg:leading-5 text-base lg:text-lg">
                    IM
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h2 className="text-white font-[lufga] text-lg">Ilaha</h2>
                    <p className="text-white font-[lufga] text-lg ">
                      Mammadova
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center items-center gap-6">
                <Link
                  to={"https://www.linkedin.com/in/ilaha-mammadova-0ab538356"}
                >
                  <FaLinkedin className="text-3xl lg:text-5xl text-white" />
                </Link>
                <Link to={"https://github.com/mammadovailaha"}>
                  <IoLogoGithub className="text-3xl lg:text-5xl text-white" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 md:gap-5">
              <h3 className="text-[#FD853A] font-[lufga] text-lg md:text-2xl">
                Navigation
              </h3>
              <ul className="flex flex-col justify-center items-start gap-1 md:gap-3">
                {navItems.map((link) => (
                  <Link
                    className="text-[#FCFCFD] text-xs md:text-lg font-[lufga]"
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-3 md:gap-5 px-8">
            <h3 className="text-[#FD853A] font-[lufga] text-lg md:text-2xl ">
              Contact
            </h3>
            <ul className=" flex flex-col justify-center items-start gap-2 md:gap-3">
              <li className="text-[#FCFCFD] text-xs md:text-lg font-[lufga]">
                +994 50 993 45 14
              </li>
              <li className="text-[#FCFCFD] text-xs md:text-lg font-[lufga]">
                mammadovailah03@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
