import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shae Logo" className="h-10 w-auto object-contain" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Shae
          </h2>
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
          <li><a href="#technology" className="hover:text-pink-500 transition">Technology</a></li>
          <li><a href="#shaecoins" className="hover:text-pink-500 transition">Shae Coins</a></li>
          <li><a href="#exchange" className="hover:text-pink-500 transition">Exchange</a></li>
          <li><a href="#brands" className="hover:text-pink-500 transition">For Brands</a></li>
          <li><a href="#investors" className="hover:text-pink-500 transition">Investors</a></li>
        </ul>
        {/* CTA Button */}
        <Link to="/join-ico" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition duration-300">
        Join ICO </Link>
      </div>
    </nav>
  );
};

export default Navbar;











// import React from "react";
// import logo from "../assets/logo.jpg";

// const Navbar = () => {
  
//   return (
//     <header className="fixed w-full bg-black/80 backdrop-blur-md text-white px-8 py-4 z-50">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Shae</h1>
//         <h2 className="logo">Shae</h2>
//       <div className="logo-container">
//         <img src={logo} alt="Shae Logo" className="h-12 w-auto object-contain" />
//       </div>
//         <nav className="space-x-6 hidden md:flex font-medium">
//           <a href="#home">Home</a>
//           <a href="#technology">Technology</a>
//           <a href="#shaecoins">Shae Coins</a>
//           <a href="#exchange">Exchange</a>
//           <a href="#forbrands">For Brands</a>
//           <a href="#investors">Investors</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
