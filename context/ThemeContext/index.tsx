import { ThemeMode } from "styles/defintions";
import React from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return ThemeMode.DARK;
    }
  }

  return ThemeMode.LIGHT; // light theme as the default;
};

const ThemeContext = React.createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}>({
  theme: ThemeMode.LIGHT,
  setTheme: () => {},
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<{
  initialTheme?: string;
  children: any;
}> = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === ThemeMode.DARK;

    root.classList.remove(isDark ? ThemeMode.LIGHT : ThemeMode.DARK);
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContext");
  }

  return context;
};

export { ThemeContext, ThemeProvider, useTheme };
