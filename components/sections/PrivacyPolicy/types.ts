export interface Props {
  privacy: {
    title: string;
    effectiveDate: string;
    description: string;
    list: {
      collect: {
        name: string;
        items: {
          first: string;
          second: string;
        };
      };
      use: {
        name: string;
        items: {
          first: string;
          second: string;
        };
      };
      cookie: string;
      thirdParty: string;
      disclosure: string;
      security: string;
      children: string;
      changes: string;
      contact: string;
    };
    endText: string;
  };
}
