"use client"

import { useState, useEffect } from "react"

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 19,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-32 w-4 h-4 bg-purple-500 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Save 20% Badge */}
        <div className="inline-flex items-center space-x-4 mb-8">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Save 20%</div>
          <span className="text-gray-600">Faster solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          Shop. Book.{" "}
          <span className="relative inline-block">
            <span className="text-blue-600">Hire.</span>
            {/* Circular animation around "Hire" */}
            <div className="absolute inset-0 -m-4">
              <div className="w-full h-full border-2 border-blue-400 rounded-full animate-pulse opacity-60"></div>
            </div>
            <div className="absolute inset-0 -m-6">
              <div className="w-full h-full border border-blue-300 rounded-full animate-ping opacity-40"></div>
            </div>
          </span>{" "}
          Rent. Transform.
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          - Your Tech Partner in <span className="text-red-600">Guinea</span>
        </h2>

        {/* Limited Time Offer */}
        <p className="text-gray-600 text-lg mb-8">Limited-Time Offer: Save 20% Until May 16, 2025!</p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors">
            Shop Smartphones →
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors">
            Hire Freelancers →
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors">
            Explore Tech Services →
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors">
            Rent Devices →
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors">
            Start Training →
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {timeLeft.days} day, {timeLeft.hours} hours remaining
          </h3>
          <p className="text-gray-600">from 05:55 PM CEST, May 14, 2025, to midnight May 16, 2025</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
