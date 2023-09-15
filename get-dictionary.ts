import type { Locale, IDictionaries } from './i18n-config';

const dictionaries = {
  en: async () =>
    await import('./dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale): Promise<IDictionaries> =>
  await dictionaries[locale]();
