/**
 * About - Section À propos et témoignages
 * Design: Moderne Chaleureux - Texte avec accent et citation
 * 
 * Affiche :
 * - Biographie courte
 * - Valeurs et approche
 * - Témoignage client
 */

import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Titre */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            À propos
          </h2>

          {/* Biographie */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Je suis un spécialiste en Systèmes d'Information Géographique (SIG) et analyste data passionné par la transformation de données complexes en insights exploitables. Avec une expertise combinée en cartographie, analyse spatiale et visualisation de données, je aide les organisations à prendre des décisions éclairées basées sur des données géographiques et analytiques.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mon approche repose sur trois piliers : <span className="text-accent font-semibold">collecter</span> des données fiables, <span className="text-accent font-semibold">analyser</span> les patterns spatiaux, et <span className="text-accent font-semibold">visualiser</span> les résultats de manière impactante. Je maîtrise les outils modernes de SIG et d'analytics pour créer des solutions adaptées à vos besoins.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Que vous ayez besoin d'une analyse cartographique, d'un dashboard de suivi, ou d'une visualisation de données géographiques, je suis là pour transformer vos données en atouts stratégiques.
            </p>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-border"></div>

          {/* Témoignage */}
          <div className="bg-secondary rounded-lg p-8 md:p-10">
            <div className="flex gap-4 mb-6">
              <Quote className="w-6 h-6 text-accent flex-shrink-0" />
            </div>
            <blockquote className="text-lg text-foreground font-medium mb-4">
              "Christian a transformé nos données géographiques complexes en visualisations claires et actionables. Son expertise en SIG et sa compréhension des enjeux métier font toute la différence."
            </blockquote>
            <p className="text-muted-foreground">
              — Client satisfait
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Prêt à collaborer sur votre prochain projet ?
            </p>
            <a href="mailto:christgoue@gmail.com" className="btn-primary">
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
