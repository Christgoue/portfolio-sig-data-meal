# Guide du Backoffice - Portfolio SIG & Data

## 🔐 Accès au Backoffice

**URL** : `https://votre-domaine.com/backoffice`

**Mot de passe par défaut** : `admin123`

⚠️ **Important** : Changez ce mot de passe en production !

## 📋 Fonctionnalités

Le backoffice vous permet de gérer facilement :

1. **Projets** - Ajouter, modifier, supprimer vos projets
2. **Compétences** - Gérer vos compétences par catégorie

Toutes les modifications sont **sauvegardées automatiquement** dans votre navigateur (localStorage).

---

## 📊 Gestion des Projets

### Ajouter un Projet

1. Allez dans l'onglet **Projets**
2. Cliquez sur **"Ajouter un projet"**
3. Remplissez les champs :
   - **Titre** : Nom du projet
   - **Description** : Courte description (1-2 phrases)
   - **Catégorie** : Cartographie SIG / Analyse Data / Visualisation
   - **URL de l'image** : Lien vers une image du projet
   - **Tags** : Outils utilisés (séparés par des virgules)
   - **Lien du projet** : URL vers votre projet
   - **Label du bouton** : Texte du bouton (ex: "Voir sur Tableau Public")

4. Cliquez sur **"Enregistrer"**

### Modifier un Projet

1. Cliquez sur l'icône **✏️ Éditer** du projet
2. Modifiez les champs
3. Cliquez sur **"Enregistrer"**

### Supprimer un Projet

1. Cliquez sur l'icône **🗑️ Supprimer**
2. Le projet est supprimé immédiatement

---

## 🎯 Gestion des Compétences

### Ajouter une Catégorie

1. Allez dans l'onglet **Compétences**
2. Cliquez sur **"Ajouter une catégorie"**
3. Remplissez le nom de la catégorie
4. Ajoutez des compétences avec leurs niveaux (1-5)
5. Cliquez sur **"Enregistrer"**

### Modifier une Catégorie

1. Cliquez sur l'icône **✏️ Éditer**
2. Modifiez le nom, les compétences, les niveaux
3. Cliquez sur **"Enregistrer"**

### Ajouter une Compétence à une Catégorie

1. Cliquez sur **✏️ Éditer** de la catégorie
2. Cliquez sur **"Ajouter une compétence"**
3. Remplissez le nom et le niveau
4. Cliquez sur **"Enregistrer"**

### Supprimer une Catégorie

1. Cliquez sur l'icône **🗑️ Supprimer**
2. La catégorie est supprimée immédiatement

---

## 📝 Exemples de Projets

### Exemple 1 : Tableau Public

```
Titre: Analyse Démographique Régionale
Description: Dashboard interactif pour explorer les données démographiques par région
Catégorie: Analyse Data
Tags: Tableau, SQL, Démographie
Lien: https://public.tableau.com/app/profile/christgoue/viz/...
Label: Voir sur Tableau Public
```

### Exemple 2 : Projet GitHub

```
Titre: Visualisation Cartographique Interactive
Description: Application web pour explorer des données géographiques
Catégorie: Visualisation
Tags: React, Mapbox, D3.js
Lien: https://github.com/Christgoue/geo-visualization
Label: Voir sur GitHub
```

### Exemple 3 : Google Drive

```
Titre: Rapport SIG - Analyse Territoriale
Description: Analyse complète avec cartes et statistiques
Catégorie: Cartographie SIG
Tags: QGIS, PostGIS, Analyse Spatiale
Lien: https://drive.google.com/file/d/...
Label: Télécharger le rapport
```

---

## 🎓 Niveaux de Compétence

| Niveau | Description |
|--------|-------------|
| 1 | Débutant - Apprentissage en cours |
| 2 | Basique - Utilisation simple |
| 3 | Intermédiaire - Usage courant |
| 4 | Avancé - Expertise confirmée |
| 5 | Expert - Maîtrise complète |

---

## 💾 Sauvegarde des Données

Les données sont **automatiquement sauvegardées** dans le localStorage de votre navigateur.

⚠️ **Attention** :
- Les données sont stockées **localement** sur votre appareil
- Si vous videz le cache/historique du navigateur, les données seront perdues
- Pour une sauvegarde sécurisée, exportez vos données régulièrement

### Comment Exporter vos Données

1. Ouvrez la console du navigateur (F12)
2. Tapez : `localStorage.getItem('portfolio_projects')`
3. Copiez le résultat et sauvegardez-le dans un fichier

---

## 🔄 Synchronisation avec le Code

Les données du backoffice sont stockées en **localStorage** (navigateur).

Pour les rendre **permanentes** dans le code :

1. Exportez vos données du backoffice
2. Mettez à jour les fichiers :
   - `client/src/data/projects.ts`
   - `client/src/data/skills.ts`

3. Commitez les changements sur GitHub

---

## 🆘 Dépannage

### Je n'arrive pas à me connecter

- Vérifiez que vous utilisez le bon mot de passe : `admin123`
- Assurez-vous que les cookies sont activés
- Essayez en mode incognito

### Mes modifications ne s'affichent pas

1. Attendez quelques secondes (rafraîchissement automatique)
2. Rafraîchissez la page (F5)
3. Videz le cache du navigateur

### J'ai perdu mes données

Si vous avez vidé le cache/historique :
1. Les données sont perdues (elles étaient en localStorage)
2. Vous devez les re-saisir
3. Pensez à exporter vos données régulièrement

---

## 🔐 Sécurité

### Changer le Mot de Passe

Pour changer le mot de passe par défaut `admin123` :

1. Ouvrez `client/src/pages/Backoffice.tsx`
2. Trouvez la ligne : `if (password === "admin123")`
3. Remplacez `"admin123"` par votre nouveau mot de passe
4. Commitez les changements

### Recommandations

- Utilisez un mot de passe **fort** en production
- Ne partagez pas le mot de passe
- Changez-le régulièrement
- Utilisez HTTPS pour accéder au backoffice

---

## 📚 Ressources Utiles

- **Fichier des projets** : `client/src/data/projects.ts`
- **Fichier des compétences** : `client/src/data/skills.ts`
- **Composant Backoffice** : `client/src/pages/Backoffice.tsx`

---

**Bon courage pour gérer votre portfolio ! 🚀**
