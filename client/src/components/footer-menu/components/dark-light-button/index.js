import React, { useContext } from 'react';
// Icons
import Moon from '@geist-ui/react-icons/moon';
import Sun from '@geist-ui/react-icons/sun';
import { ThemeContext, themes } from '../../../../store/theme.context';
import FooterMenuButton from '../footer-menu-button';

function DarkLightButton() {
  const [getTheme, setTheme] = useContext(ThemeContext);

  const handleOnClick = () => {
    let theme = themes.dark;

    if (getTheme === themes.dark) {
      theme = themes.light;
    }

    setTheme(theme);
  };

  return (
    <div>
      <FooterMenuButton onClick={handleOnClick}>
        {getTheme === themes.dark ? <Sun /> : <Moon />}
      </FooterMenuButton>
    </div>
  );
}

DarkLightButton.displayName = 'DarkLightButton';

export default DarkLightButton;
