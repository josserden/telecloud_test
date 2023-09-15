import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ChevronIcon } from 'components/ui/icons/ChevronIcon/ChevronIcon';
import { MailIcon } from 'components/ui/icons/MailIcon';
import { PhoneIcon } from 'components/ui/icons/PhoneIcon';

import { type LocationsItemProps } from './types';
import styles from './index.module.css';

const LocationsItem: React.FC<LocationsItemProps> = ({
  content: { address, title },
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const onClickHandle = (): void => {
    setActive(!active);
    if (ref?.current != null)
      setHeight(active ? 0 : ref?.current?.scrollHeight);
  };

  useEffect(() => {
    ref?.current?.style.setProperty('--height', `${height}px`);
  }, [height]);

  return (
    <>
      <button onClick={onClickHandle} className={styles.locationsItemBtn}>
        <h3 className={styles.title}>
          {title}-{address?.location}
        </h3>
        <span className={classNames('arrow', active ? 'active' : '')}>
          <ChevronIcon />
        </span>
      </button>
      <address
        ref={ref}
        className={classNames(
          styles.locationsItemContentDescription,
          active ? styles.active : '',
        )}
      >
        <h3 className={classNames(styles.title, styles.locationsInfoLocation)}>
          {title}-{address?.location}
        </h3>
        <ul className={styles.locationsContactList}>
          <li>
            <a href={`tel:${address.phone}`}>
              <span className={styles.icon}>
                <PhoneIcon size={32} />
              </span>
              {address?.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${address?.email}`} className={styles.mail}>
              <span className={styles.icon}>
                <MailIcon size={32} />
              </span>
              {address?.email}
            </a>
          </li>
        </ul>
      </address>
    </>
  );
};

export default LocationsItem;
