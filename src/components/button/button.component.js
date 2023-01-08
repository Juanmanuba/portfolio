import React from 'react';
import styles from './button.component.module.css';

function Button({ children, className, ...rest }) {
  return (
    <button {...rest} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
