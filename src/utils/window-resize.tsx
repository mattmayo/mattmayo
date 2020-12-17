import { useState, useEffect } from 'react';

interface WindowSizes {
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

function getSize(): WindowSizes {
  // eslint-disable-next-line no-undef
  const window = global.window;

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export function useWindowSize(): WindowSizes {
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = (): void => {
    setWindowSize(getSize());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
