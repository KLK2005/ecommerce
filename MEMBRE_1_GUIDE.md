# 📘 GUIDE COMPLET MEMBRE 1 - PAS À PAS

**Branche** : `feature/layout`  
**Durée estimée** : 2-4 heures  
**Responsabilité** : Créer le SOCLE du projet

---

# 📋 TABLE DES MATIÈRES

1. [Étape 1 : Préparer l'environnement](#étape-1--préparer-lenvironnement)
2. [Étape 2 : Installer Vite + Tailwind](#étape-2--installer-vite--tailwind)
3. [Étape 3 : Créer les fichiers du socle](#étape-3--créer-les-fichiers-du-socle)
4. [Étape 4 : Git commits et push](#étape-4--git-commits-et-push)
5. [Étape 5 : Pull Request et Merge](#étape-5--pull-request-et-merge)

---

# ÉTAPE 1 : PRÉPARER L'ENVIRONNEMENT

**Durée** : 5 minutes

## 1.1 - Cloner le repository

Ouvrez un terminal (PowerShell sur Windows) :

```bash
git clone https://github.com/KLK2005/ecommerce.git
cd ecommerce
```

**Résultat attendu** :
```
Cloning into 'ecommerce'...
...
Receiving objects: 100% (4/4), done.
```

## 1.2 - Aller sur votre branche

```bash
git checkout feature/layout
```

**Résultat attendu** :
```
Switched to branch 'feature/layout'
Your branch is up to date with 'origin/feature/layout'.
```

## 1.3 - Vérifier que c'est bon

```bash
git status
```

**Résultat attendu** :
```
On branch feature/layout
Your branch is up to date with 'origin/feature/layout'.

nothing to commit, working tree clean
```

✅ **Parfait ! Vous êtes prêt(e) à commencer.**

---

# ÉTAPE 2 : INSTALLER VITE + TAILWIND

**Durée** : 30 minutes

## 2.1 - Initialiser Vite

```bash
npm create vite@latest . -- --template react
```

**Expliqué** :
- `npm create vite@latest` = crée un nouveau projet Vite
- `. -- --template react` = dans le dossier actuel avec le template React

**Réponse attendue** :
```
✔ Scaffolding project in current directory done.
```

## 2.2 - Installer les dépendances React

```bash
npm install
```

**Durée** : 30-60 secondes

**Réponse attendue** :
```
added XXX packages, and audited XXX packages in Xs
```

## 2.3 - Installer React Router

```bash
npm install react-router-dom
```

**Réponse attendue** :
```
added X packages in Xs
```

## 2.4 - Installer Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Expliqué** :
- Installe Tailwind et ses dépendances
- Crée `tailwind.config.js` et `postcss.config.js` automatiquement

**Réponse attendue** :
```
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

## 2.5 - Configurer Tailwind

Ouvrez le fichier `tailwind.config.js` et trouvez cette ligne :

```javascript
content: [],
```

Remplacez-la par :

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
],
```

**Sauvegardez le fichier** (Ctrl+S)

## 2.6 - Configurer CSS global

Ouvrez le fichier `src/index.css` et **remplacez TOUT le contenu** par :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: #f9fafb;
  color: #111827;
}

html {
  scroll-behavior: smooth;
}
```

**Sauvegardez**

## 2.7 - Tester que Vite marche

```bash
npm run dev
```

**Réponse attendue** :
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Allez sur `http://localhost:5173/` dans votre navigateur.

Vous devriez voir la page React par défaut. ✅

**Arrêter le serveur** : Appuyez sur `Ctrl+C` dans le terminal

---

# ÉTAPE 3 : CRÉER LES FICHIERS DU SOCLE

**Durée** : 2-3 heures

## 3.1 - Créer le dossier data

Créez un dossier `src/data/` (s'il n'existe pas)

## 3.2 - FICHIER 1 : src/data/products.json

Créez le fichier `src/data/products.json` et copiez-collez ce contenu complet :

```json
[
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
    "images": ["/img/robe-wax-1.jpg", "/img/robe-wax-2.jpg"],
    "colors": [
      {"name": "Bleu royal", "hex": "#1E40AF", "image": "/img/robe-wax-1.jpg"},
      {"name": "Rouge passion", "hex": "#DC2626", "image": "/img/robe-wax-2.jpg"}
    ],
    "sizes": ["S", "M", "L", "XL"],
    "seller": "Boutique Douala Mode",
    "stock": 14,
    "description": "Robe légère en tissu wax traditionnel."
  },
  {
    "id": 2,
    "name": "Chemise en coton",
    "universe": "mode",
    "price": 8500,
    "oldPrice": 12000,
    "discount": 29,
    "rating": 4.2,
    "reviewsCount": 85,
    "createdAt": "2026-10-02",
    "images": ["/img/chemise-1.jpg"],
    "colors": [{"name": "Blanc", "hex": "#FFFFFF", "image": "/img/chemise-1.jpg"}],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "seller": "Fashion Cameroun",
    "stock": 25,
    "description": "Chemise confortable en coton pur."
  },
  {
    "id": 3,
    "name": "Pantalon cargo",
    "universe": "mode",
    "price": 12000,
    "oldPrice": 18000,
    "discount": 33,
    "rating": 4.4,
    "reviewsCount": 92,
    "createdAt": "2026-10-03",
    "images": ["/img/pantalon-1.jpg"],
    "colors": [{"name": "Kaki", "hex": "#8B7355", "image": "/img/pantalon-1.jpg"}],
    "sizes": ["S", "M", "L", "XL"],
    "seller": "Urban Style",
    "stock": 18,
    "description": "Pantalon cargo tendance."
  },
  {
    "id": 4,
    "name": "T-shirt oversize",
    "universe": "mode",
    "price": 5500,
    "oldPrice": 9000,
    "discount": 39,
    "rating": 4.6,
    "reviewsCount": 156,
    "createdAt": "2026-10-04",
    "images": ["/img/tshirt-1.jpg"],
    "colors": [{"name": "Noir", "hex": "#000000", "image": "/img/tshirt-1.jpg"}],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "seller": "Streetwear Douala",
    "stock": 40,
    "description": "T-shirt oversize confortable."
  },
  {
    "id": 5,
    "name": "Jupe plissée",
    "universe": "mode",
    "price": 11000,
    "oldPrice": 16000,
    "discount": 31,
    "rating": 4.3,
    "reviewsCount": 74,
    "createdAt": "2026-10-05",
    "images": ["/img/jupe-1.jpg"],
    "colors": [{"name": "Gris", "hex": "#6B7280", "image": "/img/jupe-1.jpg"}],
    "sizes": ["XS", "S", "M", "L"],
    "seller": "Elegance Shop",
    "stock": 12,
    "description": "Jupe plissée élégante."
  },
  {
    "id": 6,
    "name": "Legging fitness",
    "universe": "mode",
    "price": 7500,
    "oldPrice": 11000,
    "discount": 32,
    "rating": 4.5,
    "reviewsCount": 103,
    "createdAt": "2026-10-06",
    "images": ["/img/legging-1.jpg"],
    "colors": [{"name": "Noir", "hex": "#000000", "image": "/img/legging-1.jpg"}],
    "sizes": ["XS", "S", "M", "L", "XL"],
    "seller": "Sport Pro",
    "stock": 35,
    "description": "Legging haute qualité pour le fitness."
  },
  {
    "id": 7,
    "name": "Robe de soirée",
    "universe": "mode",
    "price": 25000,
    "oldPrice": 35000,
    "discount": 29,
    "rating": 4.7,
    "reviewsCount": 45,
    "createdAt": "2026-10-07",
    "images": ["/img/robe-soiree-1.jpg"],
    "colors": [{"name": "Doré", "hex": "#FFD700", "image": "/img/robe-soiree-1.jpg"}],
    "sizes": ["S", "M", "L"],
    "seller": "Luxury Cameroun",
    "stock": 8,
    "description": "Robe de soirée luxueuse."
  },
  {
    "id": 8,
    "name": "Tunique africaine",
    "universe": "mode",
    "price": 13500,
    "oldPrice": 19000,
    "discount": 29,
    "rating": 4.4,
    "reviewsCount": 67,
    "createdAt": "2026-10-08",
    "images": ["/img/tunique-1.jpg"],
    "colors": [{"name": "Multicolore", "hex": "#FF6B9D", "image": "/img/tunique-1.jpg"}],
    "sizes": ["S", "M", "L", "XL"],
    "seller": "African Pride",
    "stock": 16,
    "description": "Tunique africaine traditionnelle."
  },
  {
    "id": 9,
    "name": "Boubou classique",
    "universe": "mode",
    "price": 18000,
    "oldPrice": 25000,
    "discount": 28,
    "rating": 4.6,
    "reviewsCount": 89,
    "createdAt": "2026-10-09",
    "images": ["/img/boubou-1.jpg"],
    "colors": [{"name": "Bleu marine", "hex": "#001F3F", "image": "/img/boubou-1.jpg"}],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "seller": "Tradition Wear",
    "stock": 20,
    "description": "Boubou classique en tissu de qualité."
  },
  {
    "id": 10,
    "name": "Accessoires bijoux",
    "universe": "mode",
    "price": 3500,
    "oldPrice": 5500,
    "discount": 36,
    "rating": 4.3,
    "reviewsCount": 112,
    "createdAt": "2026-10-10",
    "images": ["/img/bijoux-1.jpg"],
    "colors": [{"name": "Or", "hex": "#FFD700", "image": "/img/bijoux-1.jpg"}],
    "sizes": [],
    "seller": "Accessoires Plus",
    "stock": 50,
    "description": "Accessoires bijoux tendance."
  },
  {
    "id": 11,
    "name": "Ceinture cuir",
    "universe": "mode",
    "price": 4500,
    "oldPrice": 7000,
    "discount": 36,
    "rating": 4.4,
    "reviewsCount": 88,
    "createdAt": "2026-10-11",
    "images": ["/img/ceinture-1.jpg"],
    "colors": [{"name": "Marron", "hex": "#8B4513", "image": "/img/ceinture-1.jpg"}],
    "sizes": [],
    "seller": "Leather Cameroun",
    "stock": 30,
    "description": "Ceinture cuir authentique."
  },
  {
    "id": 12,
    "name": "Écharpe soie",
    "universe": "mode",
    "price": 6000,
    "oldPrice": 9000,
    "discount": 33,
    "rating": 4.5,
    "reviewsCount": 76,
    "createdAt": "2026-10-12",
    "images": ["/img/echarpe-1.jpg"],
    "colors": [{"name": "Rose poudré", "hex": "#FFB6C1", "image": "/img/echarpe-1.jpg"}],
    "sizes": [],
    "seller": "Silk & Style",
    "stock": 22,
    "description": "Écharpe en soie douce."
  },
  {
    "id": 13,
    "name": "Écouteurs sans fil",
    "universe": "tech",
    "price": 9500,
    "oldPrice": 14000,
    "discount": 32,
    "rating": 4.2,
    "reviewsCount": 157,
    "createdAt": "2026-09-20",
    "images": ["/img/ecouteurs-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Connexion": "Bluetooth 5.0", "Autonomie": "20 heures"},
    "seller": "Tech Akwa",
    "stock": 40,
    "description": "Écouteurs bluetooth de qualité."
  },
  {
    "id": 14,
    "name": "Power bank 20000mAh",
    "universe": "tech",
    "price": 12000,
    "oldPrice": 18000,
    "discount": 33,
    "rating": 4.4,
    "reviewsCount": 203,
    "createdAt": "2026-09-25",
    "images": ["/img/powerbank-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Capacité": "20000 mAh", "Entrées": "USB-C, Micro-USB"},
    "seller": "Mobile Store",
    "stock": 35,
    "description": "Power bank haute capacité."
  },
  {
    "id": 15,
    "name": "Lampe solaire LED",
    "universe": "tech",
    "price": 5500,
    "oldPrice": 8000,
    "discount": 31,
    "rating": 4.3,
    "reviewsCount": 89,
    "createdAt": "2026-09-28",
    "images": ["/img/lampe-solaire-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Type": "LED solaire", "Autonomie": "8-10 heures"},
    "seller": "Green Energy",
    "stock": 25,
    "description": "Lampe solaire écologique."
  },
  {
    "id": 16,
    "name": "Téléphone X100 32GB",
    "universe": "tech",
    "price": 45000,
    "oldPrice": 65000,
    "discount": 31,
    "rating": 4.1,
    "reviewsCount": 142,
    "createdAt": "2026-09-15",
    "images": ["/img/phone-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"RAM": "3GB", "Stockage": "32GB", "Batterie": "4000 mAh"},
    "seller": "Phone Pro",
    "stock": 15,
    "description": "Téléphone performant."
  },
  {
    "id": 17,
    "name": "Ventilateur 3 vitesses",
    "universe": "maison",
    "price": 7000,
    "oldPrice": 10000,
    "discount": 30,
    "rating": 4.3,
    "reviewsCount": 76,
    "createdAt": "2026-09-30",
    "images": ["/img/ventilateur-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Puissance": "60W", "Vitesses": "3 niveaux"},
    "seller": "Électroménager Plus",
    "stock": 18,
    "description": "Ventilateur pratique."
  },
  {
    "id": 18,
    "name": "Marmite inox 5L",
    "universe": "maison",
    "price": 8500,
    "oldPrice": 12000,
    "discount": 29,
    "rating": 4.4,
    "reviewsCount": 93,
    "createdAt": "2026-10-01",
    "images": ["/img/marmite-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Matière": "Inox 18/10", "Volume": "5 litres"},
    "seller": "Cuisine Pro",
    "stock": 22,
    "description": "Marmite inox durable."
  },
  {
    "id": 19,
    "name": "Serviettes coton 100%",
    "universe": "maison",
    "price": 4500,
    "oldPrice": 6500,
    "discount": 31,
    "rating": 4.5,
    "reviewsCount": 118,
    "createdAt": "2026-10-02",
    "images": ["/img/serviettes-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Matière": "Coton 100%", "Quantité": "Pack 4"},
    "seller": "Linge de Maison",
    "stock": 45,
    "description": "Serviettes de qualité."
  },
  {
    "id": 20,
    "name": "Nappe imprimée",
    "universe": "maison",
    "price": 6000,
    "oldPrice": 9000,
    "discount": 33,
    "rating": 4.3,
    "reviewsCount": 64,
    "createdAt": "2026-10-03",
    "images": ["/img/nappe-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Dimensions": "150x200cm", "Motif": "Floral africain"},
    "seller": "Décoration Cameroun",
    "stock": 30,
    "description": "Nappe colorée."
  },
  {
    "id": 21,
    "name": "Shampoing karité Bio",
    "universe": "beaute",
    "price": 3500,
    "oldPrice": 5500,
    "discount": 36,
    "rating": 4.6,
    "reviewsCount": 187,
    "createdAt": "2026-09-22",
    "images": ["/img/shampoing-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Volume": "400ml", "Type": "Cheveux secs"},
    "seller": "Beauty Naturel",
    "stock": 50,
    "description": "Shampoing naturel au karité."
  },
  {
    "id": 22,
    "name": "Crème visage hydratante",
    "universe": "beaute",
    "price": 7500,
    "oldPrice": 11000,
    "discount": 32,
    "rating": 4.4,
    "reviewsCount": 142,
    "createdAt": "2026-09-25",
    "images": ["/img/creme-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Volume": "50ml", "Type peau": "Tous types"},
    "seller": "Skin Care Plus",
    "stock": 38,
    "description": "Crème visage hydratante."
  },
  {
    "id": 23,
    "name": "Savon naturel artisanal",
    "universe": "beaute",
    "price": 2500,
    "oldPrice": 4000,
    "discount": 38,
    "rating": 4.5,
    "reviewsCount": 156,
    "createdAt": "2026-09-28",
    "images": ["/img/savon-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Poids": "150g", "Type": "Peaux sensibles"},
    "seller": "Savons Bio",
    "stock": 60,
    "description": "Savon artisanal fait main."
  },
  {
    "id": 24,
    "name": "Beurre de cacao pur",
    "universe": "beaute",
    "price": 5000,
    "oldPrice": 7500,
    "discount": 33,
    "rating": 4.5,
    "reviewsCount": 129,
    "createdAt": "2026-10-01",
    "images": ["/img/beurre-cacao-1.jpg"],
    "colors": [],
    "sizes": [],
    "specs": {"Volume": "100ml", "Pureté": "100%"},
    "seller": "Beauté Africaine",
    "stock": 35,
    "description": "Beurre de cacao pur."
  }
]
```

**Sauvegardez**

## 3.3 - FICHIER 2 : src/utils/format.js

Créez le fichier `src/utils/format.js` :

```javascript
export const formatFCFA = (price) => {
  if (!price) return "0 FCFA";
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
};

export const formatPhone = (phone) => {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 9) {
    return `+237 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  return phone;
};

export const formatDate = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(date));
};
```

**Sauvegardez**

## 3.4 - FICHIER 3 : src/context/CartContext.jsx

Créez le fichier `src/context/CartContext.jsx` :

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) setCartItems(JSON.parse(saved));
    } catch (error) {
      console.error('Failed to load cart:', error);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, { size, color, qty = 1 }) => {
    const lineId = `${product.id}-${size || 'null'}-${color || 'null'}`;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.lineId === lineId);
      if (existingItem) {
        return prevItems.map(item =>
          item.lineId === lineId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prevItems, { lineId, productId: product.id, size: size || null, color: color || null, qty }];
    });
  };

  const removeFromCart = (lineId) => {
    setCartItems(cartItems.filter(item => item.lineId !== lineId));
  };

  const updateQuantity = (lineId, qty) => {
    if (qty <= 0) {
      removeFromCart(lineId);
    } else {
      setCartItems(cartItems.map(item =>
        item.lineId === lineId ? { ...item, qty } : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
```

**Sauvegardez**

## 3.5 - FICHIER 4 : src/context/WishlistContext.jsx

Créez le fichier `src/context/WishlistContext.jsx` :

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      if (saved) setWishlist(JSON.parse(saved));
    } catch (error) {
      console.error('Failed to load wishlist:', error);
      setWishlist([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist(prevItems =>
      prevItems.includes(productId)
        ? prevItems.filter(id => id !== productId)
        : [...prevItems, productId]
    );
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted, wishlistCount: wishlist.length }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
```

**Sauvegardez**

## 3.6 - FICHIER 5 : src/context/AuthContext.jsx

Créez le fichier `src/context/AuthContext.jsx` :

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) setUsers(JSON.parse(savedUsers));
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) setUser(JSON.parse(currentUser));
    } catch (error) {
      console.error('Failed to load auth:', error);
    }
  }, []);

  const register = (name, identifiant, password) => {
    if (users.some(u => u.identifiant === identifiant)) {
      return { success: false, message: 'Cet identifiant existe déjà' };
    }
    const newUser = {
      id: users.length + 1,
      name,
      identifiant,
      password,
      createdAt: new Date().toISOString()
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const login = (identifiant, password) => {
    const foundUser = users.find(u => u.identifiant === identifiant && u.password === password);
    if (!foundUser) return { success: false, message: 'Identifiants incorrects' };
    setUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    return { success: true, user: foundUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
```

**Sauvegardez**

## 3.7 - FICHIER 6 : src/App.jsx

Remplacez le contenu de `src/App.jsx` par :

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<div className="p-4">Shop</div>} />
                  <Route path="/produit/:id" element={<div className="p-4">ProductDetail</div>} />
                  <Route path="/panier" element={<div className="p-4">Cart</div>} />
                  <Route path="/favoris" element={<div className="p-4">Wishlist</div>} />
                  <Route path="/checkout" element={<div className="p-4">Checkout</div>} />
                  <Route path="/connexion" element={<div className="p-4">Login</div>} />
                  <Route path="/inscription" element={<div className="p-4">Register</div>} />
                  <Route path="/compte" element={<div className="p-4">Account</div>} />
                  <Route path="/about" element={<div className="p-4">About</div>} />
                  <Route path="/contact" element={<div className="p-4">Contact</div>} />
                  <Route path="*" element={<div className="p-4">404</div>} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
```

**Sauvegardez**

## 3.8 - FICHIER 7 : src/main.jsx

Remplacez le contenu de `src/main.jsx` par :

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Sauvegardez**

## 3.9 - FICHIER 8 : src/components/Header.jsx

Créez le fichier `src/components/Header.jsx` :

```javascript
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopCam
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/shop?universe=mode" className="hover:text-blue-600 font-medium">Mode</Link>
          <Link to="/shop?universe=maison" className="hover:text-blue-600 font-medium">Maison</Link>
          <Link to="/shop?universe=tech" className="hover:text-blue-600 font-medium">Tech</Link>
          <Link to="/shop?universe=beaute" className="hover:text-blue-600 font-medium">Beauté</Link>
        </nav>

        <div className="flex gap-4 items-center">
          <Link to="/favoris" className="relative text-xl">
            ❤️ 
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to={isAuthenticated ? "/compte" : "/connexion"} className="text-xl">👤</Link>
          <Link to="/panier" className="relative text-xl">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
```

**Sauvegardez**

## 3.10 - FICHIER 9 : src/components/Footer.jsx

Créez le fichier `src/components/Footer.jsx` :

```javascript
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopCam</h3>
            <p className="text-gray-400">Votre boutique en ligne de confiance au Cameroun</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liens</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">À propos</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Garanties</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Paiement à la livraison</li>
              <li>✓ Mobile Money sécurisé</li>
              <li>✓ Retour sous 7 jours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ShopCam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Sauvegardez**

## 3.11 - FICHIER 10 : src/pages/Home.jsx

Créez le fichier `src/pages/Home.jsx` :

```javascript
export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur ShopCam</h1>
          <p className="text-xl mb-8">Découvrez Mode, Maison, Tech et Beauté</p>
          <a href="/shop" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block">
            Découvrir la boutique
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Catégories tendance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mode', 'Maison', 'Tech', 'Beauté'].map(cat => (
              <div key={cat} className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 text-center rounded-lg cursor-pointer hover:shadow-lg transition">
                <p className="font-bold text-lg text-blue-900">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

**Sauvegardez**

---

# ÉTAPE 4 : GIT COMMITS ET PUSH

**Durée** : 30 minutes

## 4.1 - Vérifier les fichiers modifiés

```bash
git status
```

**Résultat attendu** : Vous devriez voir tous les fichiers créés (en rouge)

## 4.2 - Ajouter tous les fichiers

```bash
git add .
```

## 4.3 - Faire les commits (IMPORTANT !)

Faites des commits logiques, un par fonctionnalité :

```bash
git commit -m "feat: init vite + tailwind + react router"
git commit -m "feat: add products.json with 24 products"
git commit -m "feat: create CartContext with hooks"
git commit -m "feat: create WishlistContext with hooks"
git commit -m "feat: create AuthContext with login/register"
git commit -m "feat: add App.jsx with all routes"
git commit -m "feat: add utils/format.js (formatFCFA, formatPhone)"
git commit -m "feat: create Header component with counters"
git commit -m "feat: create Footer component with links"
git commit -m "feat: create Home page with hero section"
```

## 4.4 - Vérifier les commits

```bash
git log --oneline
```

Vous devriez voir vos 10 commits

## 4.5 - Pousser sur GitHub

```bash
git push origin feature/layout
```

**Résultat attendu** :
```
Enumerating objects: ...
...
To https://github.com/KLK2005/ecommerce.git
   ... feature/layout -> feature/layout
```

✅ **Votre code est maintenant sur GitHub !**

---

# ÉTAPE 5 : PULL REQUEST ET MERGE

**Durée** : 10 minutes

## 5.1 - Créer une Pull Request

1. Allez sur https://github.com/KLK2005/ecommerce
2. Cherchez le bouton **"Compare & pull request"** (GitHub devrait le suggérer)
3. Cliquez dessus

## 5.2 - Remplir la PR

**De** : `feature/layout`  
**Vers** : `develop`

**Title** :
```
feat: create project foundation with Contexts and layouts
```

**Description** :
```
## Changes
- ✅ Initialize Vite + React + Tailwind
- ✅ Create CartContext, WishlistContext, AuthContext
- ✅ Create App.jsx with all 10 routes
- ✅ Create Header and Footer components
- ✅ Create Home page skeleton
- ✅ Add products.json (24 products)
- ✅ Add utils/format.js

## Testing
- ✅ npm run dev works
- ✅ All routes accessible
- ✅ All Contexts working

Ready for M2, M3, M4!
```

## 5.3 - Créer la PR

Cliquez sur **"Create pull request"**

## 5.4 - Merger la PR

Une fois approuvée, cliquez sur **"Merge pull request"**

Puis **"Confirm merge"**

✅ **BRAVO ! Votre socle est dans develop !**

---

# 🎉 VOUS AVEZ FINI !

Vous avez créé :

✅ Vite + React + Tailwind  
✅ 3 Contexts (Cart, Wishlist, Auth)  
✅ App.jsx avec 10 routes  
✅ Header + Footer + Home  
✅ 24 produits en JSON  
✅ Utilitaires (format.js)  
✅ 10 commits clairs  
✅ PR validée et mergée  

**M2, M3, M4 peuvent maintenant commencer !** 🚀

---

## 📊 Résumé

| Phase | Durée | Quoi |
|-------|-------|------|
| 1 | 5 min | Clone + setup |
| 2 | 30 min | Vite + Tailwind |
| 3 | 120 min | 10 fichiers |
| 4 | 30 min | Commits + push |
| 5 | 10 min | PR + merge |
| **TOTAL** | **195 min** | **~3-4h** |

**Vous êtes prêt(e) ? LET'S GO !** 🚀
