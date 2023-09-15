import React from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import LogoIcon from '../../ui/icons/LogoIcon/LogoIcon';

import styles from './index.module.css';

const Logo = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <a
      href="/"
      className={classNames(
        styles.logo,
        pathname === '/privacy-policy' || pathname === '/terms-of-service'
          ? styles.privacyLogo
          : '',
      )}
      aria-label="Site logo"
    >
      <LogoIcon />
    </a>
  );
};

export default Logo;
