import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatFCFA } from '../utils/format';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Votre panier est vide</h2>
        <p className="mb-8 text-gray-600">Découvrez nos produits et commencez vos achats dès maintenant.</p>
        <Link
          to="/shop"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Mon Panier</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.lineId}
              className="flex flex-col sm:flex-row items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm gap-4"
            >
              <img
                src={item.image || item.images?.[0] || '/img/placeholder.jpg'}
                alt={item.name}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.size && `Taille: ${item.size}`} {item.color && `• Couleur: ${item.color}`}
                </p>
                <p className="font-bold text-blue-600">{formatFCFA(item.price)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.lineId, item.qty - 1)}
                  className="rounded border px-2.5 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.qty}</span>
                <button
                  onClick={() => updateQuantity(item.lineId, item.qty + 1)}
                  className="rounded border px-2.5 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.lineId)}
                className="text-red-500 hover:text-red-700 font-bold p-2 text-xl"
                title="Supprimer"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-sm text-red-600 hover:underline mt-2"
          >
            Vider le panier
          </button>
        </div>

        {/* Récapitulatif */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-fit">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Récapitulatif</h2>
          <div className="space-y-3 border-b border-gray-200 pb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium text-gray-900">{formatFCFA(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Livraison</span>
              <span className="text-gray-500">Calculée au checkout</span>
            </div>
          </div>
          <div className="flex justify-between py-4 text-lg font-bold text-gray-900">
            <span>Total provisoire</span>
            <span className="text-blue-600">{formatFCFA(totalPrice)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full rounded-lg bg-orange-500 py-3 text-center font-medium text-white shadow-md hover:bg-orange-600"
          >
            Passer la commande
          </Link>
        </div>
      </div>
    </div>
  );
}