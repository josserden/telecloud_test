export interface Props {
  verticalsHeading: string;
  termsHeading: string;
  contactsHeading: string;
  verticals: {
    cards: Array<{
      id: string;
      title: string;
      description: string;
      subtitle: string;
      subcategories: string[];
      achievements?: Array<{
        id: string;
        number: string;
        description: string;
      }>;
    }>;
  };
  termsLink: {
    privacy: string;
    privacyURL: string;
    terms: string;
    termsURL: string;
  };
  contactLinks: {
    phone: string;
    email: string;
  };
}
