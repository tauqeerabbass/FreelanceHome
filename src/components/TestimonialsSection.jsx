"use client"

import { useState } from "react";
import asset15 from "/assets/asset15.png";

const testimonials = [
  {
    id: 1,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text-red-500",
  },
  {
    id: 2,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text-yellow-500",
  },
  {
    id: 3,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: asset15,
    quoteColor: "text-green-500",
  },
  {
    id: 4,
    quote: "Amazing platform for finding talent!",
    company: "Tech Solutions",
    type: "Enterprise",
    avatar: asset15,
    quoteColor: "text-blue-500",
  },
]

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonialsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

  const getCurrentTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide
    return testimonials.slice(start, start + testimonialsPerSlide)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-[300px] h-[33px] font-inter text-[17.72px] leading-[25.2px] tracking-normal inline-block bg-[#3B82F6] text-white px-6 py-1 rounded-full text-sm font-medium mb-8">
            Our Testimonials
          </div>
          <h2 className="absolute left-[770px] font-bold font-inter text-[39.54px] leading-[50.4px] tracking-normal text-[#161C2D]">
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
              <div className={`text-6xl font-bold mb-6 ${testimonial.quoteColor}`}>{"''"}</div>

              {/* Quote Text */}
              <p className="font-medium font-inter text-[19.38px] leading-[34px] tracking-normal text-[#161C2D] mb-8">{testimonial.quote}</p>

              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company Info */}
              <h4 className="font-bold font-inter text-[17.58px] leading-[21.6px] tracking-normal text-[#161C2D] mb-1">{testimonial.company}</h4>
              <p className="font-medium font-inter text-[14.65px] leading-[15px] tracking-normal text-[#6E727D]">{testimonial.type}</p>
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
  )
}

export default TestimonialsSection
