/* ShopCam — context/CartContext.jsx
 * Rôle : État global du panier : normalisation, lignes variantes, quantités, total et persistance.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import products from '../data/products.json';

const CartContext = createContext();
const PRODUCT_BY_ID = new Map(products.map((product) => [product.id, product]));

function normalizeCartItem(item) {
  const product = PRODUCT_BY_ID.get(Number(item?.productId ?? item?.id));
  if (!product) return null;

  const size = item.size || null;
  const color = item.color || null;
  const qty = Math.max(1, Number(item.qty) || 1);
  const images = Array.isArray(product.images) ? product.images : [];

  return {
    ...product,
    ...item,
    productId: product.id,
    lineId: item.lineId || `${product.id}-${size || 'null'}-${color || 'null'}`,
    name: product.name,
    price: product.price,
    image: item.image || images[0] || '/img/placeholder.svg',
    images,
    size,
    color,
    qty,
  };
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('cart') || '[]');
    return Array.isArray(saved) ? saved.map(normalizeCartItem).filter(Boolean) : [];
  } catch (error) {
    console.error('Impossible de charger le panier :', error);
    return [];
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(readCart);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Impossible de sauvegarder le panier :', error);
    }
  }, [cartItems]);

  const addToCart = (product, { size, color, qty = 1 } = {}) => {
    const lineId = `${product.id}-${size || 'null'}-${color || 'null'}`;
    const images = Array.isArray(product.images) ? product.images : [];
    const itemData = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: images[0] || '/img/placeholder.svg',
      images,
      size: size || null,
      color: color || null,
    };

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId);
      if (existingItem) {
        return currentItems.map((item) => (
          item.lineId === lineId ? { ...item, qty: item.qty + qty } : item
        ));
      }
      return [...currentItems, { ...itemData, lineId, qty }];
    });
  };

  const removeFromCart = (lineId) => {
    setCartItems((items) => items.filter((item) => item.lineId !== lineId));
  };

  const updateQuantity = (lineId, qty) => {
    const quantity = Number(qty);
    if (quantity <= 0) {
      removeFromCart(lineId);
      return;
    }
    setCartItems((items) => items.map((item) => (
      item.lineId === lineId ? { ...item, qty: quantity } : item
    )));
  };

  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
