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
  { icon: Linkedin, href: "#", label: "LinkedIn" },
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
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                🍎
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                🤖
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                🪟
              </div>
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
                  <social.icon className="w-5 h-5" />
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
