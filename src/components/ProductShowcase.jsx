const products = [
  {
    id: 1,
    name: "iPhone 14",
    image: "../assets/asset7.jpg",
    badges: ["New", "Best Selling"],
    originalPrice: "7,920,000 GNF",
    salePrice: "6,336,000 GNF",
    usdPrice: "$720",
    originalUsd: "$900",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    image: "../assets/asset16.jpg",
    badges: ["New", "Best Selling"],
    originalPrice: "13,200,000 GNF",
    salePrice: "10,560,000 GNF",
    usdPrice: "$1,200",
    originalUsd: "$1,500",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    image: "../assets/asset9.jpg",
    badges: ["Used"],
    originalPrice: "6,160,000 GNF",
    salePrice: "4,928,000 GNF",
    usdPrice: "$560",
    originalUsd: "$700",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500 text-white px-[42px] py-2 rounded-full w-[170px] h-[33px] font-medium mb-6 font-inter text-[17.72px] leading-[25.2px] tracking-normal">
            For Buyers
          </div>
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="w-[709px] h-[93px] font-inter text-[39.05px] leading-[50.4px] -tracking-[2px] font-bold text-gray-900 -mt-3">
              Shop Smartphones, Laptops & More –
            </h2>
            <h3 className="w-[709px] h-[93px] font-inter text-[39.05px] leading-[50.4px] -tracking-[2px] font-bold text-red-600 -mt-10">
              Sale Ends Soon!
            </h3>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-[506px] w-full bg-white border border-[#e0e0e0] rounded-[20px] shadow-md overflow-hidden flex flex-col mx-auto"
            >
              {/* Product Image */}
              <div className="w-full h-[277px] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-[277px] object-cover rounded-t-[30px] top-[16px] left-[15px]"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col gap-3 flex-1 w-[536px]">
                <h4 className=" text-[#000000] font-medium font-poppins text-[36px] leading-[34px] tracking-normal">
                  {product.name}
                </h4>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 text-sm rounded-lg items-center text-center font-medium ${
                        badge === "New"
                          ? "bg-gray-100 text-[#0F3D3E99] text-opacity-65 border border-[#00000026] border-opacity-15 w-[93px] h-[42px] left-[27px]"
                          : badge === "Best Selling"
                          ? "bg-gray-100 text-[#0F3D3E99] text-opacity-65 border border-[#00000026] border-opacity-15 w-[126px] h-[42px] left-[27px] font-poppins font-normal text-[18px] leading-[19.5px] tracking-normal"
                          : "bg-gray-100 text-[#0F3D3E99] text-opacity-65 border border-[#00000026] border-opacity-15 w-[126px] h-[42px] left-[27px] font-poppins font-normal text-[18px] leading-[19.5px] tracking-normal"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF00049C] line-through font-medium font-poppins text-[24px] leading-[13px] tracking-normal">
                      {product.originalPrice}
                    </span>
                    <span className="text-[#15803D] font-medium font-poppins text-[32px] leading-[13px] tracking-normal">
                      {product.salePrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-8">
                    <span className="text-[#FF00049C] line-through font-medium font-poppins text-[24px] leading-[13px] tracking-normal">
                      {product.originalUsd}
                    </span>
                    <span className="text-[#15803D] font-medium font-poppins text-[32px] leading-[13px] tracking-normal">
                      {product.usdPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="relative z-50 bottom-10 left-40 w-[193px] h-[46px] bg-[#15803D] hover:bg-[#15803D] text-white font-poppins font-semibold text-[20px] leading-[26px] tracking-normal py-2 px-4 rounded-2xl transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
