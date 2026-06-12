/**
 * Expertise - Section des 3 piliers de compétences
 * Design: Moderne Chaleureux - Cartes avec icônes et descriptions
 * 
 * Inspiré de naledi.co.uk (Collect, Process, Visualise)
 * Affiche les 3 domaines d'expertise avec descriptions détaillées
 */

import { MapPin, BarChart3, Layers } from "lucide-react";

interface ExpertiseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const expertiseCards: ExpertiseCard[] = [
  {
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: "Cartographie SIG",
    description: "Création et analyse de cartes géographiques professionnelles. Maîtrise des outils SIG modernes pour visualiser et analyser des données spatiales complexes.",
    skills: ["QGIS", "ArcGIS", "Leaflet", "Mapbox", "PostGIS"],
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    title: "Analyse Data",
    description: "Traitement et analyse de données volumineuses. Extraction d'insights pertinents à partir de datasets complexes pour soutenir la prise de décision.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "R"],
  },
  {
    icon: <Layers className="w-8 h-8 text-accent" />,
    title: "Visualisation",
    description: "Création de visualisations impactantes et interactives. Communication claire de données complexes pour des audiences variées.",
    skills: ["Tableau", "Power BI", "Plotly", "D3.js", "Infographie"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section border-t border-border">
      <div className="container">
        {/* Titre de section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mon expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Je maîtrise l'ensemble de la chaîne de valeur : de la collecte des données géographiques à leur visualisation impactante.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <div key={index} className="card-hover">
              {/* Icône */}
              <div className="mb-4 p-3 bg-secondary rounded-lg w-fit">
                {card.icon}
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 text-sm bg-secondary text-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
