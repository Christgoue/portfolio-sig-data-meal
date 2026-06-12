/**
 * Footer - Pied de page du portfolio
 * Design: Moderne Chaleureux - Navigation et liens de contact
 * 
 * Affiche :
 * - Liens de navigation
 * - Liens de contact (email, LinkedIn, GitHub)
 * - Copyright
 */

import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50 mt-16 md:mt-24">
      <div className="container py-12 md:py-16">
        {/* Contenu principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Colonne 1: À propos */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Christian Gouesse</h3>
            <p className="text-sm text-muted-foreground">
              Spécialiste SIG et Analyste Data. Transforme des données géographiques complexes en insights actionables.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a href="#expertise" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Expertise
              </a>
              <a href="#portfolio" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </a>
            </nav>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connectez-vous</h4>
            <div className="flex gap-4">
              <a
                href="mailto:christgoue@gmail.com"
                className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/christian-gouesse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Christgoue"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Christian Gouesse. Tous droits réservés.</p>
          <p>Conçu et développé avec attention au détail.</p>
        </div>
      </div>
    </footer>
  );
}
