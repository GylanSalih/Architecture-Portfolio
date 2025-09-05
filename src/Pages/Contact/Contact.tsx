import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building, User, MessageSquare, ArrowRight } from 'lucide-react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  return (
    <div className={styles.kontakt}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleBox}>
            <div className={styles.cornerTopLeft}></div>
            <div className={styles.cornerTopRight}></div>
            <div className={styles.cornerBottomLeft}></div>
            <div className={styles.cornerBottomRight}></div>
            <h1 className={styles.title}>Kontakt</h1>
            <p className={styles.subtitle}>
              Lassen Sie uns Ihre Architekturvision gemeinsam verwirklichen
            </p>
          </div>
          <div className={styles.heroLine}></div>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className={styles.contactSection}>
        <div className={styles.container}>
          
          {/* Contact Info Cards */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin />
              </div>
              <div className={styles.infoContent}>
                <h3>Studio</h3>
                <p>Musterstraße 123<br />10115 Berlin</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone />
              </div>
              <div className={styles.infoContent}>
                <h3>Telefon</h3>
                <p>+49 30 123 456 78</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail />
              </div>
              <div className={styles.infoContent}>
                <h3>E-Mail</h3>
                <p>hello@linasawatzki.de</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Clock />
              </div>
              <div className={styles.infoContent}>
                <h3>Öffnungszeiten</h3>
                <p>Mo - Fr: 9:00 - 18:00<br />Sa: Nach Vereinbarung</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h2>Projekt besprechen</h2>
              <p>Erzählen Sie mir von Ihrem Vorhaben</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">
                    <User size={18} />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Ihr Name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">
                    <Mail size={18} />
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone">
                    <Phone size={18} />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 123 456 789"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="projectType">
                    <Building size={18} />
                    Projekttyp *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="wohnbau">Wohnbau</option>
                    <option value="gewerbebau">Gewerbebau</option>
                    <option value="sanierung">Sanierung</option>
                    <option value="innenarchitektur">Innenarchitektur</option>
                    <option value="beratung">Beratung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="budget">
                    Budget (optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="unter-100k">Unter 100.000 €</option>
                    <option value="100k-250k">100.000 - 250.000 €</option>
                    <option value="250k-500k">250.000 - 500.000 €</option>
                    <option value="500k-1m">500.000 - 1.000.000 €</option>
                    <option value="ueber-1m">Über 1.000.000 €</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="timeline">
                    <Clock size={18} />
                    Zeitrahmen
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="sofort">Sofort</option>
                    <option value="3-monate">In 3 Monaten</option>
                    <option value="6-monate">In 6 Monaten</option>
                    <option value="1-jahr">In einem Jahr</option>
                    <option value="planung">Noch in Planung</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">
                  <MessageSquare size={18} />
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Beschreiben Sie Ihr Projekt, Ihre Wünsche und Vorstellungen..."
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Nachricht senden
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2>Leistungsspektrum</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Entwurf & Planung</h3>
              <p>Von der ersten Idee bis zur baureifen Planung</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Baubegleitung</h3>
              <p>Professionelle Überwachung der Bauausführung</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Innenarchitektur</h3>
              <p>Raumgestaltung und Interior Design</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Sanierung</h3>
              <p>Modernisierung und Revitalisierung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
