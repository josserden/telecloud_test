'use client';

import React from 'react';

import CountItem from './CountItem';

import { type Props } from './types';
import styles from './index.module.css';

const DescriptionContentBottom: React.FC<Props> = ({
  achievements,
  isOpenDescription,
}) => {
  return (
    <div className={styles.descriptionContentBottom}>
      <ul className={styles.achievements}>
        {achievements?.map((item, index) => (
          <li key={index}>
            <CountItem
              symbol={item.symbol}
              overText={item.overText}
              duration={2}
              count={item.number}
              isCounted={isOpenDescription}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionContentBottom;
