import React from 'react';
import styles from './mouse-scroll.component.module.css';
export default function MouseScroll() {
  return (
    <a href="#about">
      <div className={styles.mouse_scroll}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div>
          <span className={`${styles.m_scroll_arrows} ${styles.unu}`}></span>
          <span className={`${styles.m_scroll_arrows} ${styles.doi}`}></span>
          <span className={`${styles.m_scroll_arrows} ${styles.trei}`}></span>
        </div>
      </div>
    </a>
  );
}
