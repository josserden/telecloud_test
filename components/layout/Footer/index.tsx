'use client';

import React, { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { VERTICALS } from 'constants/veticals';

import LogoIconWIthText from 'components/ui/icons/LogoIconWithText/LogoIconWIthText';
import { PhoneIcon } from 'components/ui/icons/PhoneIcon';
import { MailIcon } from 'components/ui/icons/MailIcon';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import styles from './index.module.css';
import { type Props } from './types';

const Footer: React.FC<Props> = ({
  verticals,
  termsLink,
  verticalsHeading,
  contactsHeading,
  termsHeading,
  contactLinks,
}) => {
  const pathname = usePathname();

  const ref = useRef<HTMLElement>(null);
  const intersection = useIntersectionObserver(ref, { threshold: 0.3 });

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (intersection?.isIntersecting != null && intersection?.isIntersecting) {
      setIsIntersecting(true);
    }
  }, [intersection]);

  return (
    <footer
      className={classNames(
        styles.projectFooter,
        isIntersecting && styles.active,
      )}
      ref={ref}
    >
      <div className={'container'}>
        <div className={styles.projectFooterContent}>
          <a
            href="/"
            className={classNames(
              styles.footerLogo,
              (pathname === '/privacy-policy' ||
                pathname === '/terms-of-service') &&
                styles.privacyFooterLogo,
              pathname === '/privacy-policy' ||
                (pathname === '/terms-of-service'
                  ? ''
                  : isIntersecting && 'activeFrameText'),
            )}
            aria-label="Site logo"
          >
            <LogoIconWIthText />
          </a>
          {pathname === '/privacy-policy' ||
          pathname === '/terms-of-service' ? (
            <> </>
          ) : (
            <div className={styles.projectFooterLinks}>
              <div className={styles.projectFooterLinksItem}>
                <h3>{verticalsHeading}</h3>

                <ul className={styles.verticalsLinkList}>
                  {VERTICALS.map(
                    (item, index) =>
                      !item.isLast && (
                        <li key={item.id}>
                          <a href={item.url}>
                            {verticals?.cards?.[index]?.title}
                          </a>
                        </li>
                      ),
                  )}
                </ul>
              </div>

              <div
                className={classNames(
                  styles.projectFooterLinksItem,
                  styles.projectFooterTerms,
                )}
              >
                <h3>{termsHeading}</h3>
                <ul>
                  <li>
                    <a href={termsLink.privacyURL}>{termsLink.privacy}</a>
                  </li>
                  <li>
                    <a href={termsLink.termsURL}>{termsLink.terms}</a>
                  </li>
                </ul>
              </div>
              <div className={styles.projectFooterLinksItem}>
                <h3>{contactsHeading}</h3>

                <ul>
                  <li>
                    <a href={`tel:${contactLinks.phone}`}>
                      <span className={styles.icon}>
                        <PhoneIcon size={24} />
                      </span>
                      {contactLinks?.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactLinks?.email}`}
                      className={styles.mail}
                    >
                      <span className={styles.icon}>
                        <MailIcon size={24} />
                      </span>
                      {contactLinks?.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
