import React from 'react';
import styles from './hero.component.module.css';
import Title from '../title/title.component';
import Subtitle from '../subtitle/subtitle.component';
import Paragraph from '../paragraph/paragraph.component';
import Button from '../button/button.component';
import { images } from '../../assets/images';
import Icon from '../icon/icon.component';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.socials}>
        <Icon link="https://instagram.com/juanmanuba/" icon="uil-instagram" />
        <Icon link="https://github.com/Juanmanuba" icon="uil-github-alt" />
        <Icon link="https://twitter.com/Juamanuba" icon="uil-twitter-alt" />
      </div>
      <img src={images.kkk} alt="" className={styles.home__img} />
      <div className={styles.leftSideText}>
        <Title>Juan Nuñez</Title>
        <Subtitle>Frontend Developer</Subtitle>
        <Paragraph>
          I am a newby frontend developer from Venezuela. I like to climb and
          rest.
        </Paragraph>
        <a href="#contact">
          <Button className={styles.button}>Say Hello</Button>
        </a>
      </div>
    </section>
  );
}
