'use client';
import React, { type ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

import { type Props } from './types';

import styles from './index.module.css';

const HamburgerButton = forwardRef(
  (
    { openNavHandle, isOpen, isNavToggler, ...props }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const onClickHandle = (): void => {
      if (openNavHandle != null) {
        openNavHandle();
      }
    };

    return (
      <button
        className={classNames(
          styles.hamburgerButton,
          isOpen != null && isOpen ? styles.isActive : '',
          isNavToggler != null && isNavToggler && styles.navBtn,
        )}
        onClick={onClickHandle}
        ref={ref}
        aria-label={
          'Navigation button' + (isOpen != null && isOpen ? ' close' : ' open')
        }
        {...props}
      >
        <span className={styles.lineWrapper}>
          <span className={classNames(styles.line, styles.lineTop)} />
          <span className={classNames(styles.line, styles.lineMiddle)} />
          <span className={classNames(styles.line, styles.lineBottom)} />
        </span>
      </button>
    );
  },
);

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;
