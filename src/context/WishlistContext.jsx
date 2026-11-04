import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
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
    <WishlistContext.Provider value={{ 
      wishlist, 
      toggleWishlist, 
      isWishlisted, 
      wishlistCount: wishlist.length 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
