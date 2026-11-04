/* ShopCam — components/SearchBar.jsx
 * Rôle : Champ de recherche contrôlé utilisé dans le catalogue.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
export default function SearchBar({ value, onChange }) {
  return (
    <label className="block" htmlFor="catalogue-search">
      <span className="sr-only">Rechercher un produit</span>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400" aria-hidden="true">
          ⌕
        </span>
        <input
          id="catalogue-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Rechercher un produit..."
          className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </label>
  );
}
