/**
 * Configuration des Projets - Portfolio SIG & Data
 * 
 * Ce fichier centralise tous vos projets. Structure simple pour faciliter l'ajout de nouveaux projets.
 * 
 * COMMENT AJOUTER UN PROJET :
 * 1. Copiez un projet existant ci-dessous
 * 2. Modifiez les champs (title, description, etc.)
 * 3. Ajoutez un lien vers votre projet (link)
 * 4. C'est tout ! Le projet apparaîtra automatiquement sur votre portfolio
 * 
 * Champs disponibles :
 * - id: Identifiant unique (pas d'espaces, utilisez des tirets)
 * - title: Titre du projet
 * - description: Description courte (1-2 phrases)
 * - category: "Cartographie SIG" | "Analyse Data" | "Visualisation"
 * - image: URL de l'image du projet
 * - tags: Outils/technologies utilisés
 * - link: URL vers le projet (site, Tableau Public, GitHub, Cloud, etc.)
 * - linkLabel: Texte du bouton (ex: "Voir sur Tableau Public", "Accéder au site")
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Cartographie SIG" | "Analyse Data" | "Visualisation";
  image: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "gis-analysis",
    title: "Analyse Cartographique Régionale",
    description: "Création d'une analyse SIG complète pour visualiser les patterns géographiques et les tendances spatiales.",
    category: "Cartographie SIG",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/gis-mapping-section-5FHECKdFFnwLnfYi2e6sow.webp",
    tags: ["QGIS", "PostGIS", "Analyse Spatiale"],
    link: "https://example.com/projet-1",
    linkLabel: "Voir le projet",
  },
  {
    id: "data-dashboard",
    title: "Tableau de Bord Analytics",
    description: "Dashboard interactif pour le suivi de KPIs et la visualisation de données métier en temps réel.",
    category: "Analyse Data",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/data-analytics-section-cEmQDSMNd7XTowBFfwzfdT.webp",
    tags: ["Tableau", "SQL", "Business Intelligence"],
    link: "https://public.tableau.com/app/profile/votre-profil",
    linkLabel: "Voir sur Tableau Public",
  },
  {
    id: "geospatial-viz",
    title: "Visualisation Géospatiale Interactive",
    description: "Création d'une application web interactive pour explorer des données géographiques complexes.",
    category: "Visualisation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/hero-gis-data-VVUghCecvT9HRHU8STArbj.webp",
    tags: ["Mapbox", "React", "D3.js"],
    link: "https://github.com/Christgoue/votre-repo",
    linkLabel: "Voir sur GitHub",
  },

  /**
   * EXEMPLE : Comment ajouter un nouveau projet
   * 
   * {
   *   id: "mon-nouveau-projet",
   *   title: "Titre du Projet",
   *   description: "Description courte du projet",
   *   category: "Cartographie SIG",  // ou "Analyse Data" ou "Visualisation"
   *   image: "https://url-vers-votre-image.com/image.webp",
   *   tags: ["Tag1", "Tag2", "Tag3"],
   *   link: "https://lien-vers-votre-projet.com",
   *   linkLabel: "Voir le projet",
   * },
   * 
   * Types de liens possibles :
   * - Site web: https://example.com
   * - Tableau Public: https://public.tableau.com/app/profile/...
   * - GitHub: https://github.com/username/repo
   * - Google Drive/Cloud: https://drive.google.com/...
   * - ArcGIS Online: https://arcgis.com/...
   * - Figma: https://figma.com/...
   * - Tout autre lien public
   */
];
