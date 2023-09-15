export interface LocationsSectionProps {
  locationsHeading: string;
  locationsItems: {
    cards: Array<{
      id: string;
      title: string;
      translateClass: string;
      classname: string;
      address: {
        location: string;
        phone: string;
        email: string;
      };
    }>;
  };
}
