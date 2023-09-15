'use client';

import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import CountItem from './CountItem';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { type Props } from './types';
import styles from './index.module.css';

const AchievementsSection: React.FC<Props> = ({ sectionTitle, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersection = useIntersectionObserver(ref, { threshold: 0.5 });

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (intersection?.isIntersecting != null && intersection?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [intersection]);

  return (
    <section className={classNames(styles.achievements, 'container')} ref={ref}>
      <h2>{sectionTitle}</h2>
      <ul className={styles.achievementsCounter}>
        {items.map(item => (
          <li key={item.id}>
            <CountItem
              isCounted={isIntersecting}
              duration={2}
              classname={item.classname}
              count={item.count}
              description={item.description}
              symbol={item.symbol}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AchievementsSection;
