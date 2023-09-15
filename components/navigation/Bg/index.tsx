import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import { VERTICALS } from 'constants/veticals';
import classNames from 'classnames';

import styles from './index.module.css';
import { type Props } from './types';

const NavigationBg: React.FC<Props> = ({ isOpen, isActive, idx }) => {
  const prevIndexRef = useRef<number>(idx);

  useEffect(() => {
    isOpen ? (prevIndexRef.current = idx) : (prevIndexRef.current = -1);
  }, [idx, isOpen]);

  return (
    <div
      className={classNames(
        styles.menuBackground,
        styles.menuBackgroundFirstItem,
        isOpen ? styles.activeContent : '',
        isActive ? styles.activeMenu : '',
      )}
    >
      {VERTICALS.map(
        item =>
          !item.isLast && (
            <Image
              key={item.id}
              fill
              alt="background of navigation item"
              src={item?.bg}
              className={classNames(
                item.id === idx ? styles.activeImg : '',
                item.id === prevIndexRef.current ? styles.prevImg : '',
              )}
            />
          ),
      )}
    </div>
  );
};

export default NavigationBg;
