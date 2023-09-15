import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ChevronIcon } from '../../ui/icons/ChevronIcon/ChevronIcon';
import NavDropdownList from './NavDropdownList';
import NavDropdownAchievements from './NavDropdownAchievements';
import useHeightDifference from 'hooks/useHeightDifference';

import { type Props } from './types';
import styles from './index.module.css';

const NavDropdown: React.FC<Props> = ({
  card,
  subcategoriesHeading,
  achievementsHeading,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [heightList, setHeightList] = useState<number>(0);
  const [heightAchievements, setHeightAchievements] = useState(0);

  const [isOpenMobileContent, setIsOpenMobileContent] = useState(false);

  const heightDif = useHeightDifference(ref, height);

  const handleClickOpen = (): void => {
    setIsOpenMobileContent(!isOpenMobileContent);
    ref?.current !== null &&
      setHeight(isOpenMobileContent ? 0 : ref?.current?.scrollHeight);
  };

  useEffect(() => {
    ref?.current?.style.setProperty(
      '--height',
      `${height + heightList + heightAchievements + heightDif}px`,
    );
  }, [height, heightAchievements, heightList, heightDif]);

  return (
    <div className={styles.dropdown}>
      <button className={styles.menuItemBtn} onClick={handleClickOpen}>
        {card?.title}
        <span
          className={classNames('arrow', isOpenMobileContent ? 'active' : '')}
        >
          <ChevronIcon />
        </span>
      </button>
      <div
        className={classNames(
          styles.mobileMenuContent,
          isOpenMobileContent ? styles.active : '',
        )}
        ref={ref}
      >
        <div className={styles.mobileMenuDescription}>
          <h3 className={styles.subtitle}>{card?.subtitle}</h3>
          <p className={styles.description}>{card?.description}</p>
          <NavDropdownAchievements
            achievementsHeading={achievementsHeading}
            achievements={card?.achievements}
            setHeightAchievements={setHeightAchievements}
            heightAchievements={heightAchievements}
          />
          <NavDropdownList
            subcategoriesHeading={subcategoriesHeading}
            setHeightList={setHeightList}
            heightList={heightList}
            subcategories={card?.subcategories}
          />
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
