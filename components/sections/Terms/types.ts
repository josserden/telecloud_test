export interface Props {
  terms: {
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
      intellectual: string;
      disclaimer: string;
      limitation: string;
      indemnification: string;
      changes: string;
      governing: string;
      severability: string;
      contact: string;
    };
    endText: string;
  };
}
