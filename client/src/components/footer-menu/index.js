import React from 'react';
import AddButton from './components/add-button';
// Components
import DarkLightButton from './components/dark-light-button';
import MenuButton from './components/menu-button';
// Styles
import styles from './styles/footerMenu.module.scss';

function FooterMenu() {
  return (
    <div className={styles['footer-menu']}>
      <div>
        <MenuButton />
      </div>
      <div>
        <AddButton />
      </div>
      <div>
        <DarkLightButton />
      </div>
    </div>
  );
}

FooterMenu.displayName = 'FooterMenu';

export default FooterMenu;
