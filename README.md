# 🛍️ ShopCam - E-commerce React

**Un site e-commerce React inspiré de Cdiscount et SHEIN, adapté au marché camerounais.**

---

## 📋 À propos

ShopCam est un projet **pédagogique** pour apprendre le développement en équipe avec React, Git, et Vercel.

**Stack** : React 18 + Vite + React Router + Context API + Tailwind CSS + localStorage

**Marché** : Cameroun (FCFA, Mobile Money, paiement à la livraison)

**Type** : Simulation (pas de vrai serveur, données JSON)

---

## 🎯 Objectifs du projet

- ✅ Parcours complet : accueil → produit → panier → checkout → confirmation
- ✅ 24 produits : 12 Mode (avec couleurs/tailles) + 12 Maison/Tech/Beauté
- ✅ 2 fiches produit différentes (Mode vs Tech)
- ✅ Filtres et recherche en temps réel
- ✅ Panier, favoris, compte utilisateur (localStorage)
- ✅ Checkout invité et avec compte
- ✅ Responsive mobile-first (360px à 1280px)
- ✅ Déploiement Vercel
- ✅ Travail en équipe avec Git (4 branches, PR, review)

---

## 🚀 Démarrage rapide

### 1. Cloner le repo

```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en développement

```bash
npm run dev
```

Accéder à : `http://localhost:5173`

### 4. Builder pour production

```bash
npm run build
npm run preview
```

---

## 📁 Structure du projet

```
src/
├── App.jsx                    # Routes principales
├── main.jsx                   # Point d'entrée
├── index.css                  # Styles Tailwind
│
├── data/
│   ├── products.json         # 24 produits
│   └── reviews.json          # Avis clients
│
├── context/
│   ├── CartContext.jsx       # Gestion panier
│   ├── WishlistContext.jsx   # Gestion favoris
│   └── AuthContext.jsx       # Gestion authentification
│
├── components/
│   ├── Header.jsx            # Navigation
│   ├── Footer.jsx            # Pied de page
│   ├── ProductCard.jsx       # Carte produit
│   ├── Filters.jsx           # Sidebar filtres
│   ├── SearchBar.jsx         # Barre recherche
│   └── ...
│
├── pages/
│   ├── Home.jsx              # Accueil
│   ├── Shop.jsx              # Boutique
│   ├── ProductDetail.jsx     # Fiche produit
│   ├── Cart.jsx              # Panier
│   ├── Wishlist.jsx          # Favoris
│   ├── Checkout.jsx          # Commande
│   ├── Login.jsx             # Connexion
│   ├── Register.jsx          # Inscription
│   ├── Account.jsx           # Mon compte
│   ├── About.jsx             # À propos
│   ├── Contact.jsx           # Contact
│   └── ...
│
└── utils/
    ├── format.js             # formatFCFA(), formatPhone()
    └── orders.js             # saveOrder(), getOrders()
```

---

## 👥 Équipe (4 membres)

| Membre | Branche | Rôle |
|--------|---------|------|
| **M1** | `feature/layout` | Layout, données, Contexts |
| **M2** | `feature/catalogue` | Shop, filtres, recherche |
| **M3** | `feature/produit` | Fiche produit, avis |
| **M4** | `feature/panier` | Panier, checkout, auth |

---

## 🌿 Git Workflow

### Branches

```
main (production)
  ↑ PR from develop
develop (intégration)
  ├─ feature/layout
  ├─ feature/catalogue
  ├─ feature/produit
  └─ feature/panier
```

### Travailler sur votre branche

```bash
# Télécharger les derniers changements
git fetch origin

# Passer à votre branche
git checkout feature/votre-branche

# Mettre à jour depuis develop
git merge origin/develop

# Développer
# ... modification de fichiers ...

# Commit avec message clair
git add .
git commit -m "feat: description"

# Pousser
git push origin feature/votre-branche
```

### Créer une PR (Pull Request)

1. Allez sur https://github.com/KLK2005/ecommerce
2. Cliquez « New Pull Request »
3. Choisir : `feature/votre-branche` → `develop`
4. Ajouter description + attendre review
5. Merger quand approuvé

---

## 📦 Technologies

| Tech | Utilité |
|------|---------|
| **React 18** | Framework UI |
| **Vite** | Build tool (ultra-rapide) |
| **React Router v6** | Navigation SPA |
| **Context API** | Gestion d'état |
| **Tailwind CSS** | Styles |
| **localStorage** | Persistance (panier, favoris, comptes) |
| **Vercel** | Hébergement + déploiement automatique |

---

## 💰 Modèle de données

### Produits (products.json)

```json
{
  "id": 1,
  "name": "Robe en pagne wax",
  "universe": "mode",
  "price": 15000,
  "oldPrice": 20000,
  "discount": 25,
  "rating": 4.5,
  "reviewsCount": 128,
  "images": ["img1.jpg", "img2.jpg"],
  "colors": [{"name": "Bleu", "hex": "#1E40AF"}],
  "sizes": ["S", "M", "L", "XL"],
  "seller": "Boutique Douala",
  "stock": 14,
  "description": "..."
}
```

### localStorage

```javascript
// Panier
localStorage.getItem('cart')  // [{ lineId, productId, size, color, qty }]

// Favoris
localStorage.getItem('wishlist')  // [id1, id2, id3]

// Utilisateurs
localStorage.getItem('users')  // [{ id, name, identifiant, password }]

// Commandes
localStorage.getItem('orders')  // [{ id, userId, items, total, ... }]
```

---

## 🇨🇲 Spécificités Cameroun

- **Monnaie** : FCFA (XAF)
- **Paiement** : MTN MoMo, Orange Money, Paiement à la livraison
- **Téléphone** : +237 6XXXXXXXX
- **Adresse** : Ville (Douala, Yaoundé, Autres), quartier, point de repère
- **Livraison** : Frais selon la ville, gratuit au-delà d'un seuil

---

## 📱 Responsive

Testé sur :
- ✅ Mobile : 360px
- ✅ Tablette : 768px
- ✅ Desktop : 1280px et +

---

## 🚢 Déploiement

Le projet est déployé automatiquement sur Vercel à chaque push vers `main`.

**URL en ligne** : https://ecommerce-cameroon.vercel.app (à remplacer)

---

## ⚙️ Scripts disponibles

```bash
npm run dev       # Démarrer le serveur de développement
npm run build     # Builder pour production
npm run preview   # Prévisualiser la build
npm run lint      # Vérifier le code (si linter configuré)
```

---

## 🐛 Troubleshooting

### "Port 5173 déjà utilisé"
```bash
npm run dev -- --port 3000
```

### "localStorage corrompue"
```javascript
localStorage.clear()
location.reload()
```

### "Images ne s'affichent pas"
- Vérifier le chemin : `/img/product.jpg` (pas `../img`)
- Vérifier le fichier existe dans `public/img/`

### "Conflit Git"
```bash
git status  # Voir les conflits
# Éditer les fichiers
git add .
git commit -m "fix: resolve conflicts"
git push
```

---

## 📚 Documentation

- [Cahier des charges complet](./CAHIER_DES_CHARGES_COMPLET.md)
- [Structure Git](./GIT_STRUCTURE.md)
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)

---

## 📝 Licence

Projet pédagogique - Libre d'utilisation

---

## 👨‍💻 Contributeurs

- **M1** (Layout)
- **M2** (Catalogue)
- **M3** (Produit)
- **M4** (Panier)

---

**Statut** : 🚧 En développement

**Dernière mise à jour** : 28 octobre 2026
