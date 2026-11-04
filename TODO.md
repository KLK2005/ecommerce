# Suivi de consolidation ShopCam

## Import et intégration
- [x] Importer les branches d’intégration de l’application React/Vite.
- [x] Vérifier l’installation et la compilation.
- [ ] Publier la consolidation dans `main` via une Pull Request GitHub (à faire depuis le dépôt connecté).

## Navigation et fonctionnement
- [x] Déclarer les routes publiques dans `public/manus-routes.json`.
- [x] Vérifier les liens internes : navigation React Router sans rechargement complet.
- [x] Vérifier les catégories accessibles sur mobile et corriger le filtre Beauté.
- [x] Corriger les filtres pour qu’ils suivent les paramètres de l’URL.
- [x] Corriger ajout panier, variantes, persistance des lignes et total.
- [x] Relier Favoris de la fiche produit à l’état global persistant.
- [x] Corriger les réponses d’inscription et de connexion.
- [x] Remplacer les références d’images absentes par un visuel de secours ; ajouter un traitement des erreurs d’image.
- [x] Corriger le favicon manquant et compléter l’écran 404.

## Images
- [x] Recompresser les JPEG, convertir les PNG mal nommés et réduire les plus grandes images à 1 200 × 1 200 px maximum.
- [x] Contrôler les formats et vérifier chaque référence d’image.

## Accueil et accessibilité
- [x] Présenter clairement la boutique, ses catégories et ses avantages dans une page d’accueil responsive ; garder des liens clairs vers les pages réellement disponibles.
- [x] Utiliser le blanc comme couleur dominante du landing page, avec des accents de marque et du texte à contraste suffisant.
- [x] Ajouter au hero une recherche produit pratique et la relier aux résultats du catalogue.
- [x] Rendre les contenus et actions compréhensibles au clavier et aux technologies d’assistance, avec titres hiérarchisés, textes alternatifs, focus visibles, cibles tactiles et contrastes lisibles.
- [x] Contrôler l’accueil sur 320, 390, 768 et 1 280 px ; le scan automatisé axe-core des critères WCAG 2.0/2.1/2.2 A et AA ne révèle aucune violation (26 vérifications réussies).
- [x] Présenter ShopCam comme une boutique généraliste (maison, tech, beauté, mode et autres essentiels), sans centrer le message ni le visuel principal sur les vêtements.
- [x] Réduire la hauteur du pied de page, le passer sur fond blanc et conserver des liens lisibles et fonctionnels (170 px sur mobile et 118 px sur bureau, sur les largeurs testées).

## Tests
- [x] `npm ci --no-audit --no-fund`.
- [x] `npm run build`.
- [x] Contrôler les douze routes dans le navigateur et tester les principaux parcours boutique, panier et connexion.
- [ ] Ajouter une suite automatisée de tests end-to-end (aucune n’était présente dans l’archive initiale).
