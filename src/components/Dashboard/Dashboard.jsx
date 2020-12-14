import React from 'react';
import styles from './Dashboard.module.scss';
import globalStyles from '../../styles/globals.module.scss';
import CategoryRow from '../CategoryRow/CategoryRow';

export default function Dashboard() {
  return (
    <div className={globalStyles.pageContent}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.companyTitleContainer}>Salt & Straw Creamery</div>
        </div>

        <div className={styles.main}>
          <div className={styles.leftIndicatorContainer}>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
            <div className={`${styles.circleIndicator} ${styles.activeIndicator}`}></div>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
            <div className={styles.circleIndicator}></div>
          </div>

          <div className={styles.rowContainer}>
            <div className={`${styles.row} ${styles.row1}`}>
              <CategoryRow />
            </div>
            <div className={`${styles.row} ${styles.row2}`}>
              <CategoryRow />
            </div>
            <div className={`${styles.row} ${styles.row3}`}>
              <CategoryRow />
            </div>
            <div className={`${styles.row} ${styles.row4}`}>
              <CategoryRow />
            </div>
            <div className={`${styles.row} ${styles.row5}`}>
              <CategoryRow />
            </div>
          </div>
        </div>

        <div className={styles.backgroundLayerContainer}>
          <div className={styles.backgroundLayer1}></div>
          <div className={styles.backgroundLayer2}></div>
          <div className={styles.backgroundLayer3}></div>
        </div>
      </div>
    </div>
  );
}
