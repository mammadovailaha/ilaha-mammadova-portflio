import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { useT } from "../context/Preferences";
import type { TranslationKey } from "../context/Preferences";

const navItems = [
  { key: "home" as TranslationKey, path: "/" },
  { key: "about" as TranslationKey, path: "/about" },
  { key: "projects" as TranslationKey, path: "/project" },
  { key: "contact" as TranslationKey, path: "/contact" },
];

const Footer = () => {
  const t = useT();
  return (
  <footer className="portfolio-footer mb-0 mt-10 w-full overflow-hidden bg-[#17121a] px-7 py-10 text-white sm:px-12 sm:py-14">
    <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-9 md:flex-row md:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#ff9a3d]">{t("footerEyebrow")}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("footerTitle")}</h2>
      </div>
      <a href="mailto:mammadovailah03@gmail.com" className="inline-flex w-fit items-center gap-3 rounded-full bg-[var(--gradient-main)] px-6 py-4 text-sm font-medium text-white transition hover:brightness-110">{t("getInTouch")} <span aria-hidden="true">↗</span></a>
    </div>
    <div className="flex flex-col justify-between gap-8 pt-8 sm:flex-row sm:items-center">
      <Link to="/" className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-main)] text-sm font-semibold">IM</span>
        <span><span className="block font-medium">İlaha Mammadova</span><span className="text-xs text-white/50">{t("footerRole")}</span></span>
      </Link>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
        {navItems.map((item) => <Link key={item.path} className="transition hover:text-white" to={item.path}>{t(item.key)}</Link>)}
      </nav>
      <div className="flex gap-3">
        <a aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10" href="https://www.linkedin.com/in/ilaha-mammadova" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10" href="https://github.com/mammadovailaha" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
        <a aria-label="Instagram @ilahahub" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10" href="https://www.instagram.com/ilahahub/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
