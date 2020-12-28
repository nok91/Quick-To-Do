import { createContext } from 'react';

export const themes = {
  dark: 'dark',
  light: 'light'
};
export const ThemeContext = createContext(themes.light);
