import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import styles from './contact-button.component.module.css';

export default function ContactButton({ icon, social, info, href }) {
  return (
    <div className={styles.contactButton}>
      <i className={`bx ${icon} ${styles.titleIcon}`}></i>
      <h3 className={styles.contactButtonClick}>{social}</h3>
      <Paragraph className={styles.contactButtonClick}>{info}</Paragraph>
      <a href={href} className={styles.viewMoreButton}>
        <div className={styles.viewMoreButton}>
          <Paragraph className={styles.contactButtonClick}>Write me</Paragraph>
          <i className={`uil uil-arrow-right ${styles.buttonIcon}`}></i>
        </div>
      </a>
    </div>
  );
}
