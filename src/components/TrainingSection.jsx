const TrainingSection = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden w-[1920px] h-[510px]">
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
            <div className="w-[361px] h-[33px] ml-[400px] inline-block bg-[#3B82F6] text-white py-1 rounded-full mb-8 font-medium text-center items-center font-inter text-[17.72px] leading-[25.2px] tracking-normal">
              For Freelancers & Companies
            </div>

            <h2 className="w-[624px] h-[120px] -ml-[80px] font-bold font-inter text-[39.05px] leading-tight -tracking-[2px] mb-6">
              Grow Your Skills or Customize Training for Your Team
            </h2>

            <p className="w-[624px] h-[120px] -ml-[80px] -mt-7 text-[#BFBFBF] font-medium font-inter text-[24px] leading-[30.6px] tracking-normal mb-8">
              Request custom training for your company or new courses as a
              freelancer!
            </p>

            <button className="absolute bottom-0 -left-[50px] bg-[#15803D] hover:bg-[#15803D] w-[310px] h-[67px] text-white px-8 py-4 rounded-3xl font-semibold font-poppins text-[20px] leading-[26px] tracking-normal transition-colors">
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
                    <div className="text-gray-900 font-medium">
                      Training Available
                    </div>
                    <div className="text-gray-600 text-sm">
                      Custom courses ready
                    </div>
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
      <div className="absolute bottom-10 top-[180px] left-[1458px] w-[150px] h-[150px] opacity-20">
        <div className="w-full h-full border-2 border-white rounded-full"></div>
        

      <img
        src="/assets/play.png"
        alt=""
        className="ml-[70px] -mt-[90px] w-[17.5px] h-[20.02px]"
      />
      </div>
    </section>
  );
};

export default TrainingSection;
