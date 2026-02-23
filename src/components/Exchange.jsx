import React from "react";

const Exchange = () => {
  return (
    <section id="exchange" className="py-24 bg-green-50 text-green-900 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Shae Exchange
          </h2>
          <p className="text-green-800 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae Exchange is the dedicated trading platform for Shae Coin
            and other leading cryptocurrencies.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Shae Coin Trading */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 10h4l3-6 4 12 3-6h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Shae Coin Trading</h3>
            <p className="text-green-700 text-sm">
              Primary home for Shae Coins post-ICO.
            </p>
          </div>

          {/* Multi-Currency Support */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3h12v14H4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Currency Support</h3>
            <p className="text-green-700 text-sm">
              Trade BTC, ETH, USDT, and top altcoins.
            </p>
          </div>

          {/* Integrated Payments */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3h10v14H5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Integrated Payments</h3>
            <p className="text-green-700 text-sm">
              Seamless conversion within the Shae marketplace.
            </p>
          </div>

          {/* Staking & Yield */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3l3 6-3 6-3-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Staking & Yield</h3>
            <p className="text-green-700 text-sm">
              Earn rewards and exclusive benefits.
            </p>
          </div>

          {/* Investor Value */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0l3 6-3 6-3-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Investor Value</h3>
            <p className="text-green-700 text-sm">
              Exchange revenues fuel long-term growth opportunities.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-green-900 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-green-800 hover:scale-105 transition duration-300">
            Explore Shae Exchange
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exchange;
