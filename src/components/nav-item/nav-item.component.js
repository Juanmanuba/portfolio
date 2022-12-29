import React from 'react';
import styles from './nav-item.component.module.css';

export default function NavItem({ href, icon, text }) {
  return (
    <li className={styles.nav__item}>
      <a href={href} className={styles.nav__link}>
        <i className={`${styles.uil} ${icon} ${styles.nav__icon}`}></i> {text}
      </a>
    </li>
  );
}
