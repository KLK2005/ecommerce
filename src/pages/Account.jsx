import { useAuth } from '../context/AuthContext';
import { getOrders } from '../utils/orders';
import { formatFCFA } from '../utils/format';
import { Link, useNavigate } from 'react-router-dom';

export default function Account() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Veuillez vous connecter</h2>
        <p className="mb-8 text-gray-600">Accédez à votre compte pour consulter vos commandes.</p>
        <Link
          to="/connexion"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700"
        >
          Se connecter
        </Link>
      </div>
    );
  }

  const userOrders = getOrders(user.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mon Compte</h1>
          <p className="text-gray-600">Bienvenue, <span className="font-semibold text-gray-900">{user.name}</span></p>
        </div>
        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Déconnexion[cite: 1]
        </button>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-gray-900">Historique des commandes[cite: 1]</h2>
      {userOrders.length === 0 ? (
        <p className="text-gray-600">Aucune commande enregistrée pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {userOrders.map((order) => (
            <div key={order.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between border-b pb-4 mb-4 text-sm text-gray-600 gap-2">
                <span><strong>N° :</strong> {order.id}</span>
                <span><strong>Date :</strong> {new Date(order.createdAt).toLocaleDateString()}</span>
                <span><strong>Statut :</strong> <span className="text-green-600 font-semibold">{order.status}</span></span>
              </div>
              <div className="space-y-2 mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span>{item.name} {item.size && `(${item.size})`} × {item.qty}</span>
                    <span>{formatFCFA(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-gray-900 border-t pt-4">
                <span>Total ({order.paymentMethod})</span>
                <span className="text-blue-600">{formatFCFA(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}