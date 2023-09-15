'use client';

import React, { useRef, useEffect, useState } from 'react';

import Image from 'next/image';
import classNames from 'classnames';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { type Props } from './types';
import styles from './index.module.css';

const HeadlineArticle: React.FC<Props> = ({ heading, title, description }) => {
  const ref = useRef<HTMLDivElement>(null);

  const intersection = useIntersectionObserver(ref, { threshold: 0.3 });

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (intersection?.isIntersecting != null && intersection?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [intersection]);

  return (
    <section
      ref={ref}
      className={classNames(
        styles.headlineSection,
        'container',
        isIntersecting && styles.active,
      )}
    >
      <h2
        className={classNames(
          styles.heading,
          isIntersecting && 'activeFrameText',
        )}
      >
        {heading}
      </h2>
      <div className={styles.headline}>
        <div className={styles.headlineText}>
          <h2 className={classNames(isIntersecting && 'activeFrameText')}>
            {title}
          </h2>
          <p>{description}</p>
        </div>

        <Image
          src="https://telecloud.b-cdn.net/fouad_new.png"
          width={324}
          height={397}
          alt="Picture of CEO"
        />
      </div>
    </section>
  );
};

export default HeadlineArticle;
