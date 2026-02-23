import React from "react";
import search from "../assets/search.png";
import recco from "../assets/recco.png";
import routi from "../assets/routi.jpg";
import w3 from "../assets/w3.png";

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-green-50 text-green-900 px-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>

          <p className="text-green-800 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae uses computer vision to analyze your skin and hair through a simple scan.
            We create personalized recommendations, track progress over time, and connect you
            to a marketplace of trusted products. Every interaction earns you
            <span className="text-green-600 font-semibold"> Shae Coins</span> —
            a token you can spend, trade, or stake.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 transition duration-300 hover:scale-105 shadow-md text-center">
  <img
    src={search}
    alt="AI-Powered Scans"
    className="h-20 w-auto object-contain mx-auto mb-2"
  />
  <h3 className="text-xl font-semibold mb-4 text-green-600">
    AI-Powered Scans
  </h3>
  <p className="text-green-800">
    Detect hydration, sensitivity, pigmentation, and hair health with precision.
  </p>
</div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 transition duration-300 hover:scale-105 shadow-md text-center">
  <img
    src={recco}
    alt="Smart Recommendations"
    className="h-20 w-auto object-contain mx-auto mb-2"
  />
  <h3 className="text-xl font-semibold mb-4 text-green-600">
    Smart Recommendations
  </h3>
  <p className="text-green-800">
    Get matched with dermatologist-backed, brand-agnostic product suggestions.
  </p>
</div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 transition duration-300 hover:scale-105 shadow-md text-center">
  <img
    src={routi}
    alt="Routine Tracking"
    className="h-20 w-auto object-contain mx-auto mb-2"
  />
  <h3 className="text-xl font-semibold mb-4 text-green-600">
    Routine Tracking
  </h3>
  <p className="text-green-800">
    Build and monitor your daily skincare and haircare routine inside the Shae app.
  </p>
</div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 transition duration-300 hover:scale-105 shadow-md text-center">
  <img
    src={w3}
    alt="Web3 Transparency"
    className="h-20 w-auto object-contain mx-auto mb-2"
  />
  <h3 className="text-xl font-semibold mb-4 text-green-600">
    Web3 Transparency
  </h3>
  <p className="text-green-800">
    Purchases and rewards are securely tracked on blockchain.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Technology;