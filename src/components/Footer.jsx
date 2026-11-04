export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopCam</h3>
            <p className="text-gray-400">Votre boutique en ligne de confiance au Cameroun</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">À propos</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Nos garanties</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Paiement à la livraison</li>
              <li>✓ Mobile Money sécurisé</li>
              <li>✓ Retour sous 7 jours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ShopCam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
