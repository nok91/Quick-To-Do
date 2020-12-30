import React, { useContext } from 'react';
// Icons
import Moon from '@geist-ui/react-icons/moon';
import Sun from '@geist-ui/react-icons/sun';
import { ThemeContext, themes } from '../../../../store/theme.context';
import FooterMenuButton from '../footer-menu-button';

function DarkLightButton() {
  const { isDark, handler } = useContext(ThemeContext);
  const [, setTheme] = handler;

  const handleOnClick = () => {
    let theme = themes.dark;

    if (isDark) {
      theme = themes.light;
    }

    setTheme(theme);
  };

  return (
    <div>
      <FooterMenuButton onClick={handleOnClick}>
        {isDark ? <Sun /> : <Moon />}
      </FooterMenuButton>
    </div>
  );
}

DarkLightButton.displayName = 'DarkLightButton';

export default DarkLightButton;
