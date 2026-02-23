import React from "react";
import shaeCoinImg from "../assets/shaeCoinImg.png"; // Replace with your coin image
import reward from "../assets/reward.png";
import up from "../assets/up.png";
import ta from "../assets/ta.png";
import vsu from "../assets/vsu.png";


const ShaeCoin = () => {
  return (
    <section id="shaecoins" className="py-24 bg-[#FAF9F6] text-[#1A1A1A] px-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl  mb-6 text-green-700">
        Shae Coin: The Currency of Beauty 3.0
      </h2>
    </div>

          <p className="text-green-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae Coin powers every interaction in our ecosystem. Users earn coins
            through scans, reviews, and engagement. Coins can be used to shop in
            the marketplace, traded on exchanges, or staked for rewards. Brands
            can use coins to promote products transparently.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          {/* Left Cards */}
          <div className="flex-1 space-y-10">

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center ">
                <img
                    src={reward}
                    alt="AI-Powered Scans"
                    className="h-20 w-auto object-contain mx-auto mb-2"
                  />
              </div>
              <div>
                
                <h3 className="text-xl font-semibold text-green-800">
                  Earn : <span className="italic">Rewards Engine</span>
                </h3>
                <p className="text-green-600 mt-2">
                  Earn Shae Coins for purchases, reviews, referrals, and engagement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center ">
                <img
                    src={up}
                    alt="AI-Powered Scans"
                    className="h-20 w-auto object-contain mx-auto mb-2"
                  />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800">
                  Spend : <span className="italic">Universal Payments</span>
                </h3>
                <p className="text-green-600 text-green-800 mt-2">
                  Brands are settled in Shae Coins, regardless of customer payment method.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
               <img
                    src={ta}
                    alt="AI-Powered Scans"
                    className="h-20 w-auto object-contain mx-auto mb-2"
                  />
              </div>
              <div>
                <h3 className="text-xl text-green-800 font-semibold">
                  Trade : <span className="italic">Tradeable Asset</span>
                </h3>
                <p className="text-green-600 mt-2">
                  Stake, trade, and hold Shae Coins on supported exchanges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center ">
                <img
                    src={vsu}
                    alt="AI-Powered Scans"
                    className="h-20 w-auto object-contain mx-auto mb-2"
                  />
              </div>
              <div>
                <h3 className="text-xl text-green-800 font-semibold italic">
                  Virtual Store Utility
                </h3>
                <p className="text-green-600 mt-2">
                  Shae Coins unlock exclusive access in our Web3 skincare marketplace.
                </p>
              </div>
            </div>
          </div>

          {/* Right Coin Image */}
          <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
             <img
  src={shaeCoinImg}
  alt="Shae Coin"
  className="w-48 h-48 object-contain mb-4"
  style={{
    animation: "float 4s ease-in-out infinite",
  }}
/>
              <p className="text-gray-700 text-center">
                The native currency of the beauty blockchain ecosystem
              </p>
              <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
                Join the ICO Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShaeCoin;