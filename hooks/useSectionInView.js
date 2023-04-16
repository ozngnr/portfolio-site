import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const useSectionInView = (ref) => {
  const isInView = useInView(ref, { margin: '-50% 0% -50% 0%' });

  return { isInView };
};

export default useSectionInView;
