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
  setActiveCardIdx: (idx: number) => void;
  setDescriptionId: (id: number) => void;
  setScrollPos: (y: number) => void;
  setIsOpen: (params: boolean) => void;
  isActive: boolean;
  isOpen: boolean;
  isAnimate: boolean;
}
