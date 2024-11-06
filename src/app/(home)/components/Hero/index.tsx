import React from 'react';
import {
  HeroContent,
  LeftRectangleContainer,
  RightRectanleContainer,
  SmallScreenRectangleContainer,
} from './components';
import styles from './styles.module.css';

const Hero = () => {
  return (
    <section
      data-testid='hero-section'
      id='hero'
      className={styles.heroSection}
    >
      <div className={styles.heroContent}>
        <LeftRectangleContainer />
        <HeroContent />
        <RightRectanleContainer />
        <SmallScreenRectangleContainer />
      </div>
    </section>
  );
};

export default Hero;
