import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

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
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.5 5.6L10 7L8.6 9.5c.4.8 1.2 1.4 2.1 1.4s1.7-.6 2.1-1.4L11.4 7l2.5-1.4L12.5 3 7.5 5.6zm9.9 9.9L14.9 17l1.4 2.5c-.4.8-1.2 1.4-2.1 1.4s-1.7-.6-2.1-1.4L13.5 17l-2.5 1.4L12.5 21l5-2.6z" />
      </svg>
    ),
    href: "#",
    label: "Behance",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const platformIcons = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    label: "App Store",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-5.009 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-5.009 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997" />
      </svg>
    ),
    label: "Google Play",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M0 3.449L10.5 2v8.803L0 10.99V3.449zM13.5 2L24 3.449v7.541L13.5 10.803V2zm0 9.75L24 12.999v7.5L13.5 21.25v-9.5zM10.5 21.25L0 20.001v-7.5L10.5 11.75v9.5z" />
      </svg>
    ),
    label: "Windows",
  },
]

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                </div>
                {/* Guinea flag colors accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"></div>
              </div>
              <span className="text-2xl font-bold">Freelance</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-8 leading-relaxed">
              Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam.
            </p>

            {/* Platform Icons */}
            <div className="flex space-x-4">
              {platformIcons.map((platform, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
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
              <ul className="space-y-4">
                {footerLinks.leftColumn.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <span className="mr-2">›</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Links */}
            <div>
              <ul className="space-y-4">
                {footerLinks.rightColumn.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
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
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white text-slate-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>
              © 2025 <span className="text-blue-400 font-semibold">FREELANCE-224</span>
              {" • All Rights Reserved"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
