import React, { useState } from 'react';
import styles from './services.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import ServiceBox from '../service-box/service-box.component';
import ServiceModal from '../service-modal/service-modal.component';

export default function Services() {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [chooseServiceModal, setChooseServiceModal] = useState(0);

  const servicesInfo = [
    {
      title: 'Landing page design',
      icon: 'bx-credit-card-front',
      bulletsText: [
        {
          text: 'I develop the user interface',
        },
        {
          text: 'Web page development',
        },
        {
          text: 'I create UX element interactions',
        },
        {
          text: 'I position your company brand',
        },
        {
          text: 'Design and mockups of products for companies',
        },
      ],
    },
    {
      title: 'Data analysis for companies',
      icon: 'bx-credit-card-front',
      bulletsText: [
        {
          text: 'I develop the user interface',
        },
        {
          text: 'Web page development',
        },
        {
          text: 'I create UX element interactions',
        },
        {
          text: 'I position your company brand',
        },
        {
          text: 'Design and mockups of products for companies',
        },
      ],
    },
    {
      title: 'Machine Learning strategies',
      icon: 'bx-credit-card-front',
      bulletsText: [
        {
          text: 'I develop the user interface',
        },
        {
          text: 'Web page development',
        },
        {
          text: 'I create UX element interactions',
        },
        {
          text: 'I position your company brand',
        },
        {
          text: 'Design and mockups of products for companies',
        },
      ],
    },
  ];

  const services = servicesInfo.map((item, index) => {
    return (
      <ServiceBox
        key={index}
        {...item}
        showModal={() => {
          setShowServiceModal(true);
          setChooseServiceModal(index);
        }}
      />
    );
  });

  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionTitle}>
        <Title>Services</Title>
        <Paragraph>What I can offer</Paragraph>
      </div>
      <div className={styles.services}>{services}</div>
      {showServiceModal && (
        <div className={`${styles.serviceModal} ${styles.activeModal}`}>
          <ServiceModal
            {...servicesInfo[chooseServiceModal]}
            hideModal={() => {
              setShowServiceModal(false);
            }}
          />
        </div>
      )}
    </section>
  );
}
