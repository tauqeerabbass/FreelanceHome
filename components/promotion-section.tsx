
import { Button } from "./ui/button"

export default function PromotionSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Mobile phones */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* iPhone */}
              <div className="w-48 h-96 bg-blue-900 rounded-3xl p-2 transform -rotate-12 relative z-10">
                <div className="w-full h-full bg-black rounded-2xl relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full"></div>
                  <div className="absolute top-16 left-4 right-4 bottom-4 bg-blue-100 rounded-xl"></div>
                </div>
              </div>

              {/* Samsung phone behind */}
              <div className="absolute -right-8 top-8 w-44 h-88 bg-gray-800 rounded-3xl p-2 transform rotate-6 z-0">
                <div className="w-full h-full bg-black rounded-2xl relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Content */}
          <div className="text-center text-white">
            <p className="text-sm mb-4 opacity-80">Ad</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get 20% Off Smartphones &<br />
              Rentals – Visit Our Shop!
            </h2>
            <Button
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full"
            >
              Explore the Platform Now →
            </Button>
          </div>

          {/* Right side - Tablet/Dashboard */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-60 bg-gray-100 rounded-2xl p-4 transform rotate-12 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl p-4 relative overflow-hidden">
                  {/* Dashboard mockup */}
                  <div className="flex items-center justify-between mb-4">
                    <img src="../../assets/asset3" alt="Logo" className="w-6 h-6" />
                  </div>

                  {/* Chart area */}
                  <div className="h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mb-3 relative">
                    <div className="absolute bottom-0 left-4 right-4 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-lg"></div>
                  </div>

                  {/* Credit card mockup */}
                  <div className="w-24 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg absolute bottom-4 right-4 p-2">
                    <div className="text-white text-xs">VISA</div>
                    <div className="text-white text-xs mt-1">****</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
