import personalPhoto from "../../assets/icons/abouPagePhoto.jpg";
import ActionToggleButtons from "../../UI/ActionToggleButtons";

const AboutHero = () => {


  return (
          <div className="w-full lg:w-[85%] h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-7 p-5">
        <div className="w-[90%] md:w-[70%] lg:w-[64%] flex  flex-col justify-center items-start gap-6">
          <div className="w-[90%] flex flex-col justify-center items-center gap-10">
            <h1 className="text-[#344054] text-3xl md:text-4xl font-semibold">
              About me
            </h1>
            <p className="text-xs md:text-sm lg:text-base">
              I’m a self-motivated and growth-oriented Junior Front-End
              Developer with hands-on experience in real-world projects. I
              specialize in building responsive, user-friendly, and scalable web
              interfaces using modern technologies such as HTML5, CSS3,
              JavaScript, TypeScript, React.js, and Tailwind CSS. I have a
              strong focus on writing clean, maintainable code and working
              efficiently with Git and GitHub in collaborative, Agile-driven
              teams. Currently, I’m expanding my skill set by learning Next.js
              and Node.js, aiming to transition into a full-stack development
              role.
            </p>
          </div>
     <ActionToggleButtons className="border-[#FD853A]"/>
        </div>
        <div className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] rounded-full bg-[#FD853A] flex justify-center items-center">
          <img
            className="w-full h-full object-cover rounded-full"
            src={personalPhoto}
            alt="personal photo"
          />
        </div>
      </div>

  );
};

export default AboutHero;
