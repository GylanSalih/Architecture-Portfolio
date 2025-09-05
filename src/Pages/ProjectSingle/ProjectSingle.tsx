import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Building, Award, Users, Euro, Clock, Leaf, Lightbulb, CheckCircle, AlertCircle, Target } from 'lucide-react';
import styles from './ProjectSingle.module.scss';
import { architectureProjects, ArchitectureProject } from '../../data/architectureProjects';

const ProjectSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find the project by ID
  const project: ArchitectureProject | undefined = architectureProjects.find(
    p => p.id === parseInt(id || '0')
  );

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Projekt nicht gefunden</h1>
        <button onClick={() => navigate('/projects')} className={styles.backButton}>
          <ArrowLeft size={20} />
          Zurück zu den Projekten
        </button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#4ade80'; // green
      case 'in-progress':
        return '#f59e0b'; // amber
      case 'concept':
        return '#6b7280'; // gray
      default:
        return '#cccccc';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Abgeschlossen';
      case 'in-progress':
        return 'In Bearbeitung';
      case 'concept':
        return 'Konzept';
      default:
        return status;
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/projects');
    // Scroll to top when going back to projects
    window.scrollTo(0, 0);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={styles.projectSingle}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button onClick={handleBackClick} className={styles.backButton}>
            <ArrowLeft size={20} />
            Zurück zu den Projekten
          </button>
          
          <div className={styles.titleBox}>
            <div className={styles.cornerTopLeft}></div>
            <div className={styles.cornerTopRight}></div>
            <div className={styles.cornerBottomLeft}></div>
            <div className={styles.cornerBottomRight}></div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.description}</p>
          </div>
        </div>
      </div>

      {/* Project Status Badge */}
      <div className={styles.statusSection}>
        <div className={styles.statusBadge} style={{ backgroundColor: getStatusColor(project.status) }}>
          {getStatusLabel(project.status)}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          
          {/* Image Gallery */}
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img 
                src={project.images?.[selectedImageIndex] || project.image} 
                alt={project.title}
                className={styles.heroImage}
              />
            </div>
            
            {project.images && project.images.length > 1 && (
              <div className={styles.imageThumbnails}>
                {project.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`${styles.thumbnail} ${selectedImageIndex === index ? styles.active : ''}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={image} alt={`${project.title} ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className={styles.detailsGrid}>
            
            {/* Basic Information */}
            <div className={styles.detailCard}>
              <h3 className={styles.cardTitle}>Projektinformationen</h3>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <Calendar size={18} />
                  <span><strong>Jahr:</strong> {project.year}</span>
                </div>
                <div className={styles.detailItem}>
                  <MapPin size={18} />
                  <span><strong>Standort:</strong> {project.location}</span>
                </div>
                <div className={styles.detailItem}>
                  <Building size={18} />
                  <span><strong>Kategorie:</strong> {project.category}</span>
                </div>
                {project.area && (
                  <div className={styles.detailItem}>
                    <Building size={18} />
                    <span><strong>Fläche:</strong> {project.area}</span>
                  </div>
                )}
                {project.client && (
                  <div className={styles.detailItem}>
                    <Users size={18} />
                    <span><strong>Auftraggeber:</strong> {project.client}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Project Team */}
            {project.team && (
              <div className={styles.detailCard}>
                <h3 className={styles.cardTitle}>Projektteam</h3>
                <div className={styles.teamList}>
                  {project.team.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                      <Users size={16} />
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Budget & Timeline */}
            {(project.budget || project.timeline) && (
              <div className={styles.detailCard}>
                <h3 className={styles.cardTitle}>Projektmanagement</h3>
                <div className={styles.detailList}>
                  {project.budget && (
                    <div className={styles.detailItem}>
                      <Euro size={18} />
                      <span><strong>Budget:</strong> {project.budget}</span>
                    </div>
                  )}
                  {project.timeline && (
                    <div className={styles.detailItem}>
                      <Clock size={18} />
                      <span><strong>Zeitrahmen:</strong> {project.timeline}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className={styles.detailCard}>
                <h3 className={styles.cardTitle}>Auszeichnungen</h3>
                <div className={styles.awardsList}>
                  {project.awards.map((award, index) => (
                    <div key={index} className={styles.award}>
                      <Award size={16} />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div className={styles.descriptionSection}>
              <h2>Projektbeschreibung</h2>
              <p className={styles.detailedDescription}>{project.detailedDescription}</p>
            </div>
          )}

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            
            {/* Materials */}
            {project.materials && (
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>
                  <Building size={20} />
                  Materialien
                </h3>
                <ul className={styles.featureList}>
                  {project.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>
                  <Lightbulb size={20} />
                  Besonderheiten
                </h3>
                <ul className={styles.featureList}>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sustainability */}
            {project.sustainability && (
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>
                  <Leaf size={20} />
                  Nachhaltigkeit
                </h3>
                <ul className={styles.featureList}>
                  {project.sustainability.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Challenges & Solutions */}
          {(project.challenges || project.solutions) && (
            <div className={styles.challengesSection}>
              <h2>Herausforderungen & Lösungen</h2>
              <div className={styles.challengesGrid}>
                {project.challenges && (
                  <div className={styles.challengeCard}>
                    <h3 className={styles.challengeTitle}>
                      <AlertCircle size={20} />
                      Herausforderungen
                    </h3>
                    <p>{project.challenges}</p>
                  </div>
                )}
                {project.solutions && (
                  <div className={styles.challengeCard}>
                    <h3 className={styles.challengeTitle}>
                      <CheckCircle size={20} />
                      Lösungsansätze
                    </h3>
                    <p>{project.solutions}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Impact */}
          {project.impact && (
            <div className={styles.impactSection}>
              <h2>Projektauswirkung</h2>
              <div className={styles.impactCard}>
                <Target size={24} />
                <p>{project.impact}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
