export interface Props {
  verticals: {
    heading: string;
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
}
