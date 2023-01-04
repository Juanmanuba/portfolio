import React from 'react';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import styles from './qualification.component.module.css';
import QualificationItem from '../qualification-item/qualification-item.component';
import QualificationType from '../qualification-type/qualification-type.component';

export default function Qualification() {
  return (
    <section className={styles.qualificationSection}>
      <div className={styles.sectionTitle}>
        <Title>Qualification</Title>
        <Paragraph>My personal journey</Paragraph>
      </div>
      <div className={styles.qualification}>
        <div className={styles.qualificationType}>
          <QualificationType />
          <QualificationType />
        </div>
        <div className={styles.qualificationContent}>
          <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.left}`}>
              <div className={styles.dot1}></div>
              <QualificationItem />
              <div className={styles.dot2}></div>
              <QualificationItem />
            </div>
            <div className={`${styles.container} ${styles.right}`}>
              <div className={styles.dot3}></div>
              <QualificationItem />
              <div className={styles.dot4}></div>
              <QualificationItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
