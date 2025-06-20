"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("freelancers");

  // Sample courses data
  const freelancerCourses = [
    {
      id: 1,
      title: "Web Development Basics",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "10 Videos",
      hours: "5 hours",
      price: "176,000 GNF",
      image: "/assets/asset31.png",
    },
    {
      id: 2,
      title: "Web Development Basics",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "10 Videos",
      hours: "5 hours",
      price: "176,000 GNF",
      image: "/assets/asset31.png",
    },
    {
      id: 3,
      title: "Web Development Basics",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "10 Videos",
      hours: "5 hours",
      price: "176,000 GNF",
      image: "/assets/asset31.png",
    },
  ];

  const companyCourses = [
    {
      id: 1,
      title: "SAP ERP Implementation",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "15 videos",
      hours: "8 hours",
      price: "440,000 GNF",
      priceUnit: "/user",
      image: "/assets/asset31.png",
    },
    {
      id: 2,
      title: "SAP ERP Implementation",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "15 videos",
      hours: "8 hours",
      price: "440,000 GNF",
      priceUnit: "/user",
      image: "/assets/asset31.png",
    },
    {
      id: 3,
      title: "SAP ERP Implementation",
      description:
        "Master the foundational skills of being a web developer. This Course Will take you from zero to hero in web development. This course offers both frontend and backend training lessons",
      videos: "15 videos",
      hours: "8 hours",
      price: "440,000 GNF",
      priceUnit: "/user",
      image: "/assets/asset31.png",
    },
  ];

  const currentCourses =
    activeTab === "freelancers" ? freelancerCourses : companyCourses;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[822px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/asset29.jpg"
            alt="Online training meeting background"
            className="w-full h-full object-cover"
          />
          {/* Green overlay */}
          <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        </div>

        {/* Design Images */}
        <img
          src="/assets/circle1.png"
          alt="design1"
          className="absolute top-[200px] left-[300px] w-[88px] h-[87px]"
        />
        <img
          src="/assets/circle2.png"
          alt="design2"
          className="absolute top-[165px] right-[315px] h-[20px]"
        />
        <img
          src="/assets/circle3.png"
          alt="design3"
          className="absolute top-[250px] left-[400px] w-[15px] h-[15px]"
        />
        <img
          src="/assets/circle4.png"
          alt="design4"
          className="absolute top-[150px] right-[300px] w-[15px] h-[15px]"
        />

        {/* SVG 1 */}
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[150px] left-[500px] transform -translate-x-1/2"
        >
          <g clipPath="url(#clip0_19_870)">
            <rect
              y="34.9746"
              width="66"
              height="64"
              rx="20"
              transform="rotate(-32 0 34.9746)"
              fill="#15803D"
            />
            <g clipPath="url(#clip1_19_870)">
              <path
                d="M46.6278 52.4159L51.5843 41.9489C51.8211 41.4472 51.7981 40.9702 51.5155 40.5179C51.2329 40.0656 50.8142 39.8359 50.2595 39.8288L38.679 39.6952C38.0784 39.6775 37.6336 39.9255 37.3446 40.4394C37.0557 40.9533 37.0711 41.4648 37.3909 41.9741L44.0149 52.5747C44.3328 53.0835 44.7864 53.3213 45.3757 53.288C45.9649 53.2547 46.3823 52.964 46.6278 52.4159ZM55.5415 61.5857C53.1953 63.0519 50.7119 63.9841 48.0916 64.3826C45.4712 64.781 42.9213 64.6945 40.4416 64.123C37.962 63.5515 35.6321 62.5114 33.4521 61.0028C31.272 59.4941 29.4487 57.5676 27.9822 55.2232C26.5156 52.8787 25.5834 50.3954 25.1853 47.7732C24.7873 45.1511 24.8738 42.6011 25.4449 40.1233C26.016 37.6455 27.0561 35.3156 28.5651 33.1337C30.0742 30.9518 32.0007 29.1285 34.3448 27.6638C36.6888 26.1991 39.1721 25.2668 41.7947 24.867C44.4173 24.4671 46.9673 24.5536 49.4447 25.1265C51.922 25.6995 54.2525 26.7392 56.4359 28.2457C58.6194 29.7522 60.4421 31.6791 61.9041 34.0264C63.3661 36.3737 64.2984 38.857 64.7009 41.4763C65.1035 44.0957 65.017 46.6457 64.4414 49.1263C63.8658 51.6069 62.8261 53.9373 61.3222 56.1175C59.8184 58.2977 57.8915 60.1205 55.5415 61.5857Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_19_870">
              <rect
                y="34.9746"
                width="66"
                height="64"
                rx="20"
                transform="rotate(-32 0 34.9746)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip1_19_870">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(11.8721 36.9897) rotate(-32)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* SVG 2 */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[230px] right-[330px]"
        >
          <g clipPath="url(#clip0_19_877)">
            <rect
              x="38.4902"
              width="51"
              height="51"
              rx="10"
              transform="rotate(49 38.4902 0)"
              fill="#3B82F6"
            />
            <g clipPath="url(#clip1_19_877)">
              <path
                d="M39.2533 16.1202C38.0396 14.724 35.9469 14.5776 34.5507 15.7914L21.9722 26.7257C21.305 27.3057 20.8955 28.1269 20.8339 29.0089C20.7722 29.8908 21.0634 30.761 21.6434 31.4282L30.3908 41.491L24.1016 46.9582L31.1554 47.4514L30.6622 54.5053L36.9514 49.0381L39.1383 51.5538C39.7183 52.221 40.5396 52.6305 41.4215 52.6922C42.3034 52.7538 43.1736 52.4627 43.8408 51.8827L56.4193 40.9483C57.0865 40.3684 57.496 39.5471 57.5577 38.6652C57.6194 37.7833 57.3282 36.913 56.7482 36.2458L39.2533 16.1202ZM45.485 28.3699L46.2496 34.3303L52.0456 35.9169L47.6431 39.744L49.0367 45.1577L43.8696 43.0243L39.4671 46.8513L38.7025 40.8909L32.9065 39.3042L37.309 35.4772L35.9155 30.0635L41.0826 32.1969L45.485 28.3699ZM36.7376 18.3071L42.2047 24.5963L39.689 26.7832L34.2219 20.4939L36.7376 18.3071ZM31.7062 22.6808L34.9865 26.4543L32.4708 28.6412L29.1905 24.8676L31.7062 22.6808ZM26.6748 27.0545L32.1419 33.3438L29.6262 35.5306L24.1591 29.2414L26.6748 27.0545Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_19_877">
              <rect
                x="38.4902"
                width="51"
                height="51"
                rx="10"
                transform="rotate(49 38.4902 0)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip1_19_877">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(38.6533 7.80859) rotate(49)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white font-bold font-inter text-[79.02px] leading-[97.75px] tracking-[-1px] mb-6">
            Tailored Training for
            <br />
            Companies & Freelancers
          </h1>
          <p className="text-[#DBDBDB] font-medium font-inter text-[32px] leading-[30.6px] tracking-normal mb-8">
            Customized Learning Solutions for Your Business Needs or
            <br />
            Request Courses to Upskill
          </p>
          <button className="bg-[#3B82F6] w-[212px] h-[51px] hover:bg-[#3B82F6] text-white font-bold font-inter text-[15px] leading-[21px] tracking-normal py-3 px-6 rounded-full flex items-center gap-2 transition-colors">
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center text-sm">
              <span className="font-normal font-satoshi text-[16px] leading-[100%] tracking-normal text-black text-opacity-60 cursor-pointer">
                Home
              </span>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-[#3B82F6] hover:underline font-normal font-inter text-[16px] leading-[100%] tracking-normal cursor-pointer">
                Training Modules
              </span>
            </div>
          </nav>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("freelancers")}
                className={`py-2 px-4 font-normal text-[16px] transition-colors ${
                  activeTab === "freelancers"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                For Freelancers
              </button>
              <button
                onClick={() => setActiveTab("companies")}
                className={`py-2 px-4 font-normal text-[16px] transition-colors ${
                  activeTab === "companies"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                For Companies
              </button>
            </div>
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold font-inter text-[32px] leading-[100%] tracking-normal">
              {activeTab === "freelancers" ? "Courses" : "Pre Built Courses"}
            </h2>
            <div className="flex items-center space-x-6">
              <span className="text-[#00000099] text-opacity-60 font-normal font-satoshi text-[16px] leading-[100%] tracking-normal">
                Showing 1-10 of 100 Courses
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-black text-opacity-60 font-normal font-satoshi text-[16px] leading-[100%] tracking-normal">
                  Sort by:
                </span>
                <select className="rounded px-3 py-1 font-medium font-satoshi text-[16px] leading-[100%] tracking-normal bg-white">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-evenly w-[1420px]">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 w-[454px] h-[534px] border-black p-3 border-opacity-15 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Course Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                {/* Course Info */}
                <div className="py-5 px-1">
                  <h3 className="font-medium font-inter text-[25px] leading-[34px] tracking-normal mb-3">
                    {course.title}
                  </h3>

                  <p className="text-[#444444] font-normal font-inter text-[20px] leading-[150%] tracking-normal mb-4 ">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="flex items-center gap-4 mb-4 font-normal font-poppins text-[18px] leading-[19.5px] tracking-normal text-gray-600">
                    <span className="px-3 py-1 w-[124px] h-[42px] rounded-lg border border-black border-opacity-15 bg-white text-[#0F3D3E99] text-opacity-60 flex items-center justify-center">
                      {course.videos}
                    </span>
                    <span className="px-3 py-1 w-[87px] h-[42px] rounded-lg border border-black border-opacity-15 bg-white text-[#0F3D3E99] text-opacity-60 flex items-center justify-center">
                      {course.hours}
                    </span>
                  </div>

                  {/* Price and Enroll Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium font-inter text-[32px] leading-[13px] tracking-normal text-[#15803D]">
                        {course.price}
                      </span>
                      {course.priceUnit && (
                        <span className="text-sm text-gray-600">
                          {course.priceUnit}
                        </span>
                      )}
                    </div>
                    <button className="bg-[#15803D] hover:bg-[#15803D] w-[142px] h-[46px] text-white font-semibold font-inter text-[20px] leading-[26px] tracking-normal py-2 px-4 rounded-[15px] transition-colors">
                      {activeTab === "freelancers"
                        ? "Enroll Now"
                        : "Enroll Team"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Training Request Button - Only for Companies */}
          {activeTab === "companies" && (
            <div className="flex justify-center mt-12">
              <button className="bg-[#3B82F6] w-[264px] h-[51px] hover:bg-[#3B82F6] text-white font-bold font-inter text-[15px] leading-[21px] tracking-normal py-3 px-6 rounded-full flex items-center gap-2 transition-colors">
                Custom Training Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
