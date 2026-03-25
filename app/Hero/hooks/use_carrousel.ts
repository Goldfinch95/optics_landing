import { useState, useEffect, useCallback } from 'react';

const AUTOPLAY_INTERVAL = 6000;

export function useCarousel(total: number) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [total]);

  return { current, goTo };
}