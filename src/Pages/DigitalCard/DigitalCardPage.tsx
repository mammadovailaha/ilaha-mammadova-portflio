import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiAtSign, FiGithub, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";
import { useT } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";
import { contactDetails, socialLinks } from "../../data/socialLinks";
import portrait from "../../assets/icons/ilaha-avatar.png";
import "./digital-card.css";

type CardKind = "businessAnalyst" | "frontend" | "software";

const cardProfiles: Record<CardKind, { roleKey: TranslationKey; cvPath: string; focus: string }> = {
  businessAnalyst: { roleKey: "cvBusinessAnalyst", cvPath: "/cv/business-analyst", focus: "B2B · BPM · ERP · OMS" },
  frontend: { roleKey: "cvFrontend", cvPath: "/cv/frontend", focus: "React · TypeScript · UI" },
  software: { roleKey: "cvSoftware", cvPath: "/cv/software", focus: "JavaScript · APIs · Products" },
};

const socials = [
  { label: "LinkedIn", href: socialLinks.find((item) => item.label === "LinkedIn")?.href ?? "", Icon: FiLinkedin },
  { label: "GitHub", href: socialLinks.find((item) => item.label === "GitHub")?.href ?? "", Icon: FiGithub },
];

export function DigitalCardPage({ kind }: { kind: CardKind }) {
  const t = useT();
  const profile = cardProfiles[kind];
  const role = t(profile.roleKey);

  useEffect(() => {
    document.title = `${t("profileName")} · ${role}`;
  }, [role, t]);

  return (
    <main className="digital-card-page">
      <div className="digital-card-orbit digital-card-orbit-one" aria-hidden="true" />
      <div className="digital-card-orbit digital-card-orbit-two" aria-hidden="true" />
      <section className="digital-card-layout" aria-label={`${t("profileName")} — ${role}`}>
        <article className="digital-id-card" aria-label={`${t("profileName")} digital ID`}>
          <div className="digital-id-strap" aria-hidden="true">
            <div className="digital-id-strap-loop" />
            <div className="digital-id-strap-band" />
            <div className="digital-id-clasp"><span /><i /></div>
          </div>
          <div className="digital-id-punch" aria-hidden="true"><span /></div>
          <div className="digital-id-card-head">
            <Link className="digital-id-brand" to="/">IL<span>.</span></Link>
            <div className="digital-card-field"><span className="digital-card-live" />{role}</div>
          </div>
          <div className="digital-id-photo-wrap">
            <img src={portrait} alt={t("profileName")} className="digital-id-photo" />
            <span className="digital-id-photo-mark">{kind === "businessAnalyst" ? "BA" : kind === "frontend" ? "FE" : "SE"}</span>
          </div>
          <div className="digital-id-details">
            <p className="digital-card-kicker"><span />{t("cardEyebrow")}</p>
            <p>{t("cardAvailability")}</p>
            <h2>{t("profileName")}</h2>
            <span>{role}</span>
            <div className="digital-id-focus">{profile.focus}</div>
          </div>
          <div className="digital-id-contacts">
            <span className="digital-card-contact-heading">{t("cardContact")}</span>
            <a href={`mailto:${contactDetails.email}`}><FiAtSign aria-hidden="true" />{contactDetails.email}</a>
            <a href={contactDetails.phoneHref}><FiPhone aria-hidden="true" />{contactDetails.phone}</a>
            <span><FiMapPin aria-hidden="true" />{t("location")}</span>
          </div>
          <div className="digital-id-bottom">
            <div className="digital-card-socials">
              {socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>)}
            </div>
            <div className="digital-id-actions">
              <Link className="digital-card-primary" to={profile.cvPath}>{t("cardViewCv")} <FiArrowUpRight aria-hidden="true" /></Link>
              <a className="digital-card-secondary" href={`mailto:${contactDetails.email}`} aria-label={t("cardConnect")}><FiAtSign aria-hidden="true" /></a>
            </div>
          </div>
          <div className="digital-id-sheen" aria-hidden="true" />
        </article>
      </section>
      <Link className="digital-card-back" to="/"><FiArrowLeft aria-hidden="true" /> {t("cardBack")}</Link>
    </main>
  );
}
