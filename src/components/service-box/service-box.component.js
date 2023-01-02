import React from 'react';
import styles from './service-box.component.module.css';

export default function ServiceBox({ title }) {
  return <div className={styles.serviceBox}>{title}</div>;
}
