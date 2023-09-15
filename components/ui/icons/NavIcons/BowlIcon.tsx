import React from 'react';
const BowlIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.6667 31.1667s0-2.7374.001-2.7426c.4939-.2454.9695-.5219 1.4244-.827a12.80867 12.80867 0 0 0 1.9235-1.5815C28.3229 23.7083 29.75 20.5208 29.75 17H4.25c0 3.5208 1.42709 6.7083 3.7344 9.0156a12.8085 12.8085 0 0 0 1.94254 1.5942c.45226.3021.92496.5762 1.41566.8195l-.0093 2.7374h11.3334ZM17 12.7559V5.66669M25.5 12.7559V8.5M8.5 12.7559V8.5M28.3333 5.66669c-1.5647 0-2.8333 1.26852-2.8333 2.83333M19.8333 2.83331C18.2686 2.83331 17 4.10184 17 5.66665M11.3333 5.66669C9.76855 5.66669 8.5 6.93521 8.5 8.50002"
      />
    </svg>
  );
};

export default BowlIcon;
