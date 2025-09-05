import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import styles from './DesktopHeader.module.scss';

const DesktopHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/img/Logo_Black.png" 
            alt="Lina Sawatzki Logo" 
            className={styles.logoLight}
            width={32}
            height={32}
          />
          <img 
            src="/assets/img/Logo_White.png" 
            alt="Lina Sawatzki Logo" 
            className={styles.logoDark}
            width={32}
            height={32}
          />
          <span>Lina Sawatzki</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about-me" 
            className={`${styles.navLink} ${isActive('/about-me') ? styles.active : ''}`}
          >
            Über mich
          </Link>
          <Link 
            to="/projects" 
            className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
          >
            Projekte
          </Link>
          <Link 
            to="/freie-arbeiten" 
            className={`${styles.navLink} ${isActive('/freie-arbeiten') ? styles.active : ''}`}
          >
            Freie Arbeiten
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          {/* Close Button */}
          <button 
            className={styles.mobileCloseButton}
            onClick={toggleMenu}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>

          <div className={styles.mobileNavContent}>
            {/* Navigation Links */}
            <div className={styles.mobileNavLinks}>
              <Link 
                to="/" 
                className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about-me" 
                className={`${styles.mobileNavLink} ${isActive('/about-me') ? styles.active : ''}`}
              >
                Über mich
              </Link>
              <Link 
                to="/projects" 
                className={`${styles.mobileNavLink} ${isActive('/projects') ? styles.active : ''}`}
              >
                Projekte
              </Link>
              <Link 
                to="/freie-arbeiten" 
                className={`${styles.mobileNavLink} ${isActive('/freie-arbeiten') ? styles.active : ''}`}
              >
                Freie Arbeiten
              </Link>
              <Link 
                to="/contact" 
                className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.active : ''}`}
              >
                Kontakt
              </Link>
            </div>

            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Website"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { DesktopHeader };
