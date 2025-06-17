"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 19,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-30 left-20 w-20 h-20 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-32 w-4 h-4 bg-purple-500 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-4 h-4 bg-orange-400 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Save 20% Badge */}
        <div className="inline-flex items-center space-x-4 mb-8">
          <div className="bg-[#BEEACF] text-[#15803D] px-4 py-2 rounded-full text-sm font-medium font-inter text-[16.73px] leading-[23.4px] tracking-normal">
            Save 20%
          </div>
          <span className="text-[#15803D] font-inter text-[16.88px] leading-[23.4px] tracking-normal font-medium">
            Faster solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-inter text-[85px] leading-[97.75px] tracking-[-1px]">
          Shop. Book.{" "}
          <span className="relative inline-block">
            <span className="text-[#3B82F6] font-inter text-[73.71px] leading-[97.75px] tracking-[-1px]">
              Hire.
            </span>
            {/* Circular animation around "Hire" */}
            <div className="absolute inset-0 -m-4">
              <div className="w-full h-full border-2 border-blue-400 rounded-full animate-pulse opacity-60"></div>
            </div>
            <div className="absolute inset-0 -m-6">
              <div className="w-full h-full border border-blue-300 rounded-full animate-ping opacity-40 font-inter text-[79.02px] leading-[97.75px] tracking-[-1px] font-bold"></div>
            </div>
          </span>{" "}
          Rent. Transform.
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          - Your Tech Partner in{" "}
          <span className="bg-gradient-to-r from-[#FF0004] via-[#FFBB00] to-[#15803D] bg-clip-text text-transparent font-bold">
            Guinea
          </span>
        </h2>

        {/* Limited Time Offer */}
        <p className="text-[#6E727D] mb-8 font-inter text-[24px] leading-[30.6px] tracking-normal">
          Limited-Time Offer: Save 20% Until May 16, 2025!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Shop Smartphones →
          </button>
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Hire Freelancers →
          </button>
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Explore Tech Services →
          </button>
          <button className="w-[166px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Rent Devices →
          </button>
          <button className="w-[166px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Start Training →
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="text-center">
          <h3 className="font-bold text-[#161C2D] mb-2 font-inter text-[40px] leading-[97.75px] tracking-[-1px]">
            {timeLeft.days} day, {timeLeft.hours} hours remaining
          </h3>
          <p className="text-[#6E727D] font-inter text-[24px] leading-[30.6px] tracking-normal">
            from 05:55 PM CEST, May 14, 2025, to midnight May 16, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
