import { Search, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-[94.87px] h-[78px] bg-white rounded-full flex items-center justify-center">
              <img
                src={logo}
                alt="Icon"
                className="w-[94.87px] h-[78px] rounded-full"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 w-[155px] h-[39px]">
              Freelance
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-[#161C2D] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#161C2D] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-[#161C2D] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Hire Freelancers
            </a>
            <a
              href="#"
              className="text-[#161C2D] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Locations
            </a>
            <a
              href="#"
              className="text-[#161C2D] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Tech Services
            </a>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-[#161C2D] hover:text-gray-900 font-medium font-inter text-[17.16px] leading-[25.2px] tracking-normal">
                More
              </span>
              <ChevronDown className="w-4 h-4 text-[#161C2D]" />
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#3B82F6] text-white h-[51px] w-[114px] rounded-full hover:bg-blue-50 transition-colors font-bold font-inter text-[15px] leading-[21px] tracking-normal">
              Login
            </button>
            <button className="px-4 py-2 bg-[#15803D] hover:bg-[#15803D] h-[51px] w-[125px] text-white rounded-full transition-colors font-bold font-inter text-[15px] leading-[21px] tracking-normal">
              Sign Up
            </button>
            <span className="text-gray-700 font-medium font-inter text-[20px] leading-[18px] tracking-normal">EN</span>
            <Search className="w-[28.42px] h-[28.42px] text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
