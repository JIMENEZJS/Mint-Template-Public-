# 🎨 Guía de Animaciones - Mint Template

Este documento te muestra todas las animaciones disponibles y cómo usarlas en tu proyecto.

---

## 📦 Archivos de Animaciones

### 1. **animations.scss** (`src/style/animations.scss`)
Contiene todos los keyframes y clases CSS para animaciones.

---

## 🎬 Animaciones CSS Disponibles

### Animaciones de Entrada (Fade In)

```html
<!-- Fade In simple -->
<div class="animate-fadeIn">Contenido</div>

<!-- Fade In desde abajo -->
<div class="animate-fadeInUp">Contenido</div>

<!-- Fade In desde arriba -->
<div class="animate-fadeInDown">Contenido</div>

<!-- Fade In desde la izquierda -->
<div class="animate-fadeInLeft">Contenido</div>

<!-- Fade In desde la derecha -->
<div class="animate-fadeInRight">Contenido</div>
```

### Animaciones de Escala (Scale)

```html
<!-- Scale In -->
<div class="animate-scaleIn">Contenido</div>

<!-- Scale In Up (escala + subida) -->
<div class="animate-scaleInUp">Contenido</div>

<!-- Bounce In -->
<div class="animate-bounceIn">Contenido</div>
```

### Animaciones de Deslizamiento (Slide)

```html
<!-- Slide In desde arriba -->
<div class="animate-slideInDown">Contenido</div>

<!-- Slide In desde abajo -->
<div class="animate-slideInUp">Contenido</div>

<!-- Slide In desde la izquierda -->
<div class="animate-slideInLeft">Contenido</div>

<!-- Slide In desde la derecha -->
<div class="animate-slideInRight">Contenido</div>
```

### Animaciones Continuas

```html
<!-- Flotación suave -->
<div class="animate-float">Contenido</div>

<!-- Pulso (parpadeo suave) -->
<div class="animate-pulse">Contenido</div>

<!-- Rotación -->
<div class="animate-spin">Contenido</div>

<!-- Rotación lenta -->
<div class="animate-spin-slow">Contenido</div>

<!-- Rebote -->
<div class="animate-bounce">Contenido</div>
```

---

## 🖱️ Efectos de Hover

### Hover Scale (Escala)

```html
<div class="hover-scale">
  Se agranda ligeramente al pasar el mouse (5%)
</div>

<div class="hover-scale-lg">
  Se agranda más al pasar el mouse (8%)
</div>
```

### Hover Lift (Levanta con sombra)

```html
<div class="hover-lift">
  Se levanta 8px con sombra
</div>

<div class="hover-lift-lg">
  Se levanta 12px con sombra mayor
</div>
```

### Hover Glow (Brillo)

```html
<div class="hover-glow">
  Brilla al pasar el mouse
</div>
```

---

## 🎣 React Hooks para Animaciones Avanzadas

### Hook 1: `useInView` - Animar al entrar en vista

Ubicación: `src/hooks/useInView.js`

```jsx
import { useInView } from './hooks/useInView';

function MyComponent() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref} 
      className={isVisible ? 'animate-fadeInUp' : ''}
    >
      Este div se anima cuando entra en vista
    </div>
  );
}
```

**Opciones disponibles:**
```jsx
useInView({
  threshold: 0.2,      // 0-1: % visible para activar
  rootMargin: '0px',   // Margen adicional
  once: true          // Animar solo una vez (default: true)
})
```

**Ejemplo con múltiples elementos:**
```jsx
function TeamSection() {
  const items = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'María' },
    { id: 3, name: 'Pedro' }
  ];

  return (
    <div>
      {items.map((item, index) => {
        const { ref, isVisible } = useInView({ 
          threshold: 0.1 
        });
        
        return (
          <div 
            key={item.id}
            ref={ref}
            className={isVisible ? 'animate-scaleInUp' : 'opacity-0'}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
```

---

### Hook 2: `useParallax` - Efecto Parallax

Ubicación: `src/hooks/useParallax.js`

```jsx
import { useParallax } from './hooks/useParallax';

function HeroSection() {
  const parallaxRef = useParallax(0.5);

  return (
    <div ref={parallaxRef}>
      Imagen con efecto parallax
    </div>
  );
}
```

**Parámetros:**
- `speed`: 0.1 (lento) a 1 (rápido), default 0.5

---

### Hook 3: `useCounter` - Contador Animado

Ubicación: `src/hooks/useCounter.js`

```jsx
import { useCounter } from './hooks/useCounter';

function StatsSection() {
  const counterRef = useCounter(1500, 2000);

  return (
    <div>
      <span ref={counterRef}>0</span>
      <p>Clientes satisfechos</p>
    </div>
  );
}
```

**Con formateador personalizado:**
```jsx
const counterRef = useCounter(
  1500000, 
  3000,
  (num) => `$${num.toLocaleString()}`
);
```

---

## 🎯 Ejemplos Prácticos

### Ejemplo 1: Card con animación de entrada + hover

```jsx
import './card.scss';

function Card({ title, description }) {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <div 
      ref={ref}
      className={`card ${isVisible ? 'animate-scaleInUp' : ''}`}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// card.scss
.card {
  @import '../../style/animations.scss';
  
  padding: 30px;
  border-radius: 10px;
  background: white;
  
  &:hover {
    @extend .hover-lift;
  }
}
```

### Ejemplo 2: Galería con animaciones escalonadas

```jsx
function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((item, index) => {
        const { ref, isVisible } = useInView({ 
          threshold: 0.1,
          once: false 
        });

        return (
          <div
            key={item.id}
            ref={ref}
            className={`gallery-item ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s` 
            }}
          >
            <img src={item.image} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
```

### Ejemplo 3: Navegación con animaciones de línea

La barra de navegación ya tiene animaciones incluidas en `navbar.scss` con línea que sale al hover.

---

## 🎨 SCSS Variables y Mixins Útiles

Puedes crear animaciones personalizadas usando SCSS:

```scss
// Mixin para animaciones personalizadas
@mixin animate($name, $duration: 0.8s, $timing: ease-out) {
  animation: $name $duration $timing;
}

// Ejemplo de uso
.my-element {
  @include animate(fadeInUp, 1s, cubic-bezier(0.34, 1.56, 0.64, 1));
}
```

---

## 🚀 Recomendaciones de Rendimiento

1. **Evita animar demasiados elementos a la vez** - Limita a máximo 5-10 elementos simultáneamente
2. **Usa `will-change` con moderación:**
   ```scss
   .heavy-animation {
     will-change: transform;
     animation: fadeInUp 0.8s ease-out;
   }
   ```

3. **Desactiva animaciones en dispositivos con `prefers-reduced-motion`:**
   ```scss
   @media (prefers-reduced-motion: reduce) {
     * {
       animation: none !important;
       transition: none !important;
     }
   }
   ```

4. **Usa `transform` y `opacity` en lugar de `left/top`** - Son más eficientes

---

## 📱 Animaciones Responsivas

Las animaciones ya están optimizadas para mobile. Si necesitas cambiar velocidades por dispositivo:

```scss
@media screen and (max-width: 768px) {
  .animate-fadeInUp {
    animation: fadeInUp 0.5s ease-out; // Más rápido en mobile
  }
}
```

---

## 🎬 Duración de Animaciones

Las animaciones usan estas duraciones estándar:
- **Rápida:** 0.3s - Para hoveres y interacciones
- **Normal:** 0.6-0.8s - Para entradas principales
- **Lenta:** 1s+ - Para fondos y efectos de fondo

Puedes modificarlas directamente en `animations.scss`.

---

## ✨ Próximos Pasos

1. Integra `useInView` en tus componentes principales
2. Prueba diferentes combinaciones de animaciones
3. Ajusta timings según el diseño
4. ¡Diviértete experimentando! 🎉

---

**¿Necesitas más animaciones personalizado? Comunícate con el equipo de desarrollo.**
