/* ShopCam — components/Avis.jsx
 * Rôle : Composant d’affichage des avis de démonstration associés à une fiche produit.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
// Quelques avis d'exemple (données fixes pour la démonstration)
const AVIS = [
  {
    id: 1,
    nom: "Aïcha M.",
    note: 5,
    date: "28 oct. 2026",
    texte: "Très belle qualité, livraison rapide à Douala !",
  },
  {
    id: 2,
    nom: "Brice T.",
    note: 4,
    date: "25 oct. 2026",
    texte: "Conforme à la photo, je recommande.",
  },
  {
    id: 3,
    nom: "Carine N.",
    note: 5,
    date: "20 oct. 2026",
    texte: "Rapport qualité-prix excellent, je rachèterai.",
  },
];

// Petit composant qui affiche les étoiles (ex : note 4 → ★★★★☆)
function Etoiles({ note }) {
  return (
    <span className="text-yellow-500">
      {"★".repeat(note)}
      {"☆".repeat(5 - note)}
    </span>
  );
}

export default function Avis({ rating, total }) {
  return (
    <section className="mt-10 border-t pt-6">
      <h2 className="text-xl font-bold">Avis clients</h2>
      <p className="mt-1 text-gray-600">
        <Etoiles note={Math.round(rating)} /> {rating}/5 · {total} avis
      </p>

      <div className="mt-6 space-y-4">
        {AVIS.map((a) => (
          <div key={a.id} className="border rounded-lg p-4">
            <div className="flex justify-between">
              <p className="font-semibold">{a.nom}</p>
              <p className="text-sm text-gray-400">{a.date}</p>
            </div>
            <Etoiles note={a.note} />
            <p className="mt-2 text-gray-700">{a.texte}</p>

          </div>
        ))}
      </div>
    </section>
  );
}
