import React from "react";
import dynamic from "next/dynamic";
import { i18n } from "i18n-config";
import { getDictionary } from "get-dictionary";

import styles from "./page.module.css";

const HeroSection = dynamic(() => import("components/sections/HeroSection"), {
  ssr: false,
});

const VerticalsSection = dynamic(
  () => import("components/sections/VerticalsSection"),
  { ssr: false },
);

const AchievementsSection = dynamic(
  () => import("components/sections/AchievementsSection"),
  { ssr: false },
);
const LogoList = dynamic(() => import("components/sections/LogoListSection"), {
  ssr: false,
});
const LocationsSection = dynamic(
  () => import("components/sections/LocationsSection"),
  { ssr: false },
);
const HeadlineArticle = dynamic(
  () => import("components/sections/HeadlineArticle"),
  { ssr: false },
);

export default async function Home(): Promise<React.JSX.Element> {
  const {
    verticals,
    achievements: { heading, items },
    locations,
    logoList: { title },
    hero,
  } = await getDictionary(i18n.defaultLocale);

  return (
    <main className={styles.main}>
      <HeroSection hero={hero} />

      <VerticalsSection verticals={verticals} />

      <AchievementsSection sectionTitle={heading} items={items} />

      <LogoList title={title} />

      <LocationsSection
        locationsHeading={locations.heading}
        locationsItems={locations}
      />

      <HeadlineArticle
        heading={locations.headline.heading}
        description={locations.headline.description}
        title={locations.headline.title}
      />
    </main>
  );
}
