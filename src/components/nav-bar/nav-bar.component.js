import React, { useState } from 'react';
import styles from './nav-bar.component.module.css';
import NavItem from '../nav-item/nav-item.component';

export default function NavBar() {
  const navItems = [
    {
      href: '#home',
      icon: 'uil-estate',
      text: 'Home',
    },
    {
      href: '#about',
      icon: 'uil-user',
      text: 'About',
    },
    {
      href: '#skills',
      icon: 'uil-file',
      text: 'Skills',
    },
    {
      href: '#services',
      icon: 'uil-briefcase-alt',
      text: 'Services',
    },
    {
      href: '#portfolio',
      icon: 'uil-scenery',
      text: 'Portfolio',
    },
    {
      href: '#contact',
      icon: 'uil-message',
      text: 'Contact',
    },
  ];

  const items = navItems.map((item, index) => {
    return <NavItem key={index} {...item} />;
  });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.nav__bar}>
      <a href="index.html" className={styles.nav__logo}>
        Juanma
      </a>

      <div
        className={
          showMenu
            ? `${styles.nav__menu} ${styles.show__menu}`
            : styles.nav__menu
        }
      >
        <ul className={`${styles.nav__list} ${styles.grid}`}>{items}</ul>
        <i
          className={`${styles.uil} uil-times ${styles.nav__close}`}
          onClick={() => setShowMenu((prevState) => !prevState)}
        ></i>
      </div>

      <div
        className={styles.nav__toogle}
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        <i className={`${styles.uil} uil-apps`}></i>
      </div>
    </nav>
  );
}
