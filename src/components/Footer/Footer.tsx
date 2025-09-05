import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link to="/" className={styles.brand}>
              <img 
                src="/assets/img/Logo_Black.png" 
                alt="Lina Sawatzki Logo" 
                className={styles.logoLight}
                width={24}
                height={24}
              />
              <img 
                src="/assets/img/Logo_White.png" 
                alt="Lina Sawatzki Logo" 
                className={styles.logoDark}
                width={24}
                height={24}
              />
              <span>Lina Sawatzki</span>
            </Link>
            
            {/* Social Links */}
            <div className={styles.socialIcons}>
              <a 
                href="https://github.com/linasawatzki" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://instagram.com/linasawatzki" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/linasawatzki" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hallo@linasawatzki.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>






        </div>


      </div>
    </footer>
  );
};

export default Footer;
