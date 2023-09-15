'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import Logo from '../../common/Logo';
import HamburgerButton from '../../common/HamburgerButton';
import Navigation from 'components/sections/NavigationSection';

import styles from './index.module.css';
import { type Props } from './types';

const Header: React.FC<Props> = ({ verticals }) => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const openNavHandle = (): void => {
    setNavIsOpen(true);
  };

  const closeNavHandle = (): void => {
    setNavIsOpen(false);
  };

  useEffect(() => {
    if (navIsOpen) {
      document.body.classList.add('navIsOpen');
    } else {
      document.body.classList.remove('navIsOpen');
    }
  }, [navIsOpen]);

  return (
    <>
      <header
        className={classNames(
          styles.projectHeader,
          pathname === '/privacy-policy' || pathname === '/terms-of-service'
            ? styles.privacyHeader
            : '',
        )}
      >
        <div className={styles.projectHeaderWrapper}>
          <Logo />

          {pathname === '/privacy-policy' ||
          pathname === '/terms-of-service' ? (
            <></>
          ) : (
            <HamburgerButton openNavHandle={openNavHandle} isOpen={navIsOpen} />
          )}
        </div>
      </header>

      <Navigation
        isOpen={navIsOpen}
        isClose={closeNavHandle}
        verticals={verticals}
      />
    </>
  );
};

export default Header;
