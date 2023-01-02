import React from 'react';
import styles from './service-item.component.module.css';

export default function ServiceItem({ text }) {
  return (
    <li className={styles.item}>
      <i className={`bx bx-check-circle ${styles.bulletIcon}`}></i>
      <p className={styles.bulletText}>{text}</p>
    </li>
  );
}
