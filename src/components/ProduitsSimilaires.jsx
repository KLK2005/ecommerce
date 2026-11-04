/* ShopCam — components/ProduitsSimilaires.jsx
 * Rôle : Sélection de produits du même univers affichée sous une fiche produit.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { Link } from "react-router-dom";
import products from "../data/products.json";

export default function ProduitsSimilaires({ produit }) {
  // Produits du même univers, sauf le produit qu'on regarde, maximum 4
  const similaires = products
    .filter((p) => p.universe === produit.universe && p.id !== produit.id)
    .slice(0, 4);

  // Le titre change selon l'univers
  const titre =
    produit.universe === "mode" ? "Complétez le look" : "Vous aimerez aussi";

  if (similaires.length === 0) return null;

  return (
    <section className="mt-10 border-t pt-6">
      <h2 className="text-xl font-bold">{titre}</h2>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {similaires.map((p) => (
          <Link
            key={p.id}
            to={`/produit/${p.id}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-100">
              <img
                src={p.images[0]}
                alt={p.name}
                onError={(e) => (e.target.style.display = "none")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate">{p.name}</p>
              <p className="text-red-600 font-bold">
                {p.price.toLocaleString()} FCFA
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
