import React from 'react';
import styles from './CategoryRow.module.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

import classnames from 'classnames';

export default function CategoryRow(props) {
  let titleStyles = {
    [styles.categoryTitle]: true,
    [styles.activeCategoryTitle]: props.isActive,
  };
  let lineStyles = {
    [styles.categoryLine]: true,
    [styles.activeCategoryLine]: props.isActive,
  };
  let itemContainerStyles = {
    [styles.categoryItemContainer]: true,
    [styles.activeCategoryItemContainer]: props.isActive,
  };

  return (
    <div className={styles.categoryRow}>
      <div className={classnames(titleStyles)}>{props.title}</div>
      <div className={classnames(itemContainerStyles)}>
        <CategoryItem isActive={props.isActive} />
        <CategoryItem isActive={props.isActive} />
        <CategoryItem isActive={props.isActive} />
        <CategoryItem isActive={props.isActive} />
      </div>

      <div className={classnames(lineStyles)}></div>
    </div>
  );
}
