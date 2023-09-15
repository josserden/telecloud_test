"use client";

import React from "react";
import classNames from "classnames";

import { type Props } from "./types";
import styles from "./index.module.css";

const HeroSection: React.FC<Props> = ({ hero }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={classNames(styles.mobileBg, styles.mobileBgLeft)}>
          <svg width="44" height="39" viewBox="0 0 42 39" fill="none">
            <path
              d="M43.0098 3.8147e-06L43.0098 39L0.00976181 39C29.5104 34.4651 38.0097 23.1279 43.0098 3.8147e-06Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className={classNames(styles.mobileBg, styles.mobileBgRight)}>
          <svg width="44" height="39" viewBox="0 0 42 39" fill="none">
            <path
              d="M43.0098 3.8147e-06L43.0098 39L0.00976181 39C29.5104 34.4651 38.0097 23.1279 43.0098 3.8147e-06Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          width={610}
          height={254}
          poster={"./images/poster.webp"}
        >
          {/*<source src="https://telecloud.b-cdn.net/bg.webm" type="video/webm" />*/}
          <source src="https://telecloud.b-cdn.net/bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.heroContent}>
        <h1>
          <span className={styles.firstWord}>Tele</span>
          <span className={styles.secondWord}>Cloud</span>
          <span className={styles.thirdWord}>Group</span>
        </h1>
        <p>{hero?.description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
