/* ShopCam — pages/Home.jsx
 * Rôle : Landing page : hero, recherche, univers, produits mis en avant et appel au contact.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n'est déclenchée ici.
 */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { formatFCFA } from '../utils/format';

const categories = [
  {
    name: 'Tech',
    slug: 'tech',
    description: 'La technologie à portée de main.',
    image: '/img/phone-1.jpg',
    alt: 'Téléphone portable',
    style: 'from-violet-50 to-indigo-50',
  },
  {
    name: 'Maison',
    slug: 'maison',
    description: 'Le confort au quotidien.',
    image: '/img/lampe-solaire-1.jpg',
    alt: 'Lampe solaire LED pour la maison',
    style: 'from-sky-50 to-blue-50',
  },
  {
    name: 'Mode',
    slug: 'mode',
    description: 'Mode et accessoires du quotidien.',
    image: '/img/tunique-1.jpg',
    alt: 'Tunique africaine aux couleurs vives',
    style: 'from-rose-50 to-orange-50',
  },
];

const featuredProducts = [
  { id: 14, name: 'Power bank 20000 mAh', price: 12000, image: '/img/powerbank-1.jpg', alt: 'Batterie externe Power bank' },
  { id: 15, name: 'Lampe solaire LED', price: 5500, image: '/img/lampe-solaire-1.jpg', alt: 'Lampe solaire LED' },
  { id: 1, name: 'Robe en pagne wax', price: 15000, image: '/img/robe-wax-1.jpg', alt: 'Robe en pagne wax' },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.7">
      <path d="M24 5c0 10-5 15-15 19 10 4 15 9 15 19 0-10 5-15 15-19C29 20 24 15 24 5Z" strokeLinejoin="round" />
      <path d="M39 5v10M34 10h10M9 4v7M5.5 7.5h7" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const term = searchTerm.trim();
    navigate(term ? `/shop?search=${encodeURIComponent(term)}` : '/shop');
  };

  return (
    <div className="home-page">
      <section aria-labelledby="home-title" className="relative isolate overflow-hidden rounded-b-[2rem] bg-white text-slate-950">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-950">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-600" />
              Une boutique pour tout le quotidien
            </p>
            <h1 id="home-title" className="max-w-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-slate-950">
              Tout ce qu'il vous faut, <span className="text-amber-800">au même endroit.</span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
              Électronique, maison, beauté, mode et essentiels du quotidien : trouvez vos produits à des prix en FCFA, avec une livraison pensée pour le Cameroun.
            </p>
            <form role="search" onSubmit={handleSearch} className="mt-7 flex max-w-xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:flex-row">
              <label htmlFor="home-product-search" className="sr-only">Rechercher un produit dans la boutique</label>
              <div className="relative min-w-0 flex-1">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" strokeLinecap="round" />
                </svg>
                <input
                  id="home-product-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Ex. téléphone, lampe, écouteurs"
                  className="min-h-12 w-full rounded-xl border-0 bg-white py-3 pl-12 pr-4 text-slate-950 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">
                Rechercher
              </button>
            </form>
            <nav aria-label="Raccourcis vers les catégories" className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-medium text-slate-600">Explorer :</span>
              <Link to="/shop?universe=tech" className="font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:text-blue-700">Tech</Link>
              <Link to="/shop?universe=maison" className="font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:text-blue-700">Maison</Link>
              <Link to="/shop?universe=beaute" className="font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:text-blue-700">Beauté</Link>
              <Link to="/shop?universe=mode" className="font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:text-blue-700">Mode</Link>
            </nav>
            <p className="mt-4 text-sm text-slate-600">Une boutique multi-catégories pour les besoins de tous les jours.</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-amber-200/70 to-blue-200/70 blur-sm" aria-hidden="true" />
            <div className="relative grid aspect-[5/4] grid-cols-[1.15fr_.85fr] grid-rows-2 gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-xl sm:gap-4 sm:p-4">
              <div className="relative row-span-2 overflow-hidden rounded-2xl bg-blue-50">
                <img src="/img/phone-1.jpg" alt="Téléphone pour les usages du quotidien" fetchpriority="high" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-950 shadow-sm sm:left-4 sm:top-4">Tech</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-amber-50">
                <img src="/img/lampe-solaire-1.jpg" alt="Lampe solaire LED pour la maison" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm sm:left-3 sm:top-3">Maison</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-rose-50">
                <img src="/img/tunique-1.jpg" alt="Vêtement dans le rayon mode" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm sm:left-3 sm:top-3">Mode</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl sm:flex lg:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-900" aria-hidden="true"><CheckIcon /></span>
              <span><span className="block text-sm font-bold">Un catalogue varié</span><span className="block text-xs text-slate-600">Tech, maison, beauté et plus</span></span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Les avantages ShopCam" className="mx-auto grid max-w-7xl gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:grid-cols-3">
        <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800" aria-hidden="true"><CheckIcon /></span>
          <div><h2 className="font-bold text-slate-900">Prix en FCFA</h2><p className="mt-0.5 text-sm text-slate-700">Clairs dès le départ.</p></div>
        </article>
        <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800" aria-hidden="true"><CheckIcon /></span>
          <div><h2 className="font-bold text-slate-900">Livraison locale</h2><p className="mt-0.5 text-sm text-slate-700">Ville, quartier et repère.</p></div>
        </article>
        <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800" aria-hidden="true"><CheckIcon /></span>
          <div><h2 className="font-bold text-slate-900">Paiement au choix</h2><p className="mt-0.5 text-sm text-slate-700">À la livraison ou Mobile Money.</p></div>
        </article>
      </section>

      <section aria-labelledby="categories-title" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16">
        <div className="mb-5 sm:mb-7 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-blue-800">À vous de choisir</p>
            <h2 id="categories-title" className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950">Explorez les univers</h2>
          </div>
          <Link to="/shop" className="inline-flex min-h-11 items-center text-sm sm:text-base font-semibold text-blue-800 underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-950 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800">
            Voir tous les produits <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?universe=${category.slug}`}
              className={`group overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${category.style} shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800 motion-reduce:transform-none`}
            >
              <div className="overflow-hidden bg-white/60">
                <img src={category.image} alt={category.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transform-none" />
              </div>
              <div className="flex items-end justify-between gap-2 sm:gap-3 p-3 sm:p-5">
                <div><h3 className="text-lg sm:text-xl font-extrabold text-slate-950">{category.name}</h3><p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-700">{category.description}</p></div>
                <span aria-hidden="true" className="flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white text-base sm:text-lg font-bold text-blue-900 shadow-sm transition group-hover:bg-blue-800 group-hover:text-white">→</span>
              </div>
            </Link>
          ))}
          <Link to="/shop?universe=beaute" className="group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800 motion-reduce:transform-none sm:col-span-2 lg:col-span-1">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[22px] border-white/50" aria-hidden="true" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-900 shadow-sm" aria-hidden="true"><SparkleIcon /></span>
            <div className="relative mt-6 sm:mt-10 flex items-end justify-between gap-2 sm:gap-3">
              <div><h3 className="text-lg sm:text-xl font-extrabold text-slate-950">Beauté</h3><p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-700">Des essentiels tout en douceur.</p></div>
              <span aria-hidden="true" className="flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white text-base sm:text-lg font-bold text-blue-900 shadow-sm transition group-hover:bg-blue-800 group-hover:text-white">→</span>
            </div>
          </Link>
        </div>
      </section>

      <section aria-labelledby="featured-title" className="bg-slate-100/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16">
          <div className="mb-5 sm:mb-7 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-blue-800">Quelques idées pour commencer</p>
              <h2 id="featured-title" className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950">À découvrir cette semaine</h2>
            </div>
            <Link to="/shop" className="inline-flex min-h-11 items-center text-sm sm:text-base font-semibold text-blue-800 underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-950 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800">
              Parcourir la boutique <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <Link to={`/produit/${product.id}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-blue-800">
                  <img src={product.image} alt={product.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transform-none" />
                  <div className="flex items-center justify-between gap-2 sm:gap-4 p-3 sm:p-5">
                    <div><h3 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-blue-800">{product.name}</h3><p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-700">{formatFCFA(product.price)}</p></div>
                    <span aria-hidden="true" className="flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base sm:text-lg font-bold text-blue-900">→</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-cta-title" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-blue-900 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 text-white lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-blue-200">Besoin d'un renseignement ?</p>
            <h2 id="contact-cta-title" className="mt-1.5 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-black">On vous accompagne dans votre choix.</h2>
            <p className="mt-1.5 sm:mt-2 leading-6 sm:leading-7 text-sm sm:text-base text-blue-100">Consultez les produits ou contactez notre équipe si vous avez une question.</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-11 sm:min-h-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold text-blue-950 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Nous contacter <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
