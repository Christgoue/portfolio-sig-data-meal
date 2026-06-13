/**
 * Configuration des Compétences Techniques - Portfolio SIG & Data
 * 
 * Ce fichier centralise toutes vos compétences techniques organisées par catégorie.
 * Chaque compétence a un niveau de maîtrise (1-5) pour afficher la barre de progression.
 * 
 * COMMENT MODIFIER :
 * 1. Modifiez les catégories existantes ou ajoutez-en de nouvelles
 * 2. Ajoutez/supprimez des compétences dans chaque catégorie
 * 3. Ajustez le niveau (1-5) selon votre maîtrise
 * 4. Les changements s'affichent automatiquement
 */

export interface Skill {
  name: string;
  level: number; // 1-5 (1=débutant, 5=expert)
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Cartographie & SIG",
    skills: [
      { name: "QGIS", level: 5 },
      { name: "ArcGIS", level: 4 },
      { name: "PostGIS", level: 4 },
      { name: "Leaflet", level: 4 },
      { name: "Mapbox", level: 3 },
      { name: "Analyse Spatiale", level: 5 },
    ],
  },
  {
    category: "Analyse Data & BI",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 5 },
      { name: "SQL", level: 5 },
      { name: "Tableau", level: 4 },
      { name: "Power BI", level: 3 },
      { name: "R", level: 3 },
      { name: "Excel Avancé", level: 5 },
    ],
  },
  {
    category: "Développement Web",
    skills: [
      { name: "React", level: 4 },
      { name: "JavaScript/TypeScript", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "D3.js", level: 3 },
      { name: "REST API", level: 4 },
    ],
  },
  {
    category: "Outils & Données",
    skills: [
      { name: "Git/GitHub", level: 4 },
      { name: "Google Cloud", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Gestion de Données", level: 5 },
      { name: "Visualisation Data", level: 5 },
    ],
  },
];

/**
 * EXEMPLE : Comment ajouter une nouvelle compétence
 * 
 * {
 *   category: "Nouvelle Catégorie",
 *   skills: [
 *     { name: "Compétence 1", level: 4 },
 *     { name: "Compétence 2", level: 3 },
 *   ],
 * },
 * 
 * Niveaux de maîtrise :
 * 1 = Débutant (apprentissage)
 * 2 = Basique (utilisation simple)
 * 3 = Intermédiaire (usage courant)
 * 4 = Avancé (expertise)
 * 5 = Expert (maîtrise complète)
 */
