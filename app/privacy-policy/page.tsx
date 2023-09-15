import React from 'react';

import Privacy from 'components/sections/PrivacyPolicy';

import { getDictionary } from 'get-dictionary';
import { i18n } from 'i18n-config';

export default async function PrivacyPolicy(): Promise<React.JSX.Element> {
  const { privacy } = await getDictionary(i18n.defaultLocale);

  return (
    <main>
      <Privacy privacy={privacy} />
    </main>
  );
}
