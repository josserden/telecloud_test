import React from 'react';
import classNames from 'classnames';

import useCounter from 'hooks/useCounter';

import { type CountProps } from './types';
import styles from './index.module.css';

const CountItem: React.FC<CountProps> = ({
  isCounted,
  count,
  symbol,
  overText,
  duration,
  description,
}) => {
  const value = useCounter(isCounted, count, duration);

  return (
    <div className={classNames(styles.achievement, isCounted && styles.active)}>
      <div className={styles.achievementData}>
        {overText !== '' && <span>{overText}</span>}
        {value !== '0' && (
          <h3>
            {value}
            {symbol !== '' && <span>{symbol}</span>}
          </h3>
        )}
        <span
          className={classNames(
            overText === '' &&
              value === '0' &&
              symbol === '' &&
              styles.countDescription,
          )}
        >
          {description}
        </span>
      </div>
      <svg width="138" height="138" viewBox="0 0 138 138" fill="none">
        <circle
          cx="69"
          cy="69"
          r="67.6392"
          stroke="#AFC1FF"
          strokeWidth="2.72153"
        />
      </svg>
    </div>
  );
};

export default CountItem;
