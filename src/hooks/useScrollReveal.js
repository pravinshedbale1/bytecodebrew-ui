import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered section entrance animations.
 * Uses IntersectionObserver to detect when elements enter the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (default: 0.1)
 * @param {string} options.rootMargin - Root margin (default: '0px')
 * @returns {[React.Ref, boolean]} - [ref to attach, isVisible boolean]
 */
const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Once visible, stay visible
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
