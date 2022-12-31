import React from 'react';
import styles from './skills.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import AreaBox from '../area-box/area-box.component';

export default function Skills() {
  const skillAreas = [
    {
      title: 'Frontend Developer',
    },
    {
      title: 'Data Analyst',
    },
    {
      title: 'Cryptocurrencies',
    },
  ];

  const boxes = skillAreas.map((item) => {
    return <AreaBox {...item} />;
  });

  return (
    <section className={styles.skills}>
      <div className={styles.sectionTitle}>
        <Title>Skills</Title>
        <Paragraph>My technical level</Paragraph>
      </div>

      <div className={styles.areaBoxes}>{boxes}</div>
    </section>
  );
}
