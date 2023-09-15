'use client';
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';

import { VERTICALS } from 'constants/veticals';
import HamburgerButton from 'components/common/HamburgerButton';
import NavDropdown from 'components/navigation/NavDropdown';
import MediaQuery from 'react-responsive';

import styles from './index.module.css';
import { type Props } from './types';

const SideBar: React.FC<Props> = ({
  isOpen,
  verticals,
  isClose,
  handleHover,
  handleHoverOut,
}) => {
  // const isMatches = useMediaQuery({ query: '(max-width: 1025px)' });
  const focusedElement = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      focusedElement.current?.focus();
    }
  }, [isOpen]);

  return (
    <nav
      className={classNames(
        styles.navigationContent,
        styles.navigationRight,
        isOpen ? styles.active : '',
      )}
    >
      <HamburgerButton
        openNavHandle={isClose}
        isOpen={true}
        isNavToggler={true}
        ref={focusedElement}
      />

      <ul className={styles.desktopNav}>
        {VERTICALS.map(
          (item, index) =>
            !item.isLast && (
              <li
                key={item.id}
                onMouseOver={() => {
                  handleHover(item.id);
                }}
                onMouseOut={handleHoverOut}
              >
                <p className={styles.menuItem}>
                  <span className={styles.navIcon}>{item.icon}</span>
                  {verticals?.cards?.[index].title}
                </p>
                <MediaQuery maxWidth={1025}>
                  <NavDropdown
                    subcategoriesHeading={verticals?.subcategoriesHeading}
                    achievementsHeading={verticals?.achievementsHeading}
                    card={verticals?.cards?.[index]}
                  />
                </MediaQuery>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default SideBar;
