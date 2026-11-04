/* ShopCam — components/Filters.jsx
 * Rôle : Panneau de filtres du catalogue : univers, prix, couleur et note minimale.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
const UNIVERSES = [
  { value: 'mode', label: 'Mode' },
  { value: 'maison', label: 'Maison' },
  { value: 'tech', label: 'Tech' },
  { value: 'beaute', label: 'Beauté' },
];

export default function Filters({
  filters,
  colors,
  priceLimit,
  onChange,
  onReset,
}) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm" aria-label="Filtres du catalogue">
      <div className="mb-4 sm:mb-5 flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">Filtrer</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs sm:text-sm font-semibold text-blue-600 transition hover:text-blue-800"
        >
          Réinitialiser
        </button>
      </div>

      <fieldset className="mb-4 sm:mb-6">
        <legend className="mb-2 sm:mb-3 text-xs sm:text-sm font-bold text-gray-800">Univers</legend>
        <div className="space-y-2">
          {UNIVERSES.map((universe) => (
            <label key={universe.value} className="flex cursor-pointer items-center gap-2 text-xs sm:text-sm text-gray-600">
              <input
                type="radio"
                name="universe"
                value={universe.value}
                checked={filters.universe === universe.value}
                onChange={(event) => update('universe', event.target.value)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {universe.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mb-4 sm:mb-6">
        <label htmlFor="max-price" className="mb-2 block text-xs sm:text-sm font-bold text-gray-800">
          Prix maximum
        </label>
        <input
          id="max-price"
          type="range"
          min="0"
          max={priceLimit}
          step="500"
          value={filters.maxPrice}
          onChange={(event) => update('maxPrice', Number(event.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>0 FCFA</span>
          <span className="font-semibold text-blue-700">{filters.maxPrice.toLocaleString('fr-FR')} FCFA</span>
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <label htmlFor="catalogue-color" className="mb-2 block text-xs sm:text-sm font-bold text-gray-800">
          Couleur
        </label>
        <select
          id="catalogue-color"
          value={filters.color}
          onChange={(event) => update('color', event.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Toutes les couleurs</option>
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="catalogue-rating" className="mb-2 block text-xs sm:text-sm font-bold text-gray-800">
          Note minimale
        </label>
        <select
          id="catalogue-rating"
          value={filters.minRating}
          onChange={(event) => update('minRating', Number(event.target.value))}
          className="w-full rounded-lg border border-gray-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="0">Toutes les notes</option>
          <option value="4">4 étoiles et plus</option>
          <option value="3">3 étoiles et plus</option>
          <option value="2">2 étoiles et plus</option>
        </select>
      </div>
    </aside>
  );
}
