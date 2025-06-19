"use client";

import { useState } from "react";
import asset15 from "/assets/asset15.png";

const testimonials = [
  {
    id: 1,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text=[#FF0004]",
  },
  {
    id: 2,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text-[#FFBB00]",
  },
  {
    id: 3,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text-[#15803D]",
  },
  {
    id: 4,
    quote: "Amazing platform for finding talent!",
    company: "Tech Solutions",
    type: "Enterprise",
    avatar: asset15,
    quoteColor: "text-blue-500",
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const getCurrentTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide;
    return testimonials.slice(start, start + testimonialsPerSlide);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-[300px] h-[33px] font-inter text-[17.72px] leading-[25.2px] tracking-normal inline-block bg-[#3B82F6] text-white px-6 py-1 rounded-full text-sm font-medium mb-8">
            Our Testimonials
          </div>
          <h2 className="absolute left-[770px] font-bold font-inter text-[39.54px] leading-[50.4px] tracking-[-2px] text-[#161C2D]">
            What our clients say
            <br />
            about solutions
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={testimonial.id} className="text-center">
              {/* Quote Mark */}
              <div className={`mb-6 ml-[150px] mt-[100px] ${testimonial.quoteColor}`}>
                <svg
                  width="90.12"
                  height="63.6"
                  viewBox="0 0 91 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M20.6 0.170017C16.8 0.170017 13.4 1.07002 10.4 2.87002C7.4 4.67002 5 7.12002 3.2 10.22C1.4 13.32 0.5 16.67 0.5 20.27C0.5 25.47 2.3 30.02 5.9 33.92C9.5 37.82 14 39.87 19.4 40.07C19.4 41.67 19.2 43.47 18.8 45.47C18 48.47 16.5 51.57 14.3 54.77C13.9 55.37 13.9 55.97 14.3 56.57L21.2 63.47C21.4 63.67 21.7 63.77 22.1 63.77C22.5 63.77 22.8 63.67 23 63.47C28.2 58.87 32.4 53.07 35.6 46.07C39.4 37.67 41 28.97 40.4 19.97C40 14.37 37.9 9.67002 34.1 5.87002C30.3 2.07002 25.8 0.170017 20.6 0.170017ZM22.1 60.47C21.9 60.27 21.5 59.77 20.9 58.97L17.3 55.37C19.1 52.57 20.4 49.77 21.2 46.97C21.8 44.77 22.1 42.77 22.1 40.97C22.1 39.57 21.95 38.62 21.65 38.12C21.35 37.62 21 37.37 20.6 37.37C15.8 37.37 11.7 35.67 8.3 32.27C4.9 28.87 3.2 24.82 3.2 20.12C3.2 15.42 4.9 11.37 8.3 7.97002C11.7 4.57002 15.75 2.87002 20.45 2.87002C25.15 2.87002 29.1 4.52002 32.3 7.82002C35.5 11.12 37.3 15.27 37.7 20.27C38.3 29.67 36.4 38.67 32 47.27C29.2 52.27 25.9 56.67 22.1 60.47ZM90.5 19.97C89.9 14.37 87.75 9.67002 84.05 5.87002C80.35 2.07002 75.8 0.170017 70.4 0.170017C66.8 0.170017 63.45 1.07002 60.35 2.87002C57.25 4.67002 54.8 7.12002 53 10.22C51.2 13.32 50.3 16.67 50.3 20.27C50.3 25.47 52.15 30.02 55.85 33.92C59.55 37.82 64 39.87 69.2 40.07C69.4 41.67 69.2 43.47 68.6 45.47C67.8 48.47 66.3 51.57 64.1 54.77C63.7 55.37 63.8 55.97 64.4 56.57L71 63.47C71.4 63.67 71.75 63.77 72.05 63.77C72.35 63.77 72.7 63.67 73.1 63.47C78.1 58.87 82.3 53.07 85.7 46.07C89.5 37.67 91.1 28.97 90.5 19.97ZM72.2 60.47C71.8 60.07 71.3 59.57 70.7 58.97L67.1 55.37C68.9 52.57 70.3 49.77 71.3 46.97C71.9 44.77 72.2 42.77 72.2 40.97C72.2 39.57 72.05 38.62 71.75 38.12C71.45 37.62 71 37.37 70.4 37.37C65.6 37.37 61.55 35.67 58.25 32.27C54.95 28.87 53.3 24.82 53.3 20.12C53.3 15.42 54.95 11.37 58.25 7.97002C61.55 4.57002 65.55 2.87002 70.25 2.87002C74.95 2.87002 78.9 4.52002 82.1 7.82002C85.3 11.12 87.1 15.27 87.5 20.27C88.3 29.67 86.4 38.67 81.8 47.27C79.2 52.27 76 56.67 72.2 60.47Z"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="font-medium font-inter text-[19.38px] leading-[34px] tracking-normal text-[#161C2D] mb-8">
                {testimonial.quote}
              </p>

              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company Info */}
              <h4 className="font-bold font-inter text-[17.58px] leading-[21.6px] tracking-normal text-[#161C2D] mb-1">
                {testimonial.company}
              </h4>
              <p className="font-medium font-inter text-[14.65px] leading-[15px] tracking-normal text-[#6E727D]">
                {testimonial.type}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
