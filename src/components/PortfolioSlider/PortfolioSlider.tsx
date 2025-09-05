import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import styles from './PortfolioSlider.module.scss';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  image: string;
  awards?: string[];
  client?: string;
  area?: string;
  status: 'completed' | 'in-progress' | 'concept';
}

interface PortfolioSliderProps {
  projects: Project[];
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!projects.length) return null;

  const currentProject = projects[currentSlide];

  return (
    <div className={styles.portfolioSlider}>
      {/* Main Slider Container */}
      <div className={styles.sliderContainer}>
        {/* Current Slide Image */}
        <div 
          className={styles.slideImage}
          style={{ 
            backgroundImage: `url(${currentProject.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Overlay */}
        <div className={styles.overlay} />


          {/* Navigation Controls */}
          <div className={styles.navigation}>
            <button 
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Vorheriges Projekt"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Nächstes Projekt"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          
        {/* Content */}
        <div className={styles.content}>
          <div className={styles.projectInfo}>
            {/* Category & Status */}
            <div className={styles.projectMeta}>
              <span className={styles.category}>{currentProject.category}</span>
              <span className={`${styles.status} ${styles[currentProject.status]}`}>
                {currentProject.status === 'completed' ? 'Fertiggestellt' : 
                 currentProject.status === 'in-progress' ? 'In Bearbeitung' : 'Konzept'}
              </span>
            </div>

            {/* Title */}
            <h2 className={styles.projectTitle}>{currentProject.title}</h2>

            {/* Description */}
            <p className={styles.projectDescription}>{currentProject.description}</p>

            {/* Project Details */}
            <div className={styles.projectDetails}>
              <div className={styles.detail}>
                <Calendar size={16} />
                <span>{currentProject.year}</span>
              </div>
              <div className={styles.detail}>
                <MapPin size={16} />
                <span>{currentProject.location}</span>
              </div>
              {currentProject.area && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Fläche:</span>
                  <span>{currentProject.area}</span>
                </div>
              )}
              {currentProject.client && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Auftraggeber:</span>
                  <span>{currentProject.client}</span>
                </div>
              )}
            </div>

            {/* Awards */}
            {currentProject.awards && currentProject.awards.length > 0 && (
              <div className={styles.awards}>
                <div className={styles.awardsHeader}>
                  <Award size={18} />
                  <span>Auszeichnungen</span>
                </div>
                <div className={styles.awardsList}>
                  {currentProject.awards.map((award, index) => (
                    <span key={index} className={styles.award}>
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* View Project Button */}
            <button className={styles.viewProjectButton}>
              <span>Projekt ansehen</span>
              <ExternalLink size={16} />
            </button>
          </div>

        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Zu Projekt ${index + 1} wechseln`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className={styles.counter}>
          <span className={styles.currentNumber}>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className={styles.separator}>/</span>
          <span className={styles.totalNumber}>
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>


    </div>
  );
};

export default PortfolioSlider;
