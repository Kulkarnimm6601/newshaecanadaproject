import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#0b0f19] px-6"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]">
        </div>

        {/* Pink Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] 
          bg-pink-600 opacity-20 rounded-full blur-[140px]">
        </div>

        {/* Purple Glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] 
          bg-purple-600 opacity-20 rounded-full blur-[140px]">
        </div>

        {/* Radial Light Center */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.12),transparent_60%)]">
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Personalized Skin & Hair Intelligence
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We’re building the world’s first ecosystem that scans your skin with AI,
          recommends what truly works, and rewards you with tokens you can use across our marketplace.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/request-investor-desk" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition duration-300">
                  Request Investor Deck </Link>

          <Link to="/join-early-access-list" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition duration-300">
                  Join Early Access List </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
