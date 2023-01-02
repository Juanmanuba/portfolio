import React from 'react';
import styles from './service-modal.component.module.css';

export default function ServiceModal({ title }) {
  return <div className={styles.serviceModal}>{title}</div>;
}
