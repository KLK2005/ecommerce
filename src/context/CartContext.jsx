import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
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
          item.lineId === lineId
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      
      return [...prevItems, { 
        lineId, 
        productId: product.id, 
        size: size || null, 
        color: color || null, 
        qty 
      }];
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
    <CartContext.Provider value={{ 
      cartItems, 
      cartCount, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
