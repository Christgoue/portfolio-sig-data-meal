/**
 * Hero - Section d'introduction principale
 * Design: Moderne Chaleureux - Image de fond avec gradient overlay
 * 
 * Affiche :
 * - Titre principal avec tagline
 * - Image de fond (topographic/data visualization)
 * - CTA principal
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      {/* Image de fond avec overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/hero-gis-data-VVUghCecvT9HRHU8STArbj.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Contenu */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Cartographie & Données
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Spécialiste SIG et Analyste Data. Je transforme des données géographiques complexes en insights actionables et visualisations impactantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-primary">
              Voir mes projets
            </a>
            <a href="mailto:christgoue@gmail.com" className="btn-secondary">
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
