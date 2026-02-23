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
      className="py-24 bg-white text-black px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl  mb-6 text-green-700">
        For Brands
      </h2>
          <p className="text-green-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae is more than a sales channel — it’s a growth platform for beauty brands.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* AI Discoverability */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition duration-300 text-center">
            <img src={s} alt="AI Discoverability" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              AI Discoverability
            </h3>
            <p className="text-green-600 leading-relaxed">
              Products recommended intelligently to relevant customers.
            </p>
          </div>

          {/* Instant Payments */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition duration-300 text-center">
            <img src={ip} alt="Instant Payments" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Instant Payments
            </h3>
            <p className="text-green-600 leading-relaxed">
              Receive global payouts in Shae Coins.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition duration-300 text-center">
            <img src={db} alt="Analytics Dashboard" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Analytics Dashboard
            </h3>
            <p className="text-green-600 leading-relaxed">
              Insights into customer behavior and retention.
            </p>
          </div>

          {/* Web3 Community Access */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition duration-300 text-center">
            <img src={w3} alt="Web3 Community Access" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Web3 Community Access
            </h3>
            <p className="text-green-600 leading-relaxed">
              Connect with an innovation-driven, crypto-native audience.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link to="/apply-to-join-shae-marketplace" className="inline-block bg-white border border-gray-200 px-6 py-3 rounded-full text-green-800 font-semibold hover:bg-green-50 hover:scale-105 transition duration-300 shadow-sm">
            Apply to Join Shae Marketplace
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ForBrands;