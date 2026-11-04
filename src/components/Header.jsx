/* ShopCam — components/Header.jsx
 * Rôle : En-tête sticky partagé : logo, navigation principale, favoris, compte et panier.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

function Icon({ name }) {
  const paths = {
    heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z',
    user: 'M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    bag: 'M5 8h14l-1 13H6L5 8Zm3 0a4 4 0 0 1 8 0',
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
      <path d={paths[name]} />
    </svg>
  );
}

export default function Header() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated } = useAuth();
  const iconLink = 'relative inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl text-slate-800 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800';
  const navLink = 'inline-flex min-h-9 sm:min-h-11 items-center text-xs sm:text-sm md:text-base font-medium text-slate-800 transition hover:text-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 sm:gap-2.5 whitespace-nowrap rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800" aria-label="ShopCam, accueil">
          <img src="/logo-shopcam.svg" alt="" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          <span className="text-sm font-black tracking-tight text-blue-800 sm:text-lg lg:text-2xl">Shop<span className="text-amber-700">Cam</span></span>
        </Link>

        <nav aria-label="Navigation principale" className="order-3 flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 border-t border-gray-100 pt-2 text-xs sm:text-sm md:order-none md:w-auto md:flex-1 md:justify-center md:gap-3 md:border-0 md:pt-0 md:text-base lg:gap-5">
          <Link to="/shop" className={navLink}>Boutique</Link>
          <Link to="/shop?universe=tech" className={navLink}>Tech</Link>
          <Link to="/shop?universe=maison" className={navLink}>Maison</Link>
          <Link to="/shop?universe=beaute" className={navLink}>Beauté</Link>
          <Link to="/shop?universe=mode" className={navLink}>Mode</Link>
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2" role="group" aria-label="Raccourcis du compte et du panier">
          <Link
            to="/favoris"
            aria-label={wishlistCount ? `Favoris, ${wishlistCount} article${wishlistCount > 1 ? 's' : ''}` : 'Favoris'}
            className={iconLink}
          >
            <Icon name="heart" />
            {wishlistCount > 0 && <span aria-hidden="true" className="absolute right-0.5 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">{wishlistCount}</span>}
          </Link>

          <Link
            to={isAuthenticated ? '/compte' : '/connexion'}
            aria-label={isAuthenticated ? 'Mon compte' : 'Se connecter'}
            className={iconLink}
          >
            <Icon name="user" />
          </Link>

          <Link
            to="/panier"
            aria-label={cartCount ? `Panier, ${cartCount} article${cartCount > 1 ? 's' : ''}` : 'Panier'}
            className={iconLink}
          >
            <Icon name="bag" />
            {cartCount > 0 && <span aria-hidden="true" className="absolute right-0.5 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
