import { type HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  openNavHandle?: () => void;
  isNavToggler?: boolean;
}
