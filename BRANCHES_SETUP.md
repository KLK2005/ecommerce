# ✅ SETUP GIT COMPLÉTÉ

**Date** : 28 octobre 2026  
**Repo** : https://github.com/KLK2005/ecommerce

---

## 🎉 Branches créées avec succès

### ✅ Branche principale
- `main` → Production (protégée)

### ✅ Branche d'intégration
- `develop` → Intégration (protégée)

### ✅ Branches de développement (4 équipes)
- `feature/layout` → **MEMBRE 1** (Layout, Header, Footer, Home, Contexts)
- `feature/catalogue` → **MEMBRE 2** (Shop, Filters, SearchBar, Tri)
- `feature/produit` → **MEMBRE 3** (ProductDetail, Avis, About, Contact)
- `feature/panier` → **MEMBRE 4** (Cart, Checkout, Auth, Account)

---

## 📊 État du repo

```
🌳 Arborescence Git
│
├── main (1 commit)
│   └── CAHIER_DES_CHARGES_COMPLET.md
│
└── develop (3 commits) ← VOUS ÊTES ICI
    ├── CAHIER_DES_CHARGES_COMPLET.md
    ├── GIT_STRUCTURE.md
    └── README.md
```

**Toutes les 4 branches feature** héritent de `develop`.

---

## 👥 Instructions pour chaque MEMBRE

### **MEMBRE 1** - Layout et données

```bash
# 1. Cloner le repo
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce

# 2. Aller sur votre branche
git checkout feature/layout

# 3. Vérifier que vous êtes sur la bonne branche
git status
# → On branch feature/layout

# 4. Créer le socle (voir CAHIER_DES_CHARGES_COMPLET.md, section 16.1)
npm install
npm install -D vite tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ... créer les fichiers du socle ...

# 5. Pousser votre travail
git add .
git commit -m "feat: init vite + tailwind"
git commit -m "feat: add products.json"
git commit -m "feat: create Contexts"
# ... autres commits ...
git push origin feature/layout

# 6. Sur GitHub : créer PR feature/layout → develop
# 7. Attendre l'approbation et merger
```

---

### **MEMBRE 2** - Catalogue et filtres

```bash
# 1. Cloner
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce

# 2. Aller sur votre branche
git checkout feature/catalogue

# 3. Attendre que M1 merge son socle dans develop (environ 2-4h)

# 4. Récupérer le socle de M1
git fetch origin
git merge origin/develop
npm install  # si M1 a ajouté des dépendances

# 5. Développer les pages Shop, Filters, etc. (voir section 16.2)

# 6. Pousser
git add .
git commit -m "feat: create ProductCard"
git commit -m "feat: create Shop page"
# ... autres commits ...
git push origin feature/catalogue

# 7. Sur GitHub : créer PR feature/catalogue → develop
```

---

### **MEMBRE 3** - Fiche produit

```bash
# Même processus que M2
# Voir section 16.3 du CAHIER_DES_CHARGES_COMPLET.md

git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/produit

# Attendre M1
git fetch origin
git merge origin/develop

# Développer ProductDetail, Avis, About, Contact

git push origin feature/produit
# → Créer PR sur GitHub
```

---

### **MEMBRE 4** - Panier et finalisation

```bash
# Même processus que M2 et M3
# Voir section 16.4 du CAHIER_DES_CHARGES_COMPLET.md

git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/panier

# Attendre M1
git fetch origin
git merge origin/develop

# Développer Cart, Checkout, Auth, Account

git push origin feature/panier
# → Créer PR sur GitHub

# Aussi : README.md, Vercel setup, tests responsive
```

---

## 🗂️ Fichiers actuellement dans le repo

```
ecommerce/
├── .git/
├── README.md                          ← Lire en premier
├── GIT_STRUCTURE.md                   ← Guide Git du projet
├── CAHIER_DES_CHARGES_COMPLET.md      ← La bible du projet
└── BRANCHES_SETUP.md                  ← Ce fichier
```

---

## 🚀 Prochaines étapes

### **Étape 0 : Chacun récupère son repo** (5 min)
```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/votre-branche
```

### **Étape 1 : MEMBRE 1 crée le socle** (2-4h)
- Initialiser Vite + Tailwind
- Créer les Contexts
- Créer App.jsx avec routes
- Créer Header + Footer + Home
- Créer products.json (24 produits)
- **POUSSER et créer PR vers develop**

### **Étape 2 : M2, M3, M4 attendent et préparent** (2h)
- Lire le cahier des charges
- Installer dépendances localement
- Planifier les fichiers à créer
- Mock les imports en attendant M1

### **Étape 3 : M1 merge son PR** (30 min)
```bash
# Sur GitHub
# M1 crée PR feature/layout → develop
# Admin approuve et merge
# M1 merge aussi develop dans son repo local pour continuer
```

### **Étape 4 : M2, M3, M4 démarrent EN PARALLÈLE** (3-4h)
```bash
# Chacun sur sa branche
git fetch origin
git merge origin/develop  # Récupèrent le socle de M1

# Développer les pages, composants, etc.
git push origin feature/xxx
```

### **Étape 5 : Intégration des PR** (1h)
- M2 crée PR feature/catalogue → develop
- M3 crée PR feature/produit → develop
- M4 crée PR feature/panier → develop
- Admin/M1 valide et merge chaque PR

### **Étape 6 : Déploiement Vercel** (1h)
```bash
# M4 ou admin
git checkout main
git merge develop
git push origin main

# Vercel redéploie automatiquement
# Vérifier le site en ligne
```

---

## 📞 Commandes utiles

### Voir la branche actuelle
```bash
git status
# ou
git branch
```

### Changer de branche
```bash
git checkout feature/layout
```

### Récupérer les changements de GitHub
```bash
git fetch origin
```

### Fusionner develop dans ma branche
```bash
git merge origin/develop
```

### Voir l'historique des commits
```bash
git log --oneline
```

### Annuler un commit (pas pushé)
```bash
git reset --soft HEAD~1
```

### Pousser sur GitHub
```bash
git push origin feature/votre-branche
```

---

## ⚠️ Rappels importants

### ✅ À FAIRE
- ✅ Travailler dans votre `feature/xxx`
- ✅ Faire des commits réguliers (au moins 1 tous les 30-45 min)
- ✅ Écrire des messages clairs (`feat:`, `fix:`, `style:`)
- ✅ Pull `develop` régulièrement pour éviter les conflits
- ✅ Créer une PR quand votre branche est prête

### ❌ À NE PAS FAIRE
- ❌ Ne pas pousser sur `main` ou `develop`
- ❌ Ne pas faire `git push -f` (force push)
- ❌ Ne pas oublier de commit avant de changer de branche
- ❌ Ne pas laisser des `console.log()` en production

---

## 🎯 Timeline estimée

| Phase | Durée | Qui | Quoi |
|-------|-------|-----|------|
| 0 - Setup | 30 min | Tous | Cloner le repo, vérifier branches |
| 1 - Socle | 2-4h | M1 | Vite, Tailwind, Contexts, Home |
| 2 - Attente | 2-4h | M2,M3,M4 | Lire cahier, préparer |
| 3 - Dev parallèle | 3-4h | M2,M3,M4 | Coder en même temps |
| 4 - Intégration | 1h | Admin | Valider et merger les PR |
| 5 - Déploiement | 1h | M4 | Push main, Vercel deploy |
| **TOTAL** | **10-15h** | Équipe | **Site en ligne !** |

---

## 🏁 Quand c'est fini

1. ✅ Tous les commits sont sur GitHub
2. ✅ Toutes les PR sont mergées dans `develop`
3. ✅ `develop` est mergée dans `main`
4. ✅ Vercel a redeployé depuis `main`
5. ✅ Le site est en ligne et fonctionnel
6. ✅ Tous les membres ont contribué

---

## 📚 Documentation à lire

1. **README.md** → Overview du projet
2. **GIT_STRUCTURE.md** → Guide Git détaillé
3. **CAHIER_DES_CHARGES_COMPLET.md** → La bible (23 sections !)
4. **Ce fichier (BRANCHES_SETUP.md)** → Setup et procédures

---

## ✨ Statut

```
✅ Repo créé
✅ Branches créées
✅ Documentation prête
✅ Équipe prête à développer

🚀 VOUS ÊTES PRÊTS À COMMENCER !
```

---

**Dernière mise à jour** : 28 octobre 2026

**Créé par** : Kiro AI

**Statut** : ✅ PRÊT À DÉVELOPPER
