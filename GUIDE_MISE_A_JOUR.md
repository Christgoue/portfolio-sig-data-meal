# Guide de Mise à Jour du Portfolio

Bienvenue ! Ce guide vous explique comment mettre à jour votre portfolio de manière simple et progressive. Le code est structuré pour être facile à comprendre et à modifier.

## 📁 Structure du Projet

```
portfolio-sig-data/
├── client/
│   ├── src/
│   │   ├── components/        ← Composants réutilisables
│   │   │   ├── Header.tsx     (Navigation)
│   │   │   ├── Hero.tsx       (Section intro)
│   │   │   ├── Expertise.tsx  (3 piliers)
│   │   │   ├── Portfolio.tsx  (Projets)
│   │   │   ├── About.tsx      (À propos)
│   │   │   └── Footer.tsx     (Pied de page)
│   │   ├── pages/
│   │   │   └── Home.tsx       (Page principale)
│   │   ├── App.tsx            (Configuration app)
│   │   └── index.css          (Styles globaux)
│   └── index.html             (HTML principal)
└── README.md
```

## 🎨 Design et Couleurs

Le portfolio utilise un design **Moderne Chaleureux** avec :

- **Couleur principale** : Terracotta `#C17A6B` (accent)
- **Fond** : Blanc cassé `#FAFAF8`
- **Texte** : Gris chaud `#2D2D2D`
- **Typographie** : Lora (titres) + Inter (corps)

Toutes les couleurs sont définies dans `client/src/index.css`.

## 🔄 Mises à Jour Courantes

### 1. Modifier le Titre et la Description

**Fichier** : `client/src/components/Hero.tsx`

```tsx
// Ligne ~20 : Modifier le titre principal
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
  Cartographie & Données  ← Changez ce texte
</h1>

// Ligne ~23 : Modifier la description
<p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
  Spécialiste SIG et Analyste Data. Je transforme...  ← Changez ce texte
</p>
```

### 2. Ajouter un Nouveau Projet

**Fichier** : `client/src/components/Portfolio.tsx`

Trouvez le tableau `projects` et ajoutez une nouvelle entrée :

```tsx
const projects: Project[] = [
  // ... projets existants ...
  {
    id: "mon-nouveau-projet",
    title: "Titre du Projet",
    description: "Description courte du projet",
    category: "Cartographie SIG",  // ou "Analyse Data" ou "Visualisation"
    image: "URL_DE_L_IMAGE",  // Lien vers l'image
    tags: ["Tag1", "Tag2", "Tag3"],
  },
];
```

### 3. Modifier la Section Expertise

**Fichier** : `client/src/components/Expertise.tsx`

Modifiez le tableau `expertiseCards` :

```tsx
const expertiseCards: ExpertiseCard[] = [
  {
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: "Cartographie SIG",
    description: "Votre description ici",
    skills: ["QGIS", "ArcGIS", "Leaflet"],  // Ajoutez vos outils
  },
  // ...
];
```

### 4. Modifier la Section À Propos

**Fichier** : `client/src/components/About.tsx`

Modifiez le texte dans la section `<p>` :

```tsx
<p className="text-lg text-muted-foreground leading-relaxed mb-6">
  Je suis un spécialiste en Systèmes d'Information Géographique...
  ← Remplacez ce texte par votre biographie
</p>
```

### 5. Modifier les Liens de Contact

**Fichiers** : 
- `client/src/components/Header.tsx`
- `client/src/components/Footer.tsx`

Remplacez `christgoue@gmail.com` par votre email et les URLs LinkedIn/GitHub.

### 6. Changer les Images

Pour ajouter vos propres images :

1. Préparez une image (JPG, PNG, WebP)
2. Utilisez le service `manus-upload-file --webdev` pour l'uploader
3. Copiez l'URL fournie et collez-la dans le code

**Exemple** :
```tsx
image: "https://votre-url-image.com/image.webp"
```

## 💻 Concepts Clés du Code

### Composants React

Chaque section est un **composant** (fichier `.tsx`). Un composant est une fonction qui retourne du HTML/JSX.

```tsx
export default function Hero() {
  return (
    <section>
      {/* Contenu ici */}
    </section>
  );
}
```

### Tailwind CSS

Les styles utilisent **Tailwind CSS** (classes utilitaires) :

```tsx
<div className="text-lg text-accent font-bold">
  {/* text-lg = taille grande */}
  {/* text-accent = couleur accent */}
  {/* font-bold = texte gras */}
</div>
```

### Icônes

Les icônes viennent de `lucide-react` :

```tsx
import { MapPin, BarChart3, Mail } from "lucide-react";

<MapPin className="w-8 h-8 text-accent" />
```

## 🚀 Déploiement

### Prévisualiser localement

```bash
cd /home/ubuntu/portfolio-sig-data
pnpm dev
```

Ouvrez `http://localhost:3000` dans votre navigateur.

### Publier le site

1. Cliquez sur le bouton **"Publish"** dans l'interface Manus
2. Le site sera accessible via une URL publique

## 📝 Bonnes Pratiques

### Garder le code lisible

- Utilisez des noms clairs pour les variables
- Ajoutez des commentaires pour expliquer votre logique
- Respectez l'indentation (2 espaces)

### Tester vos modifications

- Après chaque changement, vérifiez le rendu dans le navigateur
- Testez sur mobile (réduisez la fenêtre du navigateur)
- Vérifiez les liens et les images

### Sauvegarder régulièrement

- Utilisez `webdev_save_checkpoint` pour sauvegarder votre travail
- Cela vous permet de revenir en arrière si quelque chose se casse

## 🎯 Prochaines Étapes Suggérées

1. **Personnalisez le contenu** : Remplacez les textes par vos propres informations
2. **Ajoutez vos projets** : Complétez la section Portfolio avec vos réalisations
3. **Mettez à jour les liens** : Assurez-vous que tous les liens de contact sont corrects
4. **Testez sur mobile** : Vérifiez que le site s'affiche bien sur téléphone
5. **Publiez** : Lancez votre portfolio au monde !

## 🆘 Aide et Support

Si vous avez des questions :

1. Consultez les commentaires dans le code (ils expliquent chaque section)
2. Vérifiez la structure des fichiers
3. Testez vos modifications progressivement

## 📚 Ressources Utiles

- **Tailwind CSS** : https://tailwindcss.com/docs
- **React** : https://react.dev
- **Lucide Icons** : https://lucide.dev

---

**Bonne chance avec votre portfolio ! N'hésitez pas à l'améliorer progressivement.** 🚀
