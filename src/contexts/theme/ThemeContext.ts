import { createContext } from "react";

export type ThemeContextType = {
  theme: string;
  setLightTheme?: () => void;
  setDarkTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setLightTheme: () => {},
  setDarkTheme: () => {},
});
