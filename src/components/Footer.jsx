import React from "react";
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-green-800 text-white border-t border-green-800 px-6 pt-20 pb-10">

      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div className="space-y-4">
          <img src={logo} alt="Shae Logo" className="h-20 w-auto object-contain" />
          <p className="text-white leading-relaxed">
            The future of beauty is here. <br />
            AI-powered personalization meets blockchain innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-green-600">
            Quick Links
          </h3>
          <ul className="space-y-3 text-white">
            <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-green-600 transition">Technology</a></li>
            <li><a href="#shae-coins" className="hover:text-green-600 transition">Shae Coins</a></li>
            <li><a href="#shae-exchange" className="hover:text-green-600 transition">Exchange</a></li>
            <li><a href="#for-brands" className="hover:text-green-600 transition">For Brands</a></li>
            <li><a href="#for-investors" className="hover:text-green-600 transition">Investors</a></li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-green-600">
            Address
          </h3>
          <div className="text-white space-y-4 leading-relaxed">
            <p>
              170 Fort York Boulevard <br />
              Toronto – M5V 0E6
            </p>

            <p>
              209 – Fort York, <br />
              Toronto – M5V 3K9
            </p>

            <p className="text-white font-medium">
              +1-742-688-7778
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-1000 mt-16 pt-6 text-center text-white text-sm">
        © 2025 Shae. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
