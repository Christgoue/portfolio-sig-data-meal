/**
 * Header - Navigation principale du portfolio
 * Design: Moderne Chaleureux - Navigation minimaliste et épurée
 * 
 * Ce composant affiche :
 * - Logo/Nom du portfolio
 * - Navigation vers les sections principales
 * - Lien de contact
 */

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-4 md:py-6">
        {/* Logo / Nom */}
        <Link href="/">
          <a className="text-xl font-bold text-foreground hover:text-accent transition-colors">
            Christian Gouesse
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#expertise" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Expertise
          </a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Portfolio
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            À propos
          </a>
        </nav>

        {/* CTA Contact */}
        <a
          href="mailto:christgoue@gmail.com"
          className="btn-primary text-sm"
        >
          Contactez-moi
        </a>
      </div>
    </header>
  );
}
