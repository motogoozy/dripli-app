import React from 'react';
import styles from './Sidebar.module.scss';
import globalStyles from '../../styles/globals.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topContainer}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={classnames(styles.iconContainer, globalStyles.hoverCursor)}>
          <FontAwesomeIcon icon={faCommentAlt} />
          <p className={styles.iconLabel}>Support</p>
        </div>
        <div className={classnames(styles.iconContainer, globalStyles.hoverCursor)}>
          <FontAwesomeIcon icon={faUserCircle} />
          <p className={styles.iconLabel}>Profile</p>
        </div>
      </div>
    </div>
  );
}
