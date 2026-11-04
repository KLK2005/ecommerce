/* ShopCam — components/Footer.jsx
 * Rôle : Pied de page partagé avec les raccourcis de navigation et les informations ShopCam.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Tous les produits', to: '/shop' },
  { label: 'Tech', to: '/shop?universe=tech' },
  { label: 'Maison', to: '/shop?universe=maison' },
  { label: 'À propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-3 border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="shrink-0">
            <Link to="/" className="rounded-sm text-lg font-black tracking-tight text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
              Shop<span className="text-amber-700">Cam</span>
            </Link>
            <p className="mt-1 text-sm text-slate-600">La boutique multi-catégories du quotidien au Cameroun.</p>
          </div>

          <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-x-3 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="inline-flex min-h-8 items-center rounded-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-blue-900 hover:decoration-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-2 border-t border-slate-200 pt-2 text-xs text-slate-500">
          <p>© 2026 ShopCam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
