import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "/assets/logo.png";
import { FaGooglePlay, FaApple, FaWindows } from "react-icons/fa";
import { FaBehance, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const platformIcons = [
  {
    icon: () => <FaApple className="w-6 h-6" />,
    label: "App Store",
  },
  {
    icon: () => <FaGooglePlay className="w-6 h-6" />,
    label: "Google Play",
  },
  {
    icon: () => <FaWindows className="w-6 h-6" />,
    label: "Windows",
  },
];

const socialLinks = [
  {
    icon: () => <FaFacebookF className="w-6 h-6" />,
    label: "Facebook",
    link: "https://facebook.com",
  },
  {
    icon: () => <FaTwitter className="w-6 h-6" />,
    label: "Twitter",
    link: "https://twitter.com",
  },
  {
    icon: () => <FaYoutube className="w-6 h-6" />,
    label: "YouTube",
    link: "https://youtube.com",
  },
  {
    icon: () => <FaLinkedinIn className="w-6 h-6" />,
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    icon: () => <FaBehance className="w-6 h-6" />,
    label: "Behance",
    link: "https://behance.net",
  },
];

const footerLinks = {
  leftColumn: [
    { title: "What We Do", href: "#" },
    { title: "Our Services", href: "#" },
    { title: "User Strategy", href: "#" },
    { title: "Blogs & Guides", href: "#" },
    { title: "FAQs", href: "#" },
  ],
  rightColumn: [
    { title: "About Freelance", href: "#" },
    { title: "Contact & Support", href: "#" },
    { title: "Success History", href: "#" },
    { title: "Setting & Privacy", href: "#" },
    { title: "Company History", href: "#" },
  ],
};

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Youtube, href: "#", label: "YouTube" },
//   {
//     icon: () => (
//       <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
//         <path d="M7.5 5.6L10 7L8.6 9.5c.4.8 1.2 1.4 2.1 1.4s1.7-.6 2.1-1.4L11.4 7l2.5-1.4L12.5 3 7.5 5.6zm9.9 9.9L14.9 17l1.4 2.5c-.4.8-1.2 1.4-2.1 1.4s-1.7-.6-2.1-1.4L13.5 17l-2.5 1.4L12.5 21l5-2.6z" />
//       </svg>
//     ),
//     href: "#",
//     label: "Behance",
//   },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
// ];

// const platformIcons = [
//   {
//     icon: () => (
//       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//         <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//       </svg>
//     ),
//     label: "App Store",
//   },
//   {
//     icon: () => (
//       <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
//         <path d="M325.3 234.3L104.6 18.1c-6.5-6.5-15.4-10.1-24.6-10.1C35.8 8 0 43.8 0 87.9v336.2c0 44.1 35.8 79.9 79.9 79.9 9.2 0 18.1-3.6 24.6-10.1l220.7-216.2c10.9-10.6 10.9-27.8 0.1-38.4zM384 277.1v-42.3c0-15.6-8.5-29.8-22.3-37.3L137 77.4c-5.2-2.8-10.9-4.3-16.7-4.3-23.2 0-42 18.8-42 42v281.8c0 23.2 18.8 42 42 42 5.8 0 11.5-1.5 16.7-4.3l224.7-120.1c13.8-7.4 22.3-21.6 22.3-37.3z" />
//       </svg>
//     ),
//     label: "Google Play",
//   },
//   {
//     icon: () => (
//       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//         <path d="M0 3.449L10.5 2v8.803L0 10.99V3.449zM13.5 2L24 3.449v7.541L13.5 10.803V2zm0 9.75L24 12.999v7.5L13.5 21.25v-9.5zM10.5 21.25L0 20.001v-7.5L10.5 11.75v9.5z" />
//       </svg>
//     ),
//     label: "Windows",
//   },
// ];

const Footer = () => {
  return (
    <footer className="bg-[#161C2D] text-white py-16 w-[1920px] h-[505.95px]">
      <div className="text-center text-gray-400 -mt-7 mb-5">
        <p>
          © 2025{" "}
          <span className="text-blue-400 font-semibold">FREELANCE-224</span>
          {" • All Rights Reserved"}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Freelance Logo"
                className="w-[94.87px] h-[78px] object-contain"
              />
              <span className="font-bold font-inter text-[32px] tracking-normal">
                Freelance
              </span>
            </div>

            {/* Description */}
            <p className="text-[#6E727D] mb-8 font-medium font-inter text-[15.8px] leading-[30.6px] tracking-normal">
              Sed ut perspiciatis undmnis iste natus error sit voluptatem
              accusantium dolore udantiuy totam rem aperiam.
            </p>

            {/* Platform Icons */}
            <div className="flex space-x-4">
              {platformIcons.map((platform, index) => (
                <div
                  key={index}
                  className="w-[24px] h-[24px] rounded-lg flex items-center justify-center text-[#6E727D] transition-colors cursor-pointer"
                  title={platform.label}
                >
                  <platform.icon />
                </div>
              ))}
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column Links */}
            <div>
              <ul className="space-y-4 w-[161.98px] h-[192.97px] mt-[60px] ml-[50px]">
                {footerLinks.leftColumn.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#6E727D] hover:text-[#6E727D] transition-colors flex items-center"
                    >
                      <span className="mr-2 font-bold font-inter text-[15.94px] leading-[30.6px] tracking-normal">
                        ›
                      </span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Links */}
            <div>
              <ul className="space-y-4 w-[162.52px] h-[192.97px] mt-[60px]">
                {footerLinks.rightColumn.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#6E727D] hover:text-[#6E727D] transition-colors flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="lg:col-span-1">
            <div className="flex flex-wrap mt-[60px] gap-3 justify-start lg:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-[35px] h-[35px] text-[14px] bg-[#ECEBFD] text-[#161C2D] rounded-full flex items-center justify-center hover:bg-[#ECEBFD] transition-colors"
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className=" mt-2 pt-8">
          <div className="text-center text-gray-400">
            <p>
              © 2025{" "}
              <span className="text-blue-400 font-semibold">FREELANCE-224</span>
              {" • All Rights Reserved"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
