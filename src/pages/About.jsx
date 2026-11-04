/* ShopCam — pages/About.jsx
 * Rôle : Page institutionnelle présentant ShopCam, son positionnement et ses engagements.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">ShopCam</p>
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Une boutique pensée pour le Cameroun</h1>
      <p className="mt-5 text-lg leading-8 text-gray-600">
        ShopCam rassemble mode, maison, tech et beauté dans une expérience simple, mobile et adaptée aux habitudes d’achat locales.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ['Prix en FCFA', 'Des tarifs lisibles et adaptés au marché local.'],
          ['Paiement flexible', 'Mobile Money ou paiement à la livraison.'],
          ['Livraison locale', 'Une adresse décrite par ville, quartier et repère.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
          </article>
        ))}
      </div>
      <Link to="/shop" className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
        Découvrir la boutique
      </Link>
    </section>
  );
}
