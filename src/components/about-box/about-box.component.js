import React from 'react';
import styles from './about-box.component.module.css';

export default function AboutBox({ icon, title, text }) {
  return (
    <div className={styles.aboutBox}>
      <i className={`bx ${icon} ${styles.iconImg}`}></i>
      <h3 className={styles.boxTitle}>{title}</h3>
      <p className={styles.boxText}>{text}</p>
    </div>
  );
}
