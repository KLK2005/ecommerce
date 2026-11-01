import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          ShopCam
        </Link>

        <nav className="hidden md:flex gap-6 flex-1 justify-center">
          <Link to="/shop?universe=mode" className="hover:text-blue-600 font-medium transition">Mode</Link>
          <Link to="/shop?universe=maison" className="hover:text-blue-600 font-medium transition">Maison</Link>
          <Link to="/shop?universe=tech" className="hover:text-blue-600 font-medium transition">Tech</Link>
          <Link to="/shop?universe=beaute" className="hover:text-blue-600 font-medium transition">Beauté</Link>
        </nav>

        <div className="flex gap-4 items-center">
          <Link to="/favoris" className="relative text-2xl hover:text-red-600 transition">
            ❤️
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to={isAuthenticated ? "/compte" : "/connexion"} className="text-2xl hover:text-blue-600 transition">
            👤
          </Link>

          <Link to="/panier" className="relative text-2xl hover:text-blue-600 transition">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
