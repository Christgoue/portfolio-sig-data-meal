/**
 * Home - Page principale du portfolio
 * Design: Moderne Chaleureux - Assemblage de tous les composants
 * 
 * Structure :
 * 1. Header (navigation)
 * 2. Hero (introduction)
 * 3. Expertise (3 piliers)
 * 4. Portfolio (projets)
 * 5. About (à propos)
 * 6. Footer (pied de page)
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header sticky */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Portfolio />
        <Skills />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
