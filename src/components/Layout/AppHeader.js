import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.png";



const AppHeader = () => {
  return (
    <header>
      <nav className=" flex justify-end bg-black text-yellow-400 h-20 text-sm md:text-lg lg:text-xl font-semibold shadow-md px-9">
        <div className="border-r-2 border-yellow-400 my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="/search">SEARCH</Link>
        </div>
        <div className="border-r-2 border-yellow-400 my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="/login">LOGIN</Link>
        </div>
        <div className="my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="/register">REGISTER</Link>
        </div>
      </nav>
      <div className="sticky top-0 z-10 bg-white text-sm md:text-lg lg:text-xl font-semibold">
        <div className="flex justify-between items-center px-9 pt-4 pb-1">

          <Link to="/">
            <img src={logo1} alt="logo" className="h-16 w-full" />
          </Link>

          <div className="flex gap-5 flex-wrap">
            <Link to="/flashsales" className="hover:bg-yellow-400 px-4 pb-7 pt-2">FLASH SALE</Link>
            <Link to="/newarrivals" className="hover:bg-yellow-400 px-4 pb-7 pt-2">NEW ARIVALS </Link>
            <Link to="/products" className="hover:bg-black hover:text-yellow-400 px-4 pb-7 pt-2">PRODUCTS</Link>
            <Link to="/topselling" className="hover:bg-black hover:text-yellow-400 px-4 pb-7 pt-2">TOP SELLING </Link>
            <Link to="/audio" className="hover:bg-black hover:text-yellow-400 px-4 pb-7 pt-2">AUDIO</Link>
            <Link to="/smartphones" className="hover:bg-black hover:text-yellow-400 px-4 pb-7 pt-2">SMART PHONES</Link>
            <Link to="/chargingphones" className="hover:bg-black hover:text-yellow-400 px-4 pb-7 pt-2">CHARGING AND POWER</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
