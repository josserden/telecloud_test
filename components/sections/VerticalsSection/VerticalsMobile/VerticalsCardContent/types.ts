export interface Props {
  active: boolean;
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
}
