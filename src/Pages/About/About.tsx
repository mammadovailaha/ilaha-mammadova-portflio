import SectionList from "../../components/SectionList";
import Navbar from "../../Layout/Navbar";
import AboutHero from "./AboutHero";
import Cerificates from "./Cerificates";

const educationData = [
  {
    institution: "Azerbaijan State Pedagogical University",
    location: "Baku, Azerbaijan",
    degree: "Bachelor’s Degree in Mathematics Education",
    year: "2020 – 2024",
    description:
      "Studied mathematical logic, teaching methods, and gained experience in student engagement and curriculum planning.",
  },
  {
    institution: "Turing Academy",
    location: "Baku, Azerbaijan",
    degree: "Frontend Development Program",
    year: "Oct 2024 – May 2025",
    description:
      "Received hands-on training in HTML, CSS, JavaScript, React, and Git with a focus on responsive design and component-based architecture.",
  },
  {
    institution: "Network Training Center",
    location: "Baku, Azerbaijan",
    degree: "IT Essentials Course",
    year: "Dec 2023 – Feb 2024",
    description:
      "Learned core IT concepts including hardware, software, networking, and system troubleshooting.",
  },
];

const experienceData = [
  {
    institution: "Agile Pulse (Startup)",
    location: "Baku, Azerbaijan",
    degree: "Frontend Developer",
    year: "May 2025 – Present",
    description:
      "Worked on a scalable web platform using React, Vite, and Tailwind CSS, collaborating with designers and backend engineers in an Agile environment.",
  },
  {
    institution: "Intern Intelligence",
    location: "Baku, Azerbaijan",
    degree: "Frontend Developer (Intern)",
    year: "July 2025 – Present",
    description:
      "Developed UI components with HTML, CSS, and React; contributed to sprint planning and practiced Agile workflows in a collaborative team.",
  },
  {
    institution: "CodeAlpha",
    location: "Baku, Azerbaijan",
    degree: "Web Developer (Internship)",
    year: "July 2025 – Present",
    description:
      "Created responsive web pages and enhanced existing UI elements while working in a version-controlled team environment using Git and Agile processes.",
  },
];

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <SectionList
        listClassName="bg-white"
        data={educationData}
        title={"Education"}
      />
      <SectionList
        listClassName="bg-[#F2F4F7]"
        data={experienceData}
        title={"Work Experince"}
      />
      <Cerificates />
    </div>
  );
};

export default About;
