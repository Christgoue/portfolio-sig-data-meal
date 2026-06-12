/**
 * About - Section À propos et témoignages
 * Design: Moderne Chaleureux - Photo stylisée avec accent terracotta
 * 
 * Affiche :
 * - Photo de profil stylisée
 * - Biographie courte
 * - Valeurs et approche
 * - Témoignage client
 */

import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo de profil stylisée */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <img
                src="/manus-storage/profile-photo-styled_84fc264f.png"
                alt="Christian Gouesse"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              {/* Décoration subtile */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Texte À propos */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              À propos
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis un spécialiste en Systèmes d'Information Géographique (SIG) et analyste data passionné par la transformation de données complexes en insights exploitables. Avec une expertise combinée en cartographie, analyse spatiale et visualisation de données, j'aide les organisations à prendre des décisions éclairées basées sur des données géographiques et analytiques.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon approche repose sur trois piliers : <span className="text-accent font-semibold">collecter</span> des données fiables, <span className="text-accent font-semibold">analyser</span> les patterns spatiaux, et <span className="text-accent font-semibold">visualiser</span> les résultats de manière impactante. Je maîtrise les outils modernes de SIG et d'analytics pour créer des solutions adaptées à vos besoins.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Que vous ayez besoin d'une analyse cartographique, d'un dashboard de suivi, ou d'une visualisation de données géographiques, je suis là pour transformer vos données en atouts stratégiques.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-border"></div>

        {/* Témoignage */}
        <div className="bg-secondary rounded-lg p-8 md:p-10 max-w-3xl mx-auto">
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
    </section>
  );
}
