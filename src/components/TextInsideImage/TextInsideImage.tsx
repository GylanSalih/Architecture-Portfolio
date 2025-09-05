import { useEffect, useRef } from 'react';
import styles from './TextInsideImage.module.scss';

interface TextInsideImageProps {
  backgroundImage: string;
  sectionTitle?: string;
  className?: string;
}

const TextInsideImage = ({ backgroundImage, sectionTitle = "EXPERIENCE", className }: TextInsideImageProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const textElement = textRef.current;
    const lineElements = lineRefs.current.filter(el => el !== null);

    if (!textElement || lineElements.length === 0) return;

    const handleScroll = () => {
      const rect = textElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate when element enters viewport
      const startPoint = windowHeight * 0.8;
      const endPoint = -elementHeight * 0.2;
      
      if (elementTop <= startPoint && elementTop >= endPoint) {
        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (startPoint - elementTop) / (startPoint - endPoint)));
        
        // Apply staggered fill effect to each line
        const totalLines = lineElements.length;
        lineElements.forEach((lineElement, index) => {
          if (lineElement) {
            // Calculate progress for each line with stagger
            const lineProgress = Math.max(0, Math.min(1, (progress * totalLines) - index));
            const fillSize = lineProgress * 100;
            lineElement.style.setProperty('--size', `${fillSize}%`);
          }
        });
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.section} ${className || ''}`}>
      <div 
        className={styles.container}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.sectionTitle}>{sectionTitle}</div>
            
            <div className={styles.textWrapper} ref={textRef}>
              <div className={styles.scrollParagraphParent}>
                {/* Masking layer (ghost text) */}
                <div className={styles.scrollParagraphMask}>
                  <div className={styles.line} ref={el => lineRefs.current[0] = el} style={{'--size': '0%'} as React.CSSProperties}>
                    Over <strong className={styles.orangeText}>a decade</strong> of experience in
                  </div>
                  <div className={styles.line} ref={el => lineRefs.current[1] = el} style={{'--size': '0%'} as React.CSSProperties}>
                    interactive design and working with
                  </div>
                  <div className={styles.line} ref={el => lineRefs.current[2] = el} style={{'--size': '0%'} as React.CSSProperties}>
                    some of the most talented people in the
                  </div>
                  <div className={styles.line} ref={el => lineRefs.current[3] = el} style={{'--size': '0%'} as React.CSSProperties}>
                    business
                  </div>
                </div>
                
                {/* Background layer (visible text) */}
                <div className={styles.scrollParagraphBg}>
                  <div className={styles.line}>
                    Over <strong className={styles.orangeText}>a decade</strong> of experience in
                  </div>
                  <div className={styles.line}>
                    interactive design and working with
                  </div>
                  <div className={styles.line}>
                    some of the most talented people in the
                  </div>
                  <div className={styles.line}>
                    business
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextInsideImage;
