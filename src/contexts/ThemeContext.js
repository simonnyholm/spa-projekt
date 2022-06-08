import { createContext } from "react";
export const ThemeContext = createContext({
  darkmode: false,
  light: "#fff",
  dark: "#333",
});
