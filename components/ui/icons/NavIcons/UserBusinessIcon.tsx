import React from 'react';
const UserBusinessIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.0007 14.1666c3.1296 0 5.6666-2.5371 5.6666-5.66668 0-3.12962-2.537-5.66667-5.6666-5.66667-3.1297 0-5.6667 2.53705-5.6667 5.66667 0 3.12958 2.537 5.66668 5.6667 5.66668ZM29.75 31.1666c0-7.0416-5.7084-12.75-12.75-12.75-7.04161 0-12.75 5.7084-12.75 12.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16.9993 31.1667 2.8334-3.5416-2.8334-9.2084-2.8333 9.2084 2.8333 3.5416Z"
      />
    </svg>
  );
};

export default UserBusinessIcon;
