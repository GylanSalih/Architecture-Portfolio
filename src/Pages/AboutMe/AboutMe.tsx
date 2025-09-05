import React, { useState } from 'react';
import { MapPin, Calendar, GraduationCap, Briefcase, Award, Plus, Building } from 'lucide-react';
import styles from './AboutMe.module.scss';

const AboutMe: React.FC = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
  const [expandedCareer, setExpandedCareer] = useState<number | null>(null);

  const educationData = [
    {
      period: "2018 - 2022",
      title: "Master of Architecture (M.Arch.)",
      institution: "Technische Universität Berlin",
      details: [
        "Schwerpunkt: Nachhaltiges Bauen und Städtebau",
        "Masterarbeit: 'Adaptive Fassaden in der Klimaarchitektur'",
        "Auszeichnung: Summa Cum Laude",
        "Forschungsprojekt: Biomimetische Strukturen im Hochbau"
      ]
    },
    {
      period: "2015 - 2018", 
      title: "Bachelor of Architecture (B.Arch.)",
      institution: "Hochschule für Technik Stuttgart",
      details: [
        "Grundlagen der Architektur und Bauingenieurwesen",
        "Bachelorarbeit: 'Modulares Wohnen in urbanen Räumen'",
        "Praktikum bei Foster + Partners, London",
        "Teilnahme am Erasmus-Programm in Kopenhagen"
      ]
    },
    {
      period: "2023",
      title: "Zertifikat: Sustainable Design Leadership",
      institution: "LEED Green Building Certification",
      details: [
        "Nachhaltige Planungsprinzipien",
        "Energieeffiziente Gebäudetechnik",
        "Cradle-to-Cradle Design",
        "Zertifizierung als LEED AP BD+C"
      ]
    }
  ];

  const careerData = [
    {
      period: "Seit 2022",
      title: "Senior Architektin & Projektleiterin",
      company: "Sawatzki Architecture Studio",
      description: "Leitung innovativer Architekturprojekte mit Fokus auf nachhaltiges Design und moderne Wohnkonzepte.",
      details: [
        "Projektvolumen: €50M+ (15+ Projekte)",
        "Team-Leadership für 8 Architekten und Designer",
        "Spezialisierung auf Wohnbau und öffentliche Gebäude",
        "Auszeichnungen: 3x Deutscher Architekturpreis"
      ]
    },
    {
      period: "2020 - 2022",
      title: "Architektin & BIM-Koordinatorin", 
      company: "Zaha Hadid Architects, Berlin",
      description: "Entwicklung wegweisender Architekturkonzepte und Implementierung digitaler Planungsmethoden.",
      details: [
        "Mitarbeit an 5 internationalen Großprojekten",
        "BIM-Modellerstellung und -koordination", 
        "Parametrisches Design mit Grasshopper/Rhino",
        "Projektbudget-Verantwortung: €2M+"
      ]
    },
    {
      period: "2019 - 2020",
      title: "Junior Architektin",
      company: "gmp Architekten, Hamburg", 
      description: "Unterstützung bei der Planung und Umsetzung komplexer Bauprojekte im Bereich Kultur und Bildung.",
      details: [
        "CAD-Planung und 3D-Visualisierung",
        "Baustellenbetreuung und Qualitätskontrolle",
        "Koordination mit Ingenieuren und Fachplanern",
        "Projektdokumentation und Präsentationen"
      ]
    },
    {
      period: "2018 - 2019",
      title: "Architekturstudentin & Praktikantin",
      company: "Various Architecture Firms",
      description: "Praktische Erfahrungen in verschiedenen Architekturbüros und Entwicklung der fachlichen Expertise.",
      details: [
        "Praktikum bei Bjarke Ingels Group (BIG), Kopenhagen",
        "Mitarbeit bei Snøhetta, Oslo (Sommerpraktikum)",
        "Freelance-Projekte für lokale Büros",
        "Wettbewerbsteilnahmen und Designstudien"
      ]
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Über mich</h1>
            <p className={styles.subtitle}>
              Architektin mit Leidenschaft für nachhaltiges Design und innovative Raumkonzepte
            </p>
            <div className={styles.location}>
              <MapPin size={18} />
              <span>Berlin, Deutschland</span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileCard}>
              <div className={styles.profileImagePlaceholder}>
                <Building size={48} />
              </div>
              <h3>Lina Sawatzki</h3>
              <p>Senior Architektin</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Introduction */}
        <div className={styles.introduction}>
          <p>
            Mit über 5 Jahren Erfahrung in der Architekturbranche verbinde ich kreative Vision 
            mit technischer Präzision. Meine Arbeit konzentriert sich auf nachhaltige Architektur, 
            die sowohl ästhetisch ansprechend als auch umweltfreundlich ist.
          </p>
        </div>

        {/* Education & Career Grid */}
        <div className={styles.timelineGrid}>
          {/* Education Section */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <GraduationCap size={24} />
              <h2>Education</h2>
            </div>
            
            <div className={styles.timeline}>
              {educationData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineCompany}>{item.institution}</p>
                    
                    <button
                      className={styles.expandButton}
                      onClick={() => setExpandedEducation(
                        expandedEducation === index ? null : index
                      )}
                    >
                      <Plus 
                        size={16} 
                        className={expandedEducation === index ? styles.rotated : ''}
                      />
                      Field of study
                    </button>
                    
                    {expandedEducation === index && (
                      <div className={styles.expandedContent}>
                        <ul>
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Section */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <Briefcase size={24} />
              <h2>Career</h2>
            </div>
            
            <div className={styles.timeline}>
              {careerData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.period}>{item.period}</span>
                    {index === 0 && (
                      <span className={styles.currentBadge}>
                        <span className={styles.statusDot}></span>
                        Aktuell
                      </span>
                    )}
                  </div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineCompany}>{item.company}</p>
                    <p className={styles.timelineDescription}>{item.description}</p>
                    
                    <button
                      className={styles.expandButton}
                      onClick={() => setExpandedCareer(
                        expandedCareer === index ? null : index
                      )}
                    >
                      <Plus 
                        size={16} 
                        className={expandedCareer === index ? styles.rotated : ''}
                      />
                      Details anzeigen
                    </button>
                    
                    {expandedCareer === index && (
                      <div className={styles.expandedContent}>
                        <ul>
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className={styles.skillsSection}>
          <h2>Expertise & Auszeichnungen</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <Award size={24} />
              <h3>Auszeichnungen</h3>
              <ul>
                <li>Deutscher Architekturpreis 2023</li>
                <li>Sustainable Design Award 2022</li>
                <li>Young Architect Award 2021</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <Building size={24} />
              <h3>Spezialisierung</h3>
              <ul>
                <li>Nachhaltiges Bauen</li>
                <li>Wohnarchitektur</li>
                <li>Öffentliche Gebäude</li>
                <li>Stadplanung</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <GraduationCap size={24} />
              <h3>Software & Tools</h3>
              <ul>
                <li>AutoCAD, Revit, ArchiCAD</li>
                <li>Rhino, Grasshopper</li>
                <li>3ds Max, V-Ray</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
