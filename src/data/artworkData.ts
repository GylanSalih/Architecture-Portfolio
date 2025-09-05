// Freie Arbeiten - Zeichnungen, Fotografie, Kunst

export interface Artwork {
  id: number;
  title: string;
  category: 'zeichnung' | 'fotografie' | 'kunst';
  year: string;
  description?: string;
  image: string;
  medium?: string;
  size?: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Stadtlandschaft Berlin",
    category: "zeichnung",
    year: "2023",
    description: "Bleistiftzeichnung der Berliner Skyline bei Sonnenuntergang",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop&crop=center",
    medium: "Bleistift auf Papier",
    size: "A3"
  },
  {
    id: 2,
    title: "Licht und Schatten",
    category: "fotografie",
    year: "2023",
    description: "Architektonische Details in schwarz-weiß",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop&crop=center",
    medium: "Digital"
  },
  {
    id: 3,
    title: "Abstrakte Komposition #1",
    category: "kunst",
    year: "2024",
    description: "Experimentelle Farbkomposition mit Acryl",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=700&fit=crop&crop=center",
    medium: "Acryl auf Leinwand",
    size: "50x70 cm"
  },
  {
    id: 4,
    title: "Porträtstudie",
    category: "zeichnung",
    year: "2023",
    description: "Charcoal Portrait einer jungen Frau",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
    medium: "Kohle",
    size: "A4"
  },
  {
    id: 5,
    title: "Urbane Geometrie",
    category: "fotografie",
    year: "2024",
    description: "Geometrische Formen in der modernen Architektur",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=500&fit=crop&crop=center",
    medium: "Digital"
  },
  {
    id: 6,
    title: "Naturstudien",
    category: "zeichnung",
    year: "2023",
    description: "Botanische Skizzen verschiedener Pflanzen",
    image: "https://images.unsplash.com/photo-1594736797933-d0cc5bf51993?w=600&h=800&fit=crop&crop=center",
    medium: "Tusche",
    size: "A5"
  },
  {
    id: 7,
    title: "Farbexperiment",
    category: "kunst",
    year: "2024",
    description: "Spielerischer Umgang mit Farbe und Textur",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=600&fit=crop&crop=center",
    medium: "Mixed Media",
    size: "40x60 cm"
  },
  {
    id: 8,
    title: "Straßenfotografie",
    category: "fotografie",
    year: "2023",
    description: "Spontane Momente des städtischen Lebens",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=900&fit=crop&crop=center",
    medium: "Analog"
  },
  {
    id: 9,
    title: "Handstudien",
    category: "zeichnung",
    year: "2024",
    description: "Anatomische Studien der menschlichen Hand",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center",
    medium: "Bleistift",
    size: "A4"
  },
  {
    id: 10,
    title: "Texture Studies",
    category: "kunst",
    year: "2023",
    description: "Experimente mit verschiedenen Oberflächenstrukturen",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center",
    medium: "Mixed Media",
    size: "30x40 cm"
  },
  {
    id: 11,
    title: "Minimalistic Architecture",
    category: "fotografie",
    year: "2024",
    description: "Reduzierte Formen in der zeitgenössischen Architektur",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop&crop=center",
    medium: "Digital"
  },
  {
    id: 12,
    title: "Skizzenbuch Seite 42",
    category: "zeichnung",
    year: "2023",
    description: "Spontane Alltagsbeobachtungen",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=700&fit=crop&crop=center",
    medium: "Fineliner",
    size: "A5"
  }
];

// Helper function to get artworks by category
export const getArtworksByCategory = (category: string): Artwork[] => {
  if (category === 'all') return artworks;
  return artworks.filter(artwork => artwork.category === category);
};

export default artworks;
