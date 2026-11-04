/* ShopCam — pages/Cart.jsx
 * Rôle : Page panier : lignes, quantités, suppression, sous-total et accès au checkout.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatFCFA } from '../utils/format';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Votre panier est vide</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">Découvrez nos produits et commencez vos achats dès maintenant.</p>
        <Link
          to="/shop"
          className="inline-block rounded-lg bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md hover:bg-blue-700"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
      <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Mon Panier</h1>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.lineId}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg sm:rounded-xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm gap-3 sm:gap-4"
            >
              <img
                src={item.image || item.images?.[0] || '/img/placeholder.svg'}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.size && `Taille: ${item.size}`} {item.color && `• Couleur: ${item.color}`}
                </p>
                <p className="font-bold text-blue-600 text-xs sm:text-sm mt-1">{formatFCFA(item.price)}</p>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => updateQuantity(item.lineId, item.qty - 1)}
                  className="rounded border px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium">{item.qty}</span>
                <button
                  onClick={() => updateQuantity(item.lineId, item.qty + 1)}
                  className="rounded border px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.lineId)}
                className="text-red-500 hover:text-red-700 font-bold p-1 text-lg flex-shrink-0"
                title="Supprimer"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-xs sm:text-sm text-red-600 hover:underline mt-2 sm:mt-3"
          >
            Vider le panier
          </button>
        </div>

        {/* Récapitulatif */}
        <div className="rounded-lg sm:rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm h-fit">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">Récapitulatif</h2>
          <div className="space-y-2 sm:space-y-3 border-b border-gray-200 pb-3 sm:pb-4 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium text-gray-900">{formatFCFA(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Livraison</span>
              <span className="text-gray-500">Calculée au checkout</span>
            </div>
          </div>
          <div className="flex justify-between py-3 sm:py-4 text-base sm:text-lg font-bold text-gray-900">
            <span>Total provisoire</span>
            <span className="text-blue-600">{formatFCFA(totalPrice)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full rounded-lg bg-orange-500 py-2 sm:py-3 text-center text-sm sm:text-base font-medium text-white shadow-md hover:bg-orange-600"
          >
            Passer la commande
          </Link>
        </div>
      </div>
    </div>
  );
}
