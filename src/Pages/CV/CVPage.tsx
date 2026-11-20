import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePreferences, useT } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";
import "./cv.css";

type CvKind = "businessAnalyst" | "frontend" | "software";

const cvPages: Record<CvKind, { titleKey: TranslationKey; file: string; downloadName: string }> = {
  businessAnalyst: { titleKey: "cvBusinessAnalyst", file: "/cv/business-analyst.pdf", downloadName: "Ilaha-Mammadova-Business-Analyst-CV.pdf" },
  frontend: { titleKey: "cvFrontend", file: "/cv/frontend.pdf", downloadName: "Ilaha-Mammadova-Frontend-CV.pdf" },
  software: { titleKey: "cvSoftware", file: "/cv/software.pdf", downloadName: "Ilaha-Mammadova-Software-CV.pdf" },
};

export function CVPage({ kind }: { kind: CvKind }) {
  const t = useT();
  const { theme } = usePreferences();
  const cv = cvPages[kind];
  const title = t(cv.titleKey);

  useEffect(() => {
    document.title = `${title} | ${t("profileName")}`;
  }, [t, title]);

  return <main className="cv-page" data-theme={theme}>
    <header className="cv-header">
      <Link className="cv-back" to="/">← {t("cvBackToPortfolio")}</Link>
      <a className="cv-name" href="/">{t("profileName")}</a>
    </header>
    <section className="cv-main" aria-labelledby="cv-title">
      <div className="cv-heading">
        <div><p className="cv-eyebrow">{t("cvEyebrow")}</p><h1 id="cv-title">{title}</h1></div>
        <div className="cv-actions">
          <a href={cv.file} target="_blank" rel="noreferrer">{t("cvOpenPdf")} ↗</a>
          <a className="cv-download" href={cv.file} download={cv.downloadName}>{t("cvDownloadPdf")} ↓</a>
        </div>
      </div>
      <iframe className="cv-preview" src={`${cv.file}#view=FitH`} title={`${t("profileName")} — ${title}`} />
    </section>
  </main>;
}
