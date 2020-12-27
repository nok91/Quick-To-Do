import React from 'react';
import styles from './styles/hr.module.scss';

function hr() {
  return <div className={styles.hr} />;
}

hr.displayName = 'hr';

export default hr;
