export interface IDictionaries {
  hero: { description: string };
  logoList: { title: string };
  verticals: {
    heading: string;
    subcategoriesHeading: string;
    achievementsHeading: string;
    cards: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      subcategories: string[];
      achievements?: Array<{
        id: string;
        number: string;
        overText: string;
        symbol: string;
        description: string;
      }>;
    }>;
  };
  achievements: {
    heading: string;
    items: Array<{
      id: string;
      symbol: string;
      description: string;
      count: string;
      classname: string;
    }>;
  };
  locations: {
    heading: string;
    headline: {
      heading: string;
      title: string;
      description: string;
    };
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
  footer: {
    verticalsHeading: string;
    termsHeading: string;
    contactsHeading: string;
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
  };
}

export const i18n = {
  defaultLocale: 'en',
  locales: ['en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
