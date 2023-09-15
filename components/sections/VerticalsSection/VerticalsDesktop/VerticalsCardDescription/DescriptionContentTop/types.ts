import { type ReactNode } from 'react';

export interface Props {
  isOpenDescription: boolean;
  subcategoriesHeading: string;
  verticals: {
    id: string;
    title: string;
    description: string;
    subtitle: string;
    subcategories: string[];
    achievements?: Array<{
      id: string;
      number: string;
      description: string;
      symbol: string;
      overText: string;
    }>;
  };
  icon: ReactNode;
}
