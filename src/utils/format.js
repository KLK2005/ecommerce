/* ShopCam — utils/format.js
 * Rôle : Fonctions de présentation des prix FCFA, téléphones et dates.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
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
