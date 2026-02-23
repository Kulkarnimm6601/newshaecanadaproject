import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 
      bg-transparent 
      backdrop-blur-2xl ">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Shae Logo"
            className="h-15 w-auto object-contain"
          />
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-green-600 font-medium">
          <li><a href="#home" className="hover:text-green-500 transition duration-300">Home</a></li>
          <li><a href="#technology" className="hover:text-green-500 transition duration-300">Technology</a></li>
          <li><a href="#shaecoins" className="hover:text-green-500 transition duration-300">Shae Coins</a></li>
          <li><a href="#exchange" className="hover:text-green-500 transition duration-300">Exchange</a></li>
          <li><a href="#brands" className="hover:text-green-500 transition duration-300">For Brands</a></li>
          <li><a href="#investors" className="hover:text-green-500 transition duration-300">Investors</a></li>
        </ul>

        {/* CTA Button */}
        <Link
  to="/join-ico"
  className="
    hidden md:block
    px-5 py-2 rounded-lg
    text-white font-semibold
    bg-transparent
    hover:bg-green-500
    hover:shadow-lg hover:shadow-green-500/30
    transition-all duration-300
  "
>
  Join ICO
</Link>
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
