import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext } from "react";

export const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-container">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};
