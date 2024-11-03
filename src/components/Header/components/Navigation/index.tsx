'use client';
import React, { useEffect, useState } from 'react';
import NavLink from '../NavLink';
import styles from './styles.module.css';
import Burger from './Burger';

const navigationData = [
  {
    path: 'Home',
    href: '/',
  },
  {
    path: 'Projects',
    href: '/projects',
  },
  {
    path: 'Contact',
    href: '/contact',
  },
  {
    path: 'Resume',
    href: '/resume',
  },
];

const Navigation = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth < 992);
      setShowBurgerMenu(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navContainer}>
      {showBurger ? (
        <Burger
          showBurgerMenu={showBurgerMenu}
          setShowBurgerMenu={setShowBurgerMenu}
        />
      ) : (
        <ul className={styles.navList}>
          {navigationData.map((navigationItem) => (
            <li key={navigationItem.path}>
              <NavLink path={navigationItem.path} href={navigationItem.href} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
