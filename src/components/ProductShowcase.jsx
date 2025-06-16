const products = [
  {
    id: 1,
    name: "iPhone 14",
    badges: ["New", "Best Selling"],
    originalPrice: "7,920,000 GNF",
    salePrice: "6,336,000 GNF",
    usdPrice: "$720",
    originalUsd: "$900",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    badges: ["New", "Best Selling"],
    originalPrice: "13,200,000 GNF",
    salePrice: "10,560,000 GNF",
    usdPrice: "$1,200",
    originalUsd: "$1,500",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    badges: ["Used"],
    originalPrice: "6,160,000 GNF",
    salePrice: "4,928,000 GNF",
    usdPrice: "$560",
    originalUsd: "$700",
  },
]

const ProductShowcase = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="bg-white text-blue-500 px-2 py-1 rounded text-xs font-bold mr-2">1920 × 1853</span>
            For Buyers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Shop Smartphones, Laptops & More –</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-red-600">Sale Ends Soon!</h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {/* Product Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">{product.name}</span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h4>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        badge === "New"
                          ? "bg-blue-100 text-blue-800"
                          : badge === "Best Selling"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 line-through text-lg">{product.originalPrice}</span>
                    <span className="text-green-600 font-bold text-2xl">{product.salePrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 line-through">{product.originalUsd}</span>
                    <span className="text-gray-900 font-semibold text-xl">{product.usdPrice}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
