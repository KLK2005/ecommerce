/* ShopCam — App.jsx
 * Rôle : Point d’entrée fonctionnel de l’interface : providers globaux, routeur et routes publiques.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';
import Home from './pages/Home';

function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Page introuvable</h1>
      <p className="mt-3 text-gray-600">Cette adresse ne correspond à aucune page ShopCam.</p>
      <Link to="/" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
        Retour à l’accueil
      </Link>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div className="flex min-h-screen flex-col bg-white">
                <a href="#main-content" className="skip-link">Passer au contenu principal</a>
                <Header />
                <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-7xl flex-1 px-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/produit/:id" element={<ProductDetail />} />
                    <Route path="/panier" element={<Cart />} />
                    <Route path="/favoris" element={<Wishlist />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/connexion" element={<Login />} />
                    <Route path="/inscription" element={<Register />} />
                    <Route path="/compte" element={<Account />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
