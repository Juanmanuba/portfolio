import React from 'react';
import styles from './icon.component.module.css';

export default function Icon({ link, icon }) {
  return (
    <a href={link} className={styles.icon__link}>
      <i className={`${styles.uil} ${icon}`}></i>
    </a>
  );
}
