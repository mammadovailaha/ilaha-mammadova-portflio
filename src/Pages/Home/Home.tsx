import SectionList from "../../components/SectionList";
import Navbar from "../../Layout/Navbar";
import Banner from "./Banner";
import Skills from "../../components/Skills";
import FeaturedWork from "./FeaturedWork";
import CodeBanner from "./CodeBanner";

const Home = () => (
  <div className="min-h-screen bg-[var(--background)]">
    <Navbar />
    <Banner />
    <Skills />
    <SectionList listClassName="bg-[var(--surface)]" title="Education" />
    <SectionList listClassName="bg-[var(--surface-soft)]" title="Experience" />
    <FeaturedWork />
    <CodeBanner />
  </div>
);

export default Home;
