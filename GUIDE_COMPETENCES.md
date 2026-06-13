# Guide des Compétences Techniques - Portfolio SIG & Data

## 📍 Où Modifier ?

**Fichier unique à modifier** : `client/src/data/skills.ts`

C'est le seul fichier que vous devez éditer pour ajouter, modifier ou supprimer des compétences.

## 🎯 Structure des Données

Chaque compétence est organisée par **catégorie** avec un **niveau de maîtrise** (1-5).

```typescript
{
  category: "Cartographie & SIG",
  skills: [
    { name: "QGIS", level: 5 },
    { name: "ArcGIS", level: 4 },
    // ...
  ],
}
```

## ✏️ Modifier une Compétence Existante

### Exemple : Augmenter votre niveau en Tableau

Ouvrez `client/src/data/skills.ts` et trouvez :

```typescript
{ name: "Tableau", level: 4 },
```

Changez le niveau (par exemple, de 4 à 5) :

```typescript
{ name: "Tableau", level: 5 },
```

## ➕ Ajouter une Nouvelle Compétence

### Étape 1 : Ouvrir le fichier

Ouvrez `client/src/data/skills.ts`

### Étape 2 : Trouver la catégorie appropriée

Par exemple, pour ajouter une compétence à "Cartographie & SIG" :

```typescript
{
  category: "Cartographie & SIG",
  skills: [
    { name: "QGIS", level: 5 },
    { name: "ArcGIS", level: 4 },
    { name: "PostGIS", level: 4 },
    // ← Ajoutez ici
  ],
}
```

### Étape 3 : Ajouter la compétence

```typescript
{ name: "Geopandas", level: 3 },
```

N'oubliez pas la virgule après chaque compétence (sauf la dernière).

## ➕ Ajouter une Nouvelle Catégorie

### Exemple : Ajouter "Gestion de Projets"

À la fin du tableau `skillsData`, avant la dernière accolade :

```typescript
{
  category: "Gestion de Projets",
  skills: [
    { name: "Agile/Scrum", level: 4 },
    { name: "Jira", level: 3 },
    { name: "Gestion d'équipe", level: 4 },
  ],
},
```

**Important** : Ajoutez une virgule après la catégorie précédente.

## 📊 Niveaux de Maîtrise

| Niveau | Description | Utilisation |
|--------|-------------|-------------|
| 1 | Débutant | Apprentissage en cours |
| 2 | Basique | Utilisation simple |
| 3 | Intermédiaire | Usage courant |
| 4 | Avancé | Expertise confirmée |
| 5 | Expert | Maîtrise complète |

## 🎨 Personnaliser les Couleurs

Les catégories ont des couleurs associées. Pour modifier une couleur, éditez le dictionnaire `categoryColors` :

```typescript
const categoryColors: Record<string, { bg: string; text: string; bar: string }> = {
  "Cartographie & SIG": {
    bg: "bg-blue-50",      // Fond clair
    text: "text-blue-700", // Couleur du texte
    bar: "bg-blue-500",    // Couleur de la barre
  },
  // ...
};
```

### Couleurs disponibles (Tailwind CSS)

**Bleus** : blue, indigo, cyan, sky
**Verts** : emerald, green, teal
**Rouges** : red, rose, pink
**Jaunes** : amber, yellow, orange
**Violets** : purple, violet, fuchsia

Exemple : `bg-emerald-50`, `text-emerald-700`, `bg-emerald-500`

## 📋 Catégories Actuelles

1. **Cartographie & SIG** (bleu)
2. **Analyse Data & BI** (vert)
3. **Développement Web** (violet)
4. **Outils & Données** (ambre)

## ⚠️ Erreurs Courantes

### Oublier la virgule
```typescript
// ❌ ERREUR
{ name: "QGIS", level: 5 }
{ name: "ArcGIS", level: 4 }

// ✅ CORRECT
{ name: "QGIS", level: 5 },
{ name: "ArcGIS", level: 4 },
```

### Niveau invalide
```typescript
// ❌ ERREUR : niveau 10 n'existe pas
{ name: "Python", level: 10 }

// ✅ CORRECT : niveau entre 1 et 5
{ name: "Python", level: 5 }
```

### Guillemets mal échappés
```typescript
// ❌ ERREUR
{ name: "C++" , level: 3 }

// ✅ CORRECT
{ name: "C++", level: 3 }
```

## 🔄 Vérifier vos Modifications

1. Sauvegardez le fichier
2. Attendez quelques secondes (le navigateur se rafraîchit automatiquement)
3. Vérifiez que vos compétences apparaissent correctement

Si rien ne s'affiche :
- Vérifiez la console du navigateur (F12) pour les erreurs
- Assurez-vous qu'il n'y a pas d'erreur de syntaxe (virgules, guillemets)

## 📚 Exemple Complet

```typescript
{
  category: "Nouvelle Catégorie",
  skills: [
    { name: "Compétence 1", level: 5 },
    { name: "Compétence 2", level: 4 },
    { name: "Compétence 3", level: 3 },
  ],
},
```

## 🆘 Besoin d'Aide ?

1. Comparez avec une compétence existante
2. Vérifiez la syntaxe (virgules, guillemets, accolades)
3. Consultez les exemples ci-dessus
4. Vérifiez la console du navigateur pour les messages d'erreur

---

**Bon courage pour mettre à jour vos compétences ! 🚀**
