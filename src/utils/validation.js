export const normalizePhone = (value) =>
  value.replace(/[\s.-]/g, '').replace(/^\+?237/, '');

export const isValidPhone = (value) => /^6\d{8}$/.test(normalizePhone(value));

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Identifiant = téléphone camerounais OU email
export const isValidIdentifiant = (value) =>
  isValidPhone(value) || isValidEmail(value);

export const isValidPassword = (value) => value.length >= 6;