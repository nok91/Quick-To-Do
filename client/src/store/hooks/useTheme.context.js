import { useState } from 'react';
import { themes } from '../theme.context';

function useThemeContext() {
  const [getTheme, setTheme] = useState(themes.light);

  return {
    handler: [getTheme, setTheme],
    isDark: getTheme === themes.dark,
    isLight: getTheme === themes.light
  };
}

useThemeContext.displayName = 'useTheme.context';

export default useThemeContext;
