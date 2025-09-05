import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedTextReveal.module.scss';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextItem {
  id: string;
  text: string;
  description: string;
  delay: number;
}

const AnimatedTextReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const textItems: TextItem[] = [
    {
      id: 'architecture',
      text: 'ARCHITECTURE',
      description: 'Innovative Architektur für eine nachhaltige Zukunft',
      delay: 0
    },
    {
      id: 'visual',
      text: 'VISUAL',
      description: 'Visuelle Kommunikation trifft auf architektonische Exzellenz',
      delay: 0.2
    },
    {
      id: 'motion',
      text: 'MOTION',
      description: 'Bewegung und Dynamik in jedem Entwurf',
      delay: 0.4
    },
    {
      id: 'design',
      text: 'DESIGN',
      description: 'Design mit Sinn und nachhaltiger Wirkung',
      delay: 0.6
    },
    {
      id: 'concept',
      text: 'CONCEPT',
      description: 'Konzeptionelle Entwicklung für außergewöhnliche Projekte',
      delay: 0.8
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (!container || !section) return;

    // Set initial states
    gsap.set(`.${styles.textItem}`, { opacity: 1 });
    gsap.set(`.${styles.textFill}`, { width: '0%' });
    gsap.set(`.${styles.hoverDescription}`, { opacity: 0, x: 20 });

    // Create ScrollTrigger for each text item
    textItems.forEach((item, index) => {
      const textElement = container.querySelector(`[data-text="${item.id}"]`);
      const fillElement = textElement?.querySelector(`.${styles.textFill}`);

      if (textElement && fillElement) {
        // Text fill animation on scroll - synchronized with scroll position
        gsap.fromTo(fillElement, 
          { width: '0%' },
          {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: textElement,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
              onUpdate: (self) => {
                // Progress from 0 to 1 based on scroll position
                const progress = self.progress;
                gsap.set(fillElement, { width: `${progress * 100}%` });
              }
            }
          }
        );

        // Hover animations with proper cleanup
        const hoverDescription = textElement.querySelector(`.${styles.hoverDescription}`);
        const mainText = textElement.querySelector(`.${styles.mainText}`);
        
        if (mainText && hoverDescription) {
          let hoverTween: gsap.core.Tween | null = null;
          
          const handleMouseEnter = () => {
            if (hoverTween) hoverTween.kill();
            hoverTween = gsap.to(hoverDescription, {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          };

          const handleMouseLeave = () => {
            if (hoverTween) hoverTween.kill();
            hoverTween = gsap.to(hoverDescription, {
              opacity: 0,
              x: 20,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          };
          
          mainText.addEventListener('mouseenter', handleMouseEnter);
          mainText.addEventListener('mouseleave', handleMouseLeave);
          
          // Store cleanup function
          (textElement as any)._cleanup = () => {
            if (hoverTween) hoverTween.kill();
            mainText.removeEventListener('mouseenter', handleMouseEnter);
            mainText.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      }
    });

    // Cleanup function
    return () => {
      // Only kill ScrollTriggers related to this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && container?.contains(trigger.trigger as Element)) {
          trigger.kill();
        }
      });
      
      // Clean up hover event listeners
      if (container) {
        const textElements = container.querySelectorAll(`[data-text]`);
        textElements.forEach((element: any) => {
          if (element._cleanup) {
            element._cleanup();
          }
        });
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>WHAT I DO</h2>
        </div>
        
        <div className={styles.textList}>
          {textItems.map((item, index) => (
            <div 
              key={item.id}
              className={styles.textItem}
              data-text={item.id}
            >
              <div className={styles.textContainer}>
                <div className={styles.textContent}>
                  <h3 className={styles.mainText}>
                    <span className={styles.textBase}>{item.text}</span>
                    <span className={styles.textFill}>{item.text}</span>
                  </h3>
                </div>
                <div className={styles.hoverDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTextReveal;
