import React from "react";


const ShaeCoin = () => {
  return (
    <section id="shaecoins" className="py-24 bg-gray-300 text-black px-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Shae Coin:{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              The Currency of Beauty 3.0
            </span>
          </h2>

          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
            Shae Coin powers every interaction in our ecosystem. Users earn coins
            through scans, reviews, and engagement. Coins can be used to shop in
            the marketplace, traded on exchanges, or staked for rewards. Brands
            can use coins to promote products transparently.
          </p>
        </div>

        {/* Utility Cards */}
        <div className="space-y-10">

    <div className="flex items-start gap-6">
      <div className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full text-white text-xl">
        🎁
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          Earn : <span className="italic">Rewards Engine</span>
        </h3>
        <p className="text-gray-600 mt-2">
          Earn Shae Coins for purchases, reviews, referrals, and engagement.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-6">
      <div className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full text-white text-xl">
        💳
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          Spend : <span className="italic">Universal Payments</span>
        </h3>
        <p className="text-gray-600 mt-2">
          Brands are settled in Shae Coins, regardless of customer payment method.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-6">
      <div className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full text-white text-xl">
        📈
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          Trade : <span className="italic">Tradeable Asset</span>
        </h3>
        <p className="text-gray-600 mt-2">
          Stake, trade, and hold Shae Coins on supported exchanges.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-6">
      <div className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full text-white text-xl">
        🛍️
      </div>
      <div>
        <h3 className="text-xl font-semibold italic">
          Virtual Store Utility
        </h3>
        <p className="text-gray-600 mt-2">
          Shae Coins unlock exclusive access in our Web3 skincare marketplace.
        </p>
      </div>
    </div>

  </div>


      </div>
    </section>
  );
};

export default ShaeCoin;

