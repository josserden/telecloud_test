'use client';

import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { useMediaQuery } from 'react-responsive';

import data from './data.json';
import styles from './index.module.css';

interface Props {
  title: string;
}

const LogoList: React.FC<Props> = ({ title }) => {
  const matches = useMediaQuery({ query: '(max-width: 769px)' });
  return (
    <section className={classNames(styles.LogoListSection, 'container')}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.logoList}>
        {data.map(item => (
          <li key={item.id} className={styles.logoListItem}>
            <Image
              src={item.img}
              alt="logo item"
              width={matches ? item.sWidth : item.width}
              height={matches ? item.sHeight : item.height}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogoList;
