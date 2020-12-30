import React, { useState } from 'react';
// Icons
import Send from '@geist-ui/react-icons/send';
// Components
import DarkLightButton from './components/dark-light-button';
import MenuButton from './components/menu-button';
// Components
import Menu from './components/menu';
import AddButton from './components/add-button';
import OverlayBg from '../overlay-bg';
// Styles
import styles from './styles/footerMenu.module.scss';

function FooterMenu() {
  const [getMenuStatus, setMenuStatus] = useState(false);

  const toggleMenuStatus = () => {
    setMenuStatus(!getMenuStatus);
  };

  const handleCloseMenu = () => {
    console.log('handleCloseMenu ');
    setMenuStatus(false);
  };

  return (
    <>
      {getMenuStatus && (
        <>
          <OverlayBg onClick={handleCloseMenu} />
          <Menu toggleMenuStatus={toggleMenuStatus}>
            <Menu.Item icon={<Send size={16} />}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/?text=${window.location.href}`}
              >
                Share List
              </a>
            </Menu.Item>
          </Menu>
        </>
      )}

      <div className={styles['footer-menu']}>
        <div>
          <MenuButton onClick={toggleMenuStatus} />
        </div>
        <div>
          <AddButton />
        </div>
        <div>
          <DarkLightButton />
        </div>
      </div>
    </>
  );
}

FooterMenu.displayName = 'FooterMenu';

export default FooterMenu;
