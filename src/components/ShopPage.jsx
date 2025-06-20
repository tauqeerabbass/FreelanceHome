const ShopPage = () => {
  // Generate 10 iPhone products for the 2x5 grid
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "iPhone 14",
    originalPrice: "7,920,000 GNF",
    salePrice: "6,336,000 GNF",
    rentalPrice: "352,000",
    badges: ["New", "Best Selling"],
    image: "/assets/asset10.jpg",
  }));

  return (
    <div className="w-[1920px] mb-[100px]">
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
            <div className="relative -top-[70px] -left-[400px] inline-block border rounded-2xl text-center border-[#3B82F6] w-[47px] h-[23px] text-white font-medium font-inter text-[17.3px] leading-[25.2px] tracking-normal">
              Ad
            </div>

            <h3 className="relative -top-[40px] -left-[440px] font-bold font-inter text-[45px] leading-[54.9px] tracking-normal w-[771px] h-[111px]">
              Need IT Support? ? Explore Our
              <br />
              Tech Services!
            </h3>

            <button className="relative top-[10px] -left-[435px] h-[51px] w-[212px] justify-center bg-[#3B82F6] hover:bg-[#3B82F6] text-white rounded-full font-medium transition-colors flex items-center">
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
      <div className="w-full bg-white min-h-screen">
        {/* Breadcrumb and Category Tabs on same line */}
        <div className="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
          {/* Breadcrumb - Left side */}
          <div className="flex items-center space-x-2 w-[114px] h-[19px] relative top-[20px] left-[200px]">
            <span className="font-normal font-satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60 hover:underline cursor-pointer">
              Home
            </span>
            <span className="mx-2 text-black text-opacity-60">{">"}</span>
            <span className="text-[#3B82F6] hover:underline cursor-pointer font-normal font-inter text-[16px] leading-[100%] tracking-normal">
              Shop
            </span>
          </div>

          {/* Category Tabs - Center */}
          <div className="flex space-x-8 w-[1400px] h-[40px] relative top-[15px] left-[300px]">
            <button className="py-4 px-2 text-[#15803D] font-normal font-inter text-[16px] leading-[24px] tracking-normal">
              Smartphones
            </button>
            <button className="py-4 px-2 font-normal font-inter text-[16px] leading-[24px] tracking-normal text-[#62646A]">
              Laptops
            </button>
            <button className="py-4 px-2 font-normal font-inter text-[16px] leading-[24px] tracking-normal text-[#74767E]">
              Desktops
            </button>
            <button className="py-4 px-2 font-normal font-inter text-[16px] leading-[24px] tracking-normal text-[#74767E]">
              Accessories
            </button>
            <button className="py-4 px-2 font-normal font-inter text-[16px] leading-[24px] tracking-normal text-[#74767E]">
              Components
            </button>
          </div>

          {/* Empty div for balance */}
          <div className="w-32"></div>
        </div>

        <div className="px-8 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-72 flex-shrink-0 relative top-[20px] left-[200px]">
              <div className="bg-white border border-black border-opacity-10 rounded-2xl p-6 w-[295px] h-[519px]">
                {/* Yellow Circle Icon */}
                {/* <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">I</span>
                </div>
              </div> */}

                <h3 className=" text-[#3B82F6] mb-6 font-bold font-satoshi text-[20px] leading-[100%] tracking-normal">
                  Filters
                </h3>

                {/* Filter Sections */}
                <div className="space-y-4">
                  {/* Expandable Filter Categories */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100">
                      <span className="text-black text-opacity-60 font-normal font-inter text-[16px] leading-[100%] tracking-normal">
                        Condition
                      </span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100">
                      <span className="text-black text-opacity-60 font-normal font-inter text-[16px] leading-[100%] tracking-normal">
                        Category
                      </span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100">
                      <span className="text-black text-opacity-60 font-normal font-inter text-[16px] leading-[100%] tracking-normal">
                        Brand
                      </span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100">
                      <span className="text-black text-opacity-60 font-normal font-inter text-[16px] leading-[100%] tracking-normal">
                        Availability
                      </span>
                      <span className="text-gray-400"></span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-100">
                      <span className="text-black text-opacity-60 font-normal font-inter text-[16px] leading-[100%] tracking-normal">
                        Ratings
                      </span>
                      <span className="text-gray-400"></span>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mt-6">
                    <h4 className="text-[#3B82F6] font-bold font-satoshi text-[20px] leading-[100%] tracking-normal mb-4">
                      Price
                    </h4>
                    <div className="space-y-4">
                      <div className="text-[#3B82F6] flex items-center justify-between font-medium font-satoshi text-[14px] leading-[100%] tracking-normal">
                        <span>$50</span>
                        <span>$200</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#3B82F6] h-2 rounded-full w-3/4 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-2 border-white shadow"></div>
                          </div>
                        </div>
                      </div>
                      <button className="w-[247px] h-[48px] bg-[#3B82F6] hover:bg-[#3B82F6] text-white py-2 px-4 rounded-[62px] font-medium font-satoshi text-[14px] leading-[100%] tracking-normal transition-colors">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative top-[10px] left-[220px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal text-black">
                  Smartphones
                </h2>
                <div className="relative right-[420px] flex items-center gap-5 w-[496px] h-[16px] ">
                  <span className="text-[#00000099] text-opacity-60 font-normal font-satoshi text-[16px] leading-[100%] tracking-normal">
                    Showing 1-10 of 100 Products
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-black text-opacity-60 font-normal font-satoshi text-[16px] leading-[100%] tracking-normal">
                      Sort by:
                    </span>
                    <select className="rounded px-3 py-1 font-medium font-satoshi text-[16px] leading-[100%] tracking-normal bg-white">
                      <option>Most Popular</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid - 2 columns */}
              <div className="flex flex-wrap gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-[536px] h-[540px] bg-white rounded-3xl relative shadow-sm border-2 border-black border-opacity-15"
                  >
                    {/* Product Image */}
                    <div className="flex justify-center mb-6 mt-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[506px] rounded-t-3xl h-[277px] object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="relative -left-[160px] font-medium font-poppins text-[36px] leading-[34px] tracking-normal text-black mb-3">
                        {product.name}
                      </h3>

                      {/* Badges */}
                      <div className="relative -left-[120px] flex justify-center flex-wrap gap-2 mb-4">
                        {product.badges.map((badge, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-lg border border-black border-opacity-15 font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal ${
                              badge === "New"
                                ? "bg-white text-[#0F3D3E99] text-opacity-60 w-[93px] h-[42px]"
                                : "bg-white text-[#0F3D3E99] text-opacity-60 w-[146px] h-[42px]"
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="relative -left-[50px] top-[10px] flex items-center justify-center space-x-2 mb-1">
                          <span className="text-black text-opacity-45 line-through font-medium font-poppins text-[24px] leading-[13px] tracking-normal">
                            {product.originalPrice}
                          </span>
                          <span className="font-medium font-poppins text-[32px] leading-[13px] tracking-normal text-black">
                            {product.salePrice}
                          </span>
                        </div>
                        <div className="relative -left-[120px] top-[45px] font-medium font-poppins text-[32px] leading-[13px] tracking-normal text-black">
                          <span className="font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal text-[#0F3D3E99] text-opacity-60">
                            Rent:
                          </span>{" "}
                          {product.rentalPrice}{" "}
                          <span className="text-[#0F3D3E99] text-opacity-60 font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal">
                            /month
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="relative left-[150px] -top-[10px] w-[193px] h-[46px] bg-[#15803D] hover:bg-[#15803D] text-white py-3 px-4 rounded-2xl transition-colors font-semibold font-poppins text-[20px] leading-[26px] tracking-normal">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination could be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
