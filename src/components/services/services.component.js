import React, { useState } from 'react';
import styles from './services.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import ServiceBox from '../service-box/service-box.component';
import ServiceModal from '../service-modal/service-modal.component';
import servicesInfo from './services-info';

export default function Services() {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [chooseServiceModal, setChooseServiceModal] = useState(0);

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
    <section className={styles.servicesSection} id="services">
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
