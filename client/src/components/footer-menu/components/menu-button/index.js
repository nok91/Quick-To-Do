import React from 'react';
import User from '@geist-ui/react-icons/user';
import FooterMenuButton from '../footer-menu-button';

function MenuButton() {
  return (
    <FooterMenuButton>
      <User />
    </FooterMenuButton>
  );
}

MenuButton.displayName = 'MenuButton';

export default MenuButton;
