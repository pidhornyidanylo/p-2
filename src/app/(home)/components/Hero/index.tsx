'use client';
import React, { useEffect, useRef } from 'react';
import Rectangle from '@/components/Rectangle';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import styles from './styles.module.css';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroName = useRef<HTMLHeadingElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);
  const leftSmallRectangle = useRef<HTMLDivElement | null>(null);
  const rightSmallRectangle = useRef<HTMLDivElement | null>(null);
  const leftLargeRectangle = useRef<HTMLDivElement | null>(null);
  const rightLargeRectangle = useRef<HTMLDivElement | null>(null);
  const leftAngledYLine = useRef<HTMLSpanElement | null>(null);
  const leftAngledXLine = useRef<HTMLSpanElement | null>(null);
  const rightAngledYLine = useRef<HTMLSpanElement | null>(null);
  const rightAngledXLine = useRef<HTMLSpanElement | null>(null);
  const smLeftTop = useRef<HTMLDivElement | null>(null);
  const smLeftBottom = useRef<HTMLDivElement | null>(null);
  const smRightBottom = useRef<HTMLDivElement | null>(null);
  const smRightTop = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    const desktopContext = matchMedia.add('(min-width: 769px)', () => {
      const ctx = gsap.context(() => {
        gsap.to(leftSmallRectangle.current, {
          duration: 0.5,
          translateX: '-70%',
        });
        gsap.to(rightSmallRectangle.current, {
          duration: 0.5,
          translateX: '70%',
        });
        gsap.to(leftLargeRectangle.current, {
          duration: 0.5,
          translateX: '-40%',
          delay: 0.3,
        });
        gsap.to(rightLargeRectangle.current, {
          duration: 0.5,
          translateX: '40%',
          delay: 0.3,
        });
        gsap.from(heroName.current, {
          delay: 0.5,
          duration: 2,
          text: '',
        });
        gsap.from(infoRef.current, {
          delay: 0,
          duration: 2,
          text: '',
        });
      });
      gsap.to(leftAngledYLine.current, {
        height: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(leftAngledXLine.current, {
        width: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(rightAngledYLine.current, {
        height: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(rightAngledXLine.current, {
        width: '90px',
        opacity: 1,
        delay: 2.3,
      });

      return () => ctx.revert();
    });

    const mobileContext = matchMedia.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        gsap.to(smLeftTop.current, {
          left: '0',
          duration: 0.4,
          delay: 0.2,
        });
        gsap.to(smLeftBottom.current, {
          left: '0',
          duration: 0.25,
          delay: 0.35,
        });
        gsap.to(smRightTop.current, {
          left: '40%',
          duration: 0.3,
          delay: 0.25,
        });
        gsap.to(smRightBottom.current, {
          left: '60%',
          duration: 0.2,
          delay: 0.15,
        });
      });

      return () => ctx.revert();
    });

    return () => {
      desktopContext.revert();
      mobileContext.revert();
      matchMedia.revert();
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.leftRectangleContainer}>
        <div ref={leftSmallRectangle}>
          <Rectangle />
        </div>
        <div ref={leftLargeRectangle}>
          <Rectangle />
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.leftAngledBorderContainer}>
          <span ref={leftAngledYLine} className={styles.leftAngledYLine}></span>
          <span ref={leftAngledXLine} className={styles.leftAngledXLine}></span>
        </div>
        <h2 ref={heroName}>
          Danylo
          <br /> Pidhornyi
        </h2>
        <p ref={infoRef}>
          A front-end developer and aspiring full-stack developer.
        </p>
        <div className={styles.rightAngledBorderContainer}>
          <span
            ref={rightAngledYLine}
            className={styles.rightAngledYLine}
          ></span>
          <span
            ref={rightAngledXLine}
            className={styles.rightAngledXLine}
          ></span>
        </div>
      </div>
      <div className={styles.rectanledBackground}>
        <div ref={smLeftBottom} className={styles.recBgOne}>
          <Rectangle />
        </div>
        <div ref={smLeftTop} className={styles.recBgTwo}>
          <Rectangle />
        </div>
        <div ref={smRightTop} className={styles.recBgThree}>
          <Rectangle />
        </div>
        <div ref={smRightBottom} className={styles.recBgFour}>
          <Rectangle />
        </div>
      </div>
      <div className={styles.rightRectangleContainer}>
        <div ref={rightLargeRectangle}>
          <Rectangle />
        </div>
        <div ref={rightSmallRectangle}>
          <Rectangle />
        </div>
      </div>
    </section>
  );
};

export default Hero;
