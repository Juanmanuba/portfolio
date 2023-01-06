import React from 'react';
import styles from './qualification-item.component.module.css';

export default function QualificationItem({ title, location, date }) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.location}>{location}</p>

      <div className={styles.date}>
        <i className={`bx bx-calendar ${styles.dateIcon}`}></i>
        <p className={styles.dateText}>{date}</p>
      </div>
    </div>
  );
}
