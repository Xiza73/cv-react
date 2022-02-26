import { useState, useEffect } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  const localStorage = window.localStorage;

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
    }
  }, [localStorage]);

  useEffect(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme, localStorage]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`cv-container theme theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;