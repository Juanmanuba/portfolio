import React from 'react';
import styles from './nav-item.component.module.css';

export default function NavItem({ link, icon, text }) {
  return (
    <a href={link} className={`${styles.nav__link} `}>
      <li className={styles.nav__item}>
        <i className={`${styles.uil} ${icon} ${styles.nav__icon}`}></i> {text}
      </li>
    </a>
  );
}
