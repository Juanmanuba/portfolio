import React, { useState, useEffect, useCallback } from 'react';
import styles from './nav-bar.component.module.css';
import NavItem from '../nav-item/nav-item.component';

export default function NavBar() {
  const navItems = [
    {
      link: '#about',
      icon: 'uil-user',
      text: 'About',
    },
    {
      link: '#skills',
      icon: 'uil-file',
      text: 'Skills',
    },
    {
      link: '#services',
      icon: 'uil-briefcase-alt',
      text: 'Services',
    },
    {
      link: '#qualification',
      icon: 'uil-graduation-cap',
      text: 'Qualification',
    },
    {
      link: '#testimonials',
      icon: 'uil-scenery',
      text: 'Testimonials',
    },
    {
      link: '#contact',
      icon: 'uil-message',
      text: 'Contact',
    },
  ];

  const [showScrollNavBar, setShowScrollNavBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const onScroll = useCallback(() => {
    //console.log(window.pageYOffset);
    if (window.pageYOffset >= 80) {
      setShowScrollNavBar(false);
    } else {
      setShowScrollNavBar(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const items = navItems.map((item, index) => {
    return <NavItem key={index} {...item} />;
  });

  return (
    <nav
      className={`${styles.nav__bar} ${
        showScrollNavBar ? styles.scrollNavBar : ''
      }`}
    >
      <a href="#home" className={styles.nav__logo}>
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
