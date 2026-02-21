import React from "react";
import logo from "../assets/logo.jpg";


const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-gray-800 px-6 pt-20 pb-10">

      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <img src={logo} alt="Shae Logo" className="h-30 w-auto object-contain" />
          <p className="text-gray-400 leading-relaxed">
            The future of beauty is here. <br />
            AI-powered personalization meets blockchain innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-pink-500">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-pink-500 transition">Technology</a></li>
            <li><a href="#shae-coins" className="hover:text-pink-500 transition">Shae Coins</a></li>
            <li><a href="#shae-exchange" className="hover:text-pink-500 transition">Exchange</a></li>
            <li><a href="#for-brands" className="hover:text-pink-500 transition">For Brands</a></li>
            <li><a href="#for-investors" className="hover:text-pink-500 transition">Investors</a></li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-pink-500">
            Address
          </h3>
          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              170 Fort York Boulevard <br />
              Toronto – M5V 0E6
            </p>

            <p>
              209 – Fort York, <br />
              Toronto – M5V 3K9
            </p>

            <p className="text-pink-500 font-medium">
              +1-742-688-7778
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © 2025 Shae. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
