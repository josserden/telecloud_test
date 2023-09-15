import React from 'react';
const RocketIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13.25 5.59185 3.7507-2.7586 3.7506 2.7586c2.5407 1.86872 4.041 4.83465 4.041 7.98855v12.6279H9.20898V13.5804c0-3.1539 1.50032-6.11983 4.04102-7.98855Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9.20898 12.0416-4.25 4.25v5.6667l4.25-2.125v-7.7917ZM24.793 12.0415l4.25 4.25v5.6667l-4.25-2.125v-7.7917Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.75 27.625v2.125M17 27.625v3.5417M21.25 27.625v2.125"
      />
    </svg>
  );
};

export default RocketIcon;
