import React from 'react';
const MonitorWithArrow = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path
        d="M11 33V40.3333H40.3333V11H33V18.3333H25.6667V25.6667H18.3333V33H11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 11.9167L24.75 3.66675"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 3.66675H24.75V9.16675"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MonitorWithArrow;
