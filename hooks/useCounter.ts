import { useState, useMemo } from 'react';

const useCounter = (
  isCounted: boolean,
  count: string,
  duration: number,
): string => {
  const [value, setValue] = useState('0');

  useMemo(() => {
    let start = 0;

    const end = parseInt(count.substring(0, 3));

    if (start === end) return;

    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      if (isCounted) {
        start += 1;
        setValue(String(start) + count.substring(3));
        if (start === end) clearInterval(timer);
      }
    }, incrementTime);
  }, [count, duration, isCounted]);

  return value;
};

export default useCounter;
