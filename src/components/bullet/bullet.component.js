import React from 'react';
import styles from './bullet.component.module.css';

export default function Bullet({ skill, level }) {
  return (
    <li className={styles.bullet}>
      <div className={styles.bulletTitle}>
        <i className={`bx bx-check-circle ${styles.iconImg}`}></i>
        <h3 className={styles.bulletSkill}>{skill}</h3>
      </div>
      <p className={styles.bulletLevel}>{level}</p>
    </li>
  );
}
