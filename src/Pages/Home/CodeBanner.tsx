import { Link } from "react-router-dom";
import { useT } from "../../context/Preferences";

const CodeBanner = () => {
  const t = useT();
  return (
    <section className="code-banner section-wrap">
      <div className="code-banner-copy"><p className="eyebrow">IL / FRONTEND</p><h2>{t("bannerTitle")}</h2><p>{t("bannerBody")}</p><Link to="/contact" className="code-banner-cta">{t("getInTouch")} <span aria-hidden="true">↗</span></Link></div>
      <div className="code-orbit" aria-hidden="true"><span>01</span><span>UI</span><span>React</span><span>01</span></div>
    </section>
  );
};

export default CodeBanner;
