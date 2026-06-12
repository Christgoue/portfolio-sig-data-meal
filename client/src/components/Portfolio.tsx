/**
 * Portfolio - Section des projets réalisés
 * Design: Moderne Chaleureux - Cartes de projets avec images
 * 
 * Affiche une galerie de projets avec descriptions et liens
 * Structure simple pour faciliter l'ajout de nouveaux projets
 */

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "gis-analysis",
    title: "Analyse Cartographique Régionale",
    description: "Création d'une analyse SIG complète pour visualiser les patterns géographiques et les tendances spatiales.",
    category: "Cartographie SIG",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/gis-mapping-section-5FHECKdFFnwLnfYi2e6sow.webp",
    tags: ["QGIS", "PostGIS", "Analyse Spatiale"],
  },
  {
    id: "data-dashboard",
    title: "Tableau de Bord Analytics",
    description: "Dashboard interactif pour le suivi de KPIs et la visualisation de données métier en temps réel.",
    category: "Analyse Data",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/data-analytics-section-cEmQDSMNd7XTowBFfwzfdT.webp",
    tags: ["Tableau", "SQL", "Business Intelligence"],
  },
  {
    id: "geospatial-viz",
    title: "Visualisation Géospatiale Interactive",
    description: "Création d'une application web interactive pour explorer des données géographiques complexes.",
    category: "Visualisation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/hero-gis-data-VVUghCecvT9HRHU8STArbj.webp",
    tags: ["Mapbox", "React", "D3.js"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section border-t border-border">
      <div className="container">
        {/* Titre de section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projets sélectionnés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Exemples de projets combinant cartographie SIG, analyse data et visualisation impactante.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg border border-border bg-card hover:border-accent/50 transition-all duration-300">
              {/* Image du projet */}
              <div className="relative overflow-hidden bg-secondary h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Catégorie */}
                <p className="text-sm text-accent font-medium mb-2">
                  {project.category}
                </p>

                {/* Titre */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien */}
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex text-accent font-medium hover:text-accent/80 transition-colors link-underline"
                  >
                    Voir le projet →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour plus de projets */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Vous cherchez un projet spécifique ou avez une question ?
          </p>
          <a href="mailto:christgoue@gmail.com" className="btn-primary">
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
