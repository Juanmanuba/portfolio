import React from 'react';
import styles from './hero.component.module.css';
import Title from '../title/title.component';
import Subtitle from '../subtitle/subtitle.component';
import Paragraph from '../paragraph/paragraph.component';
import Button from '../button/button.component';
import { images } from '../../assets/images';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftSideText}>
        <Title>Juan Nuñez</Title>
        <Subtitle>Frontend Developer</Subtitle>
        <Paragraph>
          I am a newby frontend developer from Venezuela. I like to climb, thank
          you
        </Paragraph>
        <Button>Say Hello</Button>
      </div>
      <img src={images.kkk} alt="" />
    </section>
  );
}
