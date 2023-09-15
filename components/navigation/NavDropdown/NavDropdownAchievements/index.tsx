import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { type Props } from './types';
import useHeightDifference from 'hooks/useHeightDifference';
import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';

import styles from './index.module.css';

const NavDropdownAchievements: React.FC<Props> = ({
  setHeightAchievements,
  achievementsHeading,
  heightAchievements,
  achievements,
}) => {
  const achievementsRef = useRef<HTMLUListElement>(null);

  const [isOpenAchievements, setIsOpenAchievement] = useState(false);

  const heightAchievementsDif = useHeightDifference(
    achievementsRef,
    heightAchievements,
  );

  const handleClickOpenAchievements = (): void => {
    setIsOpenAchievement(!isOpenAchievements);
    achievementsRef?.current !== null &&
      setHeightAchievements(
        isOpenAchievements ? 0 : achievementsRef?.current?.scrollHeight,
      );
  };

  useEffect(() => {
    achievementsRef?.current?.style.setProperty(
      '--heightAchievements',
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      `${heightAchievements + heightAchievementsDif}px`,
    );
  }, [heightAchievements, heightAchievementsDif]);

  return (
    <>
      <button className="listToggler" onClick={handleClickOpenAchievements}>
        <h3 className="togglerHeading">
          {achievementsHeading}
          <span
            className={classNames('arrow', isOpenAchievements ? 'active' : '')}
          >
            <ChevronIcon />
          </span>
        </h3>
      </button>
      <ul
        className={classNames(
          styles.achievements,
          isOpenAchievements ? styles.active : '',
        )}
        ref={achievementsRef}
      >
        {achievements?.map((item, index) => (
          <li key={index}>
            {item.overText !== '' && (
              <span className={styles.over}>{item.overText}</span>
            )}
            {item.number !== '0' && (
              <span className={styles.number}>{item.number}</span>
            )}
            {item.symbol !== '' && (
              <span className={styles.symbol}>{item.symbol}</span>
            )}
            <span className={styles.achievementsDescription}>
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavDropdownAchievements;
