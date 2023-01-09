import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import Title from '../title/title.component';
import styles from './footer.component.module.css';

export default function Footer() {
  return (
    <section className={styles.footerSection}>
      <a href="#home">
        <Title>Juanma</Title>
      </a>
      <div className={styles.backToSections}>
        <a href="#about">
          <Paragraph>About</Paragraph>
        </a>
        <a href="#skills">
          <Paragraph>Skills</Paragraph>
        </a>
        <a href="#services">
          <Paragraph>Services</Paragraph>
        </a>
      </div>
      <div className={styles.socialICons}>
        <a href="https://www.tiktok.com/@juanmanuba">
          <i className={`bx bxl-tiktok ${styles.iconLink}`}></i>
        </a>
        <a href="https://twitter.com/Juamanuba">
          <i className={`bx bxl-twitter ${styles.iconLink}`}></i>
        </a>
        <a href="https://instagram.com/juanmanuba/">
          <i className={`bx bxl-instagram ${styles.iconLink}`}></i>
        </a>
      </div>
      <Paragraph className={styles.copyright}>
        Copyright: Juanma 2023. All rights reserved
      </Paragraph>
    </section>
  );
}
