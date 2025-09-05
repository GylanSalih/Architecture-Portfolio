import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const displayCode = `// Design Projekt - Portfolio Website
const PortfolioProject: React.FC = () => {
  const skills = [
    'React & TypeScript',
    'UI/UX Design', 
    'Responsive Design',
    'SCSS/CSS',
    'JavaScript',
    'Figma',
    'Adobe Creative Suite',
    'Git & GitHub'
  ];

  return (
    <div className="portfolio-container">
      <h1>Willkommen in meiner
        kreativen Welt</h1>
      
      <p>Ich erstelle benutzerfreundliche
        Designs und entwickle moderne
        Web-Anwendungen.</p>
        
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      
      <button className="cta-button">
        Projekte ansehen
      </button>
    </div>
  );
};`;

  const highlightSyntax = (code: string) => {
    return code
      .replace(/(import|export|default|const|let|var|function|async|await|return|if|else|try|catch|finally|useEffect|useState|useCallback|class|interface|type|enum)/g, 
        '<span class="keyword">$1</span>')
      .replace(/(React|useState|useEffect|useCallback)/g, 
        '<span class="react">$1</span>')
      .replace(/'([^']*)'/g, 
        '<span class="string">\'$1\'</span>')
      .replace(/"([^"]*)"/g, 
        '<span class="string">"$1"</span>')
      .replace(/`([^`]*)`/g, 
        '<span class="string">`$1`</span>')
      .replace(/(\w+)(?=\s*:)/g, 
        '<span class="property">$1</span>')
      .replace(/(\/\/.*$)/gm, 
        '<span class="comment">$1</span>')
      .replace(/(\w+)(?=\()/g, 
        '<span class="function">$1</span>');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <Sparkles size={16} />
          <span>Design & Entwicklung</span>
        </div>
        
        <h1 className={styles.heroTitle}>
          Hallo, ich bin
          <span className={styles.gradientText}> Lina Sawatzki</span>
        </h1>
        
        <p className={styles.heroDescription}>
          Ich bin eine kreative Designerin und Entwicklerin mit Leidenschaft für 
          benutzerfreundliche Interfaces und moderne Web-Technologien. Ich verwandle 
          Ideen in schöne, funktionale digitale Erlebnisse.
        </p>
        
        <div className={styles.ctaButtons}>
          <Link to="/page-2" className={styles.primaryButton}>
            Meine Projekte
            <ArrowRight size={20} />
          </Link>
          <Link to="/page-1" className={styles.secondaryButton}>
            Über mich
          </Link>
        </div>
      </div>
      
      <div className={styles.heroVisual}>
        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span className={styles.dotClose}></span>
              <span className={styles.dotMinimize}></span>
              <span className={styles.dotMaximize}></span>
            </div>
            <div className={styles.windowTitle}>
              Portfolio.tsx — Lina Sawatzki
            </div>
          </div>
          <div className={styles.editorTabs}>
            <div className={`${styles.tab} ${styles.active}`}>
              <span className={styles.tabIcon}>🎨</span>
              Portfolio.tsx
            </div>
            <div className={styles.tab}>
              <span className={styles.tabIcon}>💼</span>
              Projects.tsx
              <span className={styles.tabClose}>×</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabIcon}>👤</span>
              About.tsx
              <span className={styles.tabClose}>×</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabIcon}>📧</span>
              Contact.tsx
              <span className={styles.tabClose}>×</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.lineNumbers}>
              {displayCode.split('\n').map((_, index) => (
                <div key={index} className={styles.lineNumber}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div className={styles.codeArea}>
              <pre className={styles.codeBlock}>
                <code 
                  dangerouslySetInnerHTML={{ 
                    __html: highlightSyntax(displayCode) 
                  }} 
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
