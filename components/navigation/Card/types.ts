import { type ReactNode } from 'react';

export interface Props {
  card?: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    subcategories: string[];
  };
  icon?: ReactNode;
  heading?: string;
  isOpen: boolean;
}
