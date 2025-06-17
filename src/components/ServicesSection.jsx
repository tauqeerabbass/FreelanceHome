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
    image: "../assets/asset1.jpg",
  },
  {
    id: 3,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "../assets/asset1.jpg",
  },
  {
    id: 4,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "../assets/asset1.jpg",
  },
  {
    id: 5,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "../assets/asset1.jpg",
  },
  {
    id: 6,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "../assets/asset1.jpg",
  },
];

const services = [
  {
    icon: "🔄",
    title: "ERP/SAP Solutions",
    description:
      "Implement, optimize, and customize SAP/ERP systems for your business.",
    buttonText: "Explore ERP Services",
    color: "text-red-500",
  },
  {
    icon: "💻",
    title: "IT Support",
    description:
      "Reliable IT support for hardware, software, and network issues.",
    buttonText: "Get IT Support",
    color: "text-red-500",
  },
  {
    icon: "📊",
    title: "IT Solution Integration",
    description:
      "Seamlessly integrate IT solutions to enhance business operations.",
    buttonText: "Integrate Now",
    color: "text-yellow-500",
  },
  {
    icon: "💎",
    title: "Outsourcing With Freelance-224",
    description:
      "Outsource IT tasks to our expert team for efficiency and cost savings.",
    buttonText: "Outsource Now",
    color: "text-yellow-500",
  },
  {
    icon: "📱",
    title: "Device Sales & Rentals",
    description: "Smartphone Sale",
    price: "4,928,000 GNF ($560)",
    rental: "8,800 GNF/hour ($1).",
    buttonText: "Buy or Rent for Your Team",
    color: "text-green-500",
  },
  {
    icon: "📚",
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
    <section className="bg-slate-800 text-white py-0 w-[1920px] h-[1853px]">
      <div className="max-w-full">
        {/* Header */}
        <div className="text-center">
          <div className="relative -top-[37px] left-[530px] rounded-[30px] inline-block bg-[#3B82F6] w-[170px] h-[33px] font-inter text-[17.72px] leading-[25.2px] tracking-normal text-white px-0 py-0 rounded-full font-medium mb-0">
            For Companies
          </div>
          <h2 className="relative top-[21.19px] left-[315px] font-bold font-inter text-[39.05px] leading-[50.4px] tracking-[-2px] text-white">
            Fuel Innovation and Digital
            <br />
            Transformation with Freelance-224
          </h2>
          <p className="relative top-[122px] left-[157px] text-[#6E727D] font-medium font-inter text-[24px] leading-[30.6px] tracking-normal">
            Comprehensive tech solutions for businesses and NGOs in Conakry and
            beyond
          </p>
        </div>

        {/* Technology Recruitment Services */}
        <div className="mb-0">
          <h3 className="relative top-[222px] -left-[124px] text-2xl font-bold mb-0 font-inter text-[32px] leading-[28.8px] tracking-normal">
            Technology Recruitment Services:
          </h3>
          <p className="relative top-[271px] -left-[124px] text-[#A8ACB7] mb-0 font-inter text-[15.8px] leading-[30.6px] tracking-normal">
            Hire top-tier freelancers across Guinea's prefectures for your tech
            projects.
          </p>

          {/* Freelancer Carousel */}
          <div className="relative top-[319px] -left-[139px]">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesToShow)
                  }%)`,
                }}
              >
                {freelancers.map((freelancer) => (
                  <div
                    key={freelancer.id}
                    className="flex-shrink-0 w-[312px] h-[370px]"
                  >
                    <div className="bg-white rounded-2xl w-full h-full p-4 text-center text-gray-900 flex flex-col items-center justify-center">
                      <div className="w-[180px] h-[264px] mx-auto mb-2 overflow-hidden">
                        <img
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-[#1B1D1F] text-[20px] leading-[28px] font-normal mb-1">
                        {freelancer.name}
                      </h4>
                      <p className="text-[#6D737A] text-[16px] leading-[24px] font-normal">
                        {freelancer.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-2xl p-4 border border-slate-600"
            >
              <div className="flex items-start space-x-4">
                <div className={`text-4xl ${service.color} flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-400 mb-2">{service.description}</p>

                  {service.price && (
                    <div className="mb-2">
                      <div className="text-green-400 font-semibold">
                        {service.price}
                      </div>
                      {service.rental && (
                        <div className="text-gray-400">
                          <span className="text-white">Rental:</span>{" "}
                          {service.rental}
                        </div>
                      )}
                    </div>
                  )}

                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition-colors">
                    {service.buttonText} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
