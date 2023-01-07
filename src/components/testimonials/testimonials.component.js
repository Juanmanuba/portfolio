import React from 'react';
import styles from './testimonials.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import testimonialsInfo from './testimonials-info';

export default function Testimonials() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionTitle}>
        <Title>Testimonial</Title>
        <Paragraph>My coworkers saying</Paragraph>
      </div>
      <div className={styles.testimonials}></div>
    </section>
  );
}
