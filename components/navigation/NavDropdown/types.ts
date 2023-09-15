export interface Props {
  card?: {
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
  subcategoriesHeading?: string;
  achievementsHeading?: string;
}
