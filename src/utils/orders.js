/* ShopCam — utils/orders.js
 * Rôle : Utilitaires de livraison et de stockage local des commandes de démonstration.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
const KEY = 'orders';

const DELIVERY_RATES = {
  douala: { fee: 500, freeFrom: 25000 },
  yaounde: { fee: 800, freeFrom: 25000 },
  autres: { fee: 1500, freeFrom: 50000 },
};

const readOrders = () => {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export const calculateDeliveryFee = (city, subtotal) => {
  const rate = DELIVERY_RATES[city] ?? DELIVERY_RATES.autres;
  return subtotal >= rate.freeFrom ? 0 : rate.fee;
};

export const calculateTotal = (subtotal, deliveryFee) => subtotal + deliveryFee;

export const generateOrderId = () => crypto.randomUUID();

export const saveOrder = (order) => {
  const saved = {
    ...order,
    id: generateOrderId(),
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify([saved, ...readOrders()]));
  return saved;
};

// Invité (userId null) : pas d'historique
export const getOrders = (userId) =>
  userId == null ? [] : readOrders().filter((o) => o.userId === userId);

// Pour préremplir le checkout d'un client connecté
export const getLastAddress = (userId) => getOrders(userId)[0]?.address ?? null;