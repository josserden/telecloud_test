import React, { type FC } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import { type Props } from './types';

const Privacy: FC<Props> = ({ privacy }) => {
  return (
    <section className={classNames(styles.privacy, 'container')}>
      <h1>{privacy.title}</h1>
      <p>{privacy.effectiveDate}</p>
      <p>{privacy.description}</p>
      <ol>
        <li>
          {privacy.list.collect.name}
          <ol>
            <li>{privacy.list.collect.items.first}</li>
            <li>{privacy.list.collect.items.second}</li>
          </ol>
        </li>
        <li>
          {privacy.list.use.name}
          <ol>
            <li>{privacy.list.use.items.first}</li>
            <li>{privacy.list.use.items.second}</li>
          </ol>
        </li>
        <li>{privacy.list.cookie}</li>
        <li>{privacy.list.thirdParty}</li>
        <li>{privacy.list.disclosure}</li>
        <li>{privacy.list.security}</li>
        <li>{privacy.list.children}</li>
        <li>{privacy.list.changes}</li>
        <li>{privacy.list.contact}</li>
      </ol>
      <p>{privacy.endText}</p>
    </section>
  );
};

export default Privacy;
