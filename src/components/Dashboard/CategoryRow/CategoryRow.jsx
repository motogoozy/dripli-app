import React, { useState } from 'react';
import styles from './CategoryRow.module.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function CategoryRow(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { isActive, title, currentPage } = props;

  let rowStyles = {
    [styles.categoryRow]: true,
    [styles.page3Row]: currentPage === 3,
  };
  let titleStyles = {
    [styles.categoryTitle]: true,
    [styles.activeCategoryTitle]: isActive,
  };
  let lineStyles = {
    [styles.categoryLine]: true,
    [styles.activeCategoryLine]: isActive,
  };
  let itemContainerStyles = {
    [styles.categoryItemContainer]: true,
    [styles.activeCategoryItemContainer]: isActive,
  };

  return (
    <div className={classnames(rowStyles)}>
      <div className={classnames(titleStyles)}>
        {title}
        {isActive && (
          <div className={styles.arrow} onClick={() => setShowDropdown(!showDropdown)}>
            <FontAwesomeIcon icon={showDropdown ? faChevronDown : faChevronLeft} />
          </div>
        )}
      </div>
      <div className={classnames(itemContainerStyles)}>
        <CategoryItem isActive={isActive} currentPage={currentPage} />
        <CategoryItem isActive={isActive} currentPage={currentPage} />
        <CategoryItem isActive={isActive} currentPage={currentPage} />
        {currentPage !== 3 && (
          <CategoryItem
            isActive={isActive}
            currentPage={currentPage}
            backgroundColor={currentPage < 3 && (isActive ? '#9c94b9' : '#f7f7f7')}
          />
        )}
      </div>

      <div className={classnames(lineStyles)}></div>
    </div>
  );
}
