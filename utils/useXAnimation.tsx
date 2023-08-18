import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

type ScreenType = 'mobile' | 'desktop';

export function useXAnimation(isOpen: boolean, screen: ScreenType) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      '.text',
      { opacity: isOpen ? 0 : 1 },
      { ease: 'easeInOut', duration: isOpen ? 1 : 0 }
    );
    animate(
      '.el1',
      { transform: isOpen ? 'translateY(-1000%)' : 'translateY(0)' },
      { ease: 'easeInOut', duration: isOpen ? 2 : 0 }
    );
    animate(
      '.el2',
      { transform: isOpen ? 'translateX(1000%)' : 'translateX(0)' },
      { ease: 'easeInOut', duration: isOpen ? 2 : 0 }
    );
    animate(
      '.el3',
      { transform: isOpen ? 'translateY(1000%)' : 'translateY(0)' },
      { ease: 'easeInOut', duration: isOpen ? 2 : 0 }
    );
    if (screen === 'desktop') {
      animate(
        '.x',
        {
          transform: isOpen
            ? 'translateX(400%) scale(2000%) '
            : 'scale(100%) translateX(0px)',
          opacity: isOpen ? 0 : 1,
        },
        { ease: 'circOut', duration: isOpen ? 3.5 : 0 }
      );
    } else {
      animate(
        '.x',
        {
          transform: isOpen ? 'scale(2000%) ' : 'scale(100%) translateX(0px)',
          opacity: isOpen ? 0 : 1,
        },
        { ease: 'circOut', duration: isOpen ? 3.5 : 0 }
      );
    }
  }, [isOpen]);

  return scope;
}
