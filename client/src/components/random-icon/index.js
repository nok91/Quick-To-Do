import React from 'react';
// Styles
import styles from './styles/icon.module.scss';
// Icons
import getRandomIcon from './utilities/getRandomIcon';

function RandomIcon() {
  const imgSrc = getRandomIcon();
  return (
    <div className={styles['random-icon']}>
      <img src={imgSrc} alt="task" className={styles.img} />
    </div>
  );
}

RandomIcon.displayName = 'random-icon';

export default RandomIcon;
