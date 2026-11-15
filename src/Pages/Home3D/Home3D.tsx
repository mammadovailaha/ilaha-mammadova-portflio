import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Scene } from "../../components/Scene";
import { useT, usePreferences } from "../../context/Preferences";
import type { TranslationKey } from "../../context/Preferences";
import { useCertificates, useContactDetails, useEducation, useExperience, useProjects, useProfile, useSkills, useSocialLinks } from "../../content/hooks";
import { useScrollStore } from "../../store/useScrollStore";
import { MusicPlayer } from "./MusicPlayer";
import "./home3d.css";

const stages = ["#e1a36f", "#d68b69", "#b5a2d0", "#baa784", "#b5a2d0", "#8ea8ad"];

function LoadingOverlay() {
  const { progress, active } = useProgress();
  const t = useT();
  const [fontReady, setFontReady] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let current = true;
    void document.fonts.load('700 24px "Inter Local"', "İlaha Məmmədova əəıöüçşğ").finally(() => { if (current) setFontReady(true); });
    return () => { current = false; };
  }, []);
  useEffect(() => {
    if (fontReady && (!active || progress >= 100)) {
      const timer = window.setTimeout(() => setDone(true), 350);
      return () => window.clearTimeout(timer);
    }
  }, [active, fontReady, progress]);
  return <div className={`home3d-loading${done ? " is-hidden" : ""}`} aria-live="polite"><span>{t("loading")}</span><span>{Math.round(progress)}%</span></div>;
}

function ScrollProgress() {
  const setProgress = useScrollStore((state) => state.setProgress);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); setProgress(0); };
  }, [setProgress]);
  return null;
}

type MaterialConfig = { transmission: number; thickness: number; roughness: number; chromaticAberration: number; distortion: number };

function MaterialControls({ config, update }: { config: MaterialConfig; update: (key: string, value: number) => void }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const drag = useRef<{ pointerX: number; pointerY: number; x: number; y: number } | null>(null);
  const didDrag = useRef(false);
  if (!import.meta.env.DEV) return null;
  return <div className="home3d-tuner-dock" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
    <button className="home3d-tuner-grip" type="button" aria-label={isOpen ? "Close material tuning" : "Open material tuning"} aria-expanded={isOpen} title="Click to open or close · drag to move" onClick={() => {
      if (didDrag.current) { didDrag.current = false; return; }
      setIsOpen((open) => !open);
    }} onPointerDown={(event) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      didDrag.current = false;
      drag.current = { pointerX: event.clientX, pointerY: event.clientY, x: offset.x, y: offset.y };
    }} onPointerMove={(event) => {
      if (!drag.current) return;
      const deltaX = event.clientX - drag.current.pointerX;
      const deltaY = event.clientY - drag.current.pointerY;
      if (Math.hypot(deltaX, deltaY) > 4) didDrag.current = true;
      const nextX = drag.current.x + deltaX;
      const nextY = drag.current.y + deltaY;
      setOffset({ x: Math.max(-window.innerWidth + 100, Math.min(0, nextX)), y: Math.max(-window.innerHeight / 2 + 40, Math.min(window.innerHeight / 2 - 40, nextY)) });
    }} onPointerUp={(event) => {
      drag.current = null;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    }} onPointerCancel={() => { drag.current = null; }}>⠿</button>
    <details className="home3d-tuner" open={isOpen}><summary onClick={(event) => { event.preventDefault(); setIsOpen((open) => !open); }}><span>Material tuning</span></summary>{Object.entries(config).map(([key, value]) => <label key={key}>{key}<input type="range" min="0" max={key === "thickness" ? 1.5 : 1} step="0.01" value={value} onChange={(event) => update(key, Number(event.target.value))} /></label>)}</details>
  </div>;
}

function Home3D() {
  const t = useT();
  const { theme, toggleTheme, language, setLanguage } = usePreferences();
  const navigate = useNavigate();
  const projects = useProjects();
  const skills = useSkills();
  const experience = useExperience();
  const education = useEducation();
  const certificates = useCertificates();
  const profile = useProfile();
  const socials = useSocialLinks();
  const contact = useContactDetails();
  const [material, setMaterial] = useState<MaterialConfig>({ transmission: 1, thickness: 0.6, roughness: 0.05, chromaticAberration: 0.06, distortion: 0.3 });
  const updateMaterial = (key: string, value: number) => setMaterial((current) => ({ ...current, [key]: value }));
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".home3d");
    if (!root) return;
    const clickSound = new Audio("/audio/floraphonic-bloop-2-186531.mp3");
    clickSound.preload = "auto";
    clickSound.volume = 0.32;
    const playClickSound = (event: MouseEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest("a, button, summary, [role='button']")) return;
      clickSound.currentTime = 0;
      void clickSound.play().catch(() => {});
    };
    root.addEventListener("click", playClickSound);
    return () => {
      root.removeEventListener("click", playClickSound);
      clickSound.pause();
      clickSound.src = "";
    };
  }, []);
  const sections: Array<{ id: string; labelKey: TranslationKey; accent: string }> = [
    { id: "projects", labelKey: "projects", accent: stages[0] },
    { id: "about", labelKey: "about", accent: stages[1] },
    { id: "education", labelKey: "education", accent: stages[2] },
    { id: "experience", labelKey: "experience", accent: stages[3] },
    { id: "certificates", labelKey: "certificatesTitle", accent: stages[4] },
    { id: "contact", labelKey: "contact", accent: stages[5] },
  ];

  return <div className="home3d" data-theme={theme}>
    <ScrollProgress />
    <div className="home3d-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
        <color attach="background" args={[theme === "dark" ? "#0b0b0f" : "#ece8e1"]} />
        <ambientLight intensity={0.18} />
        <directionalLight position={[-4, 5, 5]} intensity={1.15} color="#f4eee7" />
        <Environment preset="city" environmentIntensity={0.32} />
        <Suspense fallback={<Html center><span className="home3d-scene-loader">{t("loading")}</span></Html>}>
          <Scene material={material} name={t("profileName")} role={profile.data ? t(profile.data.roleKey) : t("role")} theme={theme} />
        </Suspense>
      </Canvas>
    </div>
    <LoadingOverlay />
    <main className="home3d-content">
      <section className="home3d-hero" aria-label={t("home")}>
        <header className="home3d-header">
          <a className="home3d-wordmark" href="#top" aria-label={`${t("profileName")} — ${t("home")}`}>{t("profileName")}</a>
          <nav className="home3d-nav" aria-label={t("home")}>
            {sections.filter((section) => ["projects", "about", "contact"].includes(section.id)).map((section) => <a key={section.id} href={`#${section.id}`}>{t(section.labelKey)}</a>)}
          </nav>
          <div className="home3d-preferences">
            <div className="home3d-languages" role="group" aria-label={t("language")}>
              {(["en", "ru", "az"] as const).map((locale) => <button key={locale} type="button" aria-pressed={language === locale} onClick={() => setLanguage(locale)}>{locale.toUpperCase()}</button>)}
            </div>
            <button className="home3d-theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? t("switchToLight") : t("switchToDark")} title={theme === "dark" ? t("switchToLight") : t("switchToDark")}>
              <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
            </button>
          </div>
        </header>
        <div className="home3d-kicker" id="top">{t("independentPractice")}</div>
        <div className="home3d-bottom"><p>{t("heroBody")}</p><a className="home3d-scroll" href="#projects"><span>{t("scrollExplore")}</span><i aria-hidden="true">↓</i></a></div>
      </section>
      {sections.map((section) => <section className="home3d-section" id={section.id} key={section.id} style={{ "--stage-accent": section.accent } as React.CSSProperties}>
        <div className="home3d-section-inner">
          <p className="home3d-eyebrow">{t(section.labelKey)}</p>
          {section.id === "projects" && <>
            <h2>{t("projectTitle")}</h2><p className="home3d-lead">{t("projectIntro")}</p>
            {projects.loading && <p>{t("loading")}</p>}{projects.error && <p role="alert">{projects.error.message}</p>}
            <div className="home3d-project-grid">{projects.data?.map((project) => <button className="home3d-project" key={project.id} type="button" onClick={() => project.externalUrl ? window.open(project.externalUrl, "_blank", "noopener,noreferrer") : navigate(`/project/project-detail/${project.id}`)}>
              <img src={project.image} alt="" loading="lazy" /><span className="home3d-project-type">{t(project.typeKey)}</span><h3>{t(project.titleKey)}</h3><p>{t(project.descriptionKey)}</p>
            </button>)}</div>
          </>}
          {section.id === "about" && <>
            <h2>{t("aboutHeadline")}</h2><p className="home3d-lead">{profile.data ? t(profile.data.aboutKey) : t("aboutBody")}</p>
            <h3>{t("skillsTitle")}</h3>{skills.error && <p role="alert">{skills.error.message}</p>}
            <ul className="home3d-skills">{skills.data?.map((skill) => <li key={skill.title}><span>{skill.title}</span><small>{skill.category}</small></li>)}</ul>
          </>}
          {section.id === "education" && <>
            <h2>{t("education")}</h2>{education.loading && <p>{t("loading")}</p>}{education.error && <p role="alert">{education.error.message}</p>}
            <div className="home3d-timeline">{education.data?.map((item, index) => <article key={`${item.institution}-${index}`}><small>{item.year ?? ""}</small><h3>{item.institutionKey ? t(item.institutionKey) : item.institution}</h3>{item.degreeKey && <p>{t(item.degreeKey)}</p>}{item.descriptionKey && <p>{t(item.descriptionKey)}</p>}</article>)}</div>
          </>}
          {section.id === "experience" && <>
            <h2>{t("experience")}</h2><p className="home3d-lead">{t("experienceIntro")}</p>{experience.error && <p role="alert">{experience.error.message}</p>}
            <div className="home3d-timeline">{experience.data?.map((item, index) => <article key={`${item.institution}-${index}`}><small>{item.date ?? item.year ?? ""}</small><h3>{item.institutionKey ? t(item.institutionKey) : item.institution}</h3>{item.degreeKey && <p>{t(item.degreeKey)}</p>}{item.descriptionKey && <p>{t(item.descriptionKey)}</p>}</article>)}</div>
          </>}
          {section.id === "certificates" && <>
            <p className="home3d-eyebrow">{t("certificatesEyebrow")}</p><h2>{t("certificatesTitle")}</h2>{certificates.error && <p role="alert">{certificates.error.message}</p>}
            <div className="home3d-certificates">{certificates.data?.map((certificate, index) => <article key={certificate.titleKey}><small>0{index + 1}</small><div><h3>{t(certificate.titleKey)}</h3><p>{t(certificate.providerKey)}</p></div><time>{t(certificate.dateKey)}</time></article>)}</div>
          </>}
          {section.id === "contact" && <>
            <h2>{t("contactTitle")}</h2><p className="home3d-lead">{t("contactBody")}</p>{socials.error && <p role="alert">{socials.error.message}</p>}
            {contact.data && <div className="home3d-contact-details"><a href={`mailto:${contact.data.email}`}>{contact.data.email}</a><a href={contact.data.phoneHref}>{contact.data.phone}</a><span>{t(contact.data.locationKey)}</span></div>}
            <div className="home3d-socials">{socials.data?.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{item.label} ↗</a>)}</div>
          </>}
        </div>
      </section>)}
      <footer className="home3d-footer">
        <a className="home3d-footer-name" href="#top">{t("profileName")}</a>
        <nav aria-label={t("contact")}>
          {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{t(section.labelKey)}</a>)}
        </nav>
        <div>{socials.data?.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{item.label}</a>)}</div>
      </footer>
    </main>
    <MusicPlayer />
    <MaterialControls config={material} update={updateMaterial} />
  </div>;
}

export default Home3D;
