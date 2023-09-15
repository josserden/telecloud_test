declare global {
  type CSSPropertiesWithVars = Record<`--${string}`, string | number>;
}

export {};
