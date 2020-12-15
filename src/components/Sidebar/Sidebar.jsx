import React from 'react';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}></div>
    </div>
  );
}