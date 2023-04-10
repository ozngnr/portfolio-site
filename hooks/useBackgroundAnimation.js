import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useBackgroundAnimation = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  });

  const backgroundAnimations = {
    circleRight: {
      x: useTransform(scrollYProgress, [0, 1], ['0', '-80vw']),
      y: useTransform(scrollYProgress, [0, 1], ['0', '-50vh']),
    },
    circleLeft: {
      x: useTransform(scrollYProgress, [0, 1], ['0', '-55vw']),
      backgroundColor: useTransform(
        scrollYProgress,
        [0, 1],
        ['rgb(52, 244, 228)', 'hsl(40, 96%, 48%)']
      ),
    },
  };

  return { backgroundAnimations };
};
