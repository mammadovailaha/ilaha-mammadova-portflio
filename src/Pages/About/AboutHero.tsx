import personalPhoto from "../../assets/images/ilaha-workspace.jpg";
import ActionToggleButtons from "../../UI/ActionToggleButtons";
import { useT } from "../../context/Preferences";

const AboutHero = () => {
  const t = useT();
  return (
    <section className="editorial-about section-wrap">
      <div className="about-copy">
        <p className="eyebrow">{t("about")}</p>
        <h1 className="editorial-heading">{t("aboutHeadline")}</h1>
        <p className="about-description">{t("aboutBody")}</p>
        <div className="about-tags" aria-label="Focus areas">
          <span>React · TypeScript</span><span>Responsive UI</span><span>Product design</span>
        </div>
        <ActionToggleButtons className="about-actions" />
      </div>
      <div className="about-visual">
        <div className="about-visual-glow" />
        <figure className="about-photo-frame" data-tilt-card>
          <img src={personalPhoto} alt="İlaha Mammadova working at her desk" />
        </figure>
        <div className="about-caption"><span className="caption-dot" />{t("role")}</div>
        <span className="about-index" aria-hidden="true">01 / 04</span>
      </div>
    </section>
  );
};

export default AboutHero;
