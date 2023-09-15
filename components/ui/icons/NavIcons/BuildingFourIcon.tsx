import React from 'react';
const BuildingFourIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12.041 5.33984 19.125 7.08336v14.1666H12.041V5.33984Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.0423 5.33984 2.83398 12.4232v14.1666h9.20832M24.791 26.5898v-8.5l-6.375-2.125v10.625"
      />
    </svg>
  );
};

export default BuildingFourIcon;
