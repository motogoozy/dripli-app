import React from 'react';
import styles from './Sidebar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topContainer}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faCommentAlt} />
          <p className={styles.iconLabel}>Support</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faUserCircle} />
          <p className={styles.iconLabel}>Profile</p>
        </div>
      </div>
    </div>
  );
}
