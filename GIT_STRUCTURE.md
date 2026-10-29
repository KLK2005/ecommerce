# 🌿 Structure Git du Projet ecommerce

**Repository** : https://github.com/KLK2005/ecommerce

**Date création** : 28 octobre 2026

---

## 📊 Branches créées

```
main (production)
  ↓ PR from develop
develop (intégration)
  ↓
  ├─ feature/layout    ← MEMBRE 1 : Header, Footer, Home, Contexts
  ├─ feature/catalogue ← MEMBRE 2 : Shop, Filters, SearchBar, Tri
  ├─ feature/produit   ← MEMBRE 3 : ProductDetail, Avis, About, Contact
  └─ feature/panier    ← MEMBRE 4 : Cart, Checkout, Auth, Account
```

---

## 👥 Répartition des tâches

### **MEMBRE 1 - Layout et données**
- **Branche** : `feature/layout`
- **Responsabilités** : 
  - CartContext, WishlistContext, AuthContext
  - App.jsx avec toutes les routes
  - Header + Footer
  - Home page
  - products.json (24 produits)
  - utils/format.js

### **MEMBRE 2 - Catalogue et filtres**
- **Branche** : `feature/catalogue`
- **Responsabilités** :
  - Shop.jsx (grille produits)
  - ProductCard.jsx
  - Filters.jsx (sidebar)
  - SearchBar.jsx
  - Tri (nouveautés, prix, notes)

### **MEMBRE 3 - Fiche produit**
- **Branche** : `feature/produit`
- **Responsabilités** :
  - ProductDetail.jsx (2 gabarits)
  - Galerie images
  - ReviewCard + Avis section
  - SimilarProducts.jsx
  - SizeChart.jsx
  - reviews.json
  - About.jsx + Contact.jsx

### **MEMBRE 4 - Panier et finalisation**
- **Branche** : `feature/panier`
- **Responsabilités** :
  - Cart.jsx
  - Wishlist.jsx
  - Checkout.jsx (formulaire + paiement)
  - Login.jsx + Register.jsx
  - Account.jsx
  - utils/orders.js
  - README.md
  - Déploiement Vercel
  - Tests responsive

---

## 🔄 Workflow Git

### Phase 0 : Initialisation ✅ COMPLÈTE

- ✅ Repo créé sur GitHub
- ✅ Branch `main` créée et pushée
- ✅ Branch `develop` créée
- ✅ 4 branches feature créées

### Phase 1 : Socle (M1 - 2-4h)

**Checklist M1** :
```bash
# Switch à feature/layout
git checkout feature/layout

# Développer le socle
npm install
npm install -D vite tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ... créer tous les fichiers du socle ...

# Commit réguliers
git add .
git commit -m "feat: init vite + tailwind"
git commit -m "feat: add products.json (24 products)"
git commit -m "feat: create CartContext"
git commit -m "feat: create WishlistContext"
git commit -m "feat: create AuthContext"
git commit -m "feat: add App.jsx with routes"
git commit -m "feat: create Header and Footer"
git commit -m "feat: create Home page"
git commit -m "feat: add utils/format.js"

# Push
git push origin feature/layout

# Sur GitHub : créer PR feature/layout → develop
# Approuver et merger
```

### Phase 2 : Développement parallèle (M2, M3, M4 - 3-4h)

**Pour chaque membre** :
```bash
# Récupérer le socle de M1
git fetch origin
git checkout develop
git pull origin develop

# Créer sa branche feature
git checkout feature/catalogue  # (ou produit ou panier)

# Développer
# ... écrire du code ...

# Commits réguliers
git add src/pages/Shop.jsx
git commit -m "feat: create Shop page"

# Tous les 30-45min : pull develop pour éviter les dérives
git fetch origin
git merge origin/develop

# Fin du développement
git push origin feature/catalogue
```

### Phase 3 : Intégration (1h)

**Chaque branche crée une PR vers develop** :
```bash
# Sur GitHub :
# New Pull Request
# De : feature/catalogue
# Vers : develop
# Description : détail des changements
```

**Review + Merge** :
```bash
# Admin ou M1 review et merge
# Conflits ? Les résoudre localement et push
```

---

## 📥 Comment cloner et travailler

### **Première fois** (télécharger le projet)

```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce

# Si vous êtes M1
git checkout feature/layout

# Si vous êtes M2
git checkout feature/catalogue

# Si vous êtes M3
git checkout feature/produit

# Si vous êtes M4
git checkout feature/panier
```

### **Avant de commencer chaque session**

```bash
git fetch origin                  # Télécharger les mises à jour
git merge origin/develop          # Si vous avez développé, fusionner develop
git pull origin feature/xxx       # Mettre à jour votre branche
```

### **Après avoir codé**

```bash
git status                        # Voir les changements
git add .                         # Staged tous les fichiers
git commit -m "feat: description" # Commit avec message clair
git push origin feature/xxx       # Pousser sur GitHub
```

---

## ⚠️ Commandes INTERDITES

❌ **NE JAMAIS FAIRE** :
```bash
git push origin main           # NON ! main est protégée
git push origin develop        # NON ! utiliser PR à la place
git push -f origin feature/xxx # NON ! force push
git reset --hard              # NON ! perd les commits
```

✅ **À LA PLACE** :
```bash
# Créer PR sur GitHub
# Attendre review
# Merger via GitHub
```

---

## 🆘 En cas de conflit

```bash
# Vous voyez un message « CONFLICT »
git status  # Voir les conflits

# Éditer les fichiers
# Chercher les marqueurs <<<<<<< ======= >>>>>>>
# Garder la version que vous voulez

git add .
git commit -m "fix: resolve merge conflicts"
git push origin feature/xxx
```

---

## 📋 Checklist avant de merger

- [ ] Tous les tests passent (`npm run build`)
- [ ] Pas de `console.log()` en production
- [ ] Code formaté et commenté
- [ ] Responsive testé (360px, 768px, 1280px)
- [ ] Commits avec messages clairs
- [ ] PR description complète

---

## 🚀 Déploiement final

**Quand develop est complète** :

```bash
git checkout main
git pull origin main
git merge develop
git push origin main

# Vercel redéploie automatiquement
# Attendre 2-3 min
# Accéder à : https://ecommerce-cameroon.vercel.app (URL exemple)
```

---

## 📞 Contacts Git

**Admin Git** : À désigner parmi les 4  
**Problèmes** : Créer un issue sur GitHub

---

**Status** : ✅ PRÊT À DÉVELOPPER
