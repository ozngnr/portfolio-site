import { useEffect, useRef, useContext } from 'react';
import { Context } from '../context/context';

export const useSectionInView = () => {
  const sectionRef = useRef(null);
  const { setSection } = useContext(Context);

  useEffect(() => {
    // callback for observer
    const callback = (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.getAttribute('name');
        if (entry.isIntersecting) {
          setSection(sectionName);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-48% 0px',
      threshold: 0,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setSection]);

  return [sectionRef];
};
