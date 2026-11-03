import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isValidPassword } from '../utils/validation';
import { useToast } from '../components/Toast';

export default function Register() {
  const [name, setName] = useState('');
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      showToast('Le mot de passe doit contenir au moins 6 caractères[cite: 1].', 'error');
      return;
    }

    const result = register({ name, identifiant, password });
    if (result.success) {
      showToast('Compte créé avec succès !', 'success');
      navigate('/compte');
    } else {
      showToast(result.message || 'Cet identifiant existe déjà[cite: 1].', 'error');
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 text-center">Inscription</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none"
            />
          </div>
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
            <label className="block text-sm font-medium text-gray-700">Mot de passe (min. 6 caractères)[cite: 1]</label>
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
            Créer un compte
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Déjà un compte ?{' '}
          <Link to="/connexion" className="text-blue-600 hover:underline font-medium">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}