import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoReveal.module.scss';

interface VideoRevealProps {
  videoSrc: string;
  className?: string;
}

const VideoReveal: React.FC<VideoRevealProps> = ({ videoSrc, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Berechne den Scroll-Progress basierend auf der Position des Elements
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start der Animation wenn das Element ins Viewport kommt
      const startOffset = viewportHeight * 0.8; // Animation startet wenn Element 80% im Viewport ist
      const endOffset = -elementHeight * 0.2; // Animation endet wenn Element 20% außerhalb ist
      
      if (elementTop <= startOffset && elementTop >= endOffset) {
        // Berechne Progress von 0 zu 1
        const progress = Math.max(0, Math.min(1, 
          (startOffset - elementTop) / (startOffset - endOffset)
        ));
        setScrollProgress(progress);
      } else if (elementTop > startOffset) {
        setScrollProgress(0);
      } else if (elementTop < endOffset) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Video automatisch abspielen wenn es im Viewport ist
    if (videoRef.current && scrollProgress > 0.1) {
      videoRef.current.play().catch(console.error);
    }
  }, [scrollProgress]);

  // Berechne die Skalierung und den Zoom basierend auf dem Scroll-Progress
  const scale = 0.7 + (scrollProgress * 0.8); // Von 60% zu 100%
  const borderRadius = (1 - scrollProgress) * 20; // Von 20px zu 0px

  return (
    <div 
      ref={containerRef}
      className={`${styles.videoReveal} ${className || ''}`}
    >
      <div className={styles.videoContainer}>
        <div 
          className={styles.videoWrapper}
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            className={styles.video}
          />
          
          {/* Overlay für bessere Textlesbarkeit */}
          <div className={styles.overlay} />
          

        </div>
      </div>
    </div>
  );
};

export default VideoReveal;
