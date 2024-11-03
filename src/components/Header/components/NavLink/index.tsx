'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  path: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ path, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isCurrentPathname = pathname === href;
  return (
    <Link
      className={`${styles.link}${isCurrentPathname ? ' ' + styles.active : ''}`}
      href={href}
    >
      {path}
    </Link>
  );
};

export default NavLink;
