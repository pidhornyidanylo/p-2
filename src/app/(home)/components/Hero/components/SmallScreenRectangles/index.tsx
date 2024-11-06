'use client';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { Rectangle } from '@/components';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const SmallScreenRectangleContainer = () => {
  const topLeftRectangle = useRef<HTMLDivElement | null>(null);
  const bottomLeftRectangle = useRef<HTMLDivElement | null>(null);
  const topRightRectangle = useRef<HTMLDivElement | null>(null);
  const bottomRightRectangle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    const tabletContext = matchMedia.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        gsap.to(topLeftRectangle.current, {
          left: '0',
          duration: 0.4,
          delay: 0.2,
          onComplete: () => {
            gsap.to(topLeftRectangle.current, {
              scrollTrigger: {
                trigger: '#hero',
                scrub: 1,
                start: '-115px top',
                end: 'bottom center',
              },
              rotate: '45deg',
            });
          },
        });
        gsap.to(bottomLeftRectangle.current, {
          left: '0',
          duration: 0.25,
          delay: 0.35,
          onComplete: () => {
            gsap.to(bottomLeftRectangle.current, {
              scrollTrigger: {
                trigger: '#hero',
                scrub: 1,
                start: '85px top',
                end: 'bottom center',
              },
              x: '-300px',
            });
          },
        });
        gsap.to(topRightRectangle.current, {
          left: '40%',
          duration: 0.3,
          delay: 0.25,
          onComplete: () => {
            gsap.to(topRightRectangle.current, {
              scrollTrigger: {
                trigger: '#hero',
                scrub: 1,
                start: '-50px top',
                end: 'bottom center',
              },
              rotate: '65deg',
            });
          },
        });
        gsap.to(bottomRightRectangle.current, {
          left: '60%',
          duration: 0.2,
          delay: 0.15,
          onComplete: () => {
            gsap.to(bottomRightRectangle.current, {
              scrollTrigger: {
                trigger: '#hero',
                scrub: 1,
                start: '50px top',
                end: 'center center',
              },
              x: '150px',
            });
          },
        });
      });

      return () => ctx.revert();
    });

    return () => {
      tabletContext.revert();
      matchMedia.revert();
    };
  }, []);

  return (
    <div
      data-testid='mobileRectanglesContainer'
      className={styles.rectanglesContainer}
    >
      <div ref={bottomLeftRectangle} className={styles.bottomLeftRectangle}>
        <Rectangle />
      </div>
      <div ref={topLeftRectangle} className={styles.topLeftRectangle}>
        <Rectangle />
      </div>
      <div ref={topRightRectangle} className={styles.topRightRectangle}>
        <Rectangle />
      </div>
      <div ref={bottomRightRectangle} className={styles.bottomRightRectangle}>
        <Rectangle />
      </div>
    </div>
  );
};

export default SmallScreenRectangleContainer;
