import React from 'react';
import styles from './styles.module.css';

const Rectangle = () => {
  return (
    <div data-testid='rectangleContainer' className={styles.rectangleContainer}>
      <div data-testid='rectangleItem' className={styles.rectangle}></div>
    </div>
  );
};

export default Rectangle;
