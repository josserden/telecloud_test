import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';
import { useScrollYPosition } from 'hooks/useScrollPosition';

import { type Props } from './types';
import styles from './index.module.css';

const VerticalsCard: React.FC<Props> = ({
  options: {
    classname,
    translateClass,
    verticalsDescriptionComponentId,
    isLast,
    xLargeIcon,
    showingDelay,
    id,
  },
  verticals,
  setActiveCardIdx,
  setDescriptionId,
  setScrollPos,
  setIsOpen,
  isActive,
  isOpen,
  isAnimate,
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const scrollY = useScrollYPosition();

  const onClickHandle = (): void => {
    if (!isLast) {
      setActiveCardIdx(id);
      setScrollPos(scrollY);
      setDescriptionId(verticalsDescriptionComponentId);
      isActive && isOpen ? setIsOpen(false) : setIsOpen(true);
    }
  };

  useEffect(() => {
    cardRef?.current?.style.setProperty('--delay', `${showingDelay}s`);
  }, [showingDelay]);

  return (
    <li
      ref={cardRef}
      className={classNames(
        styles.verticalDropdownWrapper,
        styles[`${classname}`],
        styles[`${translateClass}`],
        {
          [styles.activeAnimation]: isAnimate,
          [styles.isLast]: isLast,
          [styles.active]: isActive && isOpen,
        },
      )}
    >
      <button
        onClick={onClickHandle}
        className={classNames(
          styles.verticalCard,
          isLast && styles.isLast,
          isActive && isOpen ? styles.active : '',
        )}
        aria-label={verticals?.title}
      >
        <span className={styles.verticalCardContentTitle}>
          <span className={classNames(styles.icon, isLast && styles.isLast)}>
            {xLargeIcon}
          </span>

          {!isLast && <h2>{verticals?.title}</h2>}
        </span>

        {!isLast && (
          <span className={styles.desktopArrow}>
            <span
              className={classNames(
                'arrow desktop',
                isActive && isOpen ? 'active' : '',
              )}
            >
              <ChevronIcon />
            </span>
          </span>
        )}
      </button>
    </li>
  );
};

export default VerticalsCard;
