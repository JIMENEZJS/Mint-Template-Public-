import { useEffect, useRef } from 'react';

/**
 * Hook para crear efecto de contador animado
 * @param {number} endValue - Valor final del contador
 * @param {number} duration - Duración en ms, default 2000
 * @param {Function} formatter - Función para formatear el número (opcional)
 * 
 * Uso:
 * const count = useCounter(1000, 2000);
 * <span>{count}</span>
 */
export const useCounter = (endValue, duration = 2000, formatter = null) => {
  const ref = useRef(null);
  
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let currentValue = 0;
        const increment = endValue / (duration / 16); // ~60fps
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          currentValue = Math.floor(endValue * progress);
          element.textContent = formatter ? formatter(currentValue) : currentValue.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(element);
      }
    }, { threshold: 0.5 });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [endValue, duration, formatter]);

  return ref;
};

export default useCounter;
