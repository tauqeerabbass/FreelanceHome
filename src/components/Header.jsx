import { Search, ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center relative">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Freelance</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Hire Freelancers
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Locations
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Tech Services
            </a>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-700 hover:text-gray-900 font-medium">More</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              Sign Up
            </button>
            <span className="text-gray-700 font-medium">EN</span>
            <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
