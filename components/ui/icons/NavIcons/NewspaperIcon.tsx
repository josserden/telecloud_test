import React from 'react';
const NewspaperIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.8743 31.1667 14.166 25.5M31.1667 31.1667V8.5H17.7083l.7084 5.6667.7083 5.6666.7083 5.6667-4.9583 5.6667h16.2917ZM19.125 19.8333h5.6667M18.416 14.1667h6.375"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.83398 2.83325H17.0007l.7083 5.66667.7083 5.66668.7084 5.6667.7083 5.6666H2.83398V2.83325ZM7.08398 8.5h4.95832M7.08398 14.1667h5.66672M7.08398 19.8333H13.459"
      />
    </svg>
  );
};

export default NewspaperIcon;
