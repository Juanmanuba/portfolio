import React, { useState } from 'react';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import styles from './qualification.component.module.css';
import QualificationItem from '../qualification-item/qualification-item.component';
import QualificationType from '../qualification-type/qualification-type.component';
import qualificationInfo from './qualification-info';

export default function Qualification() {
  const [chooseQualificationType, setChooseQualificationType] = useState(1);

  const qualificationTypes = qualificationInfo.map((item, index) => {
    return (
      <QualificationType
        title={item.title}
        icon={item.icon}
        showType={() => {
          setChooseQualificationType(index);
        }}
      />
    );
  });

  return (
    <section className={styles.qualificationSection}>
      <div className={styles.sectionTitle}>
        <Title>Qualification</Title>
        <Paragraph>My personal journey</Paragraph>
      </div>
      <div className={styles.qualification}>
        <div className={styles.qualificationType}>{qualificationTypes}</div>
        <div className={styles.qualificationContent}>
          <div
            className={`${styles.timeline} ${
              qualificationInfo[chooseQualificationType].bulletsText.length % 2
                ? styles.timelineBarLength
                : ''
            }`}
          >
            <div className={`${styles.container} ${styles.left}`}>
              {qualificationInfo[chooseQualificationType].bulletsText.map(
                (item, index) => {
                  if (index % 2 !== 0) return <></>;
                  return (
                    <>
                      <div
                        className={`${styles[`dot${index + 1}`]} ${styles.dot}`}
                      ></div>
                      <QualificationItem
                        {...qualificationInfo[chooseQualificationType]
                          .bulletsText[index]}
                      />
                    </>
                  );
                }
              )}
            </div>
            <div className={`${styles.container} ${styles.right}`}>
              {qualificationInfo[chooseQualificationType].bulletsText.map(
                (item, index) => {
                  if (index % 2 === 0) return <></>;
                  return (
                    <>
                      <div
                        className={`${styles[`dot${index + 1}`]} ${styles.dot}`}
                      ></div>
                      <QualificationItem
                        {...qualificationInfo[chooseQualificationType]
                          .bulletsText[index]}
                      />
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
