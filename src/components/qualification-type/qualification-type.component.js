import React from 'react';
import styles from './qualification-type.component.module.css';

export default function QualificationType() {
  return (
    <div className={styles.qualificationTypeButton}>
      <i className={`bx bx-briefcase ${styles.typeIcon}`}></i>
      <h2 className={styles.typeText}>Work</h2>
    </div>
  );
}
