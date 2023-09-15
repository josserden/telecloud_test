import { useCallback, useEffect, useState } from 'react';

const useHeightDifference = (
  ref: React.RefObject<HTMLElement>,
  height: number,
): number => {
  const [heightDif, setHeightDif] = useState(0);

  const resizeHanlder = useCallback(() => {
    ref?.current !== null && setHeightDif(ref.current?.scrollHeight - height);
  }, [ref, height]);

  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);

    return () => {
      window.removeEventListener('resize', resizeHanlder);
    };
  }, [resizeHanlder]);

  return heightDif;
};

export default useHeightDifference;
