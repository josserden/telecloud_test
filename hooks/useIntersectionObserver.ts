import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  { threshold = 0, root = null, rootMargin = '0%' },
): IntersectionObserverEntry | undefined => {
  const [state, setState] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([elementState]) => {
        setState(elementState);
      },
      {
        threshold,
        root,
        rootMargin,
      },
    );
    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold]);

  return state;
};

export default useIntersectionObserver;
