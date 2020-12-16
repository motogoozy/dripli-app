import React from 'react';
import styles from './Header.module.scss';

import classnames from 'classnames';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={classnames(styles.headerContainer, styles.leftContainer)}>
        <div className={styles.searchContainer}>
          <input type='text' placeholder='Search' className={styles.search} />
        </div>
      </div>
      <div className={classnames(styles.headerContainer, styles.centerContainer)}>
        <div className={styles.companyTitleContainer}>Salt & Straw Creamery</div>
      </div>
      <div className={classnames(styles.headerContainer, styles.rightContainer)}></div>
    </div>
  );
}
