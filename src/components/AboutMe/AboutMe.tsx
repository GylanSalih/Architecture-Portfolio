import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Phone, Mail } from 'lucide-react';
import styles from './AboutMe.module.scss';

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <img 
              src="https://images.unsplash.com/photo-1580893246395-52aead8d2ce1?w=600&h=800&fit=crop&crop=face" 
              alt="Lina Sawatzki - Architektin" 
            />
            <div className={styles.imageOverlay}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Projekte</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15</span>
                  <span className={styles.statLabel}>Jahre Erfahrung</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>25</span>
                  <span className={styles.statLabel}>Auszeichnungen</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <h2>Lina Sawatzki</h2>
            <h3>Architektin für nachhaltige & naturverbundene Räume</h3>
            <p>
              Als Architektin mit über 15 Jahren Erfahrung spezialisiere ich mich auf die 
              Erschaffung von Räumen, die eine harmonische Verbindung zwischen Mensch und 
              Natur schaffen. Meine Philosophie basiert auf nachhaltigem Design, 
              umweltfreundlichen Materialien und der Integration natürlicher Elemente.
            </p>
            <p>
              Jedes Projekt ist eine einzigartige Reise, bei der ich eng mit meinen Kunden 
              zusammenarbeite, um ihre Vision zu verwirklichen und gleichzeitig unsere 
              Verantwortung gegenüber der Umwelt zu berücksichtigen.
            </p>
            
            <div className={styles.qualifications}>
              <div className={styles.qualification}>
                <Award size={20} />
                <span>Master Architektur, TU Berlin</span>
              </div>
              <div className={styles.qualification}>
                <Award size={20} />
                <span>DGNB Zertifizierte Nachhaltigkeits-Expertin</span>
              </div>
              <div className={styles.qualification}>
                <Award size={20} />
                <span>Mitglied der Architektenkammer Berlin</span>
              </div>
            </div>
            
            <div className={styles.contactButtons}>
              <Link to="/page-3" className={styles.primaryButton}>
                <Phone size={18} />
                Beratung vereinbaren
              </Link>
              <a href="mailto:lina@sawatzki-architektur.de" className={styles.secondaryButton}>
                <Mail size={18} />
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
