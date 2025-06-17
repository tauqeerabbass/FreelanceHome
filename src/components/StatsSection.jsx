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
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 relative overflow-hidden">
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
            {/* Main Professional Image - Fixed dimensions */}
            <div className="relative z-10">
              {!imageErrors.main ? (
                <img
                  src="/assets/asset17.jpg"
                  alt="Professional working"
                  className="rounded-2xl shadow-2xl object-cover"
                  style={{ width: "345px", height: "319px" }}
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

            {/* Floating UI Image */}
            <div className="absolute -top-4 -right-4 z-20">
              {!imageErrors.floating ? (
                <img
                  src="/assets/asset18.png"
                  alt="Floating UI"
                  className="rounded-2xl shadow-lg w-[150px]"
                  onError={handleFloatingImageError}
                />
              ) : (
                <div className="w-[150px] h-[100px] bg-white/20 backdrop-blur rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-white text-sm font-medium">UI Dashboard</div>
                </div>
              )}
            </div>

            {/* Document Preview Image */}
            <div className="absolute top-1/2 -left-8 z-20 transform -translate-y-1/2">
              {!imageErrors.document ? (
                <img
                  src="/assets/asset19.png"
                  alt="Document Preview"
                  className="rounded-lg shadow-lg w-[120px]"
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
              {/* Daily Active Users - Top Left */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
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
                  <div className="text-3xl font-bold">96327+</div>
                  <div className="text-blue-100">Daily Active Users</div>
                </div>
              </div>

              {/* Trusted by NGOs - Top Right */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
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
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-blue-100">Trusted by 20+ NGOs in Guinea for tech and training solutions.</div>
                </div>
              </div>

              {/* Freelancers - Bottom Left */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
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
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-blue-100">Freelancers in Conakry</div>
                </div>
              </div>

              {/* Security Badge - Bottom Right (No chat bubble) */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-white" />
                  {/* No user avatars for this section */}
                </div>
                <div>
                  <div className="text-2xl font-bold">Powered By</div>
                  <div className="text-3xl font-bold">TLS1.3</div>
                  <div className="text-blue-100 text-sm">Enterprise-grade security</div>
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
