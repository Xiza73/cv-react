import { createContext, Dispatch, SetStateAction } from "react";

export const initialThemeState: {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
} = {
  theme: "light",
  setTheme: () => null,
};

const ThemeContext = createContext(initialThemeState);

export default ThemeContext;
