"use client"

import { useState } from "react"
import { Shield, Users, Activity, Award } from "lucide-react"

const StatsSection = () => {
  const [imageErrors, setImageErrors] = useState({
    main: false,
    floating: false,
    document: false,
  })

  const handleMainImageError = () => {
    setImageErrors((prev) => ({ ...prev, main: true }))
  }

  const handleFloatingImageError = () => {
    setImageErrors((prev) => ({ ...prev, floating: true }))
  }

  const handleDocumentImageError = () => {
    setImageErrors((prev) => ({ ...prev, document: true }))
  }

  return (
    <section className="bg-gradient-to-br from-[#3B82F6] to-blue-600 py-20 relative overflow-hidden w-[1920px] h-[697.59px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Professional Image with UI Overlays */}
          <div className="relative flex justify-center">
            {/* Main Professional Image - Flipped horizontally */}
            <div
              className="absolute z-20"
              style={{
                top: "-100px", // adjust as you like
                left: "70px", // adjust as you like
              }}
            >
              {!imageErrors.main ? (
                <img
                  src="/assets/asset17.jpg"
                  alt="Professional working"
                  className="rounded-2xl shadow-2xl object-cover"
                  style={{
                    width: "345px",
                    height: "319px",
                    transform: "scaleX(-1)", // flip horizontally
                  }}
                  onError={handleMainImageError}
                />
              ) : (
                <div
                  className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
                  style={{ width: "345px", height: "319px" }}
                >
                  <div className="text-white text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">Professional Working</p>
                  </div>
                </div>
              )}

              {/* Chat Bubble - Positioned in the middle of the image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Image - positioned freely for your choice */}
            <div
              className="absolute z-20"
              style={{
                top: "-170px", // adjust as you like
                right: "90px", // adjust as you like
              }}
            >
              {!imageErrors.floating ? (
                <img
                  src="/assets/asset18.png"
                  alt="Floating UI"
                  className="rounded-2xl shadow-lg w-[153px] h-[186px]"
                  onError={handleFloatingImageError}
                />
              ) : (
                <div className="w-[150px] h-[100px] bg-white/20 backdrop-blur rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-white text-sm font-medium">UI Dashboard</div>
                </div>
              )}
            </div>

            {/* Document Preview Image - positioned freely for your choice */}
            <div
              className="absolute z-20"
              style={{
                top: "120px", // adjust as you like
                left: "30px", // adjust as you like
              }}
            >
              {!imageErrors.document ? (
                <img
                  src="/assets/asset19.png"
                  alt="Document Preview"
                  className="rounded-lg shadow-lg w-[137px] h-[136px]"
                  onError={handleDocumentImageError}
                />
              ) : (
                <div className="w-[120px] h-[80px] bg-white/20 backdrop-blur rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-white text-xs font-medium">Document</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Statistics in 2x2 Grid */}
          <div className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Daily Active Users */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <Activity className="w-8 h-8 text-white" />
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[36.59px] leading-[42px] tracking-normal">96327+</div>
                  <div className="font-medium font-inter text-[15.8px] leading-[23.8px] tracking-normal text-[#FFFFFF]">Daily Active Users</div>
                </div>
              </div>

              {/* Trusted by NGOs */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3  mt-[100px]">
                  <Award className="w-8 h-8 text-white" />
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[37.73px] leading-[42px] tracking-normal">20+</div>
                  <div className="font-medium font-inter text-[15.8px] leading-[23.8px] tracking-normal text-[#FFFFFF]">Trusted by 20+ NGOs in Guinea for tech and training solutions.</div>
                </div>
              </div>

              {/* Freelancers */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <Users className="w-8 h-8 text-white" />
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">J</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[36.91px] leading-[42px] tracking-normal">100+</div>
                  <div className="font-medium font-inter text-[16.07px] leading-[23.8px] tracking-normal text-[#FFFFFF]">Freelancers in Conakry</div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-medium font-inter text-[37.73px] leading-[42px] tracking-normal">Powered By TLS1.3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
