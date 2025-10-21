import { useEffect, useRef } from 'react';
import capacitacionesIcon from '../assets/hero_section/cuberotative_component/Capacitaciones-Icon.svg';
import demostracionesIcon from '../assets/hero_section/cuberotative_component/Demostraciones-Icon.svg';
import descuentosIcon from '../assets/hero_section/cuberotative_component/Descuentos-Icon.svg';

export default function RotatingCube() {
  const items = [
    { icon: capacitacionesIcon, text: 'Capacitaciones' },
    { icon: demostracionesIcon, text: 'Demostraciones' },
    { icon: descuentosIcon, text: 'Descuentos' },
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemHeight = 80; // Altura de cada item
    const totalHeight = items.length * itemHeight;
    const speed = 0.3; // Velocidad de scroll (píxeles por frame)

    const animate = () => {
      positionRef.current += speed;

      // Loop infinito: cuando completa un ciclo, resetea sin salto visual
      if (positionRef.current >= totalHeight) {
        positionRef.current = 0;
      }

      container.style.transform = `translateY(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items.length]);

  // Duplicar items para loop seamless
  const displayItems = [...items, ...items];

  return (
    <div className="w-full max-w-[250px] h-[80px] mx-auto overflow-hidden relative">
      {/* Gradientes de fade */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-myesa-bg to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-myesa-bg to-transparent pointer-events-none z-10" />
      
      {/* Container de items */}
      <div
        ref={containerRef}
        className="flex flex-col"
        style={{ willChange: 'transform' }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="h-[80px] flex items-center justify-center gap-3 flex-shrink-0"
          >
            <div className="w-10 h-10 flex-shrink-0">
              <img
                src={item.icon}
                alt={item.text}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-sharp font-bold text-myesa-blue text-base uppercase">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}