'use client';
import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import LocationsItem from './LocationsItem';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import { type LocationsSectionProps } from './types';
import styles from './index.module.css';

const LocationsSection: React.FC<LocationsSectionProps> = ({
  locationsHeading,
  locationsItems,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const intersection = useIntersectionObserver(listRef, { threshold: 0.4 });

  useEffect(() => {
    if (intersection?.isIntersecting != null && intersection?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [intersection]);

  return (
    <section className={classNames(styles.locations)}>
      <div className={classNames(styles.locationsContent, 'container')}>
        <h2 className={classNames(isIntersecting && 'activeFrameText')}>
          {locationsHeading}
        </h2>
        <ul
          className={classNames(
            styles.locationsList,
            intersection?.isIntersecting != null && styles.active,
          )}
          ref={listRef}
        >
          {locationsItems?.cards?.map(item => (
            <li
              key={item.id}
              className={classNames(
                styles.locationsItem,
                styles[`${item.classname}`],
                styles[`${item.translateClass}`],
                isIntersecting ? styles.active : '',
              )}
            >
              <LocationsItem content={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocationsSection;
