const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white mb-10">
      {/* Breadcrumb */}
      <nav className=" mb-6">
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60">Home</span>
        <span className="mx-2">{">"}</span>
        <span className="font-normal font-Satoshi text-[16px] leading-[100%] tracking-normal text-black">Cart</span>
      </nav>

      {/* Page Title */}
      <h1 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal text-black mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Cart Items */}
        <div className="lg:col-span-2 space-y-11">
          {/* Cart Item 1 */}
          <div className="h-[124px] flex items-center gap-4 p-4 border border-gray-200 rounded-lg mt-6">
            <img src="/assets/asset10.jpg" alt="iPhone 14" className="w-32 h-32 object-cover rounded-lg bg-gray-100" />
            <div className="flex-1">
              <h3 className="font-normal font-inter text-[20px] leading-[100%] tracking-normal text-black mb-1 ">iPhone 14</h3>
              <p className="text-sm text-gray-600">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Condition:</span> <span className="text-[#00000099] text-opacity-60">New</span>
              </p>
              <p className="text-sm text-gray-600 mb-[30px]">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Category:</span> <span className="text-[#00000099] text-opacity-60">Smartphone</span>
              </p>
              <p className="font-medium font-poppins text-[24px] leading-[13px] tracking-normal text-black">6,336,000 GNF</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded relative -right-10 top-10">
                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                <span className="px-3 py-1 border-x border-gray-300 font-medium font-Satoshi text-[14px] leading-[100%] tracking-normal">1</span>
                <button className="px-3 py-1 hover:bg-gray-100">+</button>
              </div>
              <button className="text-[#FF3333] hover:text-[#FF3333] relative bottom-10">
                <svg className="w-[18px] h-[19.5px]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="h-[124px] flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <img src="/assets/asset10.jpg" alt="iPhone 14" className="w-32 h-32 object-cover rounded-lg bg-gray-100" />
            <div className="flex-1">
              <h3 className="font-normal font-inter text-[20px] leading-[100%] tracking-normal text-black mb-1 ">iPhone 14</h3>
              <p className="text-sm text-gray-600">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Condition:</span> <span className="text-[#00000099] text-opacity-60">New</span>
              </p>
              <p className="text-sm text-gray-600 mb-[30px]">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Category:</span> <span className="text-[#00000099] text-opacity-60">Smartphone</span>
              </p>
              <p className="font-medium font-poppins text-[24px] leading-[13px] tracking-normal text-black">6,336,000 GNF</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded relative -right-10 top-10">
                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                <span className="px-3 py-1 border-x border-gray-300 font-medium font-Satoshi text-[14px] leading-[100%] tracking-normal">1</span>
                <button className="px-3 py-1 hover:bg-gray-100">+</button>
              </div>
              <button className="text-[#FF3333] hover:text-[#FF3333]  relative bottom-10">
                <svg className="w-[18px] h-[19.5px]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Item 3 */}
          <div className="h-[124px] flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <img src="/assets/asset10.jpg" alt="iPhone 14" className="w-32 h-32 object-cover rounded-lg bg-gray-100" />
            <div className="flex-1">
              <h3 className="font-normal font-inter text-[20px] leading-[100%] tracking-normal text-black mb-1 ">iPhone 14</h3>
              <p className="text-sm text-gray-600">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Condition:</span> <span className="text-[#00000099] text-opacity-60">New</span>
              </p>
              <p className="text-sm text-gray-600 mb-[30px]">
                <span className="font-normal font-inter text-[14px] leading-[100%] tracking-normal text-black">Category:</span> <span className="text-[#00000099] text-opacity-60">Smartphone</span>
              </p>
              <p className="font-medium font-poppins text-[24px] leading-[13px] tracking-normal text-black">6,336,000 GNF</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded relative -right-10 top-10">
                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                <span className="px-3 py-1 border-x border-gray-300 font-medium font-Satoshi text-[14px] leading-[100%] tracking-normal">1</span>
                <button className="px-3 py-1 hover:bg-gray-100">+</button>
              </div>
              <button className="text-[#FF3333] hover:text-[#FF3333]  relative bottom-10">
                <svg className="w-[18px] h-[19.5px]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1 w-[505px] h-[387px] ml-5">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="font-bold font-Satoshi text-[24px] leading-[100%] tracking-normal text-black mb-8 mt-3">Order Summary</h2>

            <div className="space-y-4 mb-6 w-[457px] h-[190px] justify-between">
              <div className="flex justify-between w-[457px] h-[27px] mb-6">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">Subtotal</span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-black">6,336,000 GNF</span>
              </div>

              <div className="flex justify-between w-[457px] h-[27px] mb-6">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">Discount (-20%)</span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-[#FF3333]">-63 GNF</span>
              </div>

              <div className="flex justify-between w-[457px] h-[27px] mb-16">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black text-opacity-60">Delivery Fee</span>
                <span className="font-bold font-inter text-[20px] leading-[100%] tracking-normal text-black">$15</span>
              </div>

              <hr className="border-gray-300" />

              <div className="flex justify-between w-[457px] h-[29px]">
                <span className="font-normal font-Satoshi text-[20px] leading-[100%] tracking-normal text-black">Total</span>
                <span className="font-bold font-inter text-[24px] leading-[100%] tracking-normal text-black">1000 GNF</span>
              </div>
            </div>

            <button className="w-[457px] h-[60px] bg-[#007BFF] hover:bg-[#007BFF] text-white font-medium font-Satoshi text-[16px] leading-[100%] tracking-normal py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
              Go to Checkout
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

export default Cart
