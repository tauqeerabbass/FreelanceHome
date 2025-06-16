import { Shield, Users, Activity, Award } from "lucide-react"

const StatsSection = () => {
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
          <div className="relative">
            {/* Main Professional Image */}
            <div className="relative z-10">
              <div className="rounded-2xl shadow-2xl w-full max-w-md mx-auto aspect-[5/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                Professional Woman Working
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg z-20 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Illustrations</div>
                  <div className="text-xs text-gray-600">17 projects</div>
                  <div className="text-xs text-blue-500">View All</div>
                </div>
              </div>
            </div>

            {/* Chat Bubble */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg z-20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs">
                  U1
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
              </div>
            </div>

            {/* Document Preview */}
            <div className="absolute top-1/2 -left-8 bg-white rounded-lg p-3 shadow-lg z-20 transform -translate-y-1/2">
              <div className="space-y-2">
                <div className="w-16 h-2 bg-blue-500 rounded"></div>
                <div className="w-12 h-2 bg-gray-300 rounded"></div>
                <div className="w-14 h-2 bg-gray-300 rounded"></div>
                <div className="w-10 h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="text-white space-y-12">
            {/* Daily Active Users */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-8 h-8 text-white" />
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs">
                    U1
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold">96327+</div>
                <div className="text-blue-100">Daily Active Users</div>
              </div>
            </div>

            {/* Freelancers */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-white" />
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs">
                    U2
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold">100+</div>
                <div className="text-blue-100">Freelancers in Conakry</div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-white" />
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Powered By</div>
                <div className="text-3xl font-bold">TLS1.3</div>
                <div className="text-blue-100">Trusted by 20+ NGOs in Guinea for tech and training solutions.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
