/* ShopCam — pages/Shop.jsx
 * Rôle : Catalogue : lecture des paramètres URL, filtrage, tri et rendu des cartes produit.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/products.json';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const SORT_OPTIONS = [
  { value: 'newest', label: 'Nouveautés' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Mieux notés' },
];

const getPriceLimit = (items) => Math.max(...items.map((product) => product.price), 0);

export default function Shop() {
  const [searchParams] = useSearchParams();
  const priceLimit = getPriceLimit(products);
  const initialUniverse = searchParams.get('universe') || '';
  const initialQuery = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState('newest');
  const [filters, setFilters] = useState({
    universe: initialUniverse,
    maxPrice: priceLimit,
    color: '',
    minRating: 0,
  });

  useEffect(() => {
    const universe = searchParams.get('universe') || '';
    const nextQuery = searchParams.get('search') || '';
    setFilters((current) => current.universe === universe ? current : { ...current, universe });
    setQuery((current) => current === nextQuery ? current : nextQuery);
  }, [searchParams]);

  const colors = useMemo(() => (
    [...new Set(products.flatMap((product) => (product.colors || []).map((color) => color.name)))]
      .sort((a, b) => a.localeCompare(b, 'fr'))
  ), []);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('fr');
    const filtered = products.filter((product) => {
      const matchesQuery = !normalizedQuery || product.name.toLocaleLowerCase('fr').includes(normalizedQuery);
      const matchesUniverse = !filters.universe || product.universe === filters.universe;
      const matchesPrice = product.price <= filters.maxPrice;
      const matchesColor = !filters.color || (product.colors || []).some((color) => color.name === filters.color);
      const matchesRating = product.rating >= filters.minRating;
      return matchesQuery && matchesUniverse && matchesPrice && matchesColor && matchesRating;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [filters, query, sort]);

  const resetAll = () => {
    setQuery('');
    setSort('newest');
    setFilters({ universe: '', maxPrice: priceLimit, color: '', minRating: 0 });
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-600">ShopCam</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">La boutique</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Trouvez vos produits préférés au meilleur prix.</p>
        </div>

      <div className="mb-5 sm:mb-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <Filters
            filters={filters}
            colors={colors}
            priceLimit={priceLimit}
            onChange={setFilters}
            onReset={resetAll}
          />
        </div>

        <div>
          <div className="mb-5 flex flex-col gap-2 sm:gap-3 border-b border-gray-200 pb-3 sm:pb-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-bold text-gray-900">{visibleProducts.length}</span> produit{visibleProducts.length > 1 ? 's' : ''}
            </p>
            <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-600" htmlFor="catalogue-sort">
              <span className="whitespace-nowrap">Trier par</span>
              <select
                id="catalogue-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                {SORT_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white px-4 sm:px-6 py-12 sm:py-16 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Aucun résultat</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Essayez de modifier votre recherche ou vos filtres.</p>
              <button
                type="button"
                onClick={resetAll}
                className="mt-4 sm:mt-5 rounded-lg bg-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
