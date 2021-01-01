import React from 'react';
// Components
import styles from './styles/menu.module.scss';
import HR from '../../../hr';

function Menu({ children, toggleMenuStatus }) {
  return (
    <div className={styles['menu-container']}>
      <div className={styles.menu}>
        <nav>
          <ul className={styles.list}>{children}</ul>
        </nav>
        <HR />
        <div className={styles['button-container']}>
          <button type="button" className={styles.button} onClick={toggleMenuStatus}>
            <b>Done</b>
          </button>
        </div>
      </div>
    </div>
  );
}
Menu.displayName = 'Menu';

function MenuItem({ icon, children }) {
  return (
    <li className={styles.item}>
      {icon && <div className={styles.icon}> {icon} </div>}
      <div className={styles.text}>
        <b>{children}</b>
      </div>
    </li>
  );
}
Menu.displayName = 'MenuItem';

Menu.Item = MenuItem;

export default Menu;
