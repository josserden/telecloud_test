'use client';
import React from 'react';
import Script from 'next/script';

type Props = {
  GA_MEASURMENT_ID: string;
};

const GoogleAnalytics = ({ GA_MEASURMENT_ID }: Props) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASURMENT_ID}`}
      />

      <Script id="google-analytics" strategy={'lazyOnload'}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${GA_MEASURMENT_ID});
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
