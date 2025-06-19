"use client";

import { useState, useEffect } from "react";
import circle from "/assets/circle.png";

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
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <img
        src="/assets/circle1.png"
        alt=""
        className="absolute top-[110px] left-[370px] w-[88px] h-[87px]"
      />

      <img
        src="/assets/circle2.png"
        alt=""
        className="absolute top-[80px] right-[250px] w-[20px] h-[20px]"
      />

      <img
        src="/assets/circle3.png"
        alt=""
        className="absolute top-[470px] left-[450px] w-[15px] h-[15px]"
      />

      <img
        src="/assets/circle4.png"
        alt=""
        className="absolute top-[500px] right-[250px] w-[15px] h-[15px]"
      />

      <div className="max-w-7xl mx-auto text-center relative">
        {/* Save 20% Badge */}
        <div className="inline-flex items-center">
          <div className="bg-[#BEEACF] text-[#15803D] w-[108.25px] h-[33.39px] mt-[95.06px] ml-[250px] rounded-full font-medium font-inter text-[16.73px] leading-[23.4px] tracking-normal content-center">
            Save 20%
          </div>
          <span className="text-[#15803D] font-inter text-[16.88px] leading-[23.4px] tracking-normal font-medium w-[133.62px] h-[18px] mt-[90.06px] ">
            Faster solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-[#161C2D] font-inter text-[85px] leading-[97.75px] -tracking-[1px] w-[1350px] ml-[90px] mt-[25px]">
          Shop. Book.{" "}
          <span className="relative inline-block">
            <span className="text-[#3B82F6] font-inter text-[73.71px] leading-[97.75px] -tracking-[1px]">
              <img
                src={circle}
                className="absolute z-50 h-[130px] w-[229px] -top-4 object-fill"
              />
              Hire.
            </span>
            {/* Circular animation around "Hire" */}
          </span>{" "}
          Rent. Transform.
        </h1>

        <h2 className="text-[#161C2D] font-bold w-[1482px] h-[195px] font-inter text-[79.02px] leading-[97.75px] -tracking-[1px]">
          - Your Tech Partner in{" "}
          <span className="bg-gradient-to-r from-[#FF0004] via-[#FFBB00] to-[#15803D] bg-clip-text text-transparent font-bold">
            Guinea
          </span>
        </h2>

        {/* Limited Time Offer */}
        <p className="text-[#6E727D] font-inter text-[24px] leading-[30.6px] tracking-normal w-[633px] h-[37px] ml-[470px] -mt-[90px]">
          Limited-Time Offer: Save 20% Until May 16, 2025!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-evenly w-[1080px] h-[65px] mt-[50px] ml-[200px]">
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Shop Smartphones →
          </button>
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Hire Freelancers →
          </button>
          <button className="w-[211.45px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Explore Tech Services →
          </button>
          <button className="w-[166px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Rent Devices →
          </button>
          <button className="w-[166px] h-[55px] bg-[#15803D] hover:bg-green-700 text-white rounded-full transition-colors font-inter font-bold text-[14.41px] leading-[21px] tracking-normal">
            Start Training →
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="text-center">
          <h3 className="font-bold text-[#161C2D] font-inter text-[40px] leading-[97.75px] -tracking-[1px] w-[1482px] h-[85px]">
            {timeLeft.days} day, {timeLeft.hours} hours remaining
          </h3>
          <p className="text-[#6E727D] font-inter text-[24px] leading-[30.6px] tracking-normal w-[719px] h-[37px] ml-[350px]">
            from 05:55 PM CEST, May 14, 2025, to midnight May 16, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
