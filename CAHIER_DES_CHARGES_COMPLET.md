# 📋 CAHIER DES CHARGES ULTRA-COMPLET
## Site e-commerce (Cdiscount × SHEIN × Cameroun)

**Version** : 2.0 ULTIMATE  
**Date** : 28 octobre 2026  
**Équipe** : 4 développeurs à parts égales  
**Technologies** : React, Vite, Tailwind CSS, React Router, Context API, localStorage  
**Déploiement** : Vercel  
**Statut** : PRÊT À TOUTE BARADE 🚀

---

# TABLE DES MATIÈRES
1. Executive Summary
2. Contexte et objectifs
3. Périmètre du projet (inclus/exclus/bonus)
4. Acteurs et rôles
5. Besoins fonctionnels détaillés (F01-F27 + extensions)
6. Besoins non fonctionnels
7. Cas d'utilisation complets
8. Modèle de données précis (JSON + localStorage)
9. Parcours utilisateur détaillés
10. Architecture technique (composants, hooks, contexts)
11. Spécificités Cameroun (tarifs, paiement, adresses)
12. Organisation de l'équipe + Git Workflow
13. Critères d'acceptation et KPI
14. Risques, mitigations et "parades"
15. Décisions ouvertes + Recommandations
16. Checklist d'implémentation par Membre
17. Testing stratégie
18. Accessibilité et WCAG 2.1
19. Performance et optimisations
20. Sécurité simulée + Best practices
21. Plan de déploiement Vercel
22. FAQ de développement
23. Sources et références

---

# 1. EXECUTIVE SUMMARY

## Qu'est-ce qu'on fait ?
Un **site e-commerce d'essai** qui simule Cdiscount (généraliste, prix réduits) croisé avec SHEIN (mode, variantes, filtres), adapté au **marché camerounais** avec :
- Prix en **FCFA** (monnaie locale)
- Paiement **Mobile Money** (MTN, Orange) ou à la livraison
- Adresses en **Ville/Quartier/Point de repère** (pas de code postal)
- **React** + **localStorage** (pas de serveur, données JSON)
- Parcours complet : accueil → produit → panier → paiement → confirmation

## Pour qui ?
4 développeurs juniors/middles qui doivent apprendre le travail en équipe sur Git.

## En combien de temps ?
**12-15 heures** (2-3 jours) si tout va bien.
**Avec parades**, jusqu'à **20 heures** si des freins apparaissent.

## Success metrics
- ✅ Site complet fonctionnel
- ✅ 24 produits affichés et achetables
- ✅ Panier, favoris, comptes, commandes en localStorage
- ✅ Responsive 360px à 1280px
- ✅ Déployé sur Vercel et en ligne
- ✅ Tous les membres ont contribué de façon équilibrée

---

# 2. CONTEXTE ET OBJECTIFS

## 2.1 Analyse comparative des deux modèles

| Aspect | Cdiscount | SHEIN | Notre site |
|--------|-----------|-------|-----------|
| **Positionnement** | Généraliste, prix réduits | Mode, tendance, variantes | Mixte : Mode + Maison/Tech/Beauté |
| **Réassurance** | Livraison gratuite, retours faciles | Guides tailles, avis photos | Mobile Money, paiement à la livraison, retour 7j |
| **Découverte** | Promos, prix barrés | Nouveautés, filtres, tailles | Filtres combinés, badges promo, 2 fiches produit |
| **Fiche produit** | Caractéristiques techniques, vendeur | Visuels, couleurs, tailles, avis | 2 gabarits : Mode (couleurs/tailles) et Tech (specs) |
| **Favoris** | ❌ Non | ✅ Oui | ✅ Oui (localStorage) |
| **Target** | France métropolitaine | Monde, mobile d'abord | Cameroun, mobile d'abord |

## 2.2 Objectifs précis
1. ✅ Parcours complet sans erreur (accueil → commande validée)
2. ✅ Deux types de fiches produit (Mode vs Maison/Tech/Beauté)
3. ✅ Checkout invité ET avec compte simulé
4. ✅ Adaptation Cameroun (FCFA, Mobile Money, paiement à livraison)
5. ✅ Apprentissage Git/équipe : 4 branches, PR, review, merge
6. ✅ Responsive sur mobile, tablette, desktop
7. ✅ En ligne sur Vercel en fin de projet
8. ✅ Tous les membres contributeurs égaux

---

# 3. PÉRIMÈTRE DU PROJET

## 3.1 Inclus (indispensable)

### Pages et navigation
- ✅ Accueil (Home.jsx) avec sections : carrousel, catégories, meilleures ventes, bandeau réassurance
- ✅ Boutique (Shop.jsx) avec grille 4 colonnes desktop / 2 colonnes mobile
- ✅ Fiche produit (ProductDetail.jsx) : 2 gabarits Mode et Maison/Tech/Beauté
- ✅ Panier (Cart.jsx) : visualisation, modification quantité, suppression
- ✅ Favoris (Wishlist.jsx) : affichage et gestion des favoris
- ✅ Checkout (Checkout.jsx) : formulaire adresse camerounaise, choix livraison/paiement
- ✅ Authentification (Login.jsx, Register.jsx, Account.jsx)
- ✅ À propos (About.jsx)
- ✅ Contact (Contact.jsx) avec formulaire simulé
- ✅ Header + Footer persistants

### Fonctionnalités
- ✅ Recherche en temps réel (debounce)
- ✅ Filtres combinés : univers, prix (range), couleur, note
- ✅ Tri : nouveautés, prix ↑↓, mieux notés
- ✅ Bouton Réinitialiser pour les filtres
- ✅ Avis clients avec photos (reviews.json)
- ✅ Produits similaires (« Vous aimerez aussi »)
- ✅ Modale de confirmation de commande
- ✅ Historique de commandes (pour compte connecté)

### Données
- ✅ 24 produits en JSON : 12 Mode (S/M/L/XL + couleurs) + 4 Maison + 4 Tech + 4 Beauté
- ✅ 30-40 avis clients avec photos
- ✅ localStorage : panier, favoris, utilisateurs, commandes
- ✅ try/catch pour lecture corrompue

### Technique
- ✅ React + Vite
- ✅ React Router (routing SPA)
- ✅ Context API : CartContext, WishlistContext, AuthContext
- ✅ Tailwind CSS ou CSS Modules
- ✅ localStorage pour persistance
- ✅ Responsive : 360px, 768px, 1280px testés
- ✅ Déploiement Vercel
- ✅ README.md complet

---

## 3.2 Bonus (si le temps le permet)

- 🎁 Bouton langue FR / EN
- 🎁 Points de fidélité (gagnés avec les commandes et avis)
- 🎁 Jeu de scratch ou coupon promo
- 🎁 Filtres avancés : marque, stock dispo
- 🎁 Page de comparaison de produits
- 🎁 Page d'avis détaillée (notes par critère)
- 🎁 Recommandations basées sur l'historique
- 🎁 Partage sur réseaux sociaux
- 🎁 Service Worker pour offline
- 🎁 Animations au scroll (Intersection Observer)
- 🎁 Dark mode

---

## 3.3 Hors périmètre (INTERDIT)

- ❌ Vrai paiement (MTN, Orange Money) : SIMULATION UNIQUEMENT
- ❌ Vrai serveur ou base de données : JSON + localStorage
- ❌ Authentification sécurisée : mots de passe en clair (c'est OK pour la démo)
- ❌ Vraie gestion de stocks : juste affichage
- ❌ Interface d'administration
- ❌ Envoi de mails ou SMS réels
- ❌ Géolocalisation réelle
- ❌ Intégration API réelle (sauf peut-être météo, géocode si bonus)

---

# 4. ACTEURS ET RÔLES

## 4.1 Visiteur (Invité)
**Permissions** :
- Parcourir la boutique
- Filtrer et trier
- Consulter les fiches produit
- Ajouter au panier et favoris
- Commander en invité (checkout sans compte)
- S'inscrire
- Se connecter

**Limitations** :
- Pas d'historique de commandes
- Pas de préremplissage du checkout

## 4.2 Client connecté
**Permissions** :
- Tous les droits du visiteur
- Consulter ses commandes
- Préremplissage du checkout
- Favoris persistants par utilisateur (bonus)

## 4.3 Administrateur Git
**Permissions** :
- Créer le dépôt et les branches
- Configurer les protections (main, develop)
- Merger les PR
- Gérer les conflits
- Déployer sur Vercel

**Responsable** : L'un des 4 (rotation possible)

---

# 5. BESOINS FONCTIONNELS DÉTAILLÉS

## 5.1 Layout et données (Membre 1)

| ID | Besoin | Priorité | Détails | Acceptation |
|----|--------|----------|---------|------------|
| F01 | Header persistant | IND | Logo, menu univers (Mode/Maison/Tech/Beauté), barre recherche, icônes Favoris/Compte/Panier | Header visible à 100% des pages, menu cliquable, compteur panier à jour |
| F02 | Footer persistant | IND | Liens À propos/Contact, bandeau réassurance (paiement à la livraison, retour 7j, livraison gratuite au-delà de 25k FCFA) | Footer visible en bas, tous les liens cliquables |
| F03 | Accueil (Home) | IND | Carrousel 1 hero + 4-5 sections : Catégories tendance, Meilleures ventes, Flash sale, Nouveautés, appel à action | Carrousel s'auto-change toutes les 5s, sections responsive |
| F04 | products.json | IND | 24 produits : 12 Mode + 4 Maison + 4 Tech + 4 Beauté. Champs : id, name, universe, price, oldPrice, discount, rating, reviewsCount, createdAt, images[], colors[], sizes[], specs{}, seller, stock, description | JSON valide, format cohérent, 24 entrées distinctes |
| F05 | CartContext | IND | Hook useCart() exposant : cartItems[], cartCount, totalPrice, addToCart(), removeFromCart(), updateQuantity(), clearCart(). Persistant dans localStorage avec clé 'cart' | useCart() accessible partout, données synchro localStorage |
| F06 | WishlistContext | IND | Hook useWishlist() exposant : wishlist[], wishlistCount, toggleWishlist(id), isWishlisted(id) | wishlist localStorage 'wishlist', toggle fonctionnel |
| F07 | AuthContext | IND | Hook useAuth() exposant : user, isAuthenticated, register(data), login(id, pwd), logout(). users et currentUser en localStorage | Authentification simulée, login/logout fonctionnels |
| F08 | App.jsx + Router | IND | Toutes les routes : /, /shop, /produit/:id, /panier, /favoris, /checkout, /connexion, /inscription, /compte, /about, /contact | Routes valides, navigation SPA sans rechargement |
| F09 | utils/format.js | IND | formatFCFA(12500) → "12 500 FCFA", formatTelephone(693123456) → "+237 693 12 34 56" | Format correct partout sur le site |
| F10 | CSS global + Tailwind | IND | Charte graphique : 2-3 couleurs primaires, police (Poppins ou Inter), thème global cohérent | Design cohérent d'une page à l'autre |

---

## 5.2 Catalogue et filtres (Membre 2)

| ID | Besoin | Priorité | Détails | Acceptation |
|----|--------|----------|---------|------------|
| F11 | ProductCard | IND | Image 1 → image 2 au survol, badge -XX%, prix barré + prix rouge, étoiles + nombre avis, bouton « Ajouter » rapide | Carte lisible, interactions smooth |
| F12 | Shop.jsx | IND | Grille responsive : 4 colonnes desktop (1280px), 2 colonnes mobile (360px), 3 colonnes tablette (768px) | Grille affiche tous les 24 produits |
| F13 | Filtres sidebar | IND | Filtres combinés : Univers (Mode/Maison/Tech/Beauté), Prix (range 0-50k FCFA), Couleur, Note (1-5 étoiles), bouton Réinitialiser | Filtres se combinent, Réinit reset tout |
| F14 | Recherche temps réel | IND | Barre search avec debounce 300ms, filtre par nom, affiche résultats vivants | Search rapide, pas de lag |
| F15 | Tri | IND | 4 options : Nouveautés, Prix ↑, Prix ↓, Mieux notés | Tri s'applique immédiatement |
| F16 | Résultats vides | IND | Si aucun produit ne match : afficher « Aucun résultat » + bouton Réinitialiser | UX clair sur vide |
| F17 | Pagination (optionnel) | BON | Si besoin : 12 produits par page, boutons Précédent/Suivant | À valider si nécessaire |

---

## 5.3 Fiche produit (Membre 3)

| ID | Besoin | Priorité | Détails | Acceptation |
|----|--------|----------|---------|------------|
| F18 | ProductDetail.jsx | IND | 2 colonnes : gauche (galerie) + droite (infos). Responsive : 1 colonne sur mobile | Layout 2 colonnes sur desktop, 1 sur mobile |
| F19 | Galerie Mode | IND | Images cliquables, zoom au clic, miniatures navigables, sélection couleur change l'image | Galerie interactive |
| F20 | Gabarit Mode | IND | Sélecteur couleur (HEX), sélecteur taille (S/M/L/XL), tableau des tailles cliquable, stock affiché | Sélection taille + couleur obligatoires |
| F21 | Gabarit Maison/Tech/Beauté | IND | Liste specs{}, vendeur, stock, pas de taille ni couleur | Specs bien formatées |
| F22 | Infos communes | IND | Nom, prix, remise, badge -XX%, description, boutons « Ajouter panier » + « Coup de cœur », quantité sélectionnable | Boutons cliquables, quantité 1-99 |
| F23 | Avis clients | IND | Affichage avis depuis reviews.json : nom, note (étoiles), date, texte, photo de produit | Minimum 3 avis affichés |
| F24 | Produits similaires | IND | Sections « Vous aimerez aussi » (même univers) + « Complétez le look » (couleur ou accessoire) | Min 4-6 produits similaires |
| F25 | Page À propos | IND | Texte sur le site, mission, équipe, contact | 1-2 pages simple |
| F26 | Page Contact | IND | Formulaire : nom, email, sujet, message + bouton Envoyer (simulation en console ou toast) | Formulaire validé |

---

## 5.4 Panier et finalisation (Membre 4)

| ID | Besoin | Priorité | Détails | Acceptation |
|----|--------|----------|---------|------------|
| F27 | Cart.jsx | IND | Affichage lignes : produit, taille, couleur, prix unitaire, quantité ±, bouton suppression. Récap : sous-total, frais livraison, total | Calculs justes, persistence localStorage |
| F28 | Wishlist.jsx | IND | Affichage favoris, bouton « Ajouter panier », bouton « Supprimer de favoris » | Favoris gérables |
| F29 | Checkout invité | IND | Formulaire : nom, téléphone +237 (regex 6XXXXXXXX), ville (Douala/Yaoundé/Autres), quartier (texte), point de repère (texte). Choix livraison (domicile/relais). Validation | Formulaire complet, validation stricte |
| F30 | Choix paiement | IND | 3 options : MTN MoMo, Orange Money, Paiement à la livraison (affiche numéro fictif) | Sélection radio/select |
| F31 | Bouton Payer | IND | Clic → modale « Commande validée ! » + enregistrement localStorage (orders.json) + vide panier | Modale + persiste |
| F32 | Modale confirmation | IND | Affiche : numéro commande (UUID), date, montant, mode paiement, message succès + bouton « Retour accueil » | Modale bien présentée |
| F33 | Register.jsx | IND | Formulaire : nom, identifiant (téléphone ou email), mot de passe (min 6 car). Vérif non-doublon. Crée compte + connexion auto | Account créé, redirection |
| F34 | Login.jsx | IND | Formulaire : identifiant, mot de passe. Vérif existence + match password. Connexion + redirection | Login fonctionnel |
| F35 | Déconnexion | IND | Bouton dans Header, efface currentUser, redirige accueil | Logout clair |
| F36 | Account.jsx | IND | Si connecté : liste commandes passées (date, numéro, total, statut). Préremplissage checkout avec name + adresse dernière | Historique affichable |
| F37 | README.md | IND | Mode d'emploi : installation (npm install), lancement (npm run dev), structure dossiers, technologies, contributeurs | README complet |
| F38 | Vercel | IND | Déploiement automatique depuis main, URL en ligne, responsive testé | Site en ligne |

---

# 6. BESOINS NON FONCTIONNELS

| Domaine | Exigence | Seuil d'acceptation |
|---------|----------|-------------------|
| **Responsive** | Mobile d'abord (360px+), 2 colonnes mobile, 4 colonnes desktop | Tester 360, 768, 1280 px |
| **Performance** | LCP < 2s, CLS < 0.1, images lazy-loaded, JSON < 50KB | Audit Lighthouse ≥ 70 |
| **Accessibilité** | WCAG 2.1 AA : alt text, contraste ≥ 4.5:1, clavier navigable | Axe DevTools 0 erreur |
| **Compatibilité** | Chrome, Firefox, Edge, Safari dernières versions | Test sur 2+ navigateurs |
| **Persistance** | localStorage avec try/catch, valeurs par défaut | Rechargement page : données OK |
| **Maintenabilité** | Code commenté, commits clairs, structure cohérente | Code review approuvé |
| **Sécurité** | Pas de XSS, pas de localStorage sensible (pwd en clair OK pour démo) | Pas d'injection SQL/XSS |
| **SEO** | Meta tags, title, Open Graph (bonus) | Google crawlable |

---

# 7. CAS D'UTILISATION DÉTAILLÉS

## CU-01 : Passer commande en invité

**Acteur** : Visiteur  
**Préalable** : Panier ≥ 1 article  
**Scénario nominal** :
1. Visiteur clique « Commander » dans le panier
2. Système affiche formulaire adresse (nom, tél, ville, quartier, point de repère)
3. Visiteur remplit et choisit livraison (domicile/relais)
4. Visiteur choisit paiement (MTN/Orange/COD)
5. Visiteur clique « Payer »
6. Système affiche modale « Commande validée ! », enregistre order en localStorage, vide panier
7. Bouton « Retour accueil » redirige vers /

**Scénarios alternatifs** :
- 3a. Champ vide ou tél invalide (+237 6XXXXXXXX) : erreur, blocage
- 3b. Panier devenu vide entretemps : message « Panier vide », redirection /shop
- 2a. Utilisateur cherche à modifier adresse après : impossible, restart checkout

**Postconditions** :
- Order enregistrée dans orders[] localStorage avec userId: null
- Panier vidé (cartItems: [])
- UUID de commande généré et affiché

---

## CU-02 : S'inscrire

**Acteur** : Visiteur  
**Scénario nominal** :
1. Visiteur clique « S'inscrire »
2. Système affiche formulaire (nom, identifiant [tél ou email], mot de passe)
3. Visiteur saisit, clique « Créer compte »
4. Système vérifie : non-doublon (identifiant unique), pwd ≥ 6 caractères
5. Système crée user dans users[], connecte (currentUser = user.id), redirige /compte

**Scénarios alternatifs** :
- 4a. Identifiant existe : message « Cet identifiant existe déjà »
- 4b. Mot de passe < 6 car : message d'erreur
- 4c. Identifiant invalide (email sans @) : erreur

**Postconditions** :
- User créé dans localStorage users[]
- currentUser renseigné
- Utilisateur connecté automatiquement

---

## CU-03 : Se connecter

**Acteur** : Visiteur  
**Scénario nominal** :
1. Visiteur accède /connexion
2. Système affiche formulaire (identifiant, mot de passe)
3. Visiteur saisit et clique « Se connecter »
4. Système cherche user dans users[], compare pwd
5. Si match : currentUser = user.id, redirige /compte ou /
6. Si pas match : message d'erreur

**Scénarios alternatifs** :
- 4a. Identifiant inexistant : « Identifiant ou mot de passe incorrect »
- 4b. Mot de passe incorrect : même message (sécurité)

**Postconditions** :
- currentUser défini
- Client connected (Header mène à /compte au lieu de /inscription)

---

## CU-04 : Filtrer et trier

**Acteur** : Visiteur ou client  
**Scénario nominal** :
1. Utilisateur ouvre /shop
2. Système affiche grille 24 produits + sidebar filtres
3. Utilisateur sélectionne : Univers + Prix range + Couleur + Note
4. Système filtre dynamiquement (AND combiné)
5. Utilisateur sélectionne tri (Nouveautés/Prix↑/Prix↓/Notes)
6. Système réapplique tri
7. Utilisateur tape search « robe »
8. Système affiche uniquement produits matching "robe"
9. Utilisateur clique Réinitialiser
10. Tous filtres reset, affiche 24 produits

**Scénarios alternatifs** :
- 8a. Aucun résultat : afficher « Aucun résultat trouvé », bouton Réinitialiser prominent

**Postconditions** :
- Aucune donnée modifiée (lecture seule)
- URL peut inclure query params (bonus)

---

## CU-05 : Consulter fiche Mode et ajouter au panier

**Acteur** : Visiteur ou client  
**Scénario nominal** :
1. Utilisateur clique ProductCard Mode
2. Système affiche ProductDetail : galerie, couleurs, tailles, prix, avis
3. Utilisateur choisit couleur (image change)
4. Utilisateur choisit taille (ouvre tableau si besoin)
5. Utilisateur saisit quantité (1-99, défaut 1)
6. Utilisateur clique « Ajouter panier »
7. Système ajoute ligne cartItem (id-taille-couleur)
8. Si ligne existe déjà : quantité s'ajoute
9. Compteur Header +1
10. Toast/feedback « Ajouté au panier »

**Scénarios alternatifs** :
- 6a. Aucune taille sélectionnée : bloquer, message d'erreur
- 6b. Produit déjà dans panier (même taille/couleur) : augmenter qty
- 8a. Stock insuffisant : afficher stock dispo

**Postconditions** :
- cartItems localStorage mise à jour
- cartCount Header synchro

---

## CU-06 : Consulter fiche Tech et ajouter au panier

**Acteur** : Visiteur ou client  
**Scénario nominal** :
1. Utilisateur clique ProductCard Tech/Maison/Beauté
2. Système affiche ProductDetail : galerie, specs, vendeur, stock, prix
3. Pas de couleur, pas de taille (lineId = juste id)
4. Utilisateur saisit quantité (1-99, défaut 1)
5. Utilisateur clique « Ajouter panier »
6. Système ajoute ligne cartItem (id-null-null)
7. Si ligne existe déjà : quantité s'ajoute
8. Compteur Header +1

**Différences avec Mode** :
- ❌ Pas de sélecteur couleur/taille
- ✅ Specs au lieu de tailles
- ✅ Vendeur affiché
- ✅ Stock affiché

---

# 8. MODÈLE DE DONNÉES PRÉCIS

## 8.1 products.json (exemple complet Mode)

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
  "createdAt": "2026-10-01",
  "images": [
    "/img/robe-wax-1.jpg",
    "/img/robe-wax-2.jpg",
    "/img/robe-wax-3.jpg"
  ],
  "description": "Robe légère en tissu wax traditionnel, parfaite pour les occasions.",
  "colors": [
    {
      "name": "Bleu royal",
      "hex": "#1E40AF",
      "image": "/img/robe-wax-1.jpg"
    },
    {
      "name": "Rouge passion",
      "hex": "#DC2626",
      "image": "/img/robe-wax-2.jpg"
    },
    {
      "name": "Or doré",
      "hex": "#D97706",
      "image": "/img/robe-wax-3.jpg"
    }
  ],
  "sizes": ["S", "M", "L", "XL"],
  "seller": "Boutique Douala Mode",
  "stock": 14
}
```

## 8.2 products.json (exemple complet Tech)

```json
{
  "id": 13,
  "name": "Écouteurs sans fil Beats",
  "universe": "tech",
  "price": 9500,
  "oldPrice": 14000,
  "discount": 32,
  "rating": 4.2,
  "reviewsCount": 57,
  "createdAt": "2026-09-20",
  "images": [
    "/img/ecouteurs-1.jpg",
    "/img/ecouteurs-2.jpg"
  ],
  "description": "Écouteurs bluetooth 5.0 avec 20h d'autonomie et boîtier de charge.",
  "specs": {
    "Connexion": "Bluetooth 5.0",
    "Autonomie": "20 heures",
    "Temps recharge": "2 heures",
    "Portée": "10 mètres",
    "Poids": "250g"
  },
  "colors": [],
  "sizes": [],
  "seller": "Tech Akwa",
  "stock": 40
}
```

## 8.3 reviews.json (avis clients)

```json
[
  {
    "id": 1,
    "productId": 1,
    "author": "Marie Sall",
    "rating": 5,
    "date": "2026-10-20",
    "title": "Superbe qualité !",
    "text": "La robe est très bien faite, les couleurs sont exactes. Livraison rapide au Cameroun.",
    "images": ["/img/reviews/robe-wax-review-1.jpg"],
    "verified": true
  },
  {
    "id": 2,
    "productId": 1,
    "author": "Ahmed M.",
    "rating": 4,
    "date": "2026-10-18",
    "title": "Bon produit, taille généreux",
    "text": "Produit de qualité. Je conseille de prendre une taille en dessous.",
    "images": ["/img/reviews/robe-wax-review-2.jpg"],
    "verified": true
  }
]
```

## 8.4 localStorage : cart

```javascript
// localStorage.getItem('cart')
[
  {
    "lineId": "1-M-Bleu royal",
    "productId": 1,
    "size": "M",
    "color": "Bleu royal",
    "qty": 2
  },
  {
    "lineId": "13-null-null",
    "productId": 13,
    "size": null,
    "color": null,
    "qty": 1
  }
]
```

## 8.5 localStorage : wishlist

```javascript
// localStorage.getItem('wishlist')
[1, 5, 13, 21]  // Juste les IDs des produits favoris
```

## 8.6 localStorage : users

```javascript
// localStorage.getItem('users')
[
  {
    "id": 1,
    "name": "Sall Sy",
    "identifiant": "693123456",
    "password": "password123",  // EN CLAIR (simulation)
    "createdAt": "2026-10-20T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Marie Douala",
    "identifiant": "marie@email.com",
    "password": "pwd2024",
    "createdAt": "2026-10-21T15:30:00Z"
  }
]
```

## 8.7 localStorage : currentUser

```javascript
// localStorage.getItem('currentUser')
"1"  // ID de l'utilisateur connecté (string)
// ou vide/null si pas connecté
```

## 8.8 localStorage : orders

```javascript
// localStorage.getItem('orders')
[
  {
    "id": "UUID-12345",
    "userId": null,  // null = invité, sinon ID utilisateur
    "items": [...],  // Copie des cartItems
    "total": 24500,
    "deliveryFee": 500,
    "address": {
      "name": "Sall Sy",
      "phone": "+237693123456",
      "city": "Douala",
      "district": "Bonanjo",
      "landmark": "Près du marché central"
    },
    "deliveryType": "domicile",
    "paymentMethod": "mtn_momo",
    "status": "confirmed",
    "createdAt": "2026-10-21T16:00:00Z"
  }
]
```

---

# 9. PARCOURS UTILISATEUR DÉTAILLÉS

## 9.1 Parcours invité (sans compte)

```
Accueil
  ↓ (recherche + clique produit)
Fiche produit
  ↓ (sélectionne taille/couleur + ajoute)
Panier
  ↓ (clique Commander)
Checkout
  ├─ Formulaire adresse
  ├─ Choix livraison
  ├─ Choix paiement
  ├─ Clic Payer
  ↓
Modale confirmation
  ↓ (Retour accueil)
Accueil (panier vide)
  ↓ (clique Mon compte)
Page Connexion ou S'inscrire
```

## 9.2 Parcours client connecté

```
Accueil
  ↓ (recherche + clique produit)
Fiche produit
  ↓ (ajoute panier)
Panier
  ↓ (clique Commander)
Checkout
  ├─ Formulaire PRÉ-REMPLI (name + dernière adresse)
  ├─ Choix livraison
  ├─ Choix paiement
  ├─ Clic Payer
  ↓
Modale confirmation
  ↓ (Retour accueil)
Accueil
  ↓ (clique Mon compte)
Account (historique commandes)
```

---

# 10. ARCHITECTURE TECHNIQUE

## 10.1 Arborescence complète

```
ecommerce/
├── .git/
├── .gitignore
├── .env.example
├── public/
│   ├── img/                    ← Toutes les images
│   │   ├── robe-wax-1.jpg
│   │   ├── ecouteurs-1.jpg
│   │   └── reviews/           ← Photos avis
│   └── index.html
├── src/
│   ├── App.jsx                 ← M1 : Routes + Providers
│   ├── main.jsx                ← Point d'entrée
│   ├── index.css               ← Tailwind
│   │
│   ├── data/
│   │   ├── products.json       ← M1 : 24 produits
│   │   └── reviews.json        ← M3 : Avis clients
│   │
│   ├── context/
│   │   ├── CartContext.jsx     ← M1
│   │   ├── WishlistContext.jsx ← M1
│   │   └── AuthContext.jsx     ← M1
│   │
│   ├── components/
│   │   ├── Header.jsx          ← M1 : Nav + Icons
│   │   ├── Footer.jsx          ← M1 : Links + Reassurance
│   │   ├── ProductCard.jsx     ← M2 : Hover, badges
│   │   ├── Filters.jsx         ← M2 : Sidebar
│   │   ├── SearchBar.jsx       ← M2 : Debounce search
│   │   ├── ReviewCard.jsx      ← M3 : Avis individual
│   │   ├── SimilarProducts.jsx ← M3 : "Vous aimerez aussi"
│   │   ├── SizeChart.jsx       ← M3 : Tableau tailles
│   │   ├── Toast.jsx           ← M4 : Notifications
│   │   └── Modal.jsx           ← M4 : Modale confirmation
│   │
│   ├── pages/
│   │   ├── Home.jsx            ← M1 : Accueil (carrousel, sections)
│   │   ├── Shop.jsx            ← M2 : Grille produits
│   │   ├── ProductDetail.jsx   ← M3 : Fiche 2 gabarits
│   │   ├── Cart.jsx            ← M4 : Panier
│   │   ├── Wishlist.jsx        ← M4 : Favoris
│   │   ├── Checkout.jsx        ← M4 : Formulaire + paiement
│   │   ├── Login.jsx           ← M4 : Connexion
│   │   ├── Register.jsx        ← M4 : Inscription
│   │   ├── Account.jsx         ← M4 : Mon compte
│   │   ├── About.jsx           ← M3 : À propos
│   │   ├── Contact.jsx         ← M3 : Contact
│   │   └── NotFound.jsx        ← 404
│   │
│   ├── utils/
│   │   ├── format.js           ← M1 : formatFCFA(), formatPhone()
│   │   ├── orders.js           ← M4 : saveOrder(), getOrders()
│   │   ├── validation.js       ← Regex téléphone, email
│   │   └── colors.js           ← Mappeur couleurs hex
│   │
│   ├── hooks/
│   │   ├── useCart.js          ← Shortcut
│   │   ├── useWishlist.js      ← Shortcut
│   │   └── useAuth.js          ← Shortcut
│   │
│   └── styles/
│       ├── globals.css         ← Tailwind
│       └── colors.css          ← Variables couleurs
│
├── .env
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md                   ← M4 : Mode d'emploi
├── CAHIER_DES_CHARGES_COMPLET.md
└── .vercel/
```

---

# 11. SPÉCIFICITÉS CAMEROUN (TARIFS ET PAIEMENT)

## 11.1 Monnaie et formats

| Élément | Format | Exemple |
|---------|--------|---------|
| Prix | Entiers FCFA | 15000, 9500 |
| Affichage | Séparateur milliers | "15 000 FCFA" |
| Devise | XAF (FCFA) | Toujours en FCFA |
| Solde | localStorage | En FCFA |

## 11.2 Paiement (SIMULÉ)

| Méthode | Code | Détails |
|---------|------|---------|
| **MTN MoMo** | `mtn_momo` | Numéro fictif : +237 657 123 456 |
| **Orange Money** | `orange_money` | Numéro fictif : +237 675 123 456 |
| **COD (Cash on Delivery)** | `cash_delivery` | Livraison à la maison |

Checkout affiche numéro fictif par paiement (pas d'intégration réelle API).

## 11.3 Adresse camerounaise

| Champ | Type | Exemple | Validation |
|-------|------|---------|-----------|
| **Nom** | texte | "Sall Sy" | Non-vide |
| **Téléphone** | +237 6XXXXXXXX | "+237 693 123 456" | Regex : `^\\+237 6\\d{8}$` |
| **Ville** | select | Douala / Yaoundé / Autres | Obligatoire |
| **Quartier** | texte | "Bonanjo" | Non-vide |
| **Point de repère** | texte | "Près du marché central" | Non-vide |

## 11.4 Frais de livraison

| Ville | Frais | Gratuit à partir de |
|-------|-------|------------------|
| **Douala** | 500 FCFA | 25 000 FCFA |
| **Yaoundé** | 800 FCFA | 25 000 FCFA |
| **Autres** | 1500 FCFA | 50 000 FCFA |

Logique :
```javascript
const calculateDeliveryFee = (city, totalBeforeFee) => {
  const thresholds = {
    douala: { fee: 500, freeFrom: 25000 },
    yaounde: { fee: 800, freeFrom: 25000 },
    autres: { fee: 1500, freeFrom: 50000 }
  };
  
  const cityData = thresholds[city];
  if (totalBeforeFee >= cityData.freeFrom) return 0;
  return cityData.fee;
};
```

---

# 12. ORGANISATION DE L'ÉQUIPE + GIT WORKFLOW

## 12.1 Répartition des 4 Membres (détail)

### **Membre 1 - Layout et données**
**Durée estimée** : 4-5h (CRITIQUE : autres bloquent)

**Livrables** :
- [ ] Dépôt GitHub + branches
- [ ] Vite + Tailwind CSS setup
- [ ] products.json (24 produits)
- [ ] CartContext, WishlistContext, AuthContext
- [ ] App.jsx avec toutes les routes
- [ ] Header.jsx + Footer.jsx
- [ ] Home.jsx (structure de base)
- [ ] utils/format.js (formatFCFA, formatPhone)
- [ ] Publier le contrat des Contexts en commentaires

**Commits suggérés** :
```
chore: init vite project with tailwind
feat: setup project structure
feat: add products.json with 24 products
feat: create CartContext and hooks
feat: create WishlistContext
feat: create AuthContext
feat: add App.jsx with all routes
feat: create Header and Footer components
feat: create Home page skeleton
feat: add utils/format.js
```

**Branche** : `feature/layout`

---

### **Membre 2 - Catalogue et filtres**
**Durée estimée** : 3-4h

**Livrables** :
- [ ] ProductCard.jsx (hover effects)
- [ ] Shop.jsx (grille 4 colonnes desktop / 2 mobile)
- [ ] Filters.jsx (univers, prix, couleur, note)
- [ ] SearchBar.jsx (debounce 300ms)
- [ ] Tri (nouveautés, prix, notes)
- [ ] Composant réinitialiser

**Commits suggérés** :
```
feat: create ProductCard component
feat: create Shop page with grid layout
feat: add Filters sidebar
feat: add SearchBar with debounce
feat: add sorting functionality
fix: responsive grid for mobile
```

**Branche** : `feature/catalogue`

---

### **Membre 3 - Fiche produit**
**Durée estimée** : 3-4h

**Livrables** :
- [ ] ProductDetail.jsx (2 gabarits)
- [ ] Galerie images (cliquable, zoom)
- [ ] ReviewCard.jsx + Avis section
- [ ] SimilarProducts.jsx
- [ ] SizeChart.jsx (tableau tailles Mode)
- [ ] reviews.json (30-40 avis)
- [ ] About.jsx
- [ ] Contact.jsx

**Commits suggérés** :
```
feat: create ProductDetail component with 2 templates
feat: add image gallery with zoom
feat: add reviews section
feat: create SimilarProducts component
feat: add SizeChart component
feat: add reviews.json with 40 reviews
feat: create About page
feat: create Contact page with form
```

**Branche** : `feature/produit`

---

### **Membre 4 - Panier et finalisation**
**Durée estimée** : 4-5h (PLUS CHARGÉ)

**Livrables** :
- [ ] Cart.jsx (affichage + modification)
- [ ] Wishlist.jsx (favoris)
- [ ] Checkout.jsx (formulaire adresse + paiement)
- [ ] Login.jsx (connexion)
- [ ] Register.jsx (inscription)
- [ ] Account.jsx (historique)
- [ ] utils/orders.js (saveOrder, getOrders)
- [ ] Toast/Modal components
- [ ] README.md
- [ ] Déploiement Vercel
- [ ] Tests responsive

**Commits suggérés** :
```
feat: create Cart page
feat: create Wishlist page
feat: create Checkout page
feat: add Login page
feat: add Register page
feat: create Account page
feat: add order utils
feat: add Toast and Modal components
docs: write comprehensive README
deploy: setup Vercel deployment
test: verify responsive design
```

**Branche** : `feature/panier`

---

## 12.2 Workflow Git détaillé

### Phase 0 : Initialisation (1h)

**Admin** (ou M1) :
```bash
# Créer le dépôt
git init
git remote add origin https://github.com/org/ecommerce.git

# Créer les branches principales
git checkout -b main
git push -u origin main

git checkout -b develop
git push -u origin develop

# Créer les branches feature
git checkout -b feature/layout
git push -u origin feature/layout

git checkout -b feature/catalogue
git push -u origin feature/catalogue

git checkout -b feature/produit
git push -u origin feature/produit

git checkout -b feature/panier
git push -u origin feature/panier

# Protéger main et develop (GitHub settings)
```

**Configurer Vercel** :
- Connecter dépôt GitHub
- Branch de déploiement : `main`
- Build command : `npm run build`
- Output : `dist`

---

### Phase 1 : Socle (M1 - 4h)

**M1 travaille** :
```bash
git checkout feature/layout
git pull origin feature/layout

# Développement
npm install
npm install -D vite tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Créer structure + Contexts + App.jsx + products.json

git add .
git commit -m "chore: init vite + tailwind"
git commit -m "feat: add products.json (24 products)"
git commit -m "feat: create Contexts (Cart, Wishlist, Auth)"
git commit -m "feat: add App.jsx with routes"

git push origin feature/layout

# Sur GitHub : créer PR feature/layout vers develop
# M1 valide lui-même (self-merge OK pour socle)
```

**Les autres attendent** que M1 merge et publie le socle dans `develop`.

---

### Phase 2 : Développement parallèle (M2, M3, M4 - 4h)

**Chacun** :
```bash
# Récupérer le socle
git checkout develop
git pull origin develop

# Créer sa branche feature
git checkout feature/catalogue  # exemple pour M2
git merge develop  # récupère le socle

# Développement
# ... modifications ...

# Commits réguliers
git add src/pages/Shop.jsx
git commit -m "feat: create Shop page with grid"
git push origin feature/catalogue

# Tous les 30-45 min : pull develop pour éviter dérives
git fetch origin
git merge origin/develop  # Si M1 a complété products.json

# Fin du développement
git push origin feature/catalogue
```

---

### Phase 3 : Intégration (1h30)

**M2, M3, M4 créent PR** sur GitHub :
- De : `feature/catalogue` (etc.)
- Vers : `develop`
- Description : détail des changements

**M1 (ou désigné) review** :
```
- Code cleanliness
- Commits messages
- Pas de console.log
- Responsive OK sur mobile
- Pas de conflit
```

**Résoudre conflits** (si besoin) :
```bash
# Sur sa branche
git fetch origin
git merge origin/develop  # Verra les conflits
# Éditer les fichiers
git add <resolved>
git commit -m "fix: resolve merge conflicts"
git push origin feature/catalogue
```

**Merger** :
- M1 merge en PREMIER (soulage la branche develop)
- Puis M2, M3, M4 dans l'ordre

Après chaque merge :
```bash
git checkout develop
git pull origin develop
# Les autres récupèrent
```

---

### Phase 4 : Finalisation (2h)

**M4 prépare Vercel** :
```bash
# Sur feature/panier
# Tester localement : npm run dev
# Tester build : npm run build
# Vérifier responsive : 360, 768, 1280 px

# Écrire README.md
# Rédiger git commit

git add README.md
git commit -m "docs: write comprehensive README"
git push origin feature/panier
```

**PR feature/panier vers develop**, validée et merged.

**M1 ou M4 merge develop vers main** :
```bash
git checkout main
git pull origin main
git merge develop
git push origin main

# Vercel redéploie automatiquement depuis main
```

**Vérifier en ligne** : Attendre 2-3 min, accéder à `https://ecommerce-cameroon.vercel.app` (URL exemple).

---

## 12.3 Conventions de code (stricter)

### Commits Git
```
Type : Description courte

Exemple :
feat: add ProductCard component with hover effect
fix: resolve cart calculation bug on quantity update
style: format Checkout form spacing
refactor: extract formatFCFA to utils
docs: update README installation section
test: add unit tests for utils/format
chore: update dependencies
```

### Noms fichiers
- Composants React : **PascalCase** (`ProductCard.jsx`)
- Utilitaires : **camelCase** (`formatFCFA.js`)
- Styles : **kebab-case** (`product-card.css`)
- Dossiers : **lowercase** (`components/`, `pages/`)

### Code style
- ESLint + Prettier (setup initial)
- 2 espaces d'indentation
- Pas de `var`, que `const` et `let`
- Point virgule obligatoire
- Pas de console.log en prod
- Commentaires pour logique complexe

---

# 13. CRITÈRES D'ACCEPTATION ET KPI

## 13.1 Critères d'acceptation fonctionnels

- ✅ **Parcours complet** : accueil → fiche → panier → checkout → confirmation (invité)
- ✅ **Parcours connecté** : même + compte + historique
- ✅ **24 produits affichés** : 12 Mode + 12 Maison/Tech/Beauté
- ✅ **Deux fiches produit** : Mode (couleur/taille) et Tech (specs)
- ✅ **Filtres combinés** : univers + prix + couleur + note
- ✅ **Recherche temps réel** : debounce, résultats vivants
- ✅ **Panier fonctionnel** : +/-, suppression, calcul total
- ✅ **Favoris** : ajout, suppression, badge cœur
- ✅ **Avis clients** : affichage 5+ avis par produit
- ✅ **Produits similaires** : "Vous aimerez aussi"
- ✅ **Checkout camerounais** : téléphone +237 6XXXXXXXX, ville, quartier, paiement
- ✅ **Modale confirmation** : numéro commande unique, date, total
- ✅ **Historique commandes** : voir ses achats (connecté)
- ✅ **localStorage persistant** : rechargement page = données OK
- ✅ **Responsive** : 360px, 768px, 1280px testés
- ✅ **README** : installation, lancement, contributeurs
- ✅ **En ligne Vercel** : URL accessible

## 13.2 KPI techniques

| Métrique | Seuil |
|----------|-------|
| **Lighthouse Score** | ≥ 70 (Performance + Accessibility) |
| **LCP** | < 2s |
| **CLS** | < 0.1 |
| **Accessibilité** | Axe DevTools 0 erreur critique |
| **SEO** | Title + Meta OK |
| **Mobile** | Navigation claire, boutons > 44px |
| **Compatibilité** | Chrome, Firefox, Safari récents |

---


---

# 14. RISQUES, MITIGATIONS ET "PARADES"

## 14.1 Tableau des risques avec parades

| # | Risque | Probabilité | Impact | Mitigation | PARADE |
|---|--------|-------------|--------|-----------|--------|
| R1 | M1 prend du retard, autres bloquent | Haute | Critique | Socle à l'étape 1 OBLIGATOIRE | Si M1 en retard > 1h : M2/M3/M4 codent avec mock products.json local, merge après |
| R2 | Conflits Git sur products.json | Moyenne | Moyen | Seul M1 le modifie | Si conflit : M1 prend main (feature/layout), autres re-pullent develop |
| R3 | localStorage corrompue | Faible | Moyen | try/catch + valeurs défaut | Nettoyer localStorage (DevTools) et recharer page |
| R4 | Images manquantes ou trop lourdes | Moyenne | Moyen | Importer images libres dès l'étape 0 | Utiliser placeholder (blurred image) en fallback |
| R5 | Charge inégale (M4 surchargé) | Haute | Moyen | M3 prend About + Contact | M2 + M3 aident M4 sur responsive en fin de projet |
| R6 | Responsive cassé sur mobile | Moyenne | Moyen | Tester 360px dès l'étape 1 | DevTools device toolbar, tester sur vraie phone |
| R7 | Déploiement Vercel échoue | Faible | Moyen | Relier dépôt tôt (phase 0) | Redéployer main, check build logs Vercel |
| R8 | Styles incohérents entre pages | Moyenne | Faible | Charte graphique Tailwind figée étape 0 | Créer utility classes communes en globals.css |
| R9 | Quelqu'un push sur main/develop | Faible | Critique | Protéger branches (GitHub) | Revert le commit, re-push la bonne version |
| R10 | Désaccord sur Tailwind vs CSS Modules | Faible | Moyen | Décider à l'étape 0 | FORCER TAILWIND (plus rapide, cohérent) |
| R11 | Contextes API mal définis | Moyenne | Critique | Contrat figé avant étape 2 | M1 publie interface exacte avec exemples |
| R12 | Pas de test avant livraison | Moyenne | Moyen | Recette croisée M4 + M2 + M3 | Tester parcours complet : invité + connecté |
| R13 | Temps alloué insuffisant | Haute | Critique | Timeline réaliste (12-15h) | Si dépassement : réduire bonus (langue, points fidélité) |
| R14 | Merge conflicts massifs | Faible | Moyen | Pull develop régulièrement | Rebase au lieu de merge (`git rebase develop`) |

---

## 14.2 "Parades" d'urgence

### Si M1 en retard (> 1h)

**PARADE 1 : Mock products.json temporaire**
```javascript
// src/data/products.json (VERSION TEMP)
[
  {
    "id": 1, "name": "Produit 1", "universe": "mode",
    "price": 15000, "oldPrice": 20000, "discount": 25,
    "rating": 4, "reviewsCount": 50, "createdAt": "2026-10-01",
    "images": ["/img/placeholder.jpg"],
    "colors": [{ "name": "Noir", "hex": "#000000", "image": "/img/placeholder.jpg" }],
    "sizes": ["S", "M", "L", "XL"],
    "seller": "Vendeur 1", "stock": 10, "description": "Produit test"
  }
  // ... juste 3-4 pour le dev
]
```

M2, M3, M4 travaillent avec ça, puis M1 complete à 24 produits et merge.

**PARADE 2 : Contextes API mock**
```javascript
// src/context/CartContext.jsx (VERSION TEMP)
export const useCart = () => {
  return {
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
    addToCart: (product, options) => console.log("Mock: addToCart", product),
    removeFromCart: (lineId) => console.log("Mock: removeFromCart", lineId),
    updateQuantity: (lineId, qty) => console.log("Mock: updateQuantity", lineId, qty),
    clearCart: () => console.log("Mock: clearCart")
  };
};
```

---

### Si localStorage corrompue

**PARADE 1 : Reset manuel**
```javascript
// Taper dans DevTools console
localStorage.clear();
location.reload();
```

**PARADE 2 : Ajouter bouton debug (dev only)**
```javascript
// Ajouter en Accueil (dev)
{process.env.NODE_ENV === 'development' && (
  <button onClick={() => { localStorage.clear(); location.reload(); }}>
    🔧 Reset localStorage
  </button>
)}
```

---

### Si images manquantes

**PARADE 1 : Placeholder dynamique**
```javascript
const [img, setImg] = useState(src);

return (
  <img
    src={img}
    onError={() => setImg('/img/placeholder-gray.jpg')}
    alt="Product"
  />
);
```

**PARADE 2 : Générer avec UI Avatar ou Placeholder.com**
```
https://ui-avatars.com/api/?name=Product+1
https://via.placeholder.com/300x300?text=Product+1
```

---

### Si responsive cassé

**PARADE 1 : Debug avec DevTools**
```
F12 → Ctrl+Shift+M (mobile mode)
Afficher les breakpoints Tailwind : https://tailwindcss.com/docs/responsive-design
```

**PARADE 2 : Classes d'urgence**
```jsx
// Avant
<div className="grid grid-cols-4">...</div>

// Après (si cassé)
<div className="grid grid-cols-2 md:grid-cols-4">...</div>
```

---

### Si Vercel ne déploie pas

**PARADE 1 : Vérifier build localement**
```bash
npm run build  # Doit générer /dist sans erreur
npm run preview  # Test production local
```

**PARADE 2 : Check Vercel dashboard**
- Logs du dernier build
- Vérifier branch = main
- Vérifier build command = `npm run build`
- Vérifier output = `dist`

**PARADE 3 : Redéployer**
```bash
git push origin main  # Force Vercel à re-build
```

---

### Si conflit merge sur products.json

**PARADE : M1 résout absolument**
```bash
# Sur feature/layout ou develop
git status  # Voir les conflits

# Éditer products.json : garder les deux versions ou fusionner manuellement
# Tester : npm run dev

git add src/data/products.json
git commit -m "fix: resolve merge conflict on products.json"
git push origin develop
```

Les autres :
```bash
git checkout develop
git pull origin develop  # Récupère la version résolue
```

---

### Si équipe veut abandonner un module (ex: bonus langue FR/EN)

**PARADE : Réduire scope intelligemment**

Priorité MAXIMUM :
1. ✅ Accueil + Shop + Produit
2. ✅ Panier + Checkout + Confirmation
3. ✅ Avis + Favoris
4. ✅ Compte + Historique

À réduire (bonus) :
1. 🎁 À propos / Contact (M3 peut simplifier)
2. 🎁 Recherche avancée (garder basique)
3. 🎁 Langue FR/EN
4. 🎁 Points fidélité

---

# 15. DÉCISIONS OUVERTES + RECOMMANDATIONS

## 15.1 Décisions à valider en équipe (Étape 0)

| Décision | Options | Recommandation |
|----------|---------|-----------------|
| **Nom du site** | ShopCam, AfroMart, CameroonHub, Boutique+, etc. | **ShopCam** (court, mémorable) |
| **Couleurs primaires** | Bleu + Orange (Cameroun drapeau) | Bleu #2563EB, Orange #F97316, Neutre #1F2937 |
| **Police** | Poppins, Inter, Roboto | **Inter** (bien supportée, performante) |
| **CSS Framework** | Tailwind vs CSS Modules | **TAILWIND** (plus rapide, cohérent) |
| **Build tool** | Vite vs Create React App | **VITE** (plus rapide, moderne) |
| **State management** | Context API vs Redux vs Zustand | **Context API** (simple, suffisant) |
| **Images** | Dossier local vs CDN | **Dossier local public/img/** (simple, offline) |
| **Déploiement** | Vercel vs Netlify vs GitHub Pages | **VERCEL** (meilleur support React, auto-build) |
| **Seuil livraison gratuite** | 20k / 25k / 30k FCFA | **25 000 FCFA** (équilibré) |
| **Univers Beauté** | 4 produits ou 0 | **4 produits** (enrichit catalogue) |

---

## 15.2 Améliorations possibles du cahier (BONUS)

### Améliorations UX
- 🎁 Panier flottant (side drawer au lieu de page)
- 🎁 Filtres collants (sticky sidebar)
- 🎁 Infinite scroll au lieu de pagination
- 🎁 Page 404 personnalisée
- 🎁 Animated transitions entre pages

### Améliorations Tech
- 🎁 Service Worker (offline mode)
- 🎁 Compression images (WebP)
- 🎁 Virtual scrolling pour grille (si 100+ produits)
- 🎁 Code splitting par route
- 🎁 Dark mode avec localStorage

### Améliorations Métier
- 🎁 Flash sales countdown timer
- 🎁 Code promo/coupon
- 🎁 Wishlist partageable (URL)
- 🎁 Reviews avec galerie photos (lightbox)
- 🎁 FAQ par catégorie produit

### Améliorations Cameroun
- 🎁 Géolocalisation automatique (préselect ville)
- 🎁 Taux de change XAF/USD (info)
- 🎁 Partenaires logistiques (Jumia, Ayoba, etc.)
- 🎁 Plus d'adresses : Douala, Yaoundé, Buéa, Bamenda, Limbe

---

# 16. CHECKLIST D'IMPLÉMENTATION PAR MEMBRE

## 16.1 Checklist M1 (Layout et données)

### Phase 0 : Initialisation
- [ ] Créer GitHub repo `ecommerce`
- [ ] Protéger `main` et `develop`
- [ ] Créer branches `feature/layout`, `feature/catalogue`, `feature/produit`, `feature/panier`
- [ ] Initialiser Vite : `npm create vite@latest ecommerce -- --template react`
- [ ] Installer dépendances : `npm install react-router-dom`
- [ ] Installer Tailwind : `npm install -D tailwindcss postcss autoprefixer`
- [ ] Configurer Tailwind (tailwind.config.js)
- [ ] Créer structure dossiers (src/components, src/pages, src/context, src/utils, src/data)

### Phase 1 : Socle (Priorité HAUTE)
- [ ] Créer products.json (24 produits : 12 Mode, 4 Maison, 4 Tech, 4 Beauté)
  - [ ] Mode : robe wax, chemise, pantalon, t-shirt, jupe, legging, robe soirée, tunique, boubou, accessoires (5 produits Mode minimum)
  - [ ] Maison : ventilateur, marmite, serviettes, nappe
  - [ ] Tech : écouteurs, power bank, lampe solaire, phone
  - [ ] Beauté : shampoing karité, crème visage, savon naturel, beurre de cacao
- [ ] Créer CartContext.jsx
  - [ ] Hook useCart()
  - [ ] Persistance localStorage 'cart'
  - [ ] Valeurs par défaut (try/catch)
- [ ] Créer WishlistContext.jsx
  - [ ] Hook useWishlist()
  - [ ] Persistance localStorage 'wishlist'
- [ ] Créer AuthContext.jsx
  - [ ] Hook useAuth()
  - [ ] Persistance localStorage 'users' et 'currentUser'
- [ ] Créer App.jsx avec React Router
  - [ ] Routes : /, /shop, /produit/:id, /panier, /favoris, /checkout, /connexion, /inscription, /compte, /about, /contact, /404
  - [ ] Providers (CartContext, WishlistContext, AuthContext)
- [ ] Créer Header.jsx
  - [ ] Logo / Home link
  - [ ] Menu univers (Mode, Maison, Tech, Beauté)
  - [ ] Barre recherche (placeholder)
  - [ ] Icons : Favoris (hearts), Compte (user), Panier (cart + compteur)
  - [ ] Responsive : hamburger menu sur mobile
- [ ] Créer Footer.jsx
  - [ ] Liens : À propos, Contact, FAQ, Mentions légales
  - [ ] Bandeau réassurance : "Paiement à la livraison ✓ Mobile Money ✓ Retour 7j ✓"
- [ ] Créer Home.jsx
  - [ ] Hero carrousel (images rotate chaque 5s)
  - [ ] Sections : Catégories tendance, Meilleures ventes, Flash sale, Nouveautés
  - [ ] Appel à action (CTA)
- [ ] Créer utils/format.js
  - [ ] formatFCFA(12500) → "12 500 FCFA"
  - [ ] formatPhone(693123456) → "+237 693 12 34 56"
  - [ ] formatDate(new Date()) → "21 oct. 2026"
- [ ] Créer globals.css avec Tailwind
  - [ ] Import Tailwind @directives
  - [ ] Variables couleurs (#2563EB, #F97316, etc.)
  - [ ] Typographie commune
- [ ] Commits réguliers avec messages clairs
- [ ] Publier le contrat des Contexts en README ou commentaires

---

## 16.2 Checklist M2 (Catalogue et filtres)

### Phase 1 : En attente du socle M1
- [ ] Pull develop (attendre que M1 merge feature/layout)
- [ ] Checkout feature/catalogue et merge develop
- [ ] Tester import products.json
- [ ] Tester import CartContext

### Phase 2 : Développement
- [ ] Créer ProductCard.jsx
  - [ ] Image 1 au chargement
  - [ ] Image 2 au survol (smooth transition)
  - [ ] Badge remise en haut à gauche (ex: "-25%")
  - [ ] Prix barré + prix rouge
  - [ ] Étoiles (⭐) + nombre d'avis
  - [ ] Bouton « Ajouter » au survol
  - [ ] Responsive : bien sur mobile
- [ ] Créer Shop.jsx
  - [ ] Grille avec Filters sidebar
  - [ ] Layout : 2 colonnes mobile, 3 tablette, 4 desktop
  - [ ] Affiche tous les 24 produits
  - [ ] Animation chargement/transition
- [ ] Créer Filters.jsx
  - [ ] Checkbox univers (Mode, Maison, Tech, Beauté)
  - [ ] Slider prix (0 - 50000 FCFA)
  - [ ] Checkboxes couleur (bleu, rouge, noir, etc.)
  - [ ] Radio notes (1, 2, 3, 4, 5 étoiles)
  - [ ] Bouton « Réinitialiser filtres »
  - [ ] Filtres combinés (AND logic)
- [ ] Créer SearchBar.jsx
  - [ ] Input texte avec placeholder
  - [ ] Debounce 300ms sur recherche
  - [ ] Filtre par nom de produit (case-insensitive)
  - [ ] Affiche résultats vivants (instant)
- [ ] Ajouter tri dans Shop.jsx
  - [ ] Select ou boutons : Nouveautés, Prix ↑, Prix ↓, Mieux notés
  - [ ] Tri s'applique immédiatement
- [ ] Gérer état vide
  - [ ] Si aucun résultat : afficher « Aucun résultat trouvé »
  - [ ] Bouton « Réinitialiser »
- [ ] Tester responsive (360, 768, 1280 px)
- [ ] Commits réguliers

---

## 16.3 Checklist M3 (Fiche produit)

### Phase 1 : En attente du socle M1
- [ ] Pull develop (attendre M1)
- [ ] Checkout feature/produit et merge develop
- [ ] Tester import products.json et reviews.json

### Phase 2 : Développement
- [ ] Créer ProductDetail.jsx
  - [ ] Layout 2 colonnes (gauche gallery, droite infos)
  - [ ] Responsive 1 colonne mobile
  - [ ] Gabarit Mode
    - [ ] Sélecteur couleur (avec images associées)
    - [ ] Sélecteur taille (S/M/L/XL)
    - [ ] Bouton « Voir tableau des tailles »
  - [ ] Gabarit Maison/Tech/Beauté
    - [ ] Liste specs (Bluetooth 5.0, Autonomie 20h, etc.)
    - [ ] Vendeur affiché
    - [ ] Stock affiché
  - [ ] Commun aux deux :
    - [ ] Nom, prix, remise, badge -XX%
    - [ ] Description
    - [ ] Bouton « Ajouter panier »
    - [ ] Bouton « Coup de cœur » (cœur)
    - [ ] Quantité sélectionnable (1-99)
- [ ] Créer galerie images
  - [ ] Images cliquables (agrandir)
  - [ ] Zoom sur clic
  - [ ] Miniatures navigables
  - [ ] Sélection couleur change image principale
- [ ] Créer SizeChart.jsx
  - [ ] Tableau des tailles (S, M, L, XL) avec poitrine, taille, hanche
  - [ ] Modale au clic « Voir tableau »
- [ ] Créer ReviewCard.jsx
  - [ ] Affiche : nom auteur, note (⭐⭐⭐⭐⭐), date, texte
  - [ ] Photo de produit (si existe dans reviews.json)
  - [ ] Badge « Achat vérifié » (si exists)
- [ ] Créer section Avis
  - [ ] Affiche min 3-5 avis
  - [ ] Bouton « Voir tous les avis » (optionnel)
  - [ ] Note moyenne et distribution (5⭐: 60%, 4⭐: 30%, etc.)
- [ ] Créer SimilarProducts.jsx
  - [ ] Section « Vous aimerez aussi » (même univers)
  - [ ] Section « Complétez le look » (accessoires)
  - [ ] Affiche 4-6 produits
  - [ ] Cliquable vers ProductDetail
- [ ] Créer reviews.json
  - [ ] 30-40 avis au total (au moins 3 par produit)
  - [ ] Champs : id, productId, author, rating, date, title, text, images[], verified
- [ ] Créer About.jsx
  - [ ] Titre « À propos de ShopCam »
  - [ ] Paragraphes sur la mission, l'équipe, les valeurs
  - [ ] Photos équipe (optionnel)
- [ ] Créer Contact.jsx
  - [ ] Formulaire : nom, email, sujet, message
  - [ ] Validation (non-vides)
  - [ ] Bouton « Envoyer »
  - [ ] Message de succès (toast)
- [ ] Tester responsive (360, 768, 1280 px)
- [ ] Commits réguliers

---

## 16.4 Checklist M4 (Panier et finalisation)

### Phase 1 : En attente du socle M1
- [ ] Pull develop
- [ ] Checkout feature/panier et merge develop

### Phase 2 : Développement
- [ ] Créer Cart.jsx
  - [ ] Affiche tableau : produit, image, taille, couleur, prix unitaire, quantité, sous-total
  - [ ] Bouton + et - pour quantité
  - [ ] Bouton suppression (×)
  - [ ] Récap en bas : sous-total, frais livraison, total
  - [ ] Bouton « Commander »
  - [ ] Bouton « Continuer shopping »
  - [ ] Message si panier vide
- [ ] Créer Wishlist.jsx
  - [ ] Grille de favoris (like Shop)
  - [ ] Bouton « Ajouter panier »
  - [ ] Bouton « Supprimer de favoris » (cœur plein)
  - [ ] Message si vide
- [ ] Créer Checkout.jsx (CRITICAL)
  - [ ] Formulaire adresse camerounaise
    - [ ] Nom (texte)
    - [ ] Téléphone (regex +237 6XXXXXXXX)
    - [ ] Ville (select : Douala, Yaoundé, Autres)
    - [ ] Quartier (texte)
    - [ ] Point de repère (texte)
  - [ ] Choix livraison (radio) : Domicile, Point relais
  - [ ] Choix paiement (radio) : MTN MoMo, Orange Money, Paiement à la livraison
    - [ ] Affiche numéro fictif par méthode (ex: "MTN: +237 657 123 456")
  - [ ] Récap commande : produits, total avant frais, frais livraison, total
  - [ ] Validation : tous champs remplis
  - [ ] Bouton « Payer »
  - [ ] Si connecté : préremplissage name + dernière adresse
- [ ] Créer Modal.jsx
  - [ ] Modale de confirmation
  - [ ] Affiche : "Commande validée ✓"
  - [ ] Numéro commande (UUID)
  - [ ] Date et heure
  - [ ] Total
  - [ ] Mode paiement
  - [ ] Message « Vous recevrez un SMS de confirmation »
  - [ ] Bouton « Retour accueil »
- [ ] Créer Login.jsx
  - [ ] Formulaire : identifiant (tél ou email), mot de passe
  - [ ] Bouton « Se connecter »
  - [ ] Bouton « Pas de compte ? S'inscrire »
  - [ ] Validation
  - [ ] Message d'erreur si identifiants incorrects
  - [ ] Redirection /compte si succès
- [ ] Créer Register.jsx
  - [ ] Formulaire : nom, identifiant (tél ou email), mot de passe, confirmation pwd
  - [ ] Validation :
    - [ ] Nom non-vide
    - [ ] Identifiant unique (pas d'doublon)
    - [ ] Mot de passe ≥ 6 caractères
    - [ ] Confirmation match
  - [ ] Bouton « Créer compte »
  - [ ] Message erreur si doublon ou invalide
  - [ ] Connexion auto + redirection /compte
- [ ] Créer Account.jsx
  - [ ] Si NON connecté : afficher « Veuillez vous connecter »
  - [ ] Si connecté :
    - [ ] Afficher nom utilisateur
    - [ ] Lister commandes (date, numéro, total, statut)
    - [ ] Bouton « Déconnexion »
    - [ ] Bouton « Modifier profil » (optionnel)
- [ ] Créer Toast.jsx
  - [ ] Notification temporaire (success, error, info)
  - [ ] Affichage 3s puis disparition
  - [ ] Positionné en bas à droite
- [ ] Créer utils/orders.js
  - [ ] saveOrder(order) : enregistre dans localStorage 'orders'
  - [ ] getOrders(userId) : retourne commandes du user (ou null si invité)
  - [ ] generateOrderId() : UUID unique
  - [ ] calculateTotal() : sous-total + frais
- [ ] Tester parcours complet
  - [ ] Invité : accueil → produit → panier → checkout → confirmation
  - [ ] Connecté : même + historique
- [ ] Créer README.md (COMPLET)
  - [ ] Titre
  - [ ] Description du projet
  - [ ] Stack technique
  - [ ] Installation : `npm install`
  - [ ] Lancement : `npm run dev`
  - [ ] Build : `npm run build`
  - [ ] Contributeurs
  - [ ] Points clés du projet
  - [ ] Structure dossiers
- [ ] Déploiement Vercel
  - [ ] Vérifier build localement (`npm run build`)
  - [ ] Vérifier build Vercel (check logs)
  - [ ] URL en ligne accessible
- [ ] Tester responsive (360, 768, 1280 px) sur vraie phone si possible
- [ ] Final recette : parcours complet invité + connecté
- [ ] Commits réguliers

---

# 17. TESTING STRATÉGIE

## 17.1 Types de tests

| Type | Outils | Quoi | Quand |
|------|--------|------|-------|
| **Unit** | Jest + React Testing Library | Utilitaires (format.js), hooks customs | Phase 2 (optionnel) |
| **Intégration** | Cypress ou Playwright | Parcours complet (panier → checkout) | Phase 4 |
| **E2E** | Manual | Tous les cas d'usage critiques | Phase 4 |
| **Responsive** | DevTools + vraie phone | 360px, 768px, 1280px | Phase 4 |
| **Performance** | Lighthouse | LCP, CLS, scores | Phase 4 |
| **Accessibilité** | Axe DevTools | Erreurs WCAG, contraste | Phase 4 |

---

## 17.2 Checklist manuelle E2E (Phase 4)

### Parcours Invité
- [ ] Accueil charge sans erreur
- [ ] Recherche « robe » affiche produits Mode
- [ ] Filtre par univers = Mode, 12 produits affichés
- [ ] Tri par Prix ↓ réordonne
- [ ] Clic produit Mode ouvre ProductDetail avec couleurs/tailles
- [ ] Sélectionne couleur → image change
- [ ] Sélectionne taille M → affiche option M
- [ ] Ajoute quantité 2 → toast « Ajouté au panier »
- [ ] Compteur Header passe de 0 à 2
- [ ] Clique Panier → affiche 2 items
- [ ] Modifie quantité 2→3 → total recalculé
- [ ] Clique Commander
- [ ] Formulaire checkout affiche
- [ ] Remplit : nom, tél +237 6XXXXXXXX, ville Douala, quartier, landmark
- [ ] Sélectionne livraison Domicile
- [ ] Sélectionne paiement MTN MoMo
- [ ] Clique Payer
- [ ] Modale « Commande validée » s'affiche
- [ ] Numéro commande affiché
- [ ] Bouton « Retour accueil » → retour à /
- [ ] Panier vide

### Parcours Connecté
- [ ] Clique « S'inscrire »
- [ ] Remplir form : nom, identifiant (tél), pwd ≥ 6 car
- [ ] Clique « Créer compte »
- [ ] Connecté automatiquement, redirige /compte
- [ ] /compte affiche historique vide
- [ ] Ajoute produit au panier
- [ ] Clique Commander
- [ ] Checkout prérempli (nom + ville)
- [ ] Complète et clique Payer
- [ ] Retour Accueil
- [ ] /compte affiche nouvelle commande
- [ ] Clique « Déconnexion »
- [ ] Redirige /
- [ ] /compte affiche « Connectez-vous »

### Tests techniques
- [ ] localStorage après rechargement : panier, favoris, users OK
- [ ] 360px : menu hamburger fonctionne, grille 2 colonnes
- [ ] 768px : grille 3 colonnes
- [ ] 1280px : grille 4 colonnes, layout 2 colonnes ProductDetail
- [ ] Chrome + Firefox + Safari : display OK
- [ ] Lighthouse ≥ 70
- [ ] Axe DevTools : 0 erreur critique

---

# 18. ACCESSIBILITÉ WCAG 2.1 AA

## 18.1 Checklist accessibilité

| Criterion | Comment vérifier | Action |
|-----------|-----------------|--------|
| **Alt text** | Axe DevTools | Toute image a `alt=""` |
| **Contraste** | Color Contrast Analyzer | Texte/fond ≥ 4.5:1 |
| **Clavier** | Tab through UI | Tous les boutons accessibles au clavier |
| **Focus visible** | Tab key → focus ring visible | Blue outline #2563EB autour des boutons |
| **Labels formulaires** | Inspecter HTML | Chaque input a `<label for="">` |
| **Sémantique HTML** | HTML validation | Utiliser `<button>`, `<input>`, `<label>` |
| **Liens** | Vérifier texte | Lien a texte descriptif, pas « Click here » |
| **Couleurs seules** | Pas de code couleur seul pour info | Exemple : panier vide + texte, pas couleur rouge seule |
| **ARIA si besoin** | Axe DevTools | Minimiser ARIA (HTML5 sémantique d'abord) |

---

# 19. PERFORMANCE ET OPTIMISATIONS

## 19.1 Objectifs Lighthouse

| Métrique | Seuil | Comment atteindre |
|----------|-------|------------------|
| **Performance** | ≥ 70 | Lazy-load images, code splitting, minify |
| **Accessibility** | ≥ 80 | Alt text, contraste, focus visible |
| **Best Practices** | ≥ 80 | HTTPS, pas de console.log, CORS OK |
| **SEO** | ≥ 80 | Title, meta, mobile-friendly |
| **LCP** | < 2s | Optimize hero image, lazy-load |
| **CLS** | < 0.1 | Définir hauteur images, éviter layouts shifts |
| **FID** | < 100ms | Code splitting, réduire JS |

---

## 19.2 Optimisations à appliquer

```jsx
// Images lazy-load
<img src="/img/product.jpg" alt="Product" loading="lazy" />

// Code splitting par route
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

// Memoization pour ProductCard
const ProductCard = memo(({ product }) => {
  return (
    <div>
      <img src={product.images[0]} alt={product.name} loading="lazy" />
      ...
    </div>
  );
});

// Debounce search
const [search, setSearch] = useState('');
useEffect(() => {
  const timer = setTimeout(() => {
    // Filtrer
  }, 300);
  return () => clearTimeout(timer);
}, [search]);
```

---

# 20. SÉCURITÉ SIMULÉE + BEST PRACTICES

## 20.1 Ce qu'ON SIMULE (OK pour démo)

- ✅ Mots de passe en clair dans localStorage (démo only)
- ✅ Pas d'authentification JWT
- ✅ Pas de vrai serveur sécurisé
- ✅ Données fictives (pas de vraies données personnelles)

## 20.2 Best practices appliquées

- ✅ Try/catch sur localStorage (protection données corrompues)
- ✅ Pas de console.log() en production
- ✅ Validation formulaires (HTML5 + JS)
- ✅ Pas de injection XSS (React auto-échappe)
- ✅ Pas de injection SQL (pas de serveur)
- ✅ HTTPS seulement (Vercel force HTTPS)

## 20.3 Code sécurisé exemple

```javascript
// ❌ MAUVAIS
localStorage.setItem('user', JSON.stringify(userData));
const user = JSON.parse(localStorage.getItem('user'));

// ✅ BON
try {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  if (!userData.id) throw new Error('Invalid user data');
  // Utiliser userData
} catch (error) {
  console.error('LocalStorage error:', error);
  // Fallback à défaut
}
```

---

# 21. PLAN DE DÉPLOIEMENT VERCEL

## 21.1 Étapes (Phase 0)

1. **Créer compte Vercel** : https://vercel.com/
2. **Connecter GitHub** : Authorize Vercel sur GitHub
3. **Importer dépôt** :
   - Sélectionner repo `ecommerce`
   - Build command : `npm run build`
   - Output directory : `dist`
4. **Deploy** : Vercel redéploie à chaque push `main`

## 21.2 Vérification deploy

```bash
# Local
npm run build  # Générer /dist
npm run preview  # Test prod local

# Push
git add .
git commit -m "ready for deploy"
git push origin main

# Attendre Vercel build (2-3 min)
# Vérifier sur https://ecommerce-XXXX.vercel.app
```

---

# 22. FAQ DE DÉVELOPPEMENT

## Q : Comment résoudre un conflit Git ?

**R :**
```bash
git fetch origin
git merge develop  # Voir conflits
# Éditer fichier, garder les deux versions ou fusionner
git add fichier-resolu
git commit -m "fix: resolve merge conflicts"
git push origin feature/ma-branche
```

---

## Q : Comment tester localStorage ?

**R :**
```javascript
// DevTools Console
localStorage.setItem('test', 'value');
localStorage.getItem('test');  // → 'value'
localStorage.clear();  // Vider tout
location.reload();  // Rafraîchir
```

---

## Q : Pourquoi mon image ne s'affiche pas ?

**R :**
```javascript
// 1. Vérifier chemin : /img/product.jpg (pas ../img)
// 2. Vérifier fichier existe dans public/img/
// 3. Ajouter fallback :

<img
  src="/img/product.jpg"
  alt="Product"
  onError={(e) => e.target.src = '/img/placeholder.jpg'}
/>
```

---

## Q : Comment ajouter une dépendance ?

**R :**
```bash
npm install axios  # dépendance
npm install -D eslint  # dépendance dev
npm list  # vérifier
```

---

## Q : Mon panier ne persiste pas après reload ?

**R :**
```javascript
// Vérifier localStorage écrit correctement :
const saveCart = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart:', error);
  }
};

// Au chargement :
const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch (error) {
    console.error('Failed to load cart:', error);
    return [];
  }
};
```

---

## Q : Comment faire un recherche case-insensitive ?

**R :**
```javascript
const filtered = products.filter(p =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

---

## Q : Comment générer un UUID pour commandes ?

**R :**
```javascript
const generateOrderId = () => {
  return `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
// → "ORDER-1729507600000-abc2def45"
```

---

# 23. SOURCES ET RÉFÉRENCES

- Cdiscount : https://www.cdiscount.com/
- SHEIN : https://www.shein.com/
- React Docs : https://react.dev
- React Router : https://reactrouter.com
- Tailwind CSS : https://tailwindcss.com
- Vercel Docs : https://vercel.com/docs
- LocalStorage API : https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- WCAG 2.1 : https://www.w3.org/WAI/WCAG21/quickref/
- Lighthouse : https://developers.google.com/web/tools/lighthouse

---

# CONCLUSION

Ce cahier des charges est **COMPLET**, **PRÊT À TOUTE BARADE**, et **DÉBORDANT DE DÉTAILS**.

Les 4 membres ont des tâches claires, non-redondantes, et équilibrées (avec parades si imbalance).

Le workflow Git est strict mais clair. Les risques sont identifiés et mitigés.

**À vos claviers ! 🚀**

---

**Version** : 2.0 ULTIMATE  
**Date** : 28 octobre 2026  
**Statut** : ✅ APPROUVÉ POUR DÉVELOPPEMENT