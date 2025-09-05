import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, MapPin, ArrowRight } from 'lucide-react';
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider';
import AboutMe from '../../components/AboutMe/AboutMe';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
import AnimatedTextReveal from '../../components/AnimatedTextReveal/AnimatedTextReveal';
import TextInsideImage from '../../components/TextInsideImage/TextInsideImage';
import VideoReveal from '../../components/VideoReveal/VideoReveal';

import { architectureProjects } from '../../data/architectureProjects';
// @ts-ignore
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Portfolio Slider */}
      <PortfolioSlider 
        projects={architectureProjects}
      />
      
      {/* Main Content */}
      <div className={styles.mainContent}>
        
        {/* About Lina Section */}
        <AboutMe />

        {/* Horizontal Scroll Gallery */}
        <HorizontalScroll />

        {/* Animated Text Reveal */}
        <AnimatedTextReveal />

                {/* Video Reveal Section */}
                <VideoReveal 
          videoSrc="/assets/videos/revealVideo.mp4"
        />


        {/* Text Inside Image */}
        <TextInsideImage 
          backgroundImage="/assets/img/frank-gehry-lou-ruvo-centerjpg.webp"
          sectionTitle="EXPERIENCE"
        />



        {/* Philosophy Section */}
        <section className={styles.philosophySection}>
          <div className={styles.container}>
            <h2>Architektur-Philosophie</h2>
            <p>Drei Prinzipien, die jedes Projekt definieren</p>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}></div>
                <h3>Nachhaltige Materialien</h3>
                <p>
                  Umweltfreundliche Ressourcen und energieeffiziente Lösungen bilden 
                  das Fundament jedes Projekts. Architektur, die Generationen überdauert 
                  und unseren Planeten respektiert.
                </p>
              </div>
              
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}></div>
                <h3>Zeitlose Ästhetik</h3>
                <p>
                  Reduzierte Formen und durchdachte Proportionen schaffen Räume, 
                  die auch in Jahrzehnten noch relevant sind. Weniger ist mehr – 
                  aber dieses Wenige ist perfekt.
                </p>
              </div>
              
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}></div>
                <h3>Menschliche Maßstäbe</h3>
                <p>
                  Jeder Raum wird für die Menschen konzipiert, die ihn bewohnen. 
                  Emotionale Verbindungen entstehen durch sorgfältig geplante 
                  Proportionen und Lichtstimmungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Showcase */}
        <section className={styles.recentProjects}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Ausgewählte Arbeiten</h2>
              <p>Architektonische Lösungen, die begeistern</p>
            </div>
            
            <div className={styles.projectsShowcase}>
              <div className={styles.featuredProject}>
                <div className={styles.projectImage}>
                  <img src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=800&fit=crop&crop=center" alt="Residenz am Waldrand" />
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectInfo}>
                      <h3>Residenz am Waldrand</h3>
                      <p>Minimalistisches Wohnhaus in perfekter Harmonie mit der Natur</p>
                      <div className={styles.projectMeta}>
                        <span><Calendar size={12} /> 2024</span>
                        <span><MapPin size={12} /> Baden-Württemberg</span>
                        <span><Award size={12} /> Architekturpreis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectGrid}>
                <div className={styles.projectCard}>
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&crop=center" alt="Loft Conversion" />
                  <div className={styles.projectCardContent}>
                    <h4>Loft Conversion</h4>
                    <p>Industriearchitektur neu interpretiert</p>
                    <span className={styles.projectYear}>2024</span>
                  </div>
                </div>
                
                <div className={styles.projectCard}>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop&crop=center" alt="Private Chapel" />
                  <div className={styles.projectCardContent}>
                    <h4>Private Chapel</h4>
                    <p>Sakraler Raum für stille Momente</p>
                    <span className={styles.projectYear}>2023</span>
                  </div>
                </div>
                
                <div className={styles.projectCard}>
                  <img src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&h=450&fit=crop&crop=center" alt="Studio Space" />
                  <div className={styles.projectCardContent}>
                    <h4>Studio Space</h4>
                    <p>Kreativität braucht Raum</p>
                    <span className={styles.projectYear}>2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className={styles.awardsSection}>
          <div className={styles.container}>
            <h2>Anerkennungen</h2>
            <div className={styles.awardsGrid}>
              <div className={styles.awardItem}>
                <div className={styles.awardIcon}></div>
                <div className={styles.awardContent}>
                  <h3>Deutscher Architekturpreis</h3>
                  <p>Nachhaltiges Bauen</p>
                </div>
                <span className={styles.awardYear}>2024</span>
              </div>
              
              <div className={styles.awardItem}>
                <div className={styles.awardIcon}></div>
                <div className={styles.awardContent}>
                  <h3>DGNB Sustainability Award</h3>
                  <p>Umweltkonzepte</p>
                </div>
                <span className={styles.awardYear}>2023</span>
              </div>
              
              <div className={styles.awardItem}>
                <div className={styles.awardIcon}></div>
                <div className={styles.awardContent}>
                  <h3>Berliner Architektur Excellence</h3>
                  <p>Wohnkonzept</p>
                </div>
                <span className={styles.awardYear}>2022</span>
              </div>
              
              <div className={styles.awardItem}>
                <div className={styles.awardIcon}></div>
                <div className={styles.awardContent}>
                  <h3>Green Building Award</h3>
                  <p>Umweltfreundliche Bauweise</p>
                </div>
                <span className={styles.awardYear}>2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              <div className={styles.servicesContent}>
                <h2>Leistungsspektrum</h2>
                <p>
                  Von der ersten Skizze bis zur finalen Realisierung – 
                  jedes Projekt wird mit größter Sorgfalt und Aufmerksamkeit 
                  für Details entwickelt.
                </p>
                
                <div className={styles.servicesList}>
                  <div className={styles.serviceItem}>
                    <h4>Entwurf & Planung</h4>
                    <p>Konzeptionelle Entwicklung und technische Umsetzung nach höchsten Standards</p>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <h4>Nachhaltigkeitskonzepte</h4>
                    <p>Zukunftsfähige Lösungen für verantwortungsvolles Bauen</p>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <h4>Raumgestaltung</h4>
                    <p>Innenarchitektonische Konzepte, die Emotionen wecken</p>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <h4>Projektbegleitung</h4>
                    <p>Kontinuierliche Betreuung von der Planung bis zur Übergabe</p>
                  </div>
                </div>
                
                <Link to="/contact" className={styles.servicesButton}>
                  Beratungstermin vereinbaren
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className={styles.servicesImage}>
                <img 
                  src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=700&fit=crop" 
                  alt="Lina Sawatzki bei der Arbeit" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Lassen Sie uns sprechen</h2>
              <p>
                Jedes großartige Projekt beginnt mit einem Gespräch. 
                Teilen Sie Ihre Vision mit mir und lassen Sie uns 
                gemeinsam etwas Außergewöhnliches erschaffen.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.primaryButton}>
                  Kontakt aufnehmen
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about-me" className={styles.secondaryButton}>
                  Über mich
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
