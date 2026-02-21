import React from "react";
import s from "../assets/s.png";
import ip from "../assets/ip.png";
import db from "../assets/db.png";
import w3 from "../assets/w3.png";
import { Link } from "react-router-dom";


const ForBrands = () => {
  return (
    <section
      id="brands"
      className="py-24 bg-gray-300 text-black px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            For{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Brands
            </span>
          </h2>

          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
            Shae is more than a sales channel — it’s a growth platform for beauty brands.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* AI Discoverability */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={s} alt="Shae Logo" className="h-30 w-30 object-contain mx-auto mb-3" />
              AI Discoverability
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Products recommended intelligently to relevant customers.
            </p>
          </div>

          {/* Instant Payments */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={ip} alt="Shae Logo" className="h-30 w-30 object-contain mx-auto mb-3" />
              Instant Payments
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Receive global payouts in Shae Coins.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={db} alt="Shae Logo" className="h-30 w-30 object-contain mx-auto mb-3" />
              Analytics Dashboard
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Insights into customer behavior and retention.
            </p>
          </div>

          {/* Web3 Community Access */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              <img src={w3} alt="Shae Logo" className="h-30 w-30 object-contain mx-auto mb-3" />
              Web3 Community Access
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Connect with an innovation-driven, crypto-native audience.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link to="/apply-to-join-shae-marketplace" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition duration-300">
                            Apply to Join Shae Marketplace </Link>
        </div>

      </div>
    </section>
  );
};

export default ForBrands;
