'use client';
import React, { type KeyboardEvent, useState, useEffect } from 'react';
import classNames from 'classnames';

import { VERTICALS } from 'constants/veticals';
import NavigationBg from 'components/navigation/Bg';
import NavigationCard from 'components/navigation/Card';
import SideBar from 'components/navigation/SideBar';
import MediaQuery from 'react-responsive';
// import useClient from 'hooks/useClient';

import styles from './index.module.css';
import { type Props } from './types';

const Navigation: React.FC<Props> = ({ verticals, isOpen, isClose }) => {
  // const isMatches = useMediaQuery({ query: '(min-width: 1025px)' });
  // const isClient = useClient();

  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const [isOpenContent, setIsOpenContent] = useState<boolean>(false);

  const handleHover = (idx: number): void => {
    setActiveCardIdx(idx);
    setIsOpenContent(true);
  };

  const handleHoverOut = (): void => {
    setIsOpenContent(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: Event | KeyboardEvent): void => {
      if ('key' in e && e.key === 'Escape') {
        isClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isClose]);

  return (
    <div className={classNames(styles.navigation, isOpen && styles.isOpen)}>
      <MediaQuery minWidth={1025}>
        {isOpen && (
          <NavigationBg
            isActive={isOpen}
            isOpen={isOpenContent}
            idx={activeCardIdx}
          />
        )}

        <div
          className={classNames(
            styles.navigationLeft,
            styles.navigationContent,
          )}
        >
          <NavigationCard
            isOpen={isOpenContent}
            card={verticals?.cards?.[activeCardIdx]}
            icon={VERTICALS[activeCardIdx]?.largeIcon}
            heading={verticals?.subcategoriesHeading}
          />
        </div>
      </MediaQuery>

      <SideBar
        isOpen={isOpen}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
        isClose={isClose}
        verticals={verticals}
      />
    </div>
  );
};

export default Navigation;
