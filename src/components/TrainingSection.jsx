const TrainingSection = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/assets/asset14.png')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              For Freelancers & Companies
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Grow Your Skills or Customize Training for Your Team
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Request custom training for your company or new courses as a freelancer!
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
              START LEARNING NOW →
            </button>
          </div>

          {/* Right Side - Chat Bubble */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Chat Bubble */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm">
                <div className="flex items-center space-x-3">
                  {/* Profile Images */}
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img
                        src="/placeholder.svg?height=48&width=48&text=User1"
                        alt="User 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-yellow-400 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">!</span>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1">
                    <div className="text-gray-900 font-medium">Training Available</div>
                    <div className="text-gray-600 text-sm">Custom courses ready</div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble Tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20">
        <div className="w-full h-full border-2 border-white rounded-full"></div>
      </div>
    </section>
  )
}

export default TrainingSection
