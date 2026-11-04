# Guide de lecture du code ShopCam

Ce document complète les commentaires ajoutés en tête des 29 fichiers source JavaScript, JSX et CSS. Les commentaires expliquent le rôle architectural de chaque fichier et les responsabilités principales sans surcharger chaque ligne d’une paraphrase inutile.

## Démarrage et composition

- `src/main.jsx` monte React dans l’élément `#root` de `index.html` et active `React.StrictMode`.
- `src/App.jsx` compose les providers globaux, installe `BrowserRouter`, déclare les routes et fournit l’écran 404.
- `src/index.css` contient les directives Tailwind, les règles globales, les états de focus, le lien d’évitement et la règle `prefers-reduced-motion`.

## État global

- `src/context/AuthContext.jsx` gère l’inscription, la connexion, la déconnexion et l’utilisateur courant. Les comptes de démonstration sont enregistrés dans `localStorage`.
- `src/context/CartContext.jsx` normalise les anciennes lignes du panier, construit un identifiant par produit/variante, calcule les quantités et le total, puis persiste le résultat.
- `src/context/WishlistContext.jsx` centralise les favoris et leur persistance locale.
- `src/components/Toast.jsx` expose `useToast` et rend les messages temporaires accessibles.

## Composants partagés

- `Header.jsx` affiche le logo, la navigation et les compteurs de favoris/panier.
- `Footer.jsx` regroupe les raccourcis de navigation et les informations légales.
- `ProductCard.jsx` présente un produit, gère l’image secondaire au survol, le favori et l’ajout rapide.
- `Filters.jsx` contrôle les critères de catalogue.
- `SearchBar.jsx` est un champ contrôlé réutilisable.
- `Modal.jsx` gère une boîte de dialogue accessible, son focus et la touche Échap.
- `Avis.jsx` affiche les avis de démonstration d’une fiche produit.
- `ProduitsSimilaires.jsx` filtre les recommandations du même univers.

## Pages

- `Home.jsx` compose la page d’accueil, les catégories, les visuels du hero et la recherche qui redirige vers `/shop?search=...`.
- `Shop.jsx` lit les paramètres URL, applique recherche/filtres/tri et affiche les produits visibles.
- `ProductDetail.jsx` gère la galerie, les couleurs, les tailles, les caractéristiques et l’ajout au panier.
- `Cart.jsx` affiche et modifie les lignes du panier.
- `Checkout.jsx` calcule livraison et total, préremplit éventuellement l’adresse et enregistre une commande de démonstration.
- `Login.jsx`, `Register.jsx` et `Account.jsx` couvrent le parcours de compte local.
- `Wishlist.jsx` affiche les articles favoris.
- `About.jsx` et `Contact.jsx` fournissent les pages institutionnelle et contact.

## Utilitaires

- `src/utils/format.js` formate prix FCFA, numéros de téléphone et dates.
- `src/utils/validation.js` regroupe les règles de validation des identifiants, téléphones, emails et mots de passe.
- `src/utils/orders.js` calcule les frais de livraison et lit/écrit les commandes dans `localStorage`.

## Données

- `src/data/products.json` contient le catalogue : identifiant, nom, univers, prix, réductions, images, variantes, caractéristiques, vendeur, stock et description.
- Le JSON ne contient volontairement pas de commentaires, car les commentaires rendraient le fichier invalide. Sa structure est documentée dans cette section et les fichiers consommateurs sont commentés.

## Convention de commentaire

Les commentaires décrivent l’intention, les responsabilités, les effets de bord et les choix importants. Ils évitent de répéter mot à mot une instruction évidente ; cela permet de garder le code lisible et de réduire le risque que la documentation devienne obsolète.
