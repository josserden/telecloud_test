import React, { type ReactNode } from "react";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";

import { getDictionary } from "get-dictionary";
import { i18n } from "i18n-config";

import GoogleAnalytics from "components/common/GoogleAnalytics";

const Header = dynamic(() => import("components/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("components/layout/Footer"), {
  ssr: false,
});

const helvetica = localFont({
  src: [
    {
      path: "../public/Fonts/5760861/39ae88e8-7d53-4395-8f9d-f7a0d4060ec4.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Fonts/5760861/0c4f3bb0-d605-4462-9603-9163a560a536.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Fonts/5761058/e62ce8f4-9983-4262-9030-3fdbebcebf39.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/5761058/0e8ae071-ceee-4b41-9d37-cbb6af5a9ca9.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/5760841/46dd84ea-bb96-46da-973b-d7fcca46437e.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/5760841/0fb90058-c064-40ed-8109-d1fd8633caa2.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--helvetica-font",
});

export const metadata = {
  title: "Telecloud Group",
  description:
    "A TECHNOLOGY GROUP WITH 11 SUBSIDIARIES EMPOWERING BUSINESS ACROSS MULTIPLE INDUSTRIES.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}): Promise<React.JSX.Element> {
  const { verticals, footer } = await getDictionary(i18n.defaultLocale);
  const GTAG_ID: string = process.env.GTAG_ID ?? "";

  return (
    <html lang="en">
      <head>
        <title>Telecloud Group</title>
        <link rel="preload" href={process.env.BASE_DOMAIN_URL} />
      </head>

      <GoogleAnalytics GA_MEASURMENT_ID={GTAG_ID} />
      <body className={helvetica.className}>
        <Header verticals={verticals} />

        {children}

        <Footer
          contactsHeading={footer.contactsHeading}
          termsLink={footer.termsLink}
          contactLinks={footer.contactLinks}
          verticalsHeading={footer.verticalsHeading}
          termsHeading={footer.termsHeading}
          verticals={verticals}
        />
      </body>
    </html>
  );
}
