import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://yupiter.vebsigns.com/shae/imager/header1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay (Improves Text Visibility) */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Optional Glow Effects (Keep if you want futuristic look) */}
      {/* <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] 
        bg-pink-600 opacity-20 rounded-full blur-[140px] z-0">
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] 
        bg-purple-600 opacity-20 rounded-full blur-[140px] z-0">
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 whitespace-nowrap">
  Personalized Skin & Hair Intelligence
</h1>
        <p className="text-white-300 text-lg md:text-xl max-w-1xl mx-auto mb-8">
          We’re building the world’s first ecosystem that scans your skin with AI,
          recommends what truly works, and rewards you with tokens you can use across our marketplace.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/request-investor-desk"
            className="px-5 py-2 rounded-lg text-white font-semibold
                       bg-transparent border border-white/20
                       hover:bg-gradient-to-r hover:from-green-800 hover:to-white-500
                       hover:shadow-lg hover:shadow-white-500/30
                       transition-all duration-300"
          >
            Request Investor Deck
          </Link>

          <Link
            to="/join-early-access-list"
            className="px-5 py-2 rounded-lg text-white font-semibold
                       bg-green-600 hover:bg-green-700
                       transition duration-300"
          >
            Join Early Access List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;