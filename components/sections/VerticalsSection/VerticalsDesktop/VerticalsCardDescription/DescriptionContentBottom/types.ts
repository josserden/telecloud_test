export interface Props {
  achievements?: Array<{
    id: string;
    number: string;
    symbol: string;
    overText: string;
    description: string;
  }>;
  isOpenDescription: boolean;
}
