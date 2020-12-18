import React from 'react';
import styles from './ExportTab.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ExportTab() {
  return (
    <div className={styles.exportTab}>
      <FontAwesomeIcon icon={faDownload} />
    </div>
  );
}
