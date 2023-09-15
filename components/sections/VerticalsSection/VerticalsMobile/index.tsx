import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import VerticalsCardContent from './VerticalsCardContent';
import { ChevronIcon } from '../../../ui/icons/ChevronIcon/ChevronIcon';

import { type Props } from './types';
import styles from './index.module.css';

const VerticalsCardMobile: React.FC<Props> = ({
  options,
  card,
  achievementsHeading,
  subcategoriesHeading,
  isAnimate,
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(false);

  const onClickHandle = (): void => {
    setActive(!active);
  };

  useEffect(() => {
    cardRef?.current?.style.setProperty('--delay', `${options.showingDelay}s`);
  }, [options.showingDelay]);

  return (
    <li
      ref={cardRef}
      className={classNames(
        styles.verticalsCardSmall,
        isAnimate && styles.activeAnimation,
        styles[`${options?.classname}`],
        active ? styles.active : '',
        styles[`${options.translateClass}`],
      )}
    >
      <button className={styles.verticalCardToggler} onClick={onClickHandle}>
        <h3>{card?.title}</h3>
        <span className={classNames('arrow', active ? 'active' : '')}>
          <ChevronIcon />
        </span>
      </button>
      <VerticalsCardContent
        active={active}
        card={card}
        achievementsHeading={achievementsHeading}
        subcategoriesHeading={subcategoriesHeading}
      />
    </li>
  );
};

export default VerticalsCardMobile;
