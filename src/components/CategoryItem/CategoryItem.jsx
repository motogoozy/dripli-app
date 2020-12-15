import React from 'react';
import styles from './CategoryItem.module.scss';

import classnames from 'classnames';

export default function CategoryItem(props) {
  let categoryItemStyles = {
    [styles.categoryItem]: true,
    [styles.activeCategoryItem]: props.isActive,
  };

  return <div className={classnames(categoryItemStyles)}></div>;
}
