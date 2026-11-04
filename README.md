# ShopCam — boutique e-commerce Cameroun

Prototype de boutique en ligne adapté au marché camerounais : prix en FCFA, adresses locales, paiement à la livraison et options Mobile Money de démonstration.

## Technologies

- React 18 et Vite
- Tailwind CSS
- React Router
- Context API et `localStorage` pour le panier, les favoris, les comptes et les commandes

## Installation et lancement

Prérequis : Node.js 18 ou supérieur.

```bash
npm ci
npm run dev
```

Vite affiche l’adresse locale de prévisualisation dans le terminal.

## Vérification et aperçu de production

```bash
npm run build
npm run preview
```

## Pages

Accueil, boutique et filtres, fiches produit, panier, favoris, checkout, connexion, inscription, compte, À propos et Contact.

## Documentation du code

Les fichiers source JavaScript, JSX et CSS comportent maintenant un commentaire de rôle en français. La structure détaillée de l’application et le rôle de chaque fichier sont décrits dans [CODE-GUIDE.md](./CODE-GUIDE.md).

## Limites du prototype

Les comptes, paniers et commandes restent stockés dans le navigateur. Le checkout enregistre une commande de démonstration : aucun paiement réel n’est initié et aucune donnée n’est envoyée à un serveur. Pour une mise en production, prévoir une API, une authentification sécurisée, un prestataire de paiement, la validation serveur et une politique de confidentialité.
