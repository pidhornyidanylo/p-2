'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './styles.module.css';

const LogoName = () => {
  const logoName = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoName.current, {
        duration: 1,
        text: '',
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <h3 ref={logoName} className={styles.logoName}>
      Danylo Pidhornyi
    </h3>
  );
};

export default LogoName;
