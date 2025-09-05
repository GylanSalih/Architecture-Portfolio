// Demo data for Lina Sawatzki's Architecture Portfolio

export interface ArchitectureProject {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  image: string;
  awards?: string[];
  client?: string;
  area?: string;
  status: 'completed' | 'in-progress' | 'concept';
  // Additional details for single page view
  detailedDescription?: string;
  images?: string[];
  architect?: string;
  team?: string[];
  budget?: string;
  timeline?: string;
  materials?: string[];
  features?: string[];
  sustainability?: string[];
  challenges?: string;
  solutions?: string;
  impact?: string;
}

export const architectureProjects: ArchitectureProject[] = [
  {
    id: 1,
    title: "Moderne Villa Nordheim",
    category: "Wohnbau",
    year: "2023",
    location: "Hamburg, Deutschland",
    description: "Ein minimalistisches Einfamilienhaus mit nachhaltigen Materialien und zeitloser Eleganz. Die Villa verbindet moderne Architektur mit traditionellen Elementen und schafft einen harmonischen Übergang zwischen Innen- und Außenraum.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920&h=1080&fit=crop&crop=center",
    awards: [
      "Deutscher Architekturpreis 2023",
      "Green Building Award",
      "Hamburg Architecture Excellence"
    ],
    client: "Familie Nordheim",
    area: "320 m²",
    status: "completed",
    detailedDescription: "Die Villa Nordheim repräsentiert eine neue Generation nachhaltiger Wohnarchitektur. Das Projekt entstand aus dem Wunsch der Familie, ein Zuhause zu schaffen, das sowohl ökologisch verantwortlich als auch ästhetisch ansprechend ist. Die Architektur folgt dem Prinzip der Passivhaus-Bauweise und integriert innovative Technologien für Energieeffizienz und Komfort.",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&h=1080&fit=crop&crop=center"
    ],
    architect: "Lina Sawatzki",
    team: ["Lina Sawatzki (Projektleitung)", "Max Müller (Statik)", "Anna Schmidt (Landschaftsarchitektur)", "Tom Weber (Haustechnik)"],
    budget: "1.2 Mio. €",
    timeline: "18 Monate (Planung: 6 Monate, Bau: 12 Monate)",
    materials: ["FSC-zertifiziertes Holz", "Recycling-Beton", "Naturstein", "Glas", "Stahl"],
    features: ["Passivhaus-Standard", "Geothermie-Heizung", "Photovoltaik-Anlage", "Regenwassernutzung", "Grüne Dächer", "Smart Home System"],
    sustainability: ["CO2-neutraler Betrieb", "100% erneuerbare Energien", "Wassereinsparung 40%", "Recycling-Materialien 80%"],
    challenges: "Die Integration moderner Technologien in ein traditionelles Wohngebiet erforderte besondere Rücksichtnahme auf die Nachbarschaft und strenge Auflagen der Denkmalbehörde.",
    solutions: "Durch innovative Materialwahl und geschickte Raumaufteilung konnte ein zeitgemäßes Wohnkonzept realisiert werden, das sich harmonisch in die Umgebung einfügt.",
    impact: "Das Projekt dient als Vorzeigebeispiel für nachhaltiges Bauen und hat zu einer erhöhten Nachfrage nach ökologischen Bauprojekten in der Region geführt."
  },
  {
    id: 2,
    title: "Kulturzentrum Stadtmitte",
    category: "Öffentliche Bauten",
    year: "2024",
    location: "Berlin, Deutschland",
    description: "Ein vielseitiges Kulturzentrum im Herzen Berlins, das Tradition und Moderne vereint. Das Gebäude fungiert als kultureller Knotenpunkt und bietet Raum für Kunst, Musik und gesellschaftliche Veranstaltungen.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center",
    awards: [
      "Berlin Architecture Innovation Award",
      "Cultural Building Excellence 2024"
    ],
    client: "Stadt Berlin",
    area: "2.800 m²",
    status: "in-progress",
    detailedDescription: "Das Kulturzentrum Stadtmitte entsteht als neues Herzstück des Berliner Kulturlebens. Das Projekt vereint verschiedene kulturelle Einrichtungen unter einem Dach und schafft flexible Räume für Ausstellungen, Konzerte, Theater und gesellschaftliche Veranstaltungen. Die Architektur spiegelt Berlins vielfältige Kulturlandschaft wider und bietet eine Plattform für künstlerischen Austausch.",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1494522358652-f30e61a603e0?w=1920&h=1080&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
    ],
    architect: "Lina Sawatzki",
    team: ["Lina Sawatzki (Projektleitung)", "Dr. Sarah Klein (Kulturberatung)", "Michael Bauer (Akustik)", "Lisa Wagner (Brandschutz)", "Robert Koch (Statik)"],
    budget: "15.5 Mio. €",
    timeline: "36 Monate (Planung: 12 Monate, Bau: 24 Monate)",
    materials: ["Stahlbeton", "Glas", "Naturstein", "Holz", "Metallfassade"],
    features: ["Flexible Veranstaltungsräume", "Akustik-optimierte Konzertsäle", "Moderne Ausstellungsflächen", "Café & Restaurant", "Bibliothek", "Multimedia-Studio"],
    sustainability: ["Energieeffizienzklasse A+", "Regenwassernutzung", "Grüne Dächer", "LED-Beleuchtung", "Wärmerückgewinnung"],
    challenges: "Die Integration verschiedener kultureller Nutzungen in einem Gebäude erforderte komplexe Raumplanung und spezielle akustische Lösungen.",
    solutions: "Durch modulare Raumaufteilung und innovative Akustiksysteme konnten optimale Bedingungen für alle Veranstaltungsarten geschaffen werden.",
    impact: "Das Kulturzentrum wird als neuer Anziehungspunkt für Berliner und Touristen dienen und die kulturelle Vielfalt der Stadt stärken."
  },
  {
    id: 3,
    title: "Luxus-Penthouse Marina",
    category: "Luxuswohnen",
    year: "2023",
    location: "München, Deutschland",
    description: "Ein exklusives Penthouse mit atemberaubendem Blick über die Stadt. Hochwertige Materialien und durchdachte Raumaufteilung schaffen ein einzigartiges Wohnerlebnis auf höchstem Niveau.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center",
    awards: [
      "Luxury Living Award 2023",
      "Interior Design Excellence"
    ],
    client: "Privater Auftraggeber",
    area: "450 m²",
    status: "completed"
  },
  {
    id: 4,
    title: "Nachhaltiges Bürogebäude",
    category: "Gewerbebau",
    year: "2024",
    location: "Frankfurt, Deutschland",
    description: "Ein zukunftsweisendes Bürogebäude mit fokus auf Nachhaltigkeit und Energieeffizienz. Innovative Technologien und grüne Architektur schaffen ein inspirierendes Arbeitsumfeld.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center",
    awards: [
      "Sustainable Architecture Award",
      "DGNB Gold Zertifikat"
    ],
    client: "TechCorp AG",
    area: "5.200 m²",
    status: "in-progress"
  },
  {
    id: 5,
    title: "Historische Sanierung Altstadt",
    category: "Denkmalschutz",
    year: "2023",
    location: "Köln, Deutschland",
    description: "Behutsame Restaurierung eines historischen Gebäudes unter Denkmalschutz. Die Sanierung verbindet respektvollen Umgang mit der Geschichte und moderne Wohnstandards.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop&crop=center",
    awards: [
      "Denkmalschutz Preis NRW",
      "Heritage Conservation Award"
    ],
    client: "Historische Gesellschaft Köln",
    area: "850 m²",
    status: "completed"
  },
  {
    id: 6,
    title: "Zukunfts-Campus Universität",
    category: "Bildungsbauten",
    year: "2025",
    location: "Dresden, Deutschland",
    description: "Ein innovativer Campus für die Universität Dresden, der flexibles Lernen und Forschen ermöglicht. Das Design fördert Kreativität und interdisziplinäre Zusammenarbeit.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop&crop=center",
    client: "TU Dresden",
    area: "12.000 m²",
    status: "concept"
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): ArchitectureProject[] => {
  return architectureProjects.filter(project => project.category === category);
};

// Helper function to get projects by status
export const getProjectsByStatus = (status: 'completed' | 'in-progress' | 'concept'): ArchitectureProject[] => {
  return architectureProjects.filter(project => project.status === status);
};

// Helper function to get featured projects (those with awards)
export const getFeaturedProjects = (): ArchitectureProject[] => {
  return architectureProjects.filter(project => project.awards && project.awards.length > 0);
};

export default architectureProjects;
