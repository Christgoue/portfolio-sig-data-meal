# Guide d'Ajout de Projets - Portfolio SIG & Data

## 🎯 Objectif

Ce guide vous explique comment ajouter facilement vos projets au portfolio sans toucher au code React complexe.

## 📍 Où Modifier ?

**Fichier unique à modifier** : `client/src/data/projects.ts`

C'est le seul fichier que vous devez éditer pour ajouter, modifier ou supprimer des projets.

## ➕ Ajouter un Nouveau Projet

### Étape 1 : Ouvrir le fichier

Ouvrez `client/src/data/projects.ts` dans votre éditeur de texte.

### Étape 2 : Copier un projet existant

Trouvez le tableau `projects` et copiez un projet existant comme modèle :

```typescript
{
  id: "gis-analysis",
  title: "Analyse Cartographique Régionale",
  description: "Création d'une analyse SIG complète pour visualiser les patterns géographiques et les tendances spatiales.",
  category: "Cartographie SIG",
  image: "https://d2xsxph8kpxj0f.cloudfront.net/...",
  tags: ["QGIS", "PostGIS", "Analyse Spatiale"],
  link: "https://example.com/projet-1",
  linkLabel: "Voir le projet",
},
```

### Étape 3 : Modifier les champs

Remplacez les valeurs par vos informations :

| Champ | Description | Exemple |
|-------|-------------|---------|
| `id` | Identifiant unique (pas d'espaces) | `"mon-projet-sig"` |
| `title` | Titre du projet | `"Analyse de Densité Urbaine"` |
| `description` | Description courte (1-2 phrases) | `"Analyse SIG des zones urbaines..."` |
| `category` | Type de projet | `"Cartographie SIG"` ou `"Analyse Data"` ou `"Visualisation"` |
| `image` | URL de l'image | `"https://..."` |
| `tags` | Outils utilisés | `["QGIS", "Python", "PostGIS"]` |
| `link` | Lien vers le projet | `"https://..."` |
| `linkLabel` | Texte du bouton | `"Voir sur Tableau Public"` |

### Étape 4 : Ajouter une virgule

N'oubliez pas d'ajouter une virgule après chaque projet (sauf le dernier).

### Exemple Complet

```typescript
{
  id: "mon-nouveau-projet",
  title: "Analyse de Densité Urbaine",
  description: "Analyse SIG complète des zones urbaines avec visualisation des patterns de densité.",
  category: "Cartographie SIG",
  image: "https://votre-image.com/image.webp",
  tags: ["QGIS", "Python", "PostGIS"],
  link: "https://github.com/Christgoue/mon-projet",
  linkLabel: "Voir sur GitHub",
},
```

## 🔗 Types de Liens Supportés

Vous pouvez lier vers n'importe quel type de ressource :

### Tableau Public
```
link: "https://public.tableau.com/app/profile/christian-gouesse/viz/..."
linkLabel: "Voir sur Tableau Public"
```

### GitHub
```
link: "https://github.com/Christgoue/mon-repo"
linkLabel: "Voir sur GitHub"
```

### Site Web Personnel
```
link: "https://mon-site.com/projet"
linkLabel: "Voir le site"
```

### Google Drive / Cloud
```
link: "https://drive.google.com/file/d/..."
linkLabel: "Accéder au fichier"
```

### ArcGIS Online
```
link: "https://arcgis.com/apps/..."
linkLabel: "Voir sur ArcGIS"
```

### Figma
```
link: "https://figma.com/file/..."
linkLabel: "Voir le design"
```

## 🖼️ Ajouter une Image

### Option 1 : Utiliser une URL existante

Si vous avez déjà une image en ligne, utilisez son URL directement :

```typescript
image: "https://example.com/mon-image.png"
```

### Option 2 : Uploader une nouvelle image

1. Préparez votre image (JPG, PNG, WebP)
2. Utilisez la commande : `manus-upload-file --webdev mon-image.png`
3. Copiez l'URL fournie dans le champ `image`

## ✏️ Modifier un Projet Existant

1. Ouvrez `client/src/data/projects.ts`
2. Trouvez le projet (cherchez par `id`)
3. Modifiez les champs nécessaires
4. Sauvegardez

## 🗑️ Supprimer un Projet

1. Ouvrez `client/src/data/projects.ts`
2. Trouvez le projet à supprimer
3. Supprimez tout le bloc `{ ... },`
4. Assurez-vous que la virgule du projet précédent est présente

## 📋 Catégories Disponibles

Utilisez exactement l'une de ces trois catégories :

- `"Cartographie SIG"` - Projets de cartographie et analyse spatiale
- `"Analyse Data"` - Projets d'analyse de données et dashboards
- `"Visualisation"` - Projets de visualisation et infographie

## 🏷️ Tags (Outils et Technologies)

Ajoutez les outils que vous avez utilisés. Exemples :

**Cartographie SIG** :
- QGIS, ArcGIS, Leaflet, Mapbox, PostGIS, GeoServer

**Analyse Data** :
- Python, SQL, R, Pandas, NumPy, Excel

**Visualisation** :
- Tableau, Power BI, Plotly, D3.js, Figma, Infographie

**Général** :
- React, JavaScript, HTML/CSS, GitHub, Google Drive

## ⚠️ Erreurs Courantes

### Oublier la virgule
```typescript
// ❌ ERREUR : pas de virgule après le projet
{
  id: "projet-1",
  ...
}
{
  id: "projet-2",  // ← Erreur ici
  ...
}

// ✅ CORRECT : virgule présente
{
  id: "projet-1",
  ...
},
{
  id: "projet-2",
  ...
}
```

### Guillemets mal échappés
```typescript
// ❌ ERREUR : guillemets non échappés
title: "Projet "Spécial""

// ✅ CORRECT : guillemets échappés
title: "Projet \"Spécial\""
```

### Oublier les guillemets
```typescript
// ❌ ERREUR : pas de guillemets
id: mon-projet

// ✅ CORRECT : guillemets présents
id: "mon-projet"
```

## 🔄 Vérifier vos Modifications

Après avoir modifié `projects.ts` :

1. Sauvegardez le fichier
2. Attendez quelques secondes (le navigateur se rafraîchit automatiquement)
3. Vérifiez que votre projet apparaît sur la page

Si rien ne s'affiche :
- Vérifiez la console du navigateur (F12) pour les erreurs
- Assurez-vous qu'il n'y a pas d'erreur de syntaxe (virgules, guillemets)

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :

1. Vérifiez la syntaxe (virgules, guillemets)
2. Comparez avec un projet existant
3. Consultez les exemples ci-dessus
4. Vérifiez la console du navigateur pour les messages d'erreur

---

**Bon courage pour ajouter vos projets ! 🚀**
