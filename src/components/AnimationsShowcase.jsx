import React from 'react';
import { useInView } from '../hooks/useInView';
import { useParallax } from '../hooks/useParallax';
import '../style/components/animations-showcase.scss';

/**
 * Componente de ejemplo para mostrar todas las animaciones disponibles
 * Este componente sirve como referencia para implementar animaciones en otros componentes
 */
const AnimationsShowcase = () => {
  // Fade In animations
  const fadeInRef = useInView({ threshold: 0.2 });
  const fadeInUpRef = useInView({ threshold: 0.2 });
  const fadeInDownRef = useInView({ threshold: 0.2 });
  const fadeInLeftRef = useInView({ threshold: 0.2 });
  const fadeInRightRef = useInView({ threshold: 0.2 });

  // Scale animations
  const scaleInRef = useInView({ threshold: 0.2 });
  const scaleInUpRef = useInView({ threshold: 0.2 });
  const bounceInRef = useInView({ threshold: 0.2 });

  // Parallax effect
  const parallaxRef = useParallax(0.3);

  return (
    <div className="animations-showcase">
      <section className="showcase-section">
        <h2 ref={fadeInRef.ref} className={fadeInRef.isVisible ? 'animate-fadeIn' : ''}>
          🎨 Galería de Animaciones
        </h2>

        {/* Fade In Animations */}
        <div className="animations-grid">
          <div 
            ref={fadeInRef.ref}
            className={`animation-box ${fadeInRef.isVisible ? 'animate-fadeIn' : ''}`}
          >
            <span>Fade In</span>
          </div>

          <div 
            ref={fadeInUpRef.ref}
            className={`animation-box ${fadeInUpRef.isVisible ? 'animate-fadeInUp' : ''}`}
          >
            <span>Fade In Up</span>
          </div>

          <div 
            ref={fadeInDownRef.ref}
            className={`animation-box ${fadeInDownRef.isVisible ? 'animate-fadeInDown' : ''}`}
          >
            <span>Fade In Down</span>
          </div>

          <div 
            ref={fadeInLeftRef.ref}
            className={`animation-box ${fadeInLeftRef.isVisible ? 'animate-fadeInLeft' : ''}`}
          >
            <span>Fade In Left</span>
          </div>

          <div 
            ref={fadeInRightRef.ref}
            className={`animation-box ${fadeInRightRef.isVisible ? 'animate-fadeInRight' : ''}`}
          >
            <span>Fade In Right</span>
          </div>
        </div>

        {/* Scale Animations */}
        <h3 ref={scaleInRef.ref} className={scaleInRef.isVisible ? 'animate-fadeInUp' : ''}>
          Scale & Bounce Animations
        </h3>

        <div className="animations-grid">
          <div 
            ref={scaleInRef.ref}
            className={`animation-box accent ${scaleInRef.isVisible ? 'animate-scaleIn' : ''}`}
          >
            <span>Scale In</span>
          </div>

          <div 
            ref={scaleInUpRef.ref}
            className={`animation-box accent ${scaleInUpRef.isVisible ? 'animate-scaleInUp' : ''}`}
          >
            <span>Scale In Up</span>
          </div>

          <div 
            ref={bounceInRef.ref}
            className={`animation-box accent ${bounceInRef.isVisible ? 'animate-bounceIn' : ''}`}
          >
            <span>Bounce In</span>
          </div>
        </div>

        {/* Hover Effects */}
        <h3>Hover Effects</h3>

        <div className="hover-effects-grid">
          <div className="hover-effect hover-scale">
            <span>Hover Scale</span>
          </div>

          <div className="hover-effect hover-scale-lg">
            <span>Hover Scale LG</span>
          </div>

          <div className="hover-effect hover-lift">
            <span>Hover Lift</span>
          </div>

          <div className="hover-effect hover-lift-lg">
            <span>Hover Lift LG</span>
          </div>

          <div className="hover-effect hover-glow">
            <span>Hover Glow</span>
          </div>
        </div>

        {/* Continuous Animations */}
        <h3>Continuous Animations</h3>

        <div className="continuous-animations">
          <div className="animate-float">
            <span>Float</span>
          </div>

          <div className="animate-pulse">
            <span>Pulse</span>
          </div>

          <div className="animate-spin">
            <span>Spin</span>
          </div>

          <div className="animate-bounce">
            <span>Bounce</span>
          </div>
        </div>

        {/* Parallax Effect */}
        <h3>Parallax Effect</h3>
        <div 
          ref={parallaxRef}
          className="parallax-box"
        >
          <span>Scroll to see parallax effect</span>
        </div>
      </section>

      {/* Code Examples */}
      <section className="code-examples">
        <h2>📝 Ejemplos de Código</h2>

        <div className="code-box">
          <h4>useInView Hook - Animar al entrar en vista</h4>
          <pre>{`import { useInView } from './hooks/useInView';

function MyComponent() {
  const { ref, isVisible } = useInView({ 
    threshold: 0.2,
    once: true 
  });

  return (
    <div 
      ref={ref}
      className={isVisible ? 'animate-fadeInUp' : ''}
    >
      Contenido que se anima al entrar en vista
    </div>
  );
}`}</pre>
        </div>

        <div className="code-box">
          <h4>useParallax Hook - Efecto Parallax</h4>
          <pre>{`import { useParallax } from './hooks/useParallax';

function HeroImage() {
  const ref = useParallax(0.5);

  return (
    <img ref={ref} src="hero.jpg" alt="Hero" />
  );
}`}</pre>
        </div>

        <div className="code-box">
          <h4>useCounter Hook - Contador Animado</h4>
          <pre>{`import { useCounter } from './hooks/useCounter';

function Stats() {
  const ref = useCounter(1500, 2000);

  return (
    <div>
      <span ref={ref}>0</span>
      <p>Clientes satisfechos</p>
    </div>
  );
}`}</pre>
        </div>
      </section>
    </div>
  );
};

export default AnimationsShowcase;
