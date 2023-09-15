import React from 'react';
const MonitorIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.50065 23.3749H2.83398V4.95825H31.1673V23.3749H8.50065Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 23.375v4.25M8.5 29.0416h17"
      />
    </svg>
  );
};

export default MonitorIcon;
