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
  verticals: {
    subcategoriesHeading: string;
    achievementsHeading: string;
    cards: Array<{
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
    }>;
  };
  isAnimate: boolean;
  hasComponent: boolean;
  isOpen: boolean;
  setIsOpen: (params: boolean) => void;
  setActiveCardIdx: (idx: number) => void;
  setDescriptionId: (id: number) => void;
  setScrollPos: (y: number) => void;
  activeCardIdx: number;
  descriptionId: number;
  scrollPos?: number;
}
