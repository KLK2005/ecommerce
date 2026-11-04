import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <Header />
              
              <main className="flex-1 max-w-7xl w-full mx-auto px-4">
                <Routes>
                  <Route path="/produit/:id" element={<ProductDetail />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<div className="py-4">Shop</div>} />
                  <Route path="/produit/:id" element={<div className="py-4">ProductDetail</div>} />
                  <Route path="/panier" element={<div className="py-4">Cart</div>} />
                  <Route path="/favoris" element={<div className="py-4">Wishlist</div>} />
                  <Route path="/checkout" element={<div className="py-4">Checkout</div>} />
                  <Route path="/connexion" element={<div className="py-4">Login</div>} />
                  <Route path="/inscription" element={<div className="py-4">Register</div>} />
                  <Route path="/compte" element={<div className="py-4">Account</div>} />
                  <Route path="/about" element={<div className="py-4">About</div>} />
                  <Route path="/contact" element={<div className="py-4">Contact</div>} />
                  <Route path="*" element={<div className="py-4">404</div>} />
                </Routes>
              </main>
              
              <Footer />
            </div>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
