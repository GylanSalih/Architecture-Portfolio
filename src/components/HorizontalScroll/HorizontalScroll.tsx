import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HorizontalScroll.module.scss';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  year?: string;
  location?: string;
}

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const slides: SlideData[] = [
    {
      image: '/assets/img/iconic-houses-000-1846x1038.jpg',
      title: 'Iconic Architecture',
      subtitle: 'Zeitlose Eleganz',
      description: 'Moderne Architektur, die Generationen überdauert und durch ihre klare Formensprache begeistert.',
      year: '2024',
      location: 'Berlin'
    },
    {
      image: '/assets/img/frank-gehry-lou-ruvo-centerjpg.webp',
      title: 'Frank Gehry Inspiration',
      subtitle: 'Organische Formen',
      description: 'Inspiration aus der Natur, umgesetzt in revolutionäre Bauformen, die Grenzen neu definieren.',
      year: '2023',
      location: 'Hamburg'
    },
    {
      image: '/assets/img/Masterschau_2017_HFF_hf_6584_klein.jpg',
      title: 'Masterschau 2017',
      subtitle: 'Akademische Exzellenz',
      description: 'Präzision und Innovation vereint in einem Projekt, das neue Maßstäbe für nachhaltiges Bauen setzt.',
      year: '2017',
      location: 'München'
    },
    {
      image: '/assets/img/csm_HKA_FK-AB_Imagefoto_1014_b0a2aba115.jpg',
      title: 'Forschung & Entwicklung',
      subtitle: 'Zukunftsweisend',
      description: 'Wo Wissenschaft auf Kreativität trifft - innovative Lösungen für die Herausforderungen von morgen.',
      year: '2022',
      location: 'Stuttgart'
    },
    {
      image: '/assets/img/show_picture.png',
      title: 'Exhibition Space',
      subtitle: 'Raum für Kunst',
      description: 'Ausstellungsräume, die Kunst und Architektur in perfekter Harmonie verschmelzen lassen.',
      year: '2021',
      location: 'Köln'
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const slides = slidesRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !slides || !wrapper) return;

    // Set initial styles
    gsap.set(slides, { x: 0 });

    // Create horizontal scroll animation
    const scrollTween = gsap.to(slides, {
      x: () => -(slides.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: () => `+=${slides.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate individual slide elements
    const slideElements = slides.querySelectorAll(`.${styles.slide}`);
    slideElements.forEach((slide, index) => {
      const image = slide.querySelector(`.${styles.slideImage}`);
      const content = slide.querySelector(`.${styles.slideContent}`);
      const overlay = slide.querySelector(`.${styles.slideOverlay}`);

      // Image scale and parallax effect
      gsap.fromTo(image, 
        { scale: 1.2, x: -50 }, 
        {
          scale: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: slide,
            start: 'left right',
            end: 'right left',
            containerAnimation: scrollTween,
            scrub: 1
          }
        }
      );

      // Content fade in
      gsap.fromTo(content, 
        { y: 100, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: slide,
            start: 'left center',
            end: 'center center',
            containerAnimation: scrollTween,
            scrub: 1
          }
        }
      );

      // Overlay gradient animation
      gsap.fromTo(overlay, 
        { opacity: 0.3 }, 
        {
          opacity: 0.7,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: slide,
            start: 'left right',
            end: 'right left',
            containerAnimation: scrollTween,
            scrub: 1
          }
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        <div ref={slidesRef} className={styles.slides}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideImage}>
                <img src={slide.image} alt={slide.title} />
                <div className={styles.slideOverlay}></div>
              </div>
              <div className={styles.slideContent}>
                <div className={styles.slideText}>
                  <div className={styles.slideMeta}>
                    {slide.year && <span className={styles.year}>{slide.year}</span>}
                    {slide.location && <span className={styles.location}>{slide.location}</span>}
                  </div>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
                  <p className={styles.slideDescription}>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Horizontal scrollen</div>
        <div className={styles.scrollArrow}>→</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
