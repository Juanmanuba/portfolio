import React from 'react';
import styles from './skills.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import AreaBox from '../area-box/area-box.component';
import skillAreas from './skill-areas';

export default function Skills() {
  const boxes = skillAreas.map((item, index) => {
    return <AreaBox key={index} {...item} />;
  });

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.sectionTitle}>
        <Title>Skills</Title>
        <Paragraph>My technical level</Paragraph>
      </div>

      <div className={styles.areaBoxes}>{boxes}</div>
    </section>
  );
}
