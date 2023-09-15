import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const isBrowser = typeof window !== `undefined`;

function getScrollPosition(): ScrollPosition {
  return isBrowser ? { x: window.scrollY, y: window.scrollY } : { x: 0, y: 0 };
}

const useScrollPosition = (): ScrollPosition => {
  const [position, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition(),
  );

  useEffect(() => {
    let requestRunning: number | null = null;
    const handleScroll = (): void => {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    };

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return position;
};

export function useScrollXPosition(): number {
  const { x } = useScrollPosition();
  return x;
}

export function useScrollYPosition(): number {
  const { y } = useScrollPosition();
  return y;
}
