'use client';

import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import classNames from 'classnames';

import DescriptionContentTop from './DescriptionContentTop';
import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';

import { type Props } from './types';
import styles from './index.module.css';

const VerticalsCardDescription: React.FC<Props> = ({
  id,
  icon,
  verticals,
  subcategoriesHeading,
  isVisibleDescription,
  scrollPos,
  setIsOpen,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (refContent.current !== null && ref?.current !== null) {
      if (isVisibleDescription) {
        setHeight(ref?.current?.scrollHeight);
        ref?.current?.classList.add(styles.active);
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
        refContent?.current?.classList.remove(styles.removeHeight);
        refContent?.current?.classList.add(styles.activeWrapper);
      } else {
        setHeight(0);
        refContent?.current?.classList.remove(styles.activeWrapper);
        refContent?.current?.classList.add(styles.removeHeight);
        ref?.current?.classList.remove(styles.active);
      }
    }
  }, [isVisibleDescription, id]);

  const onClickHandle = useCallback(() => {
    setIsOpen(false);
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
  }, [setIsOpen, scrollPos]);

  useEffect(() => {
    if (isVisibleDescription) {
      const handleClickOutside = (event: MouseEvent): void => {
        if (
          ref.current != null &&
          !ref.current.contains(event.target as Node)
        ) {
          onClickHandle();
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [onClickHandle, isVisibleDescription]);

  useEffect(() => {
    ref?.current?.style.setProperty('--height', `${height}px`);
  }, [height]);

  return (
    <li
      key={id}
      ref={ref}
      className={classNames(styles.description, 'fullWidth')}
    >
      <div ref={refContent} className={styles.descriptionWrapper}>
        <div className={'container'}>
          <div className={styles.descriptionContent}>
            <button onClick={onClickHandle} className={styles.desktopArrow}>
              <div className={classNames('arrow desktop active')}>
                <ChevronIcon />
              </div>
            </button>
            <DescriptionContentTop
              subcategoriesHeading={subcategoriesHeading}
              isOpenDescription={isVisibleDescription}
              verticals={verticals}
              icon={icon}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default VerticalsCardDescription;
