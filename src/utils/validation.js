/* ShopCam — utils/validation.js
 * Rôle : Règles de validation partagées pour téléphone camerounais, email, identifiant et mot de passe.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
export const normalizePhone = (value) =>
  value.replace(/[\s.-]/g, '').replace(/^\+?237/, '');

export const isValidPhone = (value) => /^6\d{8}$/.test(normalizePhone(value));

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Identifiant = téléphone camerounais OU email
export const isValidIdentifiant = (value) =>
  isValidPhone(value) || isValidEmail(value);

export const isValidPassword = (value) => value.length >= 6;