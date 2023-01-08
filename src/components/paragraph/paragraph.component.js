import React from 'react';
import styles from './paragraph.component.module.css';

export default function Paragraph({ children, className }) {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>;
}
