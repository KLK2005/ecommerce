import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const wishlistedProducts = productsData.filter((p) => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Votre liste de favoris est vide</h2>
        <p className="mb-8 text-gray-600">Ajoutez des articles en favoris en cliquant sur l'icône cœur des produits.</p>
        <Link
          to="/shop"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700"
        >
          Explorer la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Mes Favoris ({wishlistedProducts.length})</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {wishlistedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}