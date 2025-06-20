"use client";

import { ChevronRight } from "lucide-react";

export default function ComputerRentalPage() {
  // Sample rental products data
  const rentalProducts = [
    {
      id: 1,
      name: "Basic Laptop",
      image: "/assets/asset16.jpg",
      hourlyPrice: "8,800 GNF",
      dailyPrice: "70,400 GNF",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Basic Laptop",
      image: "/assets/asset16.jpg",
      hourlyPrice: "8,800 GNF",
      dailyPrice: "70,400 GNF",
      isHighlighted: false,
    },
    {
      id: 3,
      name: "Basic Laptop",
      image: "/assets/asset16.jpg",
      hourlyPrice: "8,800 GNF",
      dailyPrice: "70,400 GNF",
      isHighlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[822px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/asset29.jpg"
            alt="Conakry cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Decorative images - replace these src with your image paths */}
        <img
          src="/assets/circle4.png" // replace with your image
          alt="Decoration 1"
          className="absolute top-[150px] right-[300px] w-[15px] h-[15px]"
        />
        <img
          src="/assets/circle2.png" // replace with your image
          alt="Decoration 2"
          className="absolute top-[165px] right-[315px] w-[20px] h-[20px]"
        />
        <img
          src="/assets/circle3.png" // replace with your image
          alt="Decoration 3"
          className="absolute top-[250px] left-[400px] w-[15px] h-[15px]"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-[100px]">
          <h1 className="text-white font-bold font-inter text-[79.02px] leading-[87.75px] -tracking-[1px]">
            Rent Computers for Your
            <br />
            Needs in Conakry
          </h1>
          <p className="text-[#DBDBDB] font-medium font-inter text-[32px] leading-[30.6px] tracking-normal mt-5">
            Hourly, Daily, or Weekly Rentals – Perfect for Short-Term Use
          </p>
        </div>

        {/* Floating Device Image (tablet) */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 z-10">
          <img
            src="/assets/asset22.png"
            alt="Tablet device"
            className="w-[646px] h-[646px] relative top-[230px]"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center text-sm">
              <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60 cursor-pointer">
                Home
              </span>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="font-normal font-inter text-[16px] leading-[100%] tracking-normal text-[#3B82F6] cursor-pointer">
                Computer Rentals
              </span>
            </div>
          </nav>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal text-black">
              Rental Products
            </h2>
            <div className="flex items-center space-x-6 relative -right-[170px]">
              <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">
                Showing 1-10 of 100 Products
              </span>
              <div className="flex items-center space-x-2">
                <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">
                  Sort by:
                </span>
                <select className="font-medium font-Satoshi text-[16px] leading-[100%] tracking-normal text-black rounded px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-evenly w-[1470px]">
            {rentalProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white w-[475px] h-[435px] border-2 border-black border-opacity-15 p-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  product.isHighlighted ? "ring-2 ring-white" : ""
                }`}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="relative -top-[15px] -left-[15px] font-medium font-poppins text-[36px] leading-[34px%] tracking-normal text-black mb-4">
                    {product.name}
                  </h3>

                  {/* Pricing */}
                  <div className="space-y-2 mb-6">
                    <div className="relative -top-[15px] -left-[15px] flex items-center">
                      <span className="font-medium font-poppins text-[28px] leading-[13px] tracking-normal text-black">
                        {product.hourlyPrice}
                      </span>
                      <span className="font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal text-[#0F3D3E99] text-opacity-60">
                        /hour
                      </span>
                    </div>
                    <div className="relative -top-[10px] -left-[15px] flex items-center">
                      <span className="font-medium font-poppins text-[28px] leading-[13px] tracking-normal text-black">
                        {product.dailyPrice}
                      </span>
                      <span className="font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal text-[#0F3D3E99] text-opacity-60">
                        /day
                      </span>
                    </div>
                  </div>

                  {/* Rent Button */}
                  <button className="relative bottom-[70px] left-[230px] w-[193px] h-[46px] bg-[#15803D] hover:bg-[#15803D] font-semibold font-poppins text-[20px] leading-[26px] text-white tracking-normal py-3 px-4 rounded-[15px] transition-colors">
                    Rent It Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
