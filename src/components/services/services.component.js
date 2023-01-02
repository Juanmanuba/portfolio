import React from 'react';
import styles from './services.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import ServiceBox from '../service-box/service-box.component';

export default function Services() {
  const servicesTitles = [
    {
      title: 'Landing page design',
    },
    {
      title: 'Data analysis for your company',
    },
    {
      title: 'Machine Learning strategies',
    },
  ];

  const services = servicesTitles.map((item) => {
    return <ServiceBox {...item} />;
  });

  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionTitle}>
        <Title>Services</Title>
        <Paragraph>What I can offer</Paragraph>
      </div>
      <div className={styles.services}>{services}</div>
    </section>
  );
}
