import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatFCFA } from '../utils/format';

function Stars({ rating }) {
  return (
    <span className="text-sm tracking-tight text-amber-400" aria-label={`Note : ${rating} sur 5`}>
      {'★★★★★'.split('').map((star, index) => (
        <span key={index} className={index < Math.round(rating) ? '' : 'text-gray-200'}>{star}</span>
      ))}
    </span>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [hovered, setHovered] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [added, setAdded] = useState(false);

  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1] || primaryImage;
  const image = hovered ? secondaryImage : primaryImage;

  const handleAdd = () => {
    addToCart(product, {
      size: product.sizes?.[0] || null,
      color: product.colors?.[0]?.name || null,
      qty: 1,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative aspect-square overflow-hidden bg-gray-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!imageFailed && image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 p-4 text-center text-sm font-semibold text-blue-900">
            {product.name}
          </div>
        )}
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            -{product.discount}%
          </span>
        )}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={isWishlisted(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg shadow transition hover:scale-105"
        >
          <span className={isWishlisted(product.id) ? 'text-red-500' : 'text-gray-400'}>♥</span>
        </button>
      </div>

      <div className="p-4">
        <Link to={`/produit/${product.id}`} className="block">
          <h3 className="line-clamp-2 min-h-[3rem] font-semibold text-gray-900 transition hover:text-blue-600">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviewsCount})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-red-600">{formatFCFA(product.price)}</span>
          {product.oldPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">{formatFCFA(product.oldPrice)}</span>
          )}
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {added ? 'Ajouté au panier' : 'Ajouter'}
        </button>
      </div>
    </article>
  );
}
