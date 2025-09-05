import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Calendar, MapPin, Award, Building } from 'lucide-react';
import styles from './Projects.module.scss';
import { architectureProjects, ArchitectureProject } from '../../data/architectureProjects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const navigate = useNavigate();

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(architectureProjects.map(project => project.category)))];
  const statuses = ['all', 'completed', 'in-progress', 'concept'];

  // Filter projects based on selected filters
  const filteredProjects = architectureProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#333333'; // dark gray
      case 'in-progress':
        return '#666666'; // medium gray
      case 'concept':
        return '#999999'; // light gray
      default:
        return '#cccccc'; // lightest gray
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

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
    // Scroll to top when navigating to project single page
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.projects}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleBox}>
            <div className={styles.cornerTopLeft}></div>
            <div className={styles.cornerTopRight}></div>
            <div className={styles.cornerBottomLeft}></div>
            <div className={styles.cornerBottomRight}></div>
            <h1 className={styles.title}>Architektur Projekte</h1>
            <p className={styles.subtitle}>
              Eine Übersicht meiner realisierten und geplanten Architekturprojekte
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <Filter className={styles.filterIcon} />
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.filterSelect}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Alle Kategorien' : category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <Building className={styles.filterIcon} />
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className={styles.filterSelect}
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'Alle Status' : getStatusLabel(status)}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.projectCount}>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Projekt' : 'Projekte'}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project: ArchitectureProject) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={project.title}
                className={styles.projectImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <div 
                  className={styles.statusBadge}
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {getStatusLabel(project.status)}
                </div>
                {project.awards && project.awards.length > 0 && (
                  <div className={styles.awardBadge}>
                    <Award size={16} />
                    <span>{project.awards.length}</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <div className={styles.metaItem}>
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                {project.area && (
                  <div className={styles.metaItem}>
                    <Building size={16} />
                    <span>{project.area}</span>
                  </div>
                )}
              </div>

              {project.client && (
                <div className={styles.clientInfo}>
                  <strong>Auftraggeber:</strong> {project.client}
                </div>
              )}

              {project.awards && project.awards.length > 0 && (
                <div className={styles.awards}>
                  <h4 className={styles.awardsTitle}>Auszeichnungen:</h4>
                  <ul className={styles.awardsList}>
                    {project.awards.map((award, index) => (
                      <li key={index} className={styles.award}>
                        <Award size={14} />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.noResults}>
          <Building size={48} />
          <h3>Keine Projekte gefunden</h3>
          <p>Versuchen Sie andere Filter-Einstellungen</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
