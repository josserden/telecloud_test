import React, { useEffect, useState, useRef } from 'react';

import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';
import useHeightDifference from 'hooks/useHeightDifference';
import CountItem from './CountItem';
import classNames from 'classnames';

import { type Props } from './types';
import styles from './index.module.css';

const VerticalsCardContent: React.FC<Props> = ({
  active,
  subcategoriesHeading,
  achievementsHeading,
  card,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [height, setHeight] = useState(0);
  const [heightList, setHeightList] = useState(0);
  const [isOpenList, setIsOpenList] = useState(false);

  const heightDif = useHeightDifference(contentRef, height);
  const heightDifList = useHeightDifference(listRef, heightList);

  const handleClickOpenList = (): void => {
    setIsOpenList(!isOpenList);
    listRef?.current !== null &&
      setHeightList(isOpenList ? 0 : listRef?.current?.scrollHeight);
  };

  useEffect(() => {
    contentRef?.current !== null &&
      setHeight(!active ? 0 : contentRef?.current?.scrollHeight);
  }, [active]);

  useEffect(() => {
    contentRef?.current?.style.setProperty(
      '--height',
      `${height + heightList + heightDif}px`,
    );
    listRef?.current?.style.setProperty(
      '--heightList',
      `${heightList + heightDifList}px`,
    );
  }, [height, heightList, heightDif, heightDifList]);

  return (
    <div
      ref={contentRef}
      className={classNames(
        styles.verticalCardContentDescription,
        active ? styles.active : '',
      )}
    >
      <p className={styles.subtitle}>{card?.subtitle}</p>
      <p>{card?.description}</p>
      <h3 className={styles.achievementsTitle}>{achievementsHeading}</h3>
      <ul className={styles.achievements}>
        {card?.achievements?.map((item, index) => (
          <li key={index}>
            <CountItem
              duration={2}
              symbol={item.symbol}
              overText={item.overText}
              count={item.number}
              isCounted={active}
              description={item.description}
            />
          </li>
        ))}
      </ul>
      <button className={styles.dropdownBtn} onClick={handleClickOpenList}>
        {subcategoriesHeading}
        <div
          className={classNames(
            'arrow',
            styles.dropdownIcon,
            isOpenList ? 'active' : '',
          )}
        >
          <ChevronIcon />
        </div>
      </button>
      <ul
        className={classNames(
          styles.subcategories,
          isOpenList ? styles.active : '',
        )}
        ref={listRef}
      >
        {card?.subcategories?.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalsCardContent;
