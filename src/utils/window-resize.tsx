import { useState, useEffect } from 'react';

interface WindowSizes {
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

function getSize(window): WindowSizes {
  return {
    innerHeight: window?.innerHeight,
    innerWidth: window?.innerWidth,
    outerHeight: window?.outerHeight,
    outerWidth: window?.outerWidth,
  };
}

export function useWindowSize(): WindowSizes {
  // eslint-disable-next-line no-undef
  const window = global.window;

  const [windowSize, setWindowSize] = useState(getSize(window));

  const handleResize = (): void => {
    // eslint-disable-next-line no-console
    console.log('resize', getSize(window));
    setWindowSize(getSize(window));
  };

  const handleLoad = (): void => {
    // eslint-disable-next-line no-console
    console.log('load', getSize(window));
    setWindowSize(getSize(window));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);
    return (): void => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return windowSize;
}
