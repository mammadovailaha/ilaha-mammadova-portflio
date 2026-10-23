import SectionList from "../../components/SectionList";
import Skills from "../../components/Skills";
import Navbar from "../../Layout/Navbar";
import AboutHero from "./AboutHero";
import Cerificates from "./Cerificates";

const About = () => (
  <div className="min-h-screen overflow-x-hidden bg-[var(--background)]">
    <Navbar />
    <AboutHero />
    <Skills />
    <Cerificates />
    <SectionList listClassName="bg-[var(--surface)]" title="Education" />
    <SectionList listClassName="bg-[var(--surface-soft)]" title="Experience" />
  </div>
);

export default About;
