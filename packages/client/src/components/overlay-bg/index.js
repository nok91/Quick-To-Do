import React from 'react';
// Styles
import styles from './styles/overlayBg.module.scss';

function OverlayBg({ onClick }) {
  return (
    <div
      role="dialog"
      className={styles['overlay-bg']}
      onClick={onClick}
      aria-hidden
    />
  );
}

OverlayBg.displayName = 'OverlayBg';

export default OverlayBg;
