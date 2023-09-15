import React from 'react';
const EarthIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.0007 31.1666c7.824 0 14.1666-6.3426 14.1666-14.1667 0-7.82402-6.3426-14.16665-14.1666-14.16665-7.82409 0-14.16672 6.34263-14.16672 14.16665 0 7.8241 6.34263 14.1667 14.16672 14.1667Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.83398 17H31.1673"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.0007 31.1666c3.1296 0 5.6666-6.3426 5.6666-14.1667 0-7.82402-2.537-14.16665-5.6666-14.16665-3.1297 0-5.6667 6.34263-5.6667 14.16665 0 7.8241 2.537 14.1667 5.6667 14.1667Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.98242 7.18396C9.54609 9.74763 13.0878 11.3333 16.9997 11.3333c3.9121 0 7.4538-1.58567 10.0174-4.14934M27.0171 26.8161c-2.5636-2.5637-6.1053-4.1494-10.0174-4.1494-3.9119 0-7.45361 1.5857-10.01728 4.1494"
      />
    </svg>
  );
};

export default EarthIcon;
