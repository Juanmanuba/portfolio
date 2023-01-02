import React from 'react';
import styles from './area-box.component.module.css';
import Bullet from '../bullet/bullet.component';

export default function AreaBox({ title, bullets }) {
  const showBullets = bullets.map((item) => {
    return <Bullet {...item} />;
  });

  return (
    <div className={styles.areaBox}>
      <h2 className={styles.boxTitle}>{title}</h2>
      <ul className={styles.areaBullets}>{showBullets}</ul>
    </div>
  );
}
