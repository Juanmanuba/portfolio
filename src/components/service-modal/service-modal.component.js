import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import ServiceItem from '../service-item/service-item.component';
import styles from './service-modal.component.module.css';
import Button from '../button/button.component';

export default function ServiceModal({ title, bulletsText, hideModal }) {
  return (
    <div className={styles.modal}>
      <h2 className={styles.serviceModalTitle}>{title}</h2>
      <Paragraph>
        Services with over 3 years of programming experience. I can provide
        quality work without a doubt.
      </Paragraph>
      <ul className={styles.bullets}>
        {bulletsText.map((item, index) => {
          return <ServiceItem key={index} {...item} />;
        })}
      </ul>
      <Button onClick={hideModal}>Awesome</Button>
    </div>
  );
}
