import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { type Props } from './types';
import useHeightDifference from 'hooks/useHeightDifference';
import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';

import styles from './index.module.css';

const NavDropdownList: React.FC<Props> = ({
  heightList,
  setHeightList,
  subcategoriesHeading,
  subcategories,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const [isOpenList, setIsOpenList] = useState(false);

  const heightDifList = useHeightDifference(listRef, heightList);

  const handleClickOpenList = (): void => {
    setIsOpenList(!isOpenList);
    listRef?.current !== null &&
      setHeightList(isOpenList ? 0 : listRef?.current?.scrollHeight);
  };

  useEffect(() => {
    listRef?.current?.style.setProperty(
      '--heightList',
      `${heightList + heightDifList}px`,
    );
  }, [heightList, heightDifList]);

  return (
    <>
      <button className="listToggler" onClick={handleClickOpenList}>
        <h3 className="togglerHeading">
          {subcategoriesHeading}
          <span
            className={classNames(
              'arrow',
              isOpenList ? 'active' : '',
              styles.navArrow,
            )}
          >
            <ChevronIcon />
          </span>
        </h3>
      </button>
      <ul
        className={classNames(
          styles.subcategories,
          isOpenList ? styles.active : '',
        )}
        ref={listRef}
      >
        {subcategories?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default NavDropdownList;
