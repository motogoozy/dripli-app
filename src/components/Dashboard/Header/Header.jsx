import React from 'react';
import styles from './Header.module.scss';
import dashboardStyles from '../Dashboard.module.scss';

import classnames from 'classnames';

export default function Header(props) {
  const indicator1Style = {
    [dashboardStyles.circleIndicator]: true,
    [dashboardStyles.activeIndicator]: props.currentPage === 1,
  };
  const indicator2Style = {
    [dashboardStyles.circleIndicator]: true,
    [dashboardStyles.activeIndicator]: props.currentPage === 2,
  };
  const indicator3Style = {
    [dashboardStyles.circleIndicator]: true,
    [dashboardStyles.activeIndicator]: props.currentPage === 3,
  };

  return (
    <div className={styles.header}>
      <div className={classnames(styles.headerContainer, styles.leftContainer)}>
        <div className={styles.searchContainer}>
          <input type='text' placeholder='Search' className={styles.search} />
        </div>
      </div>

      <div className={classnames(styles.headerContainer, styles.centerContainer)}>
        <div className={styles.companyTitleContainer}>Salt & Straw Creamery</div>

        <div className={styles.pageIndicatorContainer}>
          <div className={classnames(indicator1Style)} onClick={() => props.setCurrentPage(1)}></div>
          <div className={classnames(indicator2Style)} onClick={() => props.setCurrentPage(2)}></div>
          <div className={classnames(indicator3Style)} onClick={() => props.setCurrentPage(3)}></div>
        </div>
      </div>

      <div className={classnames(styles.headerContainer, styles.rightContainer)}></div>
    </div>
  );
}
