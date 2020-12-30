import React from 'react';
import MenuIcon from '@geist-ui/react-icons/menu';
// Component
import FooterMenuButton from '../footer-menu-button';

function MenuButton({ onClick }) {
  return (
    <FooterMenuButton onClick={onClick}>
      <MenuIcon />
    </FooterMenuButton>
  );
}

MenuButton.displayName = 'MenuButton';

export default MenuButton;
