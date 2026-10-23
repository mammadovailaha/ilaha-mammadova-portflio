import { useT } from "../../context/Preferences";

const Cerificates = () => {
  const t = useT();
  return (
    <section className="certificates-section section-wrap">
      <p className="eyebrow">{t("certificatesEyebrow")}</p>
      <h2 className="editorial-heading">{t("certificatesTitle")}</h2>
      <div className="certificate-list">
        {(["certificateMeta", "certificateNode", "certificateTypescript", "certificateVersion", "certificateUx", "certificateBuild", "certificateNext"] as const).map((key, index) => (
          <article className="certificate-row" key={key}>
            <span className="certificate-index">0{index + 1}</span>
            <div><h3>{t(key)}</h3><p>{t("certificateProvider")}</p></div>
            <span className="certificate-date">{t("certificateDate")}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cerificates
