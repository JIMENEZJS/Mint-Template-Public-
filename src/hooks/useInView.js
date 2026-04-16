import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animar elementos cuando entran en vista (Intersection Observer)
 * @param {Object} options - Opciones personalizadas
 * @param {number} options.threshold - Porcentaje visible para trigger (0-1), default 0.1
 * @param {string} options.rootMargin - Margen para detección, default '0px'
 * @param {boolean} options.once - Animar solo una vez, default true
 * 
 * Uso:
 * const { ref, isVisible } = useInView({ threshold: 0.2 });
 * <div ref={ref} className={isVisible ? 'animate-fadeInUp' : ''}>
 *   Contenido
 * </div>
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible, hasAnimated };
};

export default useInView;
