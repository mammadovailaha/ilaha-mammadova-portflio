import { useEffect, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { PreferencesContext } from "./Preferences";
import type { Language, Theme } from "./Preferences";

const languageKey = "ilaha-portfolio-language";
const themeKey = "ilaha-portfolio-theme";

export const PreferencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(languageKey);
    return saved === "az" || saved === "ru" ? saved : "en";
  });
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem(themeKey) === "dark"
      ? "dark"
      : localStorage.getItem(themeKey) === "light"
        ? "light"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
  );

  useEffect(() => {
    localStorage.setItem(languageKey, language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem(themeKey, theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [language, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};
