import React from 'react';

import Terms from 'components/sections/Terms';

import { getDictionary } from 'get-dictionary';
import { i18n } from 'i18n-config';

export default async function TermsOfService(): Promise<React.JSX.Element> {
  const { terms } = await getDictionary(i18n.defaultLocale);

  return (
    <main>
      <Terms terms={terms} />
    </main>
  );
}
