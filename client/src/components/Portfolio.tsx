/**
 * Portfolio - Section des projets réalisés
 * Design: Moderne Chaleureux - Cartes de projets avec images
 * 
 * Utilise la configuration centralisée depuis data/projects.ts
 * Affiche une galerie de projets avec descriptions et liens cliquables
 * 
 * COMMENT AJOUTER UN PROJET :
 * 1. Modifiez client/src/data/projects.ts
 * 2. Ajoutez un nouvel objet au tableau 'projects'
 * 3. Le projet apparaît automatiquement ici !
 */

import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

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
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien vers le projet */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {project.linkLabel || "Voir le projet"}
                    <ExternalLink className="w-4 h-4" />
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
