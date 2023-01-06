import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import styles from './service-box.component.module.css';

export default function ServiceBox({ title, icon, bulletsText, showModal }) {
  return (
    <div className={styles.serviceBox}>
      <i className={`bx ${icon} ${styles.titleIcon}`}></i>
      <h2 className={styles.boxTitle}>{title}</h2>
      <div className={styles.viewMoreButton} onClick={showModal}>
        <Paragraph>View More</Paragraph>
        <i className={`uil uil-arrow-right ${styles.buttonIcon}`}></i>
      </div>
    </div>
  );
}
