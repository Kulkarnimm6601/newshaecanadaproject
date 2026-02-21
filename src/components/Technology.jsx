import React from "react";
import search from "../assets/search.png";
import recco from "../assets/recco.png";
import routi from "../assets/routi.jpg";
import w3 from "../assets/w3.png";

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            
            Shae uses computer vision to analyze your skin and hair through a simple scan.
            We create personalized recommendations, track progress over time, and connect you
            to a marketplace of trusted products. Every interaction earns you
            <span className="text-pink-500 font-semibold"> Shae Coins</span> —
            a token you can spend, trade, or stake.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={search} alt="Shae Logo" className="h-10 w-auto object-contain" />
              AI-Powered Scans
            </h3>
            <p className="text-gray-400">
              Detect hydration, sensitivity, pigmentation, and hair health with precision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={recco} alt="Shae Logo" className="h-10 w-auto object-contain" />
              Smart Recommendations
            </h3>
            <p className="text-gray-400">
              Get matched with dermatologist-backed, brand-agnostic product suggestions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={routi} alt="Shae Logo" className="h-10 w-auto object-contain" />
              Routine Tracking
            </h3>
            <p className="text-gray-400">
              Build and monitor your daily skincare and haircare routine inside the Shae app.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={w3} alt="Shae Logo" className="h-10 w-auto object-contain" />
              Web3 Transparency
            </h3>
            <p className="text-gray-400">
              Purchases and rewards are securely tracked on blockchain.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;
