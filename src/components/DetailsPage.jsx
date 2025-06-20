"use client";

import { useState } from "react";
import { ChevronRight, Truck, Mail, Lock } from "lucide-react";

export default function DetailsPage() {
  const [shippingMethod, setShippingMethod] = useState("pickup");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white mb-10">
        {/* Breadcrumb */}
        <nav className="mb-8 mt-5">
          <div className="flex items-center text-sm">
            <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60 hover:text-black cursor-pointer">
              Home
            </span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60 hover:text-black cursor-pointer">
              Cart
            </span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black">
              Details
            </span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Your Details */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal text-black mb-14">
              Your Details
            </h1>

            {/* Shipping Method */}
            <div>
              <h2 className="font-bold font-inter text-[24px] leading-[20px] tracking-normal text-black mb-4 ml-7">
                Shipping Method
              </h2>
              <div className="space-y-3 mt-7 ml-6">
                {/* Free Delivery Option */}
                <div className="flex items-center p-4 border border-[#B2BCCA] rounded-lg h-[88.52px]">
                  <input
                    type="radio"
                    id="delivery"
                    name="shipping"
                    value="delivery"
                    checked={shippingMethod === "delivery"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="font-semibold font-sans text-[16px] leading-[20px] tracking-normal text-black mr-2">
                        Free
                      </span>
                      <span className="text-[#4F4F4F] font-medium font-inter text-[20px] leading-[20px] tracking-normal ml-7">
                        Deliver in Conakry
                      </span>
                    </div>
                    <div className=" p-2 rounded">
                      <img
                        src="/assets/asset26.png"
                        className="w-[50px] h-[50px] text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Option - Selected */}
                <div className="flex items-center p-4 border border-[#B2BCCA] bg-blue-50 rounded-lg h-[88.52px]">
                  <input
                    type="radio"
                    id="pickup"
                    name="shipping"
                    value="pickup"
                    checked={shippingMethod === "pickup"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="font-semibold font-sans text-[16px] leading-[20px] tracking-normal text-black mr-2">
                        Choose
                      </span>
                      <span className="text-[#4F4F4F] font-medium font-inter text-[20px] leading-[20px] tracking-normal ml-7">
                        Pick Up in Conakry
                      </span>
                    </div>
                    <div className="p-2 rounded">
                      <img
                        src="/assets/asset26.png"
                        className="w-[50px] h-[50px] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Choose Pick Up Location */}
            <div>
              <h2 className="font-bold font-inter text-[24px] leading-[20px] tracking-normal text-black mb-4 mt-[60px] ml-7">
                Choose Pick Up Location
              </h2>
              <div className="w-full h-80 rounded-lg overflow-hidden ml-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="font-bold font-sans text-[16px] leading-[20px] tracking-normal text-black mb-6 mt-10">
                Payment Method
              </h2>
              <div className="space-y-4">
                {/* Orange Money */}
                <div className="flex items-center p-4 border border-[#B2BCCA] rounded-lg">
                  <input
                    type="radio"
                    id="orange"
                    name="payment"
                    value="orange"
                    checked={paymentMethod === "orange"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-semibold font-sans text-[16px] leading-[20px] w-[74px] tracking-normal text-black">
                        Orange Money
                      </span>
                      <span className="text-sm text-gray-600">
                        You will be redirected to the Orange Money website after submitting your order
                      </span>
                    </div>
                    <div className="ml-4">
                      <img
                        src="/assets/orange.png"
                        alt="Orange Money"
                        className="w-[42.5px] h-[30px]"
                      />
                    </div>
                  </div>
                </div>

                {/* MTN */}
                <div className="flex items-center p-4 border border-[#B2BCCA] rounded-lg">
                  <input
                    type="radio"
                    id="mtn"
                    name="payment"
                    value="mtn"
                    checked={paymentMethod === "mtn"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-semibold font-sans text-[16px] w-[74px] leading-[20px] tracking-normal text-black">
                        MTN
                      </span>
                      <span className="text-sm text-gray-600">
                        You will be redirected to the MTN website after submitting your order
                      </span>
                    </div>
                    <div className="ml-4">
                      <img
                        src="/assets/visa.png"
                        alt="MTN Mobile Money"
                        className="w-[42.5px] h-[30px]"
                      />
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <div className="flex items-center p-4 border border-[#B2BCCA] rounded-lg">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-semibold font-sans text-[16px] w-[74px] leading-[20px] tracking-normal text-black">
                        PayPal
                      </span>
                      <span className="text-sm text-gray-600">
                        You will be redirected to the PayPal website after submitting your order
                      </span>
                    </div>
                    <div className="ml-4">
                      <img
                        src="/assets/paypal.png"
                        alt="PayPal"
                        className="w-[42.5px] h-[30px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div className="flex items-center p-4 border border-[#B2BCCA] rounded-lg">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-semibold font-sans text-[16px] leading-[20px] tracking-normal text-black">
                        Cash on Delivery
                      </span>
                      <span className="text-sm text-gray-600">
                        Please enter your address details and we will accept payment on Delivery
                      </span>
                    </div>
                    <div className="ml-4">
                      <img
                        src="/assets/momo.png"
                        alt="Cash on Delivery"
                        className="w-[42.5px] h-[30px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1 w-[505px] h-[387px] ml-10 mt-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="font-bold font-Satoshi text-[24px] leading-[100%] tracking-normal text-black mb-8 mt-3">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 w-[457px] h-[190px] justify-between">
                {/* Subtotal */}
                <div className="flex justify-between w-[457px] h-[27px] mb-6">
                  <span className="font-normal font-Satoshi text-[20px] text-black text-opacity-60">
                    Subtotal
                  </span>
                  <span className="font-bold font-inter text-[20px] text-black">
                    6,336,000 GNF
                  </span>
                </div>

                {/* Discount */}
                <div className="flex justify-between w-[457px] h-[27px] mb-6">
                  <span className="font-normal font-Satoshi text-[20px] text-black text-opacity-60">
                    Discount (-20%)
                  </span>
                  <span className="font-bold font-inter text-[20px] text-[#FF3333]">
                    -63 GNF
                  </span>
                </div>

                {/* Delivery Fee */}
                <div className="flex justify-between w-[457px] h-[27px] mb-16">
                  <span className="font-normal font-Satoshi text-[20px] text-black text-opacity-60">
                    Delivery Fee
                  </span>
                  <span className="font-bold font-inter text-[20px] text-black">
                    $15
                  </span>
                </div>

                <hr className="border-gray-300" />

                {/* Total */}
                <div className="flex justify-between w-[457px] h-[29px]">
                  <span className="font-normal font-Satoshi text-[20px] text-black">
                    Total
                  </span>
                  <span className="font-bold font-inter text-[24px] text-black">
                    1000 GNF
                  </span>
                </div>
              </div>

              <button className="w-[457px] h-[60px] bg-[#007BFF] hover:bg-[#007BFF] text-white font-medium font-Satoshi text-[16px] py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
                Pay Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="flex items-center justify-center mt-12 pt-8 border-t border-gray-200 relative -top-[60px] -left-[420px]">
        <div className="flex items-center gap-3">
          <div className="w-[27px] h-[28px] bg-blue-600 rounded-full flex items-center justify-center">
            <Lock className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#828282] font-normal font-sans text-[12px] w-[347px] leading-[20px] tracking-normal">
            Supports pay-as-you-go, deposits, and service-level payments.
          </span>
        </div>
      </div>
    </>
  );
}
