import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from "../UI/Logo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Project", path: "/project" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-full h-18 lg:h-[86px] flex justify-center items-center mt-5 relative z-[9999]">
      <div className="w-full md:w-[95%] h-full rounded-[50px]  bg-transparent md:bg-[#171717] flex justify-center items-center md:relative fixed" >
       <Logo className="relative z-1100"/>
        <div className="md:hidden h-18 lg:h-[86px]  flex justify-end items-center w-full">
             <button onClick={() => setIsOpen(!isOpen)}  className="text-black z-1001" >
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
<div
  className={`
    absolute top-48 z-[999]  
    w-full h-[calc(100vh-4rem)] md:static h-full md:w-[75%] lg:w-[80%]
    bg-white md:bg-[#171717] md:rounded-4xl
    transition-transform duration-300 ease-in-out
    transform
    ${isOpen ? "translate-x-0 right-0 " : "translate-x-full right-[-100%]"}
    md:translate-x-0 md:opacity-100 md:pointer-events-auto md:flex
  `}
>
            <ul className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-3 xl:gap-5 relative z-[999] ">
          {navItems.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `text-[20px] font-[lufga] text-black md:text-white px-28  md:px-4 py-2  lg:py-3 lg:px-8 xl:py-4 xl:px-12 rounded-4xl ${
                  isActive ? "bg-[#FD853A] text-white  " : "hover:bg-[#ffffff4a]"
                }`
              }
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
