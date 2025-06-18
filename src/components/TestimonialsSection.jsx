"use client"

import { useState } from "react";
import asset15 from "/assets/asset15.png";

const testimonials = [
  {
    id: 1,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: {asset15},
    quoteColor: "text-red-500",
  },
  {
    id: 2,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: {asset15},
    quoteColor: "text-yellow-500",
  },
  {
    id: 3,
    quote: "Hired 5 IT specialists in a week!",
    company: "Conakry Companies",
    type: "Local Startup",
    avatar: {asset15},
    quoteColor: "text-green-500",
  },
  {
    id: 4,
    quote: "Amazing platform for finding talent!",
    company: "Tech Solutions",
    type: "Enterprise",
    avatar: {asset15},
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
          <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            Our Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
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
              <p className="text-xl font-semibold text-gray-900 mb-8">{testimonial.quote}</p>

              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company Info */}
              <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.company}</h4>
              <p className="text-gray-600">{testimonial.type}</p>
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
