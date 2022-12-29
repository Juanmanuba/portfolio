import React from 'react';
import styles from './paragraph.component.module.css';

export default function Paragraph({ children }) {
  return <p className={styles.title}>{children}</p>;
}
