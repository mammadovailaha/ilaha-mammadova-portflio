import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "../UI/Logo";
import { usePreferences, useT } from "../context/Preferences";
import type { TranslationKey } from "../context/Preferences";
import { FiMoon, FiSun } from "react-icons/fi";

const navItems = [
  { key: "home" as TranslationKey, path: "/" },
  { key: "about" as TranslationKey, path: "/about" },
  { key: "skillsNav" as TranslationKey, path: "/#skills" },
  { key: "experienceNav" as TranslationKey, path: "/#experience" },
  { key: "contact" as TranslationKey, path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, theme, toggleTheme } = usePreferences();
  const t = useT();
  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 12);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return (
    <header className={`portfolio-navbar sticky top-0 z-50 mx-auto w-full max-w-[1240px] px-6 transition-shadow ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="flex min-h-[74px] items-center justify-between bg-[var(--background)] px-0">
        <Logo className="relative z-10 !bg-transparent !px-0 !backdrop-blur-none" />
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center text-[var(--text)] md:hidden"
        >
          {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
        <div id="primary-navigation" className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[84px] flex-col gap-2 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `rounded-full px-3 py-2 text-[13px] font-medium transition ${isActive && !item.path.includes("#") ? "nav-active text-[var(--text)]" : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"}`}
              to={item.path}
            >
              {t(item.key)}
            </NavLink>
          ))}
          <div className="mt-1 flex items-center gap-2 border-t border-[var(--line)] pt-3 md:ml-2 md:mt-0 md:border-l md:border-t-0 md:pl-3 md:pt-0">
          <div className="language-switch" role="group" aria-label="Choose language">
            {(["en", "ru", "az"] as const).map((locale) => <button key={locale} type="button" aria-pressed={language === locale} onClick={() => setLanguage(locale)} className={language === locale ? "language-active" : ""}>{locale.toUpperCase()}</button>)}
          </div>
          <button type="button" aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} title={theme === "light" ? "Dark mode" : "Light mode"} onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <a className="hidden rounded-full border border-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--text)] hover:text-[var(--background)] lg:inline-flex" href="mailto:mammadovailah03@gmail.com">
            {t("letsTalk")} ↗
          </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
