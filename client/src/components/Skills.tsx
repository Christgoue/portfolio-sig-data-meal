/**
 * Skills - Section Compétences Techniques
 * Design: Moderne Chaleureux - Badges visuels avec barres de progression
 * 
 * Affiche :
 * - Compétences organisées par catégories
 * - Badges avec couleurs différentes par catégorie
 * - Barres de progression pour le niveau de maîtrise
 * - Design minimaliste et épuré
 */

import { skillsData } from "@/data/skills";

const categoryColors: Record<string, { bg: string; text: string; bar: string }> = {
  "Cartographie & SIG": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    bar: "bg-blue-500",
  },
  "Analyse Data & BI": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    bar: "bg-emerald-500",
  },
  "Développement Web": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    bar: "bg-purple-500",
  },
  "Outils & Données": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    bar: "bg-amber-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-border bg-secondary/30">
      <div className="container">
        {/* Titre de section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Compétences Techniques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Maîtrise d'outils modernes pour la cartographie, l'analyse de données et la visualisation.
          </p>
        </div>

        {/* Grille de catégories */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((category, idx) => {
            const colors = categoryColors[category.category] || {
              bg: "bg-gray-50",
              text: "text-gray-700",
              bar: "bg-gray-500",
            };

            return (
              <div key={idx} className="space-y-6">
                {/* Titre de catégorie */}
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {category.category}
                </h3>

                {/* Liste des compétences */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      {/* Nom et badge de niveau */}
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i < skill.level
                                  ? colors.bar
                                  : "bg-border"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Barre de progression */}
                      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} transition-all duration-500`}
                          style={{
                            width: `${(skill.level / 5) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section supplémentaire : Dimensions professionnelles */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-border">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Dimensions Professionnelles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Analyste Data
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Transformation de données complexes en insights exploitables et dashboards impactants.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🗺️</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Spécialiste SIG
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise en cartographie, analyse spatiale et systèmes d'information géographique.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Suivi & Évaluateur
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement de projets, suivi des indicateurs et évaluation des résultats.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Visualisation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Création de visualisations claires et impactantes pour communiquer les données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
