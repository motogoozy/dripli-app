import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import globalStyles from '../../styles/globals.module.scss';
import CategoryRow from './CategoryRow/CategoryRow';
import Header from './Header/Header';
import ExportTab from '../ExportTab/ExportTab';

import classnames from 'classnames';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  const layerStyles = {
    [styles.page1LayerWidths]: currentPage === 1,
    [styles.page2LayerWidths]: currentPage === 2,
    [styles.page3LayerWidths]: currentPage === 3,
  };

  return (
    <div className={classnames(globalStyles.pageContent, styles.dashboard)}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

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

        <div className={classnames(styles.roadmapContainer)}>
          <div className={classnames(styles.rowContainer, styles.row1)}>
            <CategoryRow title='Defense' currentPage={currentPage} />
          </div>
          <div className={classnames(styles.rowContainer, styles.row2)}>
            <CategoryRow title='Compliance' currentPage={currentPage} />
          </div>
          <div className={classnames(styles.rowContainer, styles.row3)}>
            <CategoryRow title='Monitoring' currentPage={currentPage} isActive={true} />
          </div>
          <div className={classnames(styles.rowContainer, styles.row4)}>
            <CategoryRow title='Governance' currentPage={currentPage} />
          </div>
          <div className={classnames(styles.rowContainer, styles.row5)}>
            <CategoryRow title='Product' currentPage={currentPage} />
          </div>
        </div>
      </div>

      <div className={classnames(styles.backgroundLayerContainer, layerStyles)}>
        <div
          className={classnames(styles.backgroundLayer, styles.backgroundLayer1)}
          onClick={() => setCurrentPage(1)}
        ></div>
        <div
          className={classnames(styles.backgroundLayer, styles.backgroundLayer2)}
          onClick={() => setCurrentPage(2)}
        ></div>
        <div
          className={classnames(styles.backgroundLayer, styles.backgroundLayer3)}
          onClick={() => setCurrentPage(3)}
        ></div>
      </div>

      <div className={classnames(styles.exportTabContainer, globalStyles.hoverCursor)}>
        <ExportTab />
      </div>
    </div>
  );
}
