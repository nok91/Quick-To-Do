import React, { useContext } from 'react';
import cx from 'classnames';
// Icons
import { ThemeContext } from '../../../../store/theme.context';
import styles from './styles/footerMenuButton.module.scss';

function FooterMenuButton({ children, className, onClick }) {
  const { isDark, isLight } = useContext(ThemeContext);

  const classnames = cx({
    [styles['dark-light-button']]: true,
    [styles.dark]: isDark,
    [styles.light]: isLight,
    [className]: true
  });

  return (
    <>
      <button className={classnames} type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

FooterMenuButton.displayName = 'FooterMenuButton';

export default FooterMenuButton;
