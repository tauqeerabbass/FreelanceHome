const ProductDescription = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white mb-4">
      {/* Breadcrumb */}
      <nav className="text-black font-normal font-satoshi text-[16px] tracking-normal leading-[100%] mb-6 w-[220px] h-[19px] text-opacity-60">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>Shop</span>
        <span className="mx-2">{">"}</span>
        <span className="text-[#3B82F6]">iPhone 14</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Product Details */}
        <div className="space-y-8">
          {/* Product Title */}
          <div>
            <h1 className="font-bold font-inter text-[32px] tracking-normal text-black leading-[100%] mb-1">
              iPhone 14
            </h1>
            <p className="text-black font-normal font-inter text-[16px] tracking-normal leading-[100%] mt-2">
              Smartphone
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="font-bold font-inter text-[28px] leading-[100%] tracking-normal text-gray-900 mb-4">
              Specifications
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium font-inter text-[24px] tracking-normal leading-[100%] text-black mb-2">
                  General
                </h3>
                <div className="font-medium font-inter text-[16px] tracking-normal leading-[100%] text-black space-y-1">
                  <p>
                    <span className="font-medium">Model:</span> iPhone 14
                  </p>
                  <p>
                    <span className="font-medium">Release Date:</span> September
                    16, 2022
                  </p>
                  <p>
                    <span className="font-medium">Chip:</span> A15
                  </p>
                  <p>
                    <span className="font-medium">Operating System:</span> iOS
                    16 (upgradable to the latest iOS version)
                  </p>
                  <p>
                    <span className="font-medium">Colors Available:</span>{" "}
                    Midnight, Starlight, Blue, Purple, (PRODUCT)RED, Yellow
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium font-inter text-[24px] tracking-normal leading-[100%] text-black mb-4 mt-6">
                  Body & Design
                </h3>
                <div className="font-medium font-inter text-[16px] tracking-normal leading-[100%] text-black space-y-1">
                  <p>
                    <span className="font-medium">Dimensions:</span> 146.7 ×
                    71.5 × 7.8 mm (5.78 × 2.81 × 0.31 in)
                  </p>
                  <p>
                    <span className="font-medium">Weight:</span> 172g (6.07 oz)
                  </p>
                  <p>
                    <span className="font-medium">Build:</span> Aluminum frame,
                    Ceramic Shield front, Glass back
                  </p>
                  <p>
                    <span className="font-medium">
                      Water & Dust Resistance:
                    </span>{" "}
                    IP68 certified (up to 6 meters for 30 minutes)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h2 className="font-bold font-inter text-[28px] tracking-normal leading-[100%] text-black mb-4">
              Availability
            </h2>
            <div className="flex gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#15803D] text-white px-3 py-1 rounded-xl font-medium font-inter text-[16px] tracking-normal leading-[30.6px] w-[114px] h-[48px]">
                In Stock
              </span>
              <span className="mt-3 flex items-center justify-center bg-[#15803D] text-white px-3 py-1 rounded-xl font-medium font-inter text-[16px] tracking-normal leading-[30.6px]  w-[157px] h-[48px]">
                KYC Verified
              </span>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="font-bold font-inter text-[28px] tracking-normal leading-[100%] text-black mb-5 -mt-1">
              Reviews
            </h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-[#DCECE2] p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/asset24.jpg"
                      alt="Emily Lewis"
                      className="w-10 h-10 rounded-full bg-gray-300"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="font-semibold font-inter text-[20px] tracking-normal leading-[18px] text-[#222325]">
                            Emily Lewis
                          </p>
                          <p className="font-normal font-inter text-[16px] tracking-normal leading-[18px] text-[#222325] mt-1">
                            Conakry
                          </p>
                        </div>
                        <div className="flex text-[#CE881D] w-[109px] h-[21px] -mt-8 -mr-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-[21px] h-[21px] fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="font-normal font-inter text-[20px] tracking-normal leading-[21px] text-black italic -ml-[50px] mt-4">
                        Great work, delivered on time!
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Image and Purchase */}
        <div className="space-y-6">
          {/* Product Image */}
          <div className="bg-[#DCECE2] w-[850px] h-[532px] rounded-2xl p-8 aspect-square flex items-center justify-center">
            <img
              src="/assets/asset10.jpg"
              alt="iPhone 14"
              className="w-full h-full object-contain -mt-16"
            />
          </div>

          {/* Price and Buy Button */}
          <div className="space-y-4">
            <div className="font-bold font-inter text-[28px] tracking-normal text-black absolute bottom-[250px] left-[1010px]">
              1,000,000 GNF
            </div>
            <button className="rounded-full absolute bottom-[240px] right-[125px] bg-[#3B82F6] hover:bg-[#3B82F6] w-[146px] h-[51px] text-white font-semibold py-3 px-6 flex items-center justify-center gap-2 transition-colors">
              Buy Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
