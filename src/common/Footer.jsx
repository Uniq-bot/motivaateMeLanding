import React from "react";

const Footer = () => {
  const footerData = {
    logo: {
      text: "MOTIVATEME",
      tagline: "Empowering people to stay motivated and connected every day."
    },
    product: {
      title: "Product",
      links: [
        { id: 1, name: "Features", url: "#features" },
        { id: 2, name: "Pricing", url: "#pricing" },
        { id: 3, name: "Download", url: "#download" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { id: 1, name: "About", url: "#about" },
        { id: 2, name: "Idea", url: "#idea" },
        { id: 3, name: "Contact", url: "#contact" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { id: 1, name: "Help Center", url: "#help" },
        { id: 2, name: "Privacy Policy", url: "#privacy" },
        { id: 3, name: "Terms of Services", url: "#terms" }
      ]
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-sm">
                  {footerData.logo.text}
                </div>
                <div className="w-16 h-0.5 bg-red-500 mx-auto mt-1"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerData.logo.tagline}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-blue-400 text-lg font-semibold mb-4">
              {footerData.product.title}
            </h3>
            <ul className="space-y-2">
              {footerData.product.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-blue-400 text-lg font-semibold mb-4">
              {footerData.company.title}
            </h3>
            <ul className="space-y-2">
              {footerData.company.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-blue-400 text-lg font-semibold mb-4">
              {footerData.support.title}
            </h3>
            <ul className="space-y-2">
              {footerData.support.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 MOTIVATEME. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;