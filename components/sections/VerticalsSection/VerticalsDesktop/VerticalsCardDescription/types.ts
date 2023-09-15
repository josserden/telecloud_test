import { type ReactNode } from 'react';

export interface Props {
  icon?: ReactNode;
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
      symbol: string;
      overText: string;
      description: string;
    }>;
  };
  id?: number;
  isVisibleDescription: boolean;
  scrollPos?: number;
  setIsOpen: (params: boolean) => void;
}
