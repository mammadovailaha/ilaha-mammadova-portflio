import { Link } from "react-router-dom";
import educational from "../../assets/icons/projectPhoto1.png";
import agile from "../../assets/images/agilePluse.png";
import designer from "../../assets/images/designerProtfolio.png";
import { useT } from "../../context/Preferences";

const work = [
  { id: 1, title: "educationProject" as const, type: "fullstack" as const, image: educational },
  { id: 2, title: "agile" as const, type: "saas" as const, image: agile },
  { id: 3, title: "portfolio" as const, type: "creative" as const, image: designer },
];

const FeaturedWork = () => {
  const t = useT();
  return (
    <section id="projects" className="featured-work section-wrap">
      <div className="featured-heading">
        <div><p className="eyebrow">{t("projectsHome")}</p><h2 className="editorial-heading">{t("projectsHomeIntro")}</h2></div>
        <Link to="/project" className="text-link">{t("exploreAll")} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="featured-grid">
        {work.map((project, index) => (
          <Link key={project.id} to={`/project/project-detail/${project.id}`} className={`featured-card ${index === 0 ? "featured-card-large" : ""}`}>
            <div className="featured-image"><img src={project.image} alt={t(project.title)} /></div>
            <div className="featured-meta"><div><span className="eyebrow">{t(project.type)}</span><h3>{t(project.title)}</h3></div><span className="featured-arrow" aria-hidden="true">↗</span></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
