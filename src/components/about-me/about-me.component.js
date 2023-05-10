import React from 'react';
import styles from './about-me.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import Button from '../button/button.component';
import AboutBox from '../about-box/about-box.component';
import { images } from '../../assets/images';

export default function AboutMe() {
  const boxItems = [
    {
      icon: 'bx-dumbbell',
      title: 'Experience',
      text: '2 year',
    },
    {
      icon: 'bx-briefcase-alt',
      title: 'Completed',
      text: '5 Projects',
    },
    {
      icon: 'bx-shield-plus',
      title: 'Support',
      text: 'Online 24/7',
    },
  ];

  const boxes = boxItems.map((item, index) => {
    return <AboutBox key={index} {...item} />;
  });

  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.sectionTitle}>
        <Title>About Me</Title>
        <Paragraph>My introduction</Paragraph>
      </div>

      <div className={styles.sectionBody}>
        <img src={images.kkk} alt="" className={styles.aboutMeImg} />

        <div className={styles.aboutMeText}>
          <div className={styles.aboutBoxes}>{boxes}</div>
          <Paragraph>
            Software developer with expertise in Python, React, JavaScript,
            HTML, CSS and blockchain. Experienced in machine learning and deep
            learning projects. Collaborates effectively to deliver high-quality
            projects on time and on budget. Strong interpersonal skills and a
            can-do attitude.
          </Paragraph>
          <a href="Juan_Nunez_Resume.pdf" download="Juan_Nunez_Resume.pdf">
            <Button className={styles.button}>
              Download CV
              <i
                className={`${styles.uil} uil-file-alt ${styles.nav__icon}`}
              ></i>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
