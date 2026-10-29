# 🚀 QUICK START - 4 étapes pour commencer

**Vous êtes sur la branche `develop`. Chaque membre doit passer à sa branche.**

---

## 🎯 Étape 1 : Identifier votre rôle

| Vous êtes... | Allez à... |
|-------------|----------|
| **MEMBRE 1** : Layout, Header, Home, Contexts | `feature/layout` ⬇️ |
| **MEMBRE 2** : Shop, Filters, Recherche | `feature/catalogue` ⬇️ |
| **MEMBRE 3** : ProductDetail, Avis, About | `feature/produit` ⬇️ |
| **MEMBRE 4** : Cart, Checkout, Auth, README | `feature/panier` ⬇️ |

---

## 🎯 Étape 2 : Cloner et changer de branche

### Commandes à taper (en terminal)

**MEMBRE 1** :
```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/layout
git status  # Vérifier vous êtes sur la bonne branche
```

**MEMBRE 2** :
```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/catalogue
git status
```

**MEMBRE 3** :
```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/produit
git status
```

**MEMBRE 4** :
```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
git checkout feature/panier
git status
```

---

## 🎯 Étape 3 : Vérifier vous êtes sur la bonne branche

La commande `git status` doit afficher :

```
On branch feature/layout      ← Pour M1
(ou feature/catalogue, etc.)
```

✅ **Si vous voyez votre branche** : Bravo ! Passez à l'étape 4

❌ **Si vous voyez `main` ou `develop`** : Refaites `git checkout feature/votre-branche`

---

## 🎯 Étape 4 : Lancer le développement

### MEMBRE 1 UNIQUEMENT (prépare le socle)

```bash
# Initialiser le projet
npm install
npm install -D vite tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm create vite@latest . -- --template react
npm install

# Créer les fichiers du socle (voir CAHIER_DES_CHARGES_COMPLET.md, section 16.1)
# src/data/products.json (24 produits)
# src/context/CartContext.jsx
# src/context/WishlistContext.jsx
# src/context/AuthContext.jsx
# src/App.jsx (routes)
# src/components/Header.jsx
# src/components/Footer.jsx
# src/pages/Home.jsx
# src/utils/format.js

# Faire des commits réguliers
git add .
git commit -m "feat: init project structure"
git commit -m "feat: add products.json"
# ... autres commits ...

# Quand c'est prêt, pousser
git push origin feature/layout

# Sur GitHub : créer PR feature/layout → develop et attendre approuv
```

### MEMBRES 2, 3, 4 (attendre M1)

Pendant que M1 travaille (2-4h) :

```bash
# 1. Lire le CAHIER_DES_CHARGES_COMPLET.md
# 2. Lire votre section de tâches (16.2, 16.3 ou 16.4)
# 3. Attendre que M1 merge son code dans develop
# 4. Alors :

git fetch origin
git merge origin/develop
npm install

# 5. Commencer à développer votre branche
```

---

## 📝 Checklist avant de commencer

- [ ] Vous avez clonné le repo
- [ ] Vous êtes sur votre branche `feature/xxx`
- [ ] `git status` montre votre branche (pas main ou develop)
- [ ] Vous avez lu le **README.md**
- [ ] Vous avez lu votre section du **CAHIER_DES_CHARGES_COMPLET.md**
- [ ] Vous savez ce que vous devez coder

---

## 🆘 Si vous êtes bloqué

### "Je ne sais pas sur quelle branche je suis"
```bash
git status
# Regarde la première ligne
```

### "Je suis sur la mauvaise branche"
```bash
git checkout feature/votre-branche
```

### "Commande git not found"
```bash
# Installez Git : https://git-scm.com/download/win
```

### "Je vois des erreurs npm"
```bash
rm -r node_modules
npm install
```

### "Je suis perdu(e)"
📖 Lire : `BRANCHES_SETUP.md` ou `GIT_STRUCTURE.md`

---

## ⏰ Timeline

```
T0 : Tous lisez ce fichier
T+15min : M1 sur feature/layout, lance npm install + setup
T+30min : M2, M3, M4 clonent et lisent le cahier
T+2-4h : M1 finit le socle, crée PR, merge dans develop
T+4h : M2, M3, M4 pull develop, lancent npm install, commencent à coder
T+6h : M2, M3, M4 finissent, créent PR
T+7h : Intégration des PR
T+8h : Déploiement Vercel
T+8h30 : 🎉 SITE EN LIGNE
```

---

## 🎯 Objectif final

À la fin, vous aurez :

✅ Appris Git (branches, commits, PR, merge)  
✅ Travaillé en équipe sur un vrai projet  
✅ Codé en React (composants, hooks, context)  
✅ Mis en ligne un site (Vercel)  
✅ Un portfolio project à montrer

---

## 📞 Questions fréquentes

**Q : Pourquoi j'attends que M1 finisse ?**  
R : M1 crée le socle (Contexts, routes) que vous avez besoin pour développer. Sans ça, vous ne pouvez pas tester votre code.

**Q : Je peux coder avant que M1 finisse ?**  
R : Oui, mais vous utiliserez des mocks locaux. Une fois M1 prêt, vous pullez et vous intégrez.

**Q : Et si M1 prend du retard ?**  
R : Il y a une "PARADE" dans le cahier des charges : utilisez un products.json temporaire.

**Q : Comment je fais une PR ?**  
R : Allez sur GitHub, cliquez "New Pull Request", choisissez votre branche → develop, écrivez une description.

**Q : Qu'est-ce qu'un merge ?**  
R : Fusionner deux branches. Une fois votre code approuvé, on merge votre branche dans develop.

**Q : Et après merger, je fais quoi ?**  
R : Vous tirez develop (`git pull origin develop`) et vous continuez à améliorer votre branche ou le repo.

---

## 📚 Lire absolument

1. **README.md** (ce repo) ← Vue globale
2. **BRANCHES_SETUP.md** (ce repo) ← Guide Git
3. **CAHIER_DES_CHARGES_COMPLET.md** (ce repo) ← Details détails détails
4. **Votre section dans le cahier** (ex: 16.1 pour M1, 16.2 pour M2, etc.)

---

## 🚀 Prêt ? GO !

```bash
# Copier-coller la commande pour votre rôle :

# MEMBRE 1
git clone https://github.com/KLK2005/ecommerce.git && cd ecommerce && git checkout feature/layout && git status

# MEMBRE 2
git clone https://github.com/KLK2005/ecommerce.git && cd ecommerce && git checkout feature/catalogue && git status

# MEMBRE 3
git clone https://github.com/KLK2005/ecommerce.git && cd ecommerce && git checkout feature/produit && git status

# MEMBRE 4
git clone https://github.com/KLK2005/ecommerce.git && cd ecommerce && git checkout feature/panier && git status
```

**Exécutez la commande pour votre rôle et BINGO ! Vous êtes prêt(e)s à coder ! 🎉**

---

**Créé par** : Kiro  
**Date** : 28 octobre 2026  
**Status** : ✅ PRÊT À DÉVELOPPER
