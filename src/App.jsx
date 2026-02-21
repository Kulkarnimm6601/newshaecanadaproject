import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import ShaeCoins from "./components/ShaeCoins";
import Exchange from "./components/Exchange";
import ForBrands from "./components/ForBrands";
import Investors from "./components/Investors";
import Footer from "./components/Footer";
import JoinICO from "./pages/JoinICO/JoinICO";
import RequestInvestorDesk from "./pages/RIDesk/RequestInvestorDesk";
import JoinEarlyAccessList from "./pages/JEAList/JoinEarlyAccessList";
import ApplytoJoinShaeMarketplace from "./pages/AtJSMPlace/ApplytoJoinShaeMarketplace";

// Home page grouping
function Home() {
  return (
    <>
      <Hero />
      <Technology />
      <ShaeCoins />
      <Exchange />
      <ForBrands />
      <Investors />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-black text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-ico" element={<JoinICO />} />
          <Route path="/request-investor-desk" element={<RequestInvestorDesk />} />
          <Route path="/join-Early-access-list" element={<JoinEarlyAccessList />} />
          <Route path="/apply-to-join-shae-marketplace" element={<ApplytoJoinShaeMarketplace />} />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Investors />} />
          <Route path="/request-investor-desk" element={<RequestInvestorDesk />} />
        </Routes> */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
