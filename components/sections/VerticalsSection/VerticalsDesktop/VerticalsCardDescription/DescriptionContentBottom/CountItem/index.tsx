'use client';

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
      <svg width="229" height="229" viewBox="0 0 229 229" fill="none">
        <g filter="url(#filter0_d_2681_19516)">
          <circle
            className={styles.shape}
            cx="113.5"
            cy="112.5"
            r="102"
            stroke="url(#paint0_linear_2681_19516)"
            strokeWidth="5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2681_19516"
            x="0"
            y="0"
            width="229"
            height="229"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2681_19516"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2681_19516"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2681_19516"
            x1="44"
            y1="21"
            x2="200"
            y2="191.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD9D9" />
            <stop offset="1" stopColor="#7000FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CountItem;
