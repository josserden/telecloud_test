import React from 'react';
import classNames from 'classnames';

import { type Props } from './types';
import styles from './index.module.css';

const NavigationCard: React.FC<Props> = ({ card, icon, heading, isOpen }) => {
  return (
    <div
      className={classNames(styles.navigationArticle, isOpen && styles.active)}
      key={card?.id}
    >
      <h4>
        <span className={styles.icon}>{icon}</span>
        {card?.title}
      </h4>
      <p className={styles.subtitle}>{card?.subtitle}</p>
      <p>{card?.description}</p>
      <h4 className={styles.subcategories}>{heading}</h4>
      <ul>
        {card?.subcategories?.map(item => (
          <li key={item.toLowerCase()}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationCard;
