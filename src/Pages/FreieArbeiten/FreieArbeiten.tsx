import React, { useState } from 'react';
import { Filter, Eye, Calendar } from 'lucide-react';
import styles from './FreieArbeiten.module.scss';
import { artworks, Artwork, getArtworksByCategory } from '../../data/artworkData';

const FreieArbeiten: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = [
    { value: 'all', label: 'Alle Arbeiten' },
    { value: 'zeichnung', label: 'Zeichnungen' },
    { value: 'fotografie', label: 'Fotografie' },
    { value: 'kunst', label: 'Kunst' }
  ];

  const filteredArtworks = getArtworksByCategory(selectedCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'zeichnung':
        return 'Zeichnung';
      case 'fotografie':
        return 'Fotografie';
      case 'kunst':
        return 'Kunst';
      default:
        return category;
    }
  };

  const openLightbox = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className={styles.freieArbeiten}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleBox}>
            <div className={styles.cornerTopLeft}></div>
            <div className={styles.cornerTopRight}></div>
            <div className={styles.cornerBottomLeft}></div>
            <div className={styles.cornerBottomRight}></div>
            <h1 className={styles.title}>Freie Arbeiten</h1>
            <p className={styles.subtitle}>
              Zeichnungen, Fotografie, Kunst – zeigt Persönlichkeit
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
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.artworkCount}>
            {filteredArtworks.length} {filteredArtworks.length === 1 ? 'Arbeit' : 'Arbeiten'}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className={styles.masonryGallery}>
        {filteredArtworks.map((artwork: Artwork) => (
          <div 
            key={artwork.id} 
            className={styles.artworkCard}
            onClick={() => openLightbox(artwork)}
          >
            <div className={styles.imageContainer}>
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className={styles.artworkImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <Eye className={styles.viewIcon} />
              </div>
            </div>

            <div className={styles.artworkInfo}>
              <div className={styles.artworkHeader}>
                <h3 className={styles.artworkTitle}>{artwork.title}</h3>
                <span className={styles.artworkCategory}>
                  {getCategoryLabel(artwork.category)}
                </span>
              </div>

              <div className={styles.artworkMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={14} />
                  <span>{artwork.year}</span>
                </div>
                {artwork.medium && (
                  <div className={styles.metaItem}>
                    <span>{artwork.medium}</span>
                  </div>
                )}
                {artwork.size && (
                  <div className={styles.metaItem}>
                    <span>{artwork.size}</span>
                  </div>
                )}
              </div>

              {artwork.description && (
                <p className={styles.artworkDescription}>{artwork.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredArtworks.length === 0 && (
        <div className={styles.noResults}>
          <Eye size={48} />
          <h3>Keine Arbeiten gefunden</h3>
          <p>Versuchen Sie andere Filter-Einstellungen</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedArtwork && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>
            
            <div className={styles.lightboxImage}>
              <img src={selectedArtwork.image} alt={selectedArtwork.title} />
            </div>
            
            <div className={styles.lightboxInfo}>
              <h2 className={styles.lightboxTitle}>{selectedArtwork.title}</h2>
              <div className={styles.lightboxMeta}>
                <span className={styles.lightboxCategory}>
                  {getCategoryLabel(selectedArtwork.category)}
                </span>
                <span className={styles.lightboxYear}>{selectedArtwork.year}</span>
              </div>
              
              {selectedArtwork.description && (
                <p className={styles.lightboxDescription}>{selectedArtwork.description}</p>
              )}
              
              <div className={styles.lightboxDetails}>
                {selectedArtwork.medium && (
                  <div className={styles.detail}>
                    <strong>Medium:</strong> {selectedArtwork.medium}
                  </div>
                )}
                {selectedArtwork.size && (
                  <div className={styles.detail}>
                    <strong>Größe:</strong> {selectedArtwork.size}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreieArbeiten;
