import React from 'react';
import styles from './CategoryItem.module.scss';

import classnames from 'classnames';

export default function CategoryItem(props) {
  const { isActive, backgroundColor } = props;

  let categoryItemStyles = {
    [styles.categoryItem]: true,
    [styles.activeCategoryItem]: isActive,
  };

  return <div style={{ backgroundColor: backgroundColor }} className={classnames(categoryItemStyles)}></div>;
}
