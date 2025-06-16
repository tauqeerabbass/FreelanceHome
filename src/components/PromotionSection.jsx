const PromotionSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Mobile phones */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
             
                    <img src="../../assets/asset2.png" alt="Logo" className="w-20 h-50 relative rotate-12" />
                    
                    <img src="../../assets/asset4.png" alt="Logo" className="w-50 h-100" />
            </div>
          </div>

          {/* Center - Content */}
          <div className="text-center text-white">
            <p className="text-sm mb-4 opacity-80">Ad</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get 20% Off Smartphones &<br />
              Rentals – Visit Our Shop!
            </h2>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full transition-colors">
              Explore the Platform Now →
            </button>
          </div>
          
                    <img src="../../assets/asset3.png" alt="Logo" className="w-92 h-100" />

          {/* Right side - Tablet/Dashboard */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionSection
