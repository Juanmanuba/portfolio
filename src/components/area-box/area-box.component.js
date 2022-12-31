import React from 'react';
import styles from './area-box.component.module.css';
import Title from '../title/title.component';
import Bullet from '../bullet/bullet.component';

export default function AreaBox({ title }) {
  const frontendItems = [
    {
      skill: 'HTML',
      level: 'Intermediate',
    },
    {
      skill: 'CSS',
      level: 'Advanced',
    },
    {
      skill: 'JavaScript',
      level: 'Intermediate',
    },
    {
      skill: 'Git',
      level: 'Intermediate',
    },
    {
      skill: 'React',
      level: 'Intermediate',
    },
  ];

  const dataAnalystItems = [
    {
      skill: 'Python',
      level: 'Intermediate',
    },
    {
      skill: 'Numpy',
      level: 'Advanced',
    },
    {
      skill: 'Pytorch',
      level: 'Intermediate',
    },
    {
      skill: 'OpenCV',
      level: 'Intermediate',
    },
    {
      skill: 'MATLAB',
      level: 'Intermediate',
    },
  ];

  const cryptoItems = [
    {
      skill: 'Cryptos',
      level: 'Intermediate',
    },
    {
      skill: 'NFTs',
      level: 'Advanced',
    },
    {
      skill: 'Bitcoin',
      level: 'Intermediate',
    },
    {
      skill: 'Rust',
      level: 'Intermediate',
    },
    {
      skill: 'Solidity',
      level: 'Basic',
    },
  ];

  const frontBullets = frontendItems.map((item) => {
    return <Bullet {...item} />;
  });

  const dataAnalystBullets = dataAnalystItems.map((item) => {
    return <Bullet {...item} />;
  });

  const cryptoBullets = cryptoItems.map((item) => {
    return <Bullet {...item} />;
  });

  return (
    <div className={styles.areaBox}>
      <h2 className={styles.boxTitle}>{title}</h2>
      <ul className={styles.areaBullets}>
        {title === 'Frontend Developer'
          ? frontBullets
          : title === 'Cryptocurrencies'
          ? cryptoBullets
          : dataAnalystBullets}
      </ul>
    </div>
  );
}
