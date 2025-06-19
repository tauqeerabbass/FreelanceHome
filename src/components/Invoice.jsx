const Invoice = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white mb-10">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">
          Home
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">
          Cart
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">
          Details
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black">
          Download Invoice
        </span>
      </nav>

      {/* Page Title */}
      <h1 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal text-black mb-8">
        Download Invoice
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Invoice */}
        <div className="lg:col-span-2">
          <div className="bg-white">
            <h2 className="font-bold font-inter text-[24px] leading-[100%] tracking-normal text-black mb-6">Invoice</h2>

            {/* Invoice Image */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <img src="/assets/asset25.png" alt="Invoice Document" className="w-full h-auto object-contain" />
            </div>

            {/* Download Link */}
            <div className="text-center">
              <a
                href="#"
                className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-[#007BFF] hover:underline"
              >
                Click Here to Download
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1 w-[505px] h-[387px] ml-5">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="font-bold font-Satoshi text-[24px] leading-[100%] tracking-normal text-black mb-8 mt-3">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 w-[457px] h-[190px] justify-between">
              <div className="flex justify-between w-[457px] h-[27px] mb-6">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">
                  Subtotal
                </span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-black">
                  6,336,000 GNF
                </span>
              </div>

              <div className="flex justify-between w-[457px] h-[27px] mb-6">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">
                  Discount (-20%)
                </span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-[#FF3333]">
                  -63 GNF
                </span>
              </div>

              <div className="flex justify-between w-[457px] h-[27px] mb-16">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">
                  Delivery Fee
                </span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-black">$15</span>
              </div>

              <hr className="border-gray-300" />

              <div className="flex justify-between w-[457px] h-[29px]">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black">
                  Total
                </span>
                <span className="font-bold font-inter text-[24px] leading-[100%] tracking-normal text-black">
                  1000 GNF
                </span>
              </div>
            </div>

            <button className="w-[457px] h-[60px] bg-[#007BFF] hover:bg-[#007BFF] text-white font-medium font-Satoshi text-[16px] leading-[100%] tracking-normal py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
              Pay Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice
