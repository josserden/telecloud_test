import React, { type FC } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import { type Props } from './types';

const Terms: FC<Props> = ({ terms }) => {
  return (
    <section className={classNames(styles.terms, 'container')}>
      <h1>{terms.title}</h1>
      <p>{terms.effectiveDate}</p>
      <p>{terms.description}</p>
      <ol>
        <li>
          {terms.list.collect.name}
          <ol>
            <li>{terms.list.collect.items.first}</li>
            <li>{terms.list.collect.items.second}</li>
          </ol>
        </li>
        <li>{terms.list.intellectual}</li>
        <li>{terms.list.disclaimer}</li>
        <li>{terms.list.limitation}</li>
        <li>{terms.list.indemnification}</li>
        <li>{terms.list.changes}</li>
        <li>{terms.list.governing}</li>
        <li>{terms.list.severability}</li>
        <li>{terms.list.contact}</li>
      </ol>
      <p>{terms.endText}</p>
    </section>
  );
};

export default Terms;
