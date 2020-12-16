import React, { useState } from 'react';
import styles from './CategoryRow.module.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function CategoryRow(props) {
  const [showDropdown, setShowDropdown] = useState(false);

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
      <div className={classnames(titleStyles)}>
        {props.title}
        {props.isActive && (
          <div className={styles.arrow} onClick={() => setShowDropdown(!showDropdown)}>
            <FontAwesomeIcon icon={showDropdown ? faChevronDown : faChevronLeft} />
          </div>
        )}
      </div>
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
