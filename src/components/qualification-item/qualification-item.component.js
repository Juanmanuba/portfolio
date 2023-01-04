import React from 'react';
import styles from './qualification-item.component.module.css';

export default function QualificationItem() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Gen Title X</h2>
      <p className={styles.location}>Vzla - USB</p>

      <div className={styles.date}>
        <i className={`bx bx-calendar ${styles.dateIcon}`}></i>
        <p className={styles.dateText}>2021 - Present</p>
      </div>
    </div>
  );
}
