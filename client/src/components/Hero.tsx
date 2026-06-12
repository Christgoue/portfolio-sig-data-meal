/**
 * Hero - Section d'introduction principale
 * Design: Moderne Chaleureux - Image dynamique avec gradient overlay
 * 
 * Affiche :
 * - Titre principal avec tagline
 * - Image dynamique (topographic/data visualization)
 * - CTA principal
 * - Animation subtile au scroll
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      {/* Image de fond dynamique avec overlay */}
      <div
        className="absolute inset-0 z-0 animate-pulse"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663744840844/HwJfuQSJRo4cbFdPtKuPKP/hero-gis-data-animated-9sTKtUX85tHQNj84XCWChH.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          animation: 'subtle-zoom 20s ease-in-out infinite',
        }}
      >
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/60"></div>
      </div>

      {/* Contenu */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Cartographie & Données
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay">
            Spécialiste SIG et Analyste Data. Je transforme des données géographiques complexes en insights actionables et visualisations impactantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <a href="#portfolio" className="btn-primary">
              Voir mes projets
            </a>
            <a href="mailto:christgoue@gmail.com" className="btn-secondary">
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style>{`
        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-delay,
          .animate-fade-in-delay-2 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
