import React from "react";
import { Link } from "react-router-dom";
import coinsIcon from "../assets/coins.png"; // Add your icons
import handshakeIcon from "../assets/handshake.png";
import marketIcon from "../assets/market.png";

const Investors = () => {
  return (
    <section
      id="investors"
      className="py-24 bg-green-50 text-green-900 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For Investors and Early Believers
          </h2>
          <p className="text-green-800 max-w-3xl mx-auto text-lg leading-relaxed">
            We are raising seed funding to build the world’s first AI-powered,
            token-driven beauty ecosystem. <em>Investors gain early access</em> 
            to token allocation, equity participation, and a front-row seat to a 
            trillion-dollar opportunity.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Early Token Allocation */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
            <img src={coinsIcon} alt="Coins" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Early Token Allocation
            </h3>
            <p className="text-green-800 leading-relaxed">
              Secure <em>exclusive bonuses</em> for early backers.
            </p>
          </div>

          {/* Equity + Token Model */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
            <img src={handshakeIcon} alt="Handshake" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Equity + Token Model
            </h3>
            <p className="text-green-800 leading-relaxed">
              Participate in a <em>hybrid model</em> (details in deck).
            </p>
          </div>

          {/* Massive Market */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
            <img src={marketIcon} alt="Market" className="w-12 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Massive Market
            </h3>
            <p className="text-green-800 leading-relaxed">
              Backed by <em>trillion-dollar</em> beauty + crypto industries.
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-24 text-center flex flex-wrap justify-center gap-6">
          <Link 
            to="/request-investor-desk" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
          >
            Request Investor Deck
          </Link>
          <button 
            className="border border-green-600 px-6 py-3 rounded-lg font-semibold text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
          >
            Book a Call with the Founder
          </button>
        </div>

      </div>
    </section>
  );
};

export default Investors;