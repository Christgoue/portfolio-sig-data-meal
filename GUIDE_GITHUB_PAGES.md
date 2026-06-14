# Guide de Déploiement sur GitHub Pages

## 🚀 Déploiement Rapide

Votre portfolio est un **React + Vite** qui doit être compilé avant d'être servi par GitHub Pages.

### Étape 1 : Compiler le Projet

```bash
pnpm run build
```

Cela crée un dossier `dist/public/` avec votre site compilé.

### Étape 2 : Configurer GitHub Pages

1. Allez sur **GitHub** → Votre repo `portfolio-sig-data-meal`
2. Cliquez sur **Settings** (Paramètres)
3. Allez dans **Pages** (à gauche)
4. Sous **Build and deployment** :
   - **Source** : Sélectionnez **Deploy from a branch**
   - **Branch** : Sélectionnez **main** et dossier **/(root)**
5. Cliquez sur **Save**

### Étape 3 : Pousser le Code Compilé

```bash
# Compiler
pnpm run build

# Ajouter les fichiers compilés
git add dist/

# Commiter
git commit -m "build: compile for github pages"

# Pousser
git push origin main
```

### Étape 4 : Attendre le Déploiement

GitHub Pages va prendre **quelques minutes** pour déployer votre site.

Votre site sera accessible à : `https://christgoue.github.io/portfolio-sig-data-meal/`

---

## 📋 Configuration Recommandée

### Option 1 : Déployer depuis le dossier `dist/` (Recommandé)

1. **Settings** → **Pages**
2. **Source** : Deploy from a branch
3. **Branch** : main
4. **Folder** : /dist/public

Puis poussez vos fichiers compilés :

```bash
pnpm run build
git add dist/
git commit -m "build: update compiled site"
git push origin main
```

### Option 2 : Utiliser une Branche `gh-pages` Dédiée

```bash
# Compiler
pnpm run build

# Créer la branche gh-pages (une seule fois)
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/public/* .
git add .
git commit -m "deploy: github pages"
git push origin gh-pages

# Revenir à main
git checkout main
```

Puis dans **Settings** → **Pages** :
- **Branch** : gh-pages
- **Folder** : / (root)

---

## 🔧 Automatiser le Déploiement

### Avec GitHub Actions (Recommandé)

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - run: pnpm install
      - run: pnpm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

Puis poussez simplement votre code, GitHub Actions compilera et déploiera automatiquement !

---

## ⚠️ Problèmes Courants

### "Page not found" ou affichage du README

**Cause** : GitHub Pages ne trouve pas le `index.html` compilé.

**Solution** :
1. Assurez-vous d'avoir compilé : `pnpm run build`
2. Vérifiez que `dist/public/index.html` existe
3. Attendez quelques minutes après le push
4. Videz le cache du navigateur (Ctrl+Shift+Del)

### Le site s'affiche mais les styles sont cassés

**Cause** : Les chemins des assets sont incorrects.

**Solution** :
1. Vérifiez que `dist/public/assets/` contient les fichiers CSS/JS
2. Videz le cache du navigateur
3. Attendez le rafraîchissement du CDN (quelques minutes)

### Les routes ne fonctionnent pas

**Cause** : GitHub Pages ne supporte pas le client-side routing par défaut.

**Solution** : Créez un fichier `dist/public/404.html` qui redirige vers `index.html` :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirect</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/portfolio-sig-data-meal/'">
  </head>
  <body>
  </body>
</html>
```

---

## 📊 Vérifier le Déploiement

1. Allez sur `https://christgoue.github.io/portfolio-sig-data-meal/`
2. Ouvrez la console (F12)
3. Vérifiez qu'il n'y a pas d'erreurs
4. Testez les liens de navigation

---

## 🔄 Mise à Jour du Site

À chaque modification :

```bash
# Modifier vos fichiers

# Compiler
pnpm run build

# Commiter et pousser
git add .
git commit -m "feat: update portfolio"
git push origin main

# Attendre quelques minutes pour le déploiement
```

---

## 💡 Conseils

- **Compilez avant de pousser** : N'oubliez pas `pnpm run build`
- **Vérifiez localement** : Utilisez `pnpm run preview` pour tester avant de pousser
- **Utilisez GitHub Actions** : Automatisez le déploiement
- **Videz le cache** : Ctrl+Shift+Del si le site ne se met pas à jour
- **Attendez quelques minutes** : GitHub Pages peut prendre du temps pour déployer

---

## 📚 Ressources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [GitHub Actions](https://github.com/features/actions)

---

**Bon déploiement ! 🚀**
