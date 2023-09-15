import React from 'react';
export const MailIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 32 32">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2.66602 26H29.3327V6H2.66602v20Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2.66602 6 15.9993 16 29.3327 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.9993 6H2.66602v10M29.3333 16V6H16"
      />
    </svg>
  );
};
