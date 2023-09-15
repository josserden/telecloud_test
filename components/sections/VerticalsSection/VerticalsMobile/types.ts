import { type ReactNode } from 'react';

export interface Props {
  options: {
    classname: string;
    xLargeIcon: ReactNode;
    translateClass: string;
    verticalsDescriptionComponentId: number;
    isLast: boolean;
    id: number;
    showingDelay: number;
  };
  subcategoriesHeading: string;
  achievementsHeading: string;
  card: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    subcategories: string[];
    achievements?: Array<{
      id: string;
      number: string;
      symbol: string;
      overText: string;
      description: string;
    }>;
  };
  isAnimate: boolean;
}
