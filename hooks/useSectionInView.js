import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const useSectionInView = (ref) => {
  const isInView = useInView(ref, { margin: '-40% 0% -40% 0%' });

  return { isInView };
};

export default useSectionInView;
