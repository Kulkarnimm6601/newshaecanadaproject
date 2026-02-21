import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  return (
    <section
      id="investors"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            For Investors{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              & Early Believers
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We are raising seed funding to build the world’s first AI-powered,
            token-driven beauty ecosystem. Investors gain early access to token
            allocation, equity participation, and a front-row seat to a
            trillion-dollar opportunity.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Early Token Allocation */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Early Token Allocation
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Secure exclusive bonuses for early backers.
            </p>
          </div>

          {/* Equity + Token Model */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Equity + Token Model
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Participate in a hybrid investment model combining equity and tokens.
              (Full details available in the investor deck.)
            </p>
          </div>

          {/* Massive Market */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Massive Market
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Backed by trillion-dollar beauty and cryptocurrency industries.
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-24 text-center flex flex-wrap justify-center gap-6">
          <Link to="/request-investor-desk" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition duration-300">
                  Request Investor Deck </Link>

          <button className="border border-pink-500 px-10 py-4 rounded-xl font-semibold text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
            Book a Call with the Founder
          </button>
        </div>

      </div>
    </section>
  );
};

export default Investors;

