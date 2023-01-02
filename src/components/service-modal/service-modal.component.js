import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import ServiceItem from '../service-item/service-item.component';
import styles from './service-modal.component.module.css';
import Button from '../button/button.component';

export default function ServiceModal({ title, icon, bulletsText, hideModal }) {
  return (
    <div className={styles.modal}>
      <h2 className={styles.serviceModalTitle}>{title}</h2>
      <Paragraph>
        Services with over 5 years sleeping. I can provide quality work with my
        eyes closed.
      </Paragraph>
      <ul className={styles.bullets}>
        {bulletsText.map((item) => {
          return <ServiceItem {...item} />;
        })}
      </ul>

      <Button className={styles.closeButton} onClick={hideModal}>
        Awesome
      </Button>
    </div>
  );
}
