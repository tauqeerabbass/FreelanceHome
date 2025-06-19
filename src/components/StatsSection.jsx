"use client";

import { useState } from "react";
import { Shield, Users, Activity, Award } from "lucide-react";

const StatsSection = () => {
  const [imageErrors, setImageErrors] = useState({
    main: false,
    floating: false,
    document: false,
  });

  const handleMainImageError = () => {
    setImageErrors((prev) => ({ ...prev, main: true }));
  };

  const handleFloatingImageError = () => {
    setImageErrors((prev) => ({ ...prev, floating: true }));
  };

  const handleDocumentImageError = () => {
    setImageErrors((prev) => ({ ...prev, document: true }));
  };

  return (
    <section className="bg-gradient-to-br from-[#3B82F6] to-blue-600 py-20 relative overflow-hidden w-[1920px] h-[697.59px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Professional Image with UI Overlays */}
          <div className="relative flex justify-center">
            {/* Main Professional Image - Flipped horizontally */}
            <div
              className="absolute z-20"
              style={{
                top: "-100px", // adjust as you like
                left: "70px", // adjust as you like
              }}
            >
              {!imageErrors.main ? (
                <img
                  src="/assets/asset17.jpg"
                  alt="Professional working"
                  className="rounded-2xl shadow-2xl object-cover"
                  style={{
                    width: "345px",
                    height: "319px",
                    transform: "scaleX(-1)", // flip horizontally
                  }}
                  onError={handleMainImageError}
                />
              ) : (
                <div
                  className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
                  style={{ width: "345px", height: "319px" }}
                >
                  <div className="text-white text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">Professional Working</p>
                  </div>
                </div>
              )}

              {/* Chat Bubble - Positioned in the middle of the image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Image - positioned freely for your choice */}
            <div
              className="absolute z-20"
              style={{
                top: "-170px", // adjust as you like
                right: "90px", // adjust as you like
              }}
            >
              {!imageErrors.floating ? (
                <img
                  src="/assets/asset18.png"
                  alt="Floating UI"
                  className="rounded-2xl shadow-lg w-[153px] h-[186px]"
                  onError={handleFloatingImageError}
                />
              ) : (
                <div className="w-[150px] h-[100px] bg-white/20 backdrop-blur rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-white text-sm font-medium">
                    UI Dashboard
                  </div>
                </div>
              )}
            </div>

            {/* Document Preview Image - positioned freely for your choice */}
            <div
              className="absolute z-20"
              style={{
                top: "120px", // adjust as you like
                left: "30px", // adjust as you like
              }}
            >
              {!imageErrors.document ? (
                <img
                  src="/assets/asset19.png"
                  alt="Document Preview"
                  className="rounded-lg shadow-lg w-[137px] h-[136px]"
                  onError={handleDocumentImageError}
                />
              ) : (
                <div className="w-[120px] h-[80px] bg-white/20 backdrop-blur rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-white text-xs font-medium">Document</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Statistics in 2x2 Grid */}
          <div className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Daily Active Users */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    width="38"
                    height="30"
                    viewBox="0 0 38 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.4355 11.748C35.4355 11.748 35.2061 11.9775 34.7471 12.4365C34.2881 12.8955 33.4141 13.125 32.125 13.125C30.8359 13.125 29.7324 12.666 28.8145 11.748C27.8965 10.8301 27.4375 9.72656 27.4375 8.4375C27.4375 7.14844 27.8965 6.04492 28.8145 5.12695C29.7324 4.20898 30.8359 3.75 32.125 3.75C33.4141 3.75 34.5176 4.20898 35.4355 5.12695C36.3535 6.04492 36.8125 7.14844 36.8125 8.4375C36.8125 9.72656 36.3535 10.8301 35.4355 11.748ZM34.1172 6.44531C34.1172 6.44531 33.9805 6.30859 33.707 6.03516C33.4336 5.76172 32.9062 5.625 32.125 5.625C31.3438 5.625 30.6797 5.89844 30.1328 6.44531C29.5859 6.99219 29.3125 7.65625 29.3125 8.4375C29.3125 9.21875 29.5859 9.88281 30.1328 10.4297C30.6797 10.9766 31.3438 11.25 32.125 11.25C32.9062 11.25 33.5703 10.9766 34.1172 10.4297C34.6641 9.88281 34.9375 9.21875 34.9375 8.4375C34.9375 7.65625 34.6641 6.99219 34.1172 6.44531ZM23.6289 13.0664C23.6289 13.0664 23.3066 13.3887 22.6621 14.0332C22.0176 14.6777 20.7969 15 19 15C17.2031 15 15.6602 14.3555 14.3711 13.0664C13.082 11.7773 12.4375 10.2344 12.4375 8.4375C12.4375 6.64062 13.082 5.09766 14.3711 3.80859C15.6602 2.51953 17.2031 1.875 19 1.875C20.7969 1.875 22.3398 2.51953 23.6289 3.80859C24.918 5.09766 25.5625 6.64062 25.5625 8.4375C25.5625 10.2344 24.918 11.7773 23.6289 13.0664ZM22.3105 5.12695C22.3105 5.12695 22.0811 4.89746 21.6221 4.43848C21.1631 3.97949 20.2891 3.75 19 3.75C17.7109 3.75 16.6074 4.20898 15.6895 5.12695C14.7715 6.04492 14.3125 7.14844 14.3125 8.4375C14.3125 9.72656 14.7715 10.8301 15.6895 11.748C16.6074 12.666 17.7109 13.125 19 13.125C20.2891 13.125 21.3926 12.666 22.3105 11.748C23.2285 10.8301 23.6875 9.72656 23.6875 8.4375C23.6875 7.14844 23.2285 6.04492 22.3105 5.12695ZM33.2969 15C34.5078 15 35.5527 15.459 36.4316 16.377C37.3105 17.2949 37.75 18.3984 37.75 19.6875C37.75 19.9609 37.6621 20.1855 37.4863 20.3613C37.3105 20.5371 37.0859 20.625 36.8125 20.625C36.5391 20.625 36.3145 20.5371 36.1387 20.3613C35.9629 20.1855 35.875 19.9609 35.875 19.6875C35.875 18.9062 35.6211 18.2422 35.1133 17.6953C34.6055 17.1484 34 16.875 33.2969 16.875H30.9531C30.6406 16.875 30.3281 16.9336 30.0156 17.0508C29.5859 16.582 29.0977 16.1523 28.5508 15.7617C29.293 15.2539 30.0938 15 30.9531 15H33.2969ZM9.18555 11.748C9.18555 11.748 8.95605 11.9775 8.49707 12.4365C8.03809 12.8955 7.16406 13.125 5.875 13.125C4.58594 13.125 3.48242 12.666 2.56445 11.748C1.64648 10.8301 1.1875 9.72656 1.1875 8.4375C1.1875 7.14844 1.64648 6.04492 2.56445 5.12695C3.48242 4.20898 4.58594 3.75 5.875 3.75C7.16406 3.75 8.26758 4.20898 9.18555 5.12695C10.1035 6.04492 10.5625 7.14844 10.5625 8.4375C10.5625 9.72656 10.1035 10.8301 9.18555 11.748ZM7.86719 6.44531C7.86719 6.44531 7.73047 6.30859 7.45703 6.03516C7.18359 5.76172 6.65625 5.625 5.875 5.625C5.09375 5.625 4.42969 5.89844 3.88281 6.44531C3.33594 6.99219 3.0625 7.65625 3.0625 8.4375C3.0625 9.21875 3.33594 9.88281 3.88281 10.4297C4.42969 10.9766 5.09375 11.25 5.875 11.25C6.65625 11.25 7.32031 10.9766 7.86719 10.4297C8.41406 9.88281 8.6875 9.21875 8.6875 8.4375C8.6875 7.65625 8.41406 6.99219 7.86719 6.44531ZM23.6875 16.1719C26.0703 16.1719 27.8672 17.0898 29.0781 18.9258C29.8594 20.0586 30.25 21.3086 30.25 22.6758V25.3125C30.25 26.0938 29.9766 26.7578 29.4297 27.3047C28.8828 27.8516 28.2188 28.125 27.4375 28.125H10.5625C9.78125 28.125 9.11719 27.8516 8.57031 27.3047C8.02344 26.7578 7.75 26.0938 7.75 25.3125V22.6758C7.75 21.3086 8.14062 20.0586 8.92188 18.9258C10.1328 17.0898 11.9297 16.1719 14.3125 16.1719C14.9375 16.1719 15.6797 16.2891 16.5391 16.5234C17.3984 16.7578 18.2188 16.875 19 16.875C19.7812 16.875 20.6016 16.7578 21.4609 16.5234C22.3203 16.2891 23.0625 16.1719 23.6875 16.1719ZM28.375 25.3125V22.6758C28.375 21.6992 28.1016 20.8008 27.5547 19.9805C26.6953 18.6914 25.4062 18.0469 23.6875 18.0469C23.2188 18.0469 22.5449 18.1641 21.666 18.3984C20.7871 18.6328 19.8984 18.75 19 18.75C18.1016 18.75 17.2129 18.6328 16.334 18.3984C15.4551 18.1641 14.7812 18.0469 14.3125 18.0469C12.5938 18.0469 11.3047 18.6914 10.4453 19.9805C9.89844 20.8008 9.625 21.6992 9.625 22.6758V25.3125C9.625 25.5859 9.71289 25.8105 9.88867 25.9863C10.0645 26.1621 10.2891 26.25 10.5625 26.25H27.4375C27.7109 26.25 27.9355 26.1621 28.1113 25.9863C28.2871 25.8105 28.375 25.5859 28.375 25.3125ZM9.44922 15.7617C8.90234 16.1523 8.41406 16.582 7.98438 17.0508C7.67188 16.9336 7.35938 16.875 7.04688 16.875H4.70312C4 16.875 3.39453 17.1484 2.88672 17.6953C2.37891 18.2422 2.125 18.9062 2.125 19.6875C2.125 19.9609 2.03711 20.1855 1.86133 20.3613C1.68555 20.5371 1.46094 20.625 1.1875 20.625C0.914062 20.625 0.689453 20.5371 0.513672 20.3613C0.337891 20.1855 0.25 19.9609 0.25 19.6875C0.25 18.3984 0.689453 17.2949 1.56836 16.377C2.44727 15.459 3.49219 15 4.70312 15H7.04688C7.90625 15 8.70703 15.2539 9.44922 15.7617Z"
                      fill="white"
                    />
                  </svg>
                  </div>
                </div>
                <div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[36.59px] leading-[42px] tracking-normal">
                    96327+
                  </div>
                  <div className="font-medium font-inter text-[15.8px] leading-[23.8px] tracking-normal text-[#FFFFFF]">
                    Daily Active Users
                  </div>
                </div>
              </div>

              {/* Trusted by NGOs */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3  mt-[100px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    width="34"
                    height="30"
                    viewBox="0 0 34 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.3175 0C27.5519 0 27.7472 0.117188 27.9034 0.351562L33.7628 9.90234C33.9581 10.1758 33.9386 10.4492 33.7042 10.7227L17.5323 29.7656C17.3761 29.9219 17.2003 30 17.005 30C16.8097 30 16.6339 29.9219 16.4776 29.7656L0.305775 10.7227C0.0714 10.4492 0.0518688 10.1758 0.247181 9.90234L6.10656 0.351562C6.26281 0.117188 6.45812 0 6.69249 0H27.3175ZM26.4972 2.10938H22.6886L25.9698 9.375H30.8331L26.4972 2.10938ZM20.3448 2.10938H13.6651L10.3253 9.375H23.6847L20.3448 2.10938ZM7.51281 2.10938L3.17687 9.375H8.04015L11.3214 2.10938H7.51281ZM3.70421 11.25L12.7862 22.5L7.98156 11.25H3.70421ZM10.2667 11.25L17.005 26.7188L23.7433 11.25H10.2667ZM21.2237 22.5L30.3058 11.25H26.0284L21.2237 22.5Z"
                      fill="white"
                    />
                  </svg>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[37.73px] leading-[42px] tracking-normal">
                    20+
                  </div>
                  <div className="font-medium font-inter text-[15.8px] leading-[23.8px] tracking-normal text-[#FFFFFF]">
                    Trusted by 20+ NGOs in Guinea for tech and training
                    solutions.
                  </div>
                </div>
              </div>

              {/* Freelancers */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    width="38"
                    height="30"
                    viewBox="0 0 38 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.7656 14.0039C34.9766 14.668 35.9434 15.5957 36.666 16.7871C37.3887 17.9785 37.75 19.2578 37.75 20.625C37.75 22.6953 37.0176 24.4629 35.5527 25.9277C34.0879 27.3926 32.3203 28.125 30.25 28.125H8.6875C6.34375 28.125 4.35156 27.3047 2.71094 25.6641C1.07031 24.0234 0.25 22.0312 0.25 19.6875C0.25 17.8906 0.767578 16.2598 1.80273 14.7949C2.83789 13.3301 4.19531 12.3047 5.875 11.7188C5.99219 8.98438 7.04688 6.66016 9.03906 4.74609C11.0312 2.83203 13.4141 1.875 16.1875 1.875C17.9062 1.875 19.5078 2.26562 20.9922 3.04688C22.4766 3.82812 23.6875 4.90234 24.625 6.26953C25.5234 5.83984 26.4609 5.625 27.4375 5.625C29.2344 5.625 30.7773 6.26953 32.0664 7.55859C33.3555 8.84766 34 10.3906 34 12.1875C34 12.8125 33.9219 13.418 33.7656 14.0039ZM30.25 26.25C31.8125 26.25 33.1406 25.7031 34.2344 24.6094C35.3281 23.5156 35.875 22.1875 35.875 20.625C35.875 19.2188 35.4258 17.998 34.5273 16.9629C33.6289 15.9277 32.4961 15.293 31.1289 15.0586C31.793 14.2383 32.125 13.2812 32.125 12.1875C32.125 10.8984 31.666 9.79492 30.748 8.87695C29.8301 7.95898 28.7266 7.5 27.4375 7.5C26.0703 7.5 24.918 8.00781 23.9805 9.02344C23.3555 7.46094 22.3398 6.19141 20.9336 5.21484C19.5273 4.23828 17.9453 3.75 16.1875 3.75C13.8438 3.75 11.8516 4.57031 10.2109 6.21094C8.57031 7.85156 7.75 9.84375 7.75 12.1875C7.75 12.5391 7.76953 12.8711 7.80859 13.1836C6.20703 13.418 4.85938 14.1504 3.76562 15.3809C2.67188 16.6113 2.125 18.0469 2.125 19.6875C2.125 21.4844 2.76953 23.0273 4.05859 24.3164C5.34766 25.6055 6.89062 26.25 8.6875 26.25H30.25ZM23.9805 14.8828L24.332 15.2344C24.6445 15.5859 24.6445 15.918 24.332 16.2305L18.5312 22.0312C18.2188 22.3438 17.8867 22.3438 17.5352 22.0312L11.793 16.2305C11.4805 15.918 11.4805 15.5859 11.793 15.2344L12.1445 14.8828C12.457 14.5703 12.7891 14.5703 13.1406 14.8828L17.125 18.9258V10.0781C17.125 9.60938 17.3594 9.375 17.8281 9.375H18.2969C18.7656 9.375 19 9.60938 19 10.0781V18.9258L22.9844 14.8828C23.3359 14.5703 23.668 14.5703 23.9805 14.8828Z"
                      fill="white"
                    />
                  </svg>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-bold">J</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[36.91px] leading-[42px] tracking-normal">
                    100+
                  </div>
                  <div className="font-medium font-inter text-[16.07px] leading-[23.8px] tracking-normal text-[#FFFFFF]">
                    Freelancers in Conakry
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="space-y-3 w-[222px] h-[190.8px]">
                <div className="flex items-center space-x-3 mt-[100px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_87)">
                      <path
                        d="M23.5 1.95825L5.875 9.79158V21.5416C5.875 32.4103 13.395 42.5741 23.5 45.0416C33.605 42.5741 41.125 32.4103 41.125 21.5416V9.79158L23.5 1.95825ZM23.5 23.4803H37.2083C36.1704 31.5487 30.785 38.7358 23.5 40.9878V23.4999H9.79167V12.3374L23.5 6.247V23.4803Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_87">
                        <rect width="47" height="47" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  </div>
                </div>
                <div>
                  <div className="font-medium font-inter text-[37.73px] leading-[42px] tracking-normal">
                    Powered By TLS1.3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
