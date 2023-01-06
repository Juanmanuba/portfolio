import React from 'react';
import styles from './qualification-type.component.module.css';

export default function QualificationType({ title, icon, showType }) {
  return (
    <div className={styles.qualificationTypeButton} onClick={showType}>
      <i className={`bx ${icon} ${styles.typeIcon}`}></i>
      <h2 className={styles.typeText}>{title}</h2>
    </div>
  );
}
