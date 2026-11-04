import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/Toast';

export default function Login() {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(identifiant, password);
    if (success) {
      showToast('Connexion réussie !', 'success');
      navigate('/compte');
    } else {
      showToast('Identifiant ou mot de passe incorrect[cite: 1].', 'error');
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Identifiant (Téléphone ou Email)[cite: 1]</label>
            <input
              type="text"
              required
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 shadow-md"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Pas de compte ?{' '}
          <Link to="/inscription" className="text-blue-600 hover:underline font-medium">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}