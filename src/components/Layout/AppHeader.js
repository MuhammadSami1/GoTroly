import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Links = [
  { key: "1", label: "FLASH SALES", to: "/flashsales" },
  { key: "3", label: "NEW ARRIVALS", to: "/newarrivals" },
  { key: "2", label: "PRODUCTS", to: "/products" },
  { key: "4", label: "TOP SELLING", to: "/topselling" },
  { key: "5", label: "AUDIO", to: "/audio" },
  { key: "6", label: "SMART PHONES", to: "/smartphones" },
  { key: "7", label: "CHARGING & POWER", to: "/chargingphones" },
  // Add more links as needed
];

const AppHeader = () => {
  return (
    <header>
      <nav className=" flex justify-end bg-black text-yellow-400 h-20 text-sm md:text-lg lg:text-xl font-semibold shadow-md">
        <div className="border-r-2 border-yellow-400 my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="#">SEARCH</Link>
        </div>
        <div className="border-r-2 border-yellow-400 my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="#">LOGIN</Link>
        </div>
        <div className="my-4 p-3 hover:bg-yellow-400 hover:text-black">
          <Link to="#">REGISTER</Link>
        </div>
      </nav>
      <nav className="sticky top-0 z-10 bg-white text-sm md:text-lg lg:text-xl font-semibold shadow-md">
        <div className="flex justify-between px-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-20 md:h-20 lg:h-20" />
          </Link>
          {/* Links*/}
          <ul className="flex flex-wrap items-center space-x-1 md:space-x-2 lg:space-x-4">
            {Links.map(({ key, label, to }) => (
              <li
                key={key}
                className="hover:bg-yellow-400 px-2 pt-6 pb-8 md:px-4"
              >
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
