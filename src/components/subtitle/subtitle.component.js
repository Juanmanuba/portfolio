import React from 'react';
import styles from './subtitle.component.module.css';

export default function Subtitle({ children }) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
