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
      text: '1 year',
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
    <section className={styles.aboutMe}>
      <div className={styles.sectionTitle}>
        <Title>About Me</Title>
        <Paragraph>My introduction</Paragraph>
      </div>

      <div className={styles.sectionBody}>
        <img src={images.kkk} alt="" className={styles.aboutMeImg} />

        <div className={styles.aboutMeText}>
          <div className={styles.aboutBoxes}>{boxes}</div>
          <Paragraph>
            Enthusiastic about web programming, design of control algorithms and
            game programming. Good interpersonal skills to be an excellent team
            player capable of coordinating large development teams. Willing to
            learn and obtain new skills.
          </Paragraph>
          <Button className={styles.button}>
            Download CV <span />
            <span />
            <i className={`${styles.uil} uil-file-alt ${styles.nav__icon}`}></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
