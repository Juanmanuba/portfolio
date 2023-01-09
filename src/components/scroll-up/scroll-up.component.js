import React, { useState, useEffect, useCallback } from 'react';
import styles from './scroll-up.component.module.css';

export default function ScrollUp() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const onScroll = useCallback(() => {
    //console.log(window.pageYOffset);
    if (window.pageYOffset >= 600) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div
      className={`${styles.scrollUp} ${showScrollUp ? styles.showScroll : ''}`}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <i className={`uil uil-arrow-up ${styles.scrollUpIcon}`}></i>
    </div>
  );
}
