"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const freelancers = [
  {
    id: 1,
    name: "Jacob Jones",
    title: "IT Specialist in Kaloum",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Jacob Jones",
    title: "SAP Consultant in Kankan",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const services = [
  {
    icon: "🔄",
    title: "ERP/SAP Solutions",
    description: "Implement, optimize, and customize SAP/ERP systems for your business.",
    buttonText: "Explore ERP Services",
    color: "text-red-500",
  },
  {
    icon: "💻",
    title: "IT Support",
    description: "Reliable IT support for hardware, software, and network issues.",
    buttonText: "Get IT Support",
    color: "text-red-500",
  },
  {
    icon: "📊",
    title: "IT Solution Integration",
    description: "Seamlessly integrate IT solutions to enhance business operations.",
    buttonText: "Integrate Now",
    color: "text-yellow-500",
  },
  {
    icon: "💎",
    title: "Outsourcing With Freelance-224",
    description: "Outsource IT tasks to our expert team for efficiency and cost savings.",
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
    description: "Upskill your team with custom training tailored to your business needs.",
    buttonText: "Train Your Team",
    color: "text-green-500",
  },
]

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesToShow = 5
  const maxSlide = Math.max(0, freelancers.length - slidesToShow)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            For Companies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fuel Innovation and Digital
            <br />
            Transformation with Freelance-224
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive tech solutions for businesses and NGOs in Conakry and beyond
          </p>
        </div>

        {/* Technology Recruitment Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-2">Technology Recruitment Services:</h3>
          <p className="text-gray-400 mb-8">
            Hire top-tier freelancers across Guinea's prefectures for your tech projects.
          </p>

          {/* Freelancer Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
              >
                {freelancers.map((freelancer) => (
                  <div key={freelancer.id} className="flex-shrink-0 w-1/5 min-w-[200px]">
                    <div className="bg-white rounded-2xl p-6 text-center text-gray-900">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{freelancer.name}</h4>
                      <p className="text-gray-600 text-sm">{freelancer.title}</p>
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
          <div className="flex justify-center space-x-2 mt-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600">
              <div className="flex items-start space-x-4">
                <div className={`text-4xl ${service.color} flex-shrink-0`}>{service.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-400 mb-4">{service.description}</p>

                  {service.price && (
                    <div className="mb-4">
                      <div className="text-green-400 font-semibold">{service.price}</div>
                      {service.rental && (
                        <div className="text-gray-400">
                          <span className="text-white">Rental:</span> {service.rental}
                        </div>
                      )}
                    </div>
                  )}

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
                    {service.buttonText} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
