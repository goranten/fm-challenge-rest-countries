import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";

interface ThemeContextInterface {
  isDark: boolean;
  setIsDark: Dispatch<any>;
}

type ThemeContextProviderProps = {
  children: ReactNode;
};

const IS_DARK_KEY = "isDark";

const ThemeContext = createContext<ThemeContextInterface | null>(null);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem(IS_DARK_KEY);
    if (theme == null) return false;
    return JSON.parse(theme);
  });

  useEffect(() => {
    localStorage.setItem(IS_DARK_KEY, isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
