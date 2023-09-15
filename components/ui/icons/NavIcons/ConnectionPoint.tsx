import React from 'react';
const ConnectionPoint = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 34 34">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.25 17h25.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.8333 2.83337h-5.6666c-.7824 0-1.4167.63427-1.4167 1.41667v5.66667c0 .78239.6343 1.41669 1.4167 1.41669h5.6666c.7824 0 1.4167-.6343 1.4167-1.41669V4.25004c0-.7824-.6343-1.41667-1.4167-1.41667ZM11.3333 22.6666H5.66667c-.78241 0-1.41667.6343-1.41667 1.4167V29.75c0 .7824.63426 1.4166 1.41667 1.4166h5.66663c.7824 0 1.4167-.6342 1.4167-1.4166v-5.6667c0-.7824-.6343-1.4167-1.4167-1.4167ZM28.3333 22.6666h-5.6666c-.7824 0-1.4167.6343-1.4167 1.4167V29.75c0 .7824.6343 1.4166 1.4167 1.4166h5.6666c.7824 0 1.4167-.6342 1.4167-1.4166v-5.6667c0-.7824-.6343-1.4167-1.4167-1.4167Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17 17.0059.0059-5.6725M25.5 22.6725 25.5059 17M8.5 22.6725 8.50588 17"
      />
    </svg>
  );
};

export default ConnectionPoint;
