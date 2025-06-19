import { Search, ChevronDown } from "lucide-react";
import logo from "/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-[1430px] h-[110px] mt-[0.44px] ml-[245px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 -ml-[60px] mt-[10px]">
            <div className="w-[94.87px] h-[78px] bg-white rounded-full flex items-center justify-center">
              <img
                src={logo}
                alt="Icon"
                className="w-[94.87px] h-[78px] mt-[18.5px] -ml-[6px] rounded-full"
              />
            </div>
            <span className="text-[32px] font-inter leading-[100%] tracking-normal font-bold text-[#000000] w-[155px] h-[39px] mt-[37.5px] ml-[89px]">
              Freelance
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 w-[527.33px] h-[110px] ml-[70px]">
            <a
              href="#"
              className="text-[#3B82F6] w-[57.47px] mt-[37px] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#161C2D] w-[47px] mt-[37px] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-[#161C2D] w-[132px] mt-[37px] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Hire Freelancers
            </a>
            <a
              href="#"
              className="text-[#161C2D] w-[82px] mt-[37px] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Locations
            </a>
            <a
              href="#"
              className="text-[#161C2D] w-[123px] mt-[37px] hover:text-gray-900 font-medium transition-colors font-inter text-[17.16px]  leading-[25.2px] tracking-normal"
            >
              Tech Services
            </a>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-[#161C2D] w-[74.05px] mt-[37px] hover:text-gray-900 font-medium font-inter text-[17.16px] leading-[25.2px] tracking-normal">
                More
              </span>
              <ChevronDown className="w-4 h-4 text-[#161C2D] mt-[37px]" />
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 w-[379.69px] h-[51px] mt-[39.12px] ml-[150px]">
            <button className="ml-[68ppx] mt-[0.44px] px-4 py-2 bg-[#3B82F6] text-white h-[51px] w-[114px] rounded-full hover:bg-blue-50 transition-colors font-bold font-inter text-[15px] leading-[21px] tracking-normal">
              Login
            </button>
            <button className="px-4 py-2 bg-[#15803D] hover:bg-[#15803D] h-[51px] w-[125px] text-white rounded-full transition-colors font-bold font-inter text-[15px] leading-[21px] tracking-normal">
              Sign Up
            </button>
            <span className="text-[#161C2D] font-medium font-inter text-[20px] leading-[18px] tracking-normal">EN</span>
            <Search className="w-[39px] h-[39px] text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
