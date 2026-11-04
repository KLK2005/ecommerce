/* ShopCam — context/AuthContext.jsx
 * Rôle : État global de session et comptes de démonstration persistés dans localStorage.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function readLocalStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value ?? fallback;
  } catch (error) {
    console.error('Impossible de restaurer la session :', error);
    return fallback;
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readLocalStorage('currentUser', null));
  const [users, setUsers] = useState(() => {
    const savedUsers = readLocalStorage('users', []);
    return Array.isArray(savedUsers) ? savedUsers : [];
  });

  const register = ({ name, identifiant, password }) => {
    const normalizedIdentifier = identifiant.trim().toLocaleLowerCase('fr');
    if (users.some((savedUser) => String(savedUser.identifiant || '').trim().toLocaleLowerCase('fr') === normalizedIdentifier)) {
      return { success: false, message: 'Cet identifiant existe déjà.' };
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      identifiant: identifiant.trim(),
      password,
      createdAt: new Date().toISOString(),
    };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setUser(newUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const login = (identifiant, password) => {
    const normalizedIdentifier = identifiant.trim().toLocaleLowerCase('fr');
    const foundUser = users.find((savedUser) => (
      String(savedUser.identifiant || '').trim().toLocaleLowerCase('fr') === normalizedIdentifier
      && savedUser.password === password
    ));

    if (!foundUser) return { success: false, message: 'Identifiants incorrects.' };
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
