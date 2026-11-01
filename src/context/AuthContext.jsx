import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        setUsers(JSON.parse(savedUsers));
      }

      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        setUser(JSON.parse(currentUser));
      }
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
    const foundUser = users.find(
      u => u.identifiant === identifiant && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: 'Identifiants incorrects' };
    }

    setUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));

    return { success: true, user: foundUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      register, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
