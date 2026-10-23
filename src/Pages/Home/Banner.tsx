import { Link } from "react-router-dom";
import portrait from "../../assets/images/ilaha-avatar.png";
import { useT } from "../../context/Preferences";

const Banner = () => {
  const t = useT();
  return (
    <section className="portfolio-hero relative mx-auto mt-2 grid min-h-[680px] w-[92%] max-w-[1320px] overflow-hidden border-x border-[var(--line)] bg-[var(--surface)] lg:grid-cols-[1.08fr_.92fr]">
      <div className="relative z-10 flex flex-col items-start justify-center px-7 py-14 sm:px-12 lg:px-16 xl:px-20">
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          {t("role")}
        </p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.03] tracking-[-0.065em] text-[var(--text)] sm:text-6xl xl:text-7xl">
          {t("heroTitle")}
          <span className="block font-[urbanist] font-medium italic text-[var(--accent)]">
            {t("heroAccent")}
          </span>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg">
          {t("heroBody")}
        </p>
        <div className="hero-actions mt-9">
          <Link to="/project" className="hero-primary">{t("selectedWork")} <span aria-hidden="true">↗</span></Link>
          <Link to="/contact" className="hero-secondary">{t("letsTalk")}</Link>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--line)] pt-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">
          <span>React & TypeScript</span><span>UI / UX</span><span>Responsive web</span>
        </div>
      </div>
      <div className="hero-art relative flex min-h-[440px] items-end justify-center overflow-hidden sm:min-h-[540px] lg:min-h-full">
        <div className="absolute inset-x-[7%] top-[7%] bottom-0 rounded-t-full bg-[#efc99e]" />
        <div className="hero-art-inner absolute inset-x-[13%] top-[13%] bottom-0 rounded-t-full" />
        <div className="absolute bottom-[12%] left-[5%] h-28 w-28 rounded-full bg-[#fff7eb]/60 blur-2xl" />
        <span className="absolute left-[9%] top-[25%] text-[10px] uppercase tracking-[0.24em] text-[#7a604a] [writing-mode:vertical-rl]">{t("buildPurpose")}</span>
        <img className="hero-portrait relative z-10 h-[96%] w-[91%] max-w-[610px] object-contain object-bottom drop-shadow-[0_22px_35px_rgba(84,50,31,0.16)]" src={portrait} alt="Illustrated portrait of İlaha Mammadova" />
        <div className="absolute bottom-7 right-5 z-20 rounded-2xl border border-white/70 bg-[var(--surface)]/85 px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-10 sm:right-10">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{t("creating")}</p>
          <p className="mt-1 text-sm font-medium text-[var(--text)]">{t("forWeb")} ↗</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
