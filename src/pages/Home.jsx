export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bienvenue sur ShopCam
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Découvrez Mode, Maison, Tech et Beauté à des prix imbattables
          </p>
          <a 
            href="/shop" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            Découvrir la boutique
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Catégories tendance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mode', 'Maison', 'Tech', 'Beauté'].map(category => (
              <a
                key={category}
                href={`/shop?universe=${category.toLowerCase()}`}
                className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 text-center rounded-lg cursor-pointer hover:shadow-lg transition transform hover:scale-105"
              >
                <p className="font-bold text-lg text-blue-900">
                  {category}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
