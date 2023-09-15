'use client';

import React from 'react';
import classNames from 'classnames';

import DescriptionContentBottom from '../DescriptionContentBottom';

import { type Props } from './types';
import styles from './index.module.css';

const DescriptionContentTop: React.FC<Props> = ({
  isOpenDescription,
  verticals,
  subcategoriesHeading,
  icon,
}) => {
  return (
    <div className={styles.descriptionContentTop}>
      <div className={styles.titleWrapper}>
        <span
          className={classNames(
            styles.icon,
            isOpenDescription && styles.activeIcon,
          )}
        >
          {icon}
        </span>
        <h2
          className={classNames(
            styles.descriptionTitle,
            isOpenDescription && 'activeFrameText',
            isOpenDescription && styles.active,
          )}
        >
          {verticals?.title}
        </h2>
      </div>
      <div className={styles.descriptionContentText}>
        <p
          className={classNames(
            styles.subtitle,
            isOpenDescription && styles.activeSubtitle,
          )}
        >
          {verticals?.subtitle}
        </p>
        <p
          className={classNames(
            styles.description,
            isOpenDescription && styles.activeDescription,
          )}
        >
          {verticals?.description}
        </p>
        <DescriptionContentBottom
          achievements={verticals?.achievements}
          isOpenDescription={isOpenDescription}
        />
      </div>
      <div
        className={classNames(
          styles.descriptionSubcategories,
          isOpenDescription ? styles.active : '',
        )}
      >
        <h3 className={classNames(isOpenDescription && 'activeFrameText')}>
          {subcategoriesHeading}
        </h3>
        <ul>
          {verticals?.subcategories?.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DescriptionContentTop;
