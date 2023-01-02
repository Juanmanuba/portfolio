import React from 'react';
import styles from './skills.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import AreaBox from '../area-box/area-box.component';

export default function Skills() {
  const skillAreas = [
    {
      title: 'Frontend Developer',
      bullets: [
        {
          skill: 'HTML',
          level: 'Intermediate',
        },
        {
          skill: 'CSS',
          level: 'Advanced',
        },
        {
          skill: 'JavaScript',
          level: 'Intermediate',
        },
        {
          skill: 'Git',
          level: 'Intermediate',
        },
        {
          skill: 'React',
          level: 'Intermediate',
        },
      ],
    },
    {
      title: 'Data Analyst',
      bullets: [
        {
          skill: 'Python',
          level: 'Intermediate',
        },
        {
          skill: 'Numpy',
          level: 'Advanced',
        },
        {
          skill: 'Pytorch',
          level: 'Intermediate',
        },
        {
          skill: 'OpenCV',
          level: 'Intermediate',
        },
        {
          skill: 'MATLAB',
          level: 'Intermediate',
        },
      ],
    },
    {
      title: 'Cryptocurrencies',
      bullets: [
        {
          skill: 'Cryptos',
          level: 'Intermediate',
        },
        {
          skill: 'NFTs',
          level: 'Advanced',
        },
        {
          skill: 'Bitcoin',
          level: 'Intermediate',
        },
        {
          skill: 'Rust',
          level: 'Intermediate',
        },
        {
          skill: 'Solidity',
          level: 'Basic',
        },
      ],
    },
  ];

  const boxes = skillAreas.map((item, index) => {
    return <AreaBox key={index} {...item} />;
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
