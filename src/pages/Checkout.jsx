/* ShopCam — pages/Checkout.jsx
 * Rôle : Parcours de commande de démonstration : adresse, livraison, paiement et confirmation.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { calculateDeliveryFee, saveOrder, getLastAddress } from '../utils/orders';
import { isValidPhone } from '../utils/validation';
import { formatFCFA } from '../utils/format';
import Modal from '../components/Modal';
import { useToast } from '../components/Toast';

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: 'douala',
    district: '',
    landmark: '',
  });

  const [deliveryType, setDeliveryType] = useState('domicile');
  const [paymentMethod, setPaymentMethod] = useState('mtn_momo');
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      const lastAddr = getLastAddress(user.id);
      if (lastAddr) {
        setForm((prev) => ({
          ...prev,
          name: user.name || lastAddr.name || '',
          phone: lastAddr.phone || user.identifiant || '',
          city: lastAddr.city || 'douala',
          district: lastAddr.district || '',
          landmark: lastAddr.landmark || '',
        }));
      } else {
        setForm((prev) => ({
          ...prev,
          name: user.name || '',
          phone: user.identifiant?.startsWith('6') ? `+237 ${user.identifiant}` : '',
        }));
      }
    }
  }, [isAuthenticated, user]);

  if (cartItems.length === 0 && !confirmedOrder) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Votre panier est vide</h2>
        <button
          onClick={() => navigate('/shop')}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700"
        >
          Retourner à la boutique
        </button>
      </div>
    );
  }

  const deliveryFee = calculateDeliveryFee(form.city, totalPrice);
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhone(form.phone)) {
      showToast('Numéro de téléphone invalide (+237 6XXXXXXXX requis)', 'error');
      return;
    }

    const orderData = {
      userId: isAuthenticated ? user.id : null,
      items: cartItems,
      total: finalTotal,
      deliveryFee,
      address: { ...form },
      deliveryType,
      paymentMethod,
    };

    const saved = saveOrder(orderData);
    setConfirmedOrder(saved);
    setIsModalOpen(true);
    clearCart();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Finaliser la commande</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">1. Adresse de livraison (Cameroun)</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
                  placeholder="Sall Sy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone (+237)</label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
                  placeholder="693123456"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
                >
                  <option value="douala">Douala</option>
                  <option value="yaounde">Yaoundé</option>
                  <option value="autres">Autres</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quartier</label>
                <input
                  type="text"
                  required
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
                  placeholder="Bonanjo"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Point de repère</label>
                <input
                  type="text"
                  required
                  value={form.landmark}
                  onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
                  placeholder="Près du marché central"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">2. Mode de paiement</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="mtn_momo"
                  checked={paymentMethod === 'mtn_momo'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span>MTN Mobile Money (Fictif : +237 657 123 456)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="orange_money"
                  checked={paymentMethod === 'orange_money'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span>Orange Money (Fictif : +237 675 123 456)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash_delivery"
                  checked={paymentMethod === 'cash_delivery'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span>Paiement à la livraison (COD)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-fit">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Récapitulatif</h2>
          <div className="space-y-3 border-b border-gray-200 pb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium text-gray-900">{formatFCFA(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Livraison</span>
              <span className="font-medium text-gray-900">{formatFCFA(deliveryFee)}</span>
            </div>
          </div>
          <div className="flex justify-between py-4 text-lg font-bold text-gray-900">
            <span>Total</span>
            <span className="text-blue-600">{formatFCFA(finalTotal)}</span>
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-orange-500 py-3 text-center font-medium text-white shadow-md hover:bg-orange-600"
          >
            Payer {formatFCFA(finalTotal)}
          </button>
        </div>
      </form>

      <Modal open={isModalOpen} onClose={() => navigate('/')} title="Commande validée !">
        {confirmedOrder && (
          <div className="space-y-4">
            <p className="text-gray-600">Votre commande a été enregistrée avec succès.</p>
            <div className="rounded-lg bg-gray-50 p-4 text-sm space-y-2">
              <p><strong>N° Commande :</strong> {confirmedOrder.id}</p>
              <p><strong>Montant :</strong> {formatFCFA(confirmedOrder.total)}</p>
              <p><strong>Paiement :</strong> {confirmedOrder.paymentMethod}</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-full rounded-lg bg-blue-600 py-2.5 text-center font-medium text-white hover:bg-blue-700"
            >
              Retour accueil
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}