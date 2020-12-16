import React from 'react';
import styles from './Dashboard.module.scss';
import globalStyles from '../../styles/globals.module.scss';
import CategoryRow from './CategoryRow/CategoryRow';
import Header from './Header/Header';
import ExportTab from '../ExportTab/ExportTab';

import classnames from 'classnames';

export default function Dashboard() {
  return (
    <div className={classnames(globalStyles.pageContent, styles.dashboard)}>
      <Header />
      <div className={styles.main}>
        <div className={styles.leftIndicatorContainer}>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
          <div className={classnames(styles.circleIndicator, styles.activeIndicator)}></div>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
          <div className={styles.circleIndicator}></div>
        </div>

        <div className={styles.roadmapContainer}>
          <div className={classnames(styles.rowContainer, styles.row1)}>
            <CategoryRow title='Defense' />
          </div>
          <div className={classnames(styles.rowContainer, styles.row2)}>
            <CategoryRow title='Compliance' />
          </div>
          <div className={classnames(styles.rowContainer, styles.row3)}>
            <CategoryRow title='Monitoring' isActive={true} />
          </div>
          <div className={classnames(styles.rowContainer, styles.row4)}>
            <CategoryRow title='Governance' />
          </div>
          <div className={classnames(styles.rowContainer, styles.row5)}>
            <CategoryRow title='Product' />
          </div>
        </div>
      </div>

      <div className={styles.backgroundLayerContainer}>
        <div className={classnames(styles.backgroundLayer, styles.backgroundLayer1)}></div>
        <div className={classnames(styles.backgroundLayer, styles.backgroundLayer2)}></div>
        <div className={classnames(styles.backgroundLayer, styles.backgroundLayer3)}></div>

      </div>
      
        <div className={styles.exportTabContainer}>
          <ExportTab />
        </div>
    </div>
  );
}
