import React from 'react';
import classNames from 'classnames';

import useCounter from 'hooks/useCounter';

import styles from './index.module.css';
import { type Props } from './types';

const CountItem: React.FC<Props> = ({
  isCounted,
  count,
  duration,
  description,
  symbol,
  classname,
}) => {
  const value = useCounter(isCounted, count, duration);

  return (
    <div
      className={classNames(
        styles.countItem,
        styles[`${classname}`],
        isCounted && styles.active,
      )}
    >
      <div className={styles.countContent}>
        <p>
          {value}
          <span>{symbol}</span>
        </p>
        <span>{description}</span>
      </div>
      <svg viewBox="0 0 244 244">
        <circle className={styles.shape} cx="120" cy="120" r="117" />
      </svg>
    </div>
  );
};

export default CountItem;
