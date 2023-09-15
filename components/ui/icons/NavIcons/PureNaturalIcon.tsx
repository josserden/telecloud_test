import React from 'react';
const PureNaturalIcon = ({ size }: { size: number }): React.JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 34 34" width={size} height={size}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.79102 29.0418c2.95188-1.2685 5.73198-1.9529 8.34038-2.0532 2.6083-.1003 5.9671.348 10.0763 1.3449"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M16.3231 31.1667c-.5432-6.6867-.3179-11.8812.6761-15.5833"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 16.4163c1.1263-4.2626 3.1094-6.80477 5.9494-7.62623 2.84-.82152 5.5791-.44505 8.2171 1.12944.0133 3.46509-1.4907 6.00359-4.5122 7.61529-3.0215 1.6118-6.2396 1.2389-9.6543-1.1185ZM16.8532 15.6642c.5904-5.0907-.5925-8.67611-3.5485-10.7564C10.3486 2.82751 6.92559 2.363 3.03549 3.51428c-.67938 4.6958.35916 8.24662 3.11561 10.65242 2.75649 2.4058 6.3239 2.9049 10.7021 1.4975Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PureNaturalIcon;
