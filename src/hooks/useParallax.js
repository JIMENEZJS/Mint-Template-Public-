import { useEffect, useRef } from 'react';

/**
 * Hook para crear efecto Parallax en elementos
 * @param {number} speed - Velocidad del parallax (0.1 a 1), default 0.5
 * 
 * Uso:
 * const ref = useParallax(0.5);
 * <div ref={ref} className="parallax-element">
 *   Contenido
 * </div>
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const yPosition = window.scrollY;
      const elementTop = rect.top + yPosition;
      const distance = yPosition - (elementTop - window.innerHeight);
      
      if (distance > -window.innerHeight && distance < window.innerHeight) {
        element.style.transform = `translateY(${distance * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

export default useParallax;
