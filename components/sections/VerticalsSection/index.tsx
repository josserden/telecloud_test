'use client';
import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { VERTICALS } from 'constants/veticals';
import VerticalsDesktop from './VerticalsDesktop';
import VerticalsCardMobile from './VerticalsMobile';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { type Props } from './types';
import styles from './index.module.css';

const VerticalsSection: React.FC<Props> = ({ verticals }) => {
  const isMatches = useMediaQuery({ query: '(min-width: 1025px)' });

  const ref = useRef<HTMLHeadingElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const intersection = useIntersectionObserver(ref, {
    threshold: 1,
  });

  const intersectionList = useIntersectionObserver(listRef, {
    threshold: 0.25,
  });

  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [descriptionId, setDescriptionId] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingList, setIsIntersectingList] = useState(false);

  useEffect(() => {
    if (intersection?.isIntersecting != null && intersection?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [intersection]);

  useEffect(() => {
    if (
      intersectionList?.isIntersecting != null &&
      intersectionList?.isIntersecting
    ) {
      setIsIntersectingList(true);
    }
  }, [intersectionList]);

  return (
    <section className={classNames(styles.verticals, 'container')}>
      <h2
        ref={ref}
        className={classNames(
          styles.heading,
          isIntersecting && 'activeFrameText',
        )}
      >
        {verticals?.heading}
      </h2>

      <ul className={styles.verticalsGrid} ref={listRef}>
        {VERTICALS.map(item => (
          <Fragment key={item.id}>
            {isMatches && (
              <VerticalsDesktop
                options={item}
                isAnimate={isIntersectingList}
                verticals={verticals}
                hasComponent={item.hasComponent}
                setDescriptionId={setDescriptionId}
                descriptionId={descriptionId}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                setActiveCardIdx={setActiveCardIdx}
                setScrollPos={setScrollPos}
                activeCardIdx={activeCardIdx}
                scrollPos={scrollPos}
              />
            )}

            {!item?.isLast && (
              <VerticalsCardMobile
                options={item}
                isAnimate={isIntersectingList}
                card={verticals?.cards[item.id]}
                achievementsHeading={verticals?.achievementsHeading}
                subcategoriesHeading={verticals?.subcategoriesHeading}
              />
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default VerticalsSection;
