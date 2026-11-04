/* ShopCam — pages/ProductDetail.jsx
 * Rôle : Fiche produit : galerie, variantes, tailles, caractéristiques, avis et panier.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import ProduitsSimilaires from "../components/ProduitsSimilaires";
import Avis from "../components/Avis";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

// Tableau des tailles (on affiche seulement les tailles du produit)
const TABLEAU_TAILLES = [
  { taille: "XS", poitrine: "80-83 cm" },
  { taille: "S", poitrine: "84-88 cm" },
  { taille: "M", poitrine: "89-93 cm" },
  { taille: "L", poitrine: "94-98 cm" },
  { taille: "XL", poitrine: "99-103 cm" },
  { taille: "XXL", poitrine: "104-108 cm" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [imageIndex, setImageIndex] = useState(0);
  const [couleur, setCouleur] = useState(null);
  const [taille, setTaille] = useState(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [erreur, setErreur] = useState("");
  useEffect(() => {
  setImageIndex(0);
  setCouleur(null);
  setTaille(null);
  setImageFailed(false);
  setErreur("");
  window.scrollTo(0, 0);
}, [id]);

  const produit = products.find((p) => p.id === Number(id));
  if (!produit) return <p className="p-6 sm:p-10 text-center text-sm sm:text-base">Produit introuvable</p>;

  const estMode = produit.universe === "mode";
  const aDesTailles = produit.sizes.length > 0;
  // Si une couleur est choisie, on affiche son image, sinon celle de la galerie
  const imagePrincipale = couleur ? couleur.image : produit.images[imageIndex];

  function ajouter() {
    if (aDesTailles && !taille) {
      setErreur("Choisis une taille avant d'ajouter au panier");
      return;
    }
    setErreur("");
    addToCart(produit, { size: taille, color: couleur?.name });
  }

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 max-w-6xl mx-auto">
      {/* ----- PARTIE GAUCHE : galerie ----- */}
      <div>
        <div className="overflow-hidden rounded-lg sm:rounded-xl bg-gray-100">
          {imageFailed ? (
            <div className="flex h-60 sm:h-72 md:h-96 flex-col items-center justify-center gap-4 bg-gray-100 p-4 sm:p-6 text-center">
              <img src="/img/placeholder.svg" alt="" className="h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40 object-contain" />
              <span className="font-medium text-xs sm:text-sm text-gray-600">{produit.name}</span>
            </div>
          ) : (
            <img
              src={imagePrincipale || "/img/placeholder.svg"}
              alt={produit.name}
              onError={() => setImageFailed(true)}
              className="w-full h-60 sm:h-72 md:h-96 object-cover transition-transform duration-300 hover:scale-150 cursor-zoom-in"
            />
          )}
        </div>
        <div className="flex gap-2 sm:gap-3 mt-3 overflow-x-auto">
          {produit.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onError={(event) => { event.currentTarget.src = "/img/placeholder.svg"; }}
              onClick={() => {
                setCouleur(null);
                setImageIndex(i);
              }}
              className="h-14 sm:h-16 md:h-20 w-14 sm:w-16 md:w-20 object-cover rounded-lg cursor-pointer border-2 bg-gray-100 hover:border-black flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* ----- PARTIE DROITE : informations ----- */}
      <div className="py-2 sm:py-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{produit.name}</h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          ⭐ {produit.rating} ({produit.reviewsCount} avis)
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
          <span className="text-lg sm:text-2xl font-bold text-red-600">
            {produit.price.toLocaleString()} FCFA
          </span>
          <span className="line-through text-xs sm:text-sm text-gray-400">
            {produit.oldPrice.toLocaleString()} FCFA
          </span>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            -{produit.discount}%
          </span>
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600">{produit.description}</p>

        {/* Mode : couleurs, tailles, tableau des tailles */}
        {estMode && (
          <>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold">Couleur : {couleur?.name || "—"}</p>
            <div className="flex gap-2 sm:gap-3 mt-2">
              {produit.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setCouleur(c)}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border-2 ${
                    couleur?.name === c.name ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            {aDesTailles && (
              <>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold">Taille : {taille || "—"}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                  {produit.sizes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTaille(t)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded ${
                        taille === t ? "bg-black text-white" : "bg-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border min-w-max">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2">Taille</th>
                        <th className="p-2">Tour de poitrine</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLEAU_TAILLES.filter((l) =>
                        produit.sizes.includes(l.taille)
                      ).map((l) => (
                        <tr key={l.taille} className="border-t">
                          <td className="p-2">{l.taille}</td>
                          <td className="p-2">{l.poitrine}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}

        {/* Tech / Maison / Beauté : caractéristiques */}
        {produit.specs && (
          <>
            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold">Caractéristiques</h2>
            <ul className="mt-2 list-disc ml-5 text-xs sm:text-sm text-gray-600">
              {Object.entries(produit.specs).map(([nom, valeur]) => (
                <li key={nom}>
                  {nom} : {valeur}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Commun : vendeur et stock */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Vendeur : {produit.seller}</p>
        <p className={`text-xs sm:text-sm ${produit.stock > 0 ? "text-green-600" : "text-red-600"}`}>
          {produit.stock > 0 ? `En stock (${produit.stock})` : "Rupture de stock"}
        </p>

        {erreur && <p className="mt-4 text-xs sm:text-sm text-red-600">{erreur}</p>}

        {/* Boutons */}
        <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
          <button
            onClick={ajouter}
            disabled={produit.stock === 0}
            className="flex-1 bg-black text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-800 disabled:bg-gray-400"
          >
            Ajouter au panier
          </button>
          <button
            onClick={() => toggleWishlist(produit.id)}
            className="px-3 sm:px-5 border rounded-lg text-xl sm:text-2xl"
          >
            {isWishlisted(produit.id) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="md:col-span-2">
        <Avis rating={produit.rating} total={produit.reviewsCount} />
        <ProduitsSimilaires produit={produit} />
      </div>
    </div>
  );
}
