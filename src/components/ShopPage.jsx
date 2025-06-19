const ShopPage = () => {
  // Generate 10 iPhone products for the 2x5 grid
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "iPhone 14",
    originalPrice: "7,920,000 GNF",
    salePrice: "6,336,000 GNF",
    rentalPrice: "352,000",
    badges: ["New", "Best Selling"],
  }));

  return (
    <div className="w-[1920px]">
      {/* Top Section - Light Background */}
      <section
        className="relative bg-gray-100 overflow-hidden"
        style={{ height: "700px" }}
      >
        {/* Background decorative elements */}
        <img
          src="/assets/circle1.png"
          alt=""
          className="absolute top-[110px] left-[310px] w-[88px] h-[87px]"
        />

        <img
          src="/assets/circle2.png"
          alt=""
          className="absolute top-[80px] right-[370px] w-[20px] h-[20px]"
        />

        <img
          src="/assets/circle3.png"
          alt=""
          className="absolute top-[530px] left-[520px] w-[15px] h-[15px]"
        />

        <img
          src="/assets/circle4.png"
          alt=""
          className="absolute top-[500px] right-[250px] w-[15px] h-[15px]"
        />

        {/* Left Device - Samsung Phone */}
        <div className="absolute -left-56 top-[156px] z-20">
          <img
            src="/assets/asset4.png" // Add your Samsung phone image source here
            alt="Samsung Phone"
            className="transform rotate-[28deg] w-[803px] h-[803px]"
          />
        </div>

        {/* Right Devices - Laptops */}
        <div className="absolute -right-12 top-[290px]">
          <img
            src="/assets/asset22.png" // Add your laptops image source here
            alt="Laptops and Devices"
            className="w-[559.7px] h-[559px] transform rotate-6"
          />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-bold font-inter text-[79.02px] leading-[97.75px] tracking-[-1px] -mt-16 text-[#161C2D] mb-6">
            Discover Smartphones, Laptops,
            <br />
            Desktops, and Accessories
          </h1>

          <p className="text-[#6E727D] mb-8 font-medium font-inter text-[32px] leading-[30.6px] tracking-[-1px]">
            Sale Ends May 16, 2025 – Save 20%!
          </p>

          {/* Countdown Timer */}
          <div className="mb-2">
            <h2 className="font-bold font-inter text-[40px] leading-[97.75px] -tracking-[1px] text-[#161C2D]">
              1 day, 19 hours remaining
            </h2>
          </div>

          <p className="text-[#6E727D] font-medium font-inter text-[24px] leading-[30.6px] tracking-normal">
            from 05:55 PM CEST, May 14, 2025, to midnight May 16, 2025
          </p>
        </div>
      </section>

      {/* Bottom Section - Dark Background */}
      <section className="bg-[#021025] text-white" style={{ height: "459px" }}>
        <div className="h-full flex items-center justify-between px-16">
          {/* Left - IT Support Illustration */}
          <div className="flex-shrink-0">
            <img
              src="/assets/asset21.png" // Add your IT support illustration image source here
              alt="IT Support Team"
              className="w-[479px] h-[290px] absolute left-[312px] top-[884px]"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 max-w-lg">
            {/* Ad Badge */}
            <div className="absolute left-[937px] bottom-[-40px] inline-block border rounded-2xl text-center border-[#3B82F6] w-[47px] h-[23px] text-white font-medium font-inter text-[17.3px] leading-[25.2px] tracking-normal">
              Ad
            </div>

            <h3 className="font-bold font-inter text-[45px] leading-[54.9px] tracking-normal w-[771px] h-[111px] absolute left-[897px] -bottom-[200px]">
              Need IT Support? ? Explore Our
              <br />
              Tech Services!
            </h3>

            <button className="h-[51px] w-[212px] justify-center absolute left-[897px] -bottom-[284px] bg-[#3B82F6] hover:bg-[#3B82F6] text-white rounded-full font-medium transition-colors flex items-center">
              Get IT Support →
            </button>
          </div>
        </div>
        <img
          src="/assets/asset23.png" // Add your image source here
          alt="Decorative Bottom Image"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[auto] z-10 object-fit"
        />
      </section>

      {/* Product Shopping Section */}
      <section className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="px-8 py-4 border-b border-gray-100">
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Home
            </span>
            <span></span>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Shop
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-b border-gray-200">
          <div className="px-8">
            <div className="flex space-x-8">
              <button className="py-4 px-2 text-green-600 border-b-2 border-green-600 font-medium">
                Smartphones
              </button>
              <button className="py-4 px-2 text-gray-600 hover:text-gray-900">
                Laptops
              </button>
              <button className="py-4 px-2 text-gray-600 hover:text-gray-900">
                Desktops
              </button>
              <button className="py-4 px-2 text-gray-600 hover:text-gray-900">
                Tablets
              </button>
              <button className="py-4 px-2 text-gray-600 hover:text-gray-900">
                Components
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-72 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                  Filters
                </h3>

                {/* Yellow Circle Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">I</span>
                  </div>
                </div>

                {/* Filter Sections */}
                <div className="space-y-6">
                  {/* Expandable Filter Categories */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700">Category</span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700">Brand</span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700">Storage</span>
                      <span className="text-gray-400"></span>
                    </div>
                  </div>

                  {/* Ratings */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Ratings</h4>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <label
                          key={rating}
                          className="flex items-center cursor-pointer"
                        >
                          <input type="checkbox" className="mr-3 w-4 h-4" />
                          <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${
                                  i < rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Price</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">$50</span>
                        <span className="text-gray-600">$800</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-3/4 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Smartphones
                </h2>
                <div className="flex items-center space-x-6">
                  <span className="text-gray-600 text-sm">
                    Showing 1-10 of 100 Products
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Sort by:</span>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white">
                      <option>Most Popular</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid - 2 columns, 5 rows */}
              <div className="grid grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 relative shadow-sm"
                  >
                    {/* User Avatar with Yellow Circle */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                        <img
                          src="" // Add user avatar image source here
                          alt="User"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      </div>
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">I</span>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="flex justify-center mb-6 mt-4">
                      <img
                        src="" // Add iPhone image source here
                        alt={product.name}
                        className="w-32 h-40 object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>

                      {/* Badges */}
                      <div className="flex justify-center space-x-2 mb-4">
                        {product.badges.map((badge, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              badge === "New"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-1">
                          <span className="text-gray-600 line-through text-sm">
                            {product.originalPrice}
                          </span>
                          <span className="text-xl font-bold text-gray-900">
                            {product.salePrice}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Rent:</span>{" "}
                          {product.rentalPrice}{" "}
                          <span className="text-gray-600">/month</span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
