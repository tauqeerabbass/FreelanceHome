"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const freelancers = [
  {
    id: 1,
    name: "Jacob Jones",
    title: "IT Specialist in Kaloum",
    image: "/assets/asset1.jpg",
  },
  {
    id: 2,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/assets/asset1.jpg",
  },
  {
    id: 3,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/assets/asset1.jpg",
  },
  {
    id: 4,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/assets/asset1.jpg",
  },
  {
    id: 5,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/assets/asset1.jpg",
  },
  {
    id: 6,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/assets/asset1.jpg",
  },
];

const services = [
  {
    image: "/assets/asset5.png",
    title: "ERP/SAP Solutions",
    description:
      "Implement, optimize, and customize SAP/ERP systems for your business.",
    buttonText: "Explore ERP Services",
    color: "text-red-500",
  },
  {
    image: "/assets/asset12.png",
    title: "IT Support",
    description:
      "Reliable IT support for hardware, software, and network issues.",
    buttonText: "Get IT Support",
    color: "text-red-500",
  },
  {
    image: "/assets/asset8.png",
    title: "IT Solution Integration",
    description:
      "Seamlessly integrate IT solutions to enhance business operations.",
    buttonText: "Integrate Now",
    color: "text-yellow-500",
  },
  {
    image: "/assets/asset11.png",
    title: "Outsourcing With Freelance-224",
    description:
      "Outsource IT tasks to our expert team for efficiency and cost savings.",
    buttonText: "Outsource Now",
    color: "text-yellow-500",
  },
  {
    image: "/assets/asset6.png",
    title: "Device Sales & Rentals",
    description: "Smartphone Sale",
    price: "4,928,000 GNF ($560)",
    rental: "8,800 GNF/hour ($1).",
    buttonText: "Buy or Rent for Your Team",
    color: "text-green-500",
  },
  {
    image: "/assets/asset13.png",
    title: "Training For Teams",
    description:
      "Upskill your team with custom training tailored to your business needs.",
    buttonText: "Train Your Team",
    color: "text-green-500",
  },
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 5;
  const maxSlide = Math.max(0, freelancers.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-[#262C3C] text-white w-[1920px] h-[1853px]">
      <div className="max-w-full">
        {/* Header */}
        <div className="text-center">
          <div className="relative top-[80px] ml-[100px] rounded-[30px] inline-block bg-[#3B82F6] w-[170px] h-[33px] font-inter text-[17.72px] leading-[25.2px] tracking-normal text-white font-medium">
            For Companies
          </div>
          <h2 className="w-[709px] h-[93px] relative top-[101.19px] left-[634px] font-bold font-inter text-[39.05px] leading-[50.4px] tracking-[-2px] text-white">
            Fuel Innovation and Digital
            <br />
            Transformation with Freelance-224
          </h2>
          <p className="w-[916px] h-[37px] relative top-[122px] left-[545px] text-[#6E727D] font-medium font-inter text-[24px] leading-[30.6px] tracking-normal">
            Comprehensive tech solutions for businesses and NGOs in Conakry and
            beyond
          </p>
        </div>

        {/* Technology Recruitment Services */}
        <div>
          <h3 className="w-[561px] h-[49px] relative top-[200px] left-[300px] text-2xl font-bold font-inter text-[32px] leading-[28.8px] tracking-normal">
            Technology Recruitment Services:
          </h3>
          <p className="w-[577px] h-[30px] relative top-[200px] left-[300px] text-[#A8ACB7] font-inter text-[15.8px] leading-[30.6px] tracking-normal">
            Hire top-tier freelancers across Guinea's prefectures for your tech
            projects.
          </p>

          {/* Freelancer Carousel */}
          <div className="relative top-[230px] -left-[139px]">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out gap-10"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesToShow)
                  }%)`,
                }}
              >
                {freelancers.map((freelancer) => (
                  <div key={freelancer.id} className="flex-shrink-0">
                    <div className="w-[327px] h-[400px] bg-white rounded-2xl text-center text-gray-900 flex flex-col items-center gap-4 p-4">
                      <div className="w-[280px] h-[264px] overflow-hidden">
                        <img
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-[6px]">
                        <h4 className="text-[#1B1D1F] text-[20px] leading-[28px] font-normal w-[110px] h-[28px]">
                          {freelancer.name}
                        </h4>
                        <p className="text-[#6D737A] text-[16px] leading-[24px] font-normal w-[194px] h-[24px]">
                          {freelancer.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-[350px] px-[315px]">
          <div className="grid grid-cols-2 gap-y-[20px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#262C3C] border border-[#FFFFFF80] w-[570px] h-[229.58px] p-6 rounded-xl flex items-start gap-6"
              >
                  <div className="flex-shrink-0 w-[75px] h-[75px] left-[47px] top-[47px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <h4 className="text-[22.5px] font-bold leading-[28.8px] w-[353px] h-[24px] top-[2.03px]">
                    {service.title}
                  </h4>
                  <p className="text-[15.8px] leading-[30.6px] text-[#A8ACB7]  w-[335px] h-[73px] top-[70px] left-[162px]">
                    {service.description}
                  </p>

                  {service.price && (
                    <div>
                      <div className="h-[30px] w-[273px] -mt-[55px] top-[80.68px] left-[162px] text-[24px] leading-[30.6px] bg-gradient-to-r from-[#FF0004] via-[#FFB000] to-[#15803D] bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      {service.rental && (
                        <div>
                          <span className="text-[#A8ACB7]">Rental: </span>
                          <span className="h-[30px] w-[273px] -mt-[40px] top-[80.68px] left-[162px] text-[24px] leading-[30.6px] bg-gradient-to-r from-[#FF0004] via-[#FFB000] to-[#15803D] bg-clip-text text-transparent">
                            {service.rental}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <button className="w-[259px] h-[51px] left-[162px] top-[145px] text-[15px] font-bold bg-[#3B82F6] text-white rounded-full hover:bg-[#3B82F6] transition-colors">
                    {service.buttonText} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
