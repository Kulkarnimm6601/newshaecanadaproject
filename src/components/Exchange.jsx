import React from "react";

const Exchange = () => {
  return (
    <section
      id="exchange"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Shae{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Exchange
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae Exchange is the dedicated trading platform for Shae Coin
            and other leading cryptocurrencies.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Shae Coin Trading */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Shae Coin Trading
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Primary home for Shae Coins post-ICO.
            </p>
          </div>

          {/* Multi-Currency Support */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Multi-Currency Support
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Trade BTC, ETH, USDT, and top altcoins.
            </p>
          </div>

          {/* Integrated Payments */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Integrated Payments
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Seamless conversion within the Shae marketplace.
            </p>
          </div>

          {/* Staking & Yield */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Staking & Yield
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Earn rewards and exclusive benefits.
            </p>
          </div>

          {/* Investor Value */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">
              Investor Value
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Exchange revenues fuel long-term growth opportunities.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 rounded-xl font-semibold text-white hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/20">
            Explore Shae Exchange
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exchange;

