import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../images/logo1.png";

const AppHeader = () => {
  const [activeFlashSales, setActiveFlashSales] = useState(false);
  const [activeNewArivals, setActiveNewArivals] = useState(false);
  const [activeProducts, setActiveProducts] = useState(false);
  const [activeTopSelling, setActiveTopSelling] = useState(false);
  const [activeAudio, setActiveAudio] = useState(false);
  const [activeSmartPhones, setActiveSmartPhones] = useState(false);
  const [activeChargingPhones, setActiveChargingPhones] = useState(false);

  const location = useLocation();
  const flashSales = location.pathname === "/flashsales";
  const newArivals = location.pathname === "/newarrivals";
  const products = location.pathname === "/products";
  const topSelling = location.pathname === "/topselling";
  const audio = location.pathname === "/audio";
  const smartPhones = location.pathname === "/smartphones";
  const chargingPhones = location.pathname === "/chargingphones";

  useEffect(() => {
    setActiveFlashSales(flashSales);
    setActiveNewArivals(newArivals);
    setActiveProducts(products);
    setActiveTopSelling(topSelling);
    setActiveAudio(audio);
    setActiveSmartPhones(smartPhones);
    setActiveChargingPhones(chargingPhones);
  }, [
    flashSales,
    newArivals,
    products,
    topSelling,
    audio,
    smartPhones,
    chargingPhones,
  ]);

  const specialroute = location.pathname === "/login";
  return (
    <header>
      <nav className=" flex justify-end bg-black text-yellow-400 h-20 text-sm md:text-lg lg:text-xl font-semibold shadow-md px-8">
        <div className="border-r-2 border-yellow-400 my-4 p-3">
          <Link to="/search">SEARCH</Link>
        </div>
        <div className="border-r-2 border-yellow-400 my-4 p-3">
          <Link to="/login">LOGIN</Link>
        </div>
        <div className="my-4 p-3">
          <Link to="/register">REGISTER</Link>
        </div>
      </nav>
      <div className="sticky top-0 z-10 bg-white text-sm md:text-lg lg:text-xl font-semibold">
        <div className="flex justify-between items-center px-7 pt-4">
          <Link to="/">
            <img src={logo1} alt="logo" className="h-16 pb-2" />
          </Link>
          {specialroute || (
            <div className="flex justify-center items-center tracking-tighter">
              <Link
                to="/flashsales"
                className={`hover:bg-yellow-400 px-4 pb-8 pt-2  ${
                  activeFlashSales && "bg-yellow-400"
                }`}
                onClick={() => setActiveFlashSales(!activeFlashSales)}
              >
                FLASH SALE
              </Link>

              <Link
                to="/newarrivals"
                className={`hover:bg-yellow-400 px-4 pb-8 pt-2 ${
                  activeNewArivals && "bg-yellow-400"
                }`}
                onClick={() => setActiveNewArivals(!activeNewArivals)}
              >
                NEW ARIVALS
              </Link>

              <Link
                to="/products"
                className={`hover:text-yellow-400 hover:bg-black px-4 pb-8 pt-2 ${
                  activeProducts && "bg-black text-yellow-400"
                }`}
                onClick={() => setActiveProducts(!activeProducts)}
              >
                PRODUCTS
              </Link>

              <Link
                to="/topselling"
                className={`hover:text-yellow-400 hover:bg-black px-4 pb-8 pt-2 ${
                  activeTopSelling && "bg-black text-yellow-400"
                }`}
                onClick={() => setActiveTopSelling(!activeTopSelling)}
              >
                TOP SELLING
              </Link>

              <Link
                to="/audio"
                className={`hover:text-yellow-400 hover:bg-black px-4 pb-8 pt-2 ${
                  activeAudio && "bg-black text-yellow-400"
                }`}
                onClick={() => setActiveAudio(!activeAudio)}
              >
                AUDIO
              </Link>

              <Link
                to="/smartphones"
                className={`hover:text-yellow-400 hover:bg-black px-4 pb-8 pt-2 ${
                  activeSmartPhones && "bg-black text-yellow-400"
                }`}
                onClick={() => setActiveSmartPhones(!activeSmartPhones)}
              >
                SMART PHONES
              </Link>

              <Link
                to="/chargingphones"
                className={`hover:text-yellow-400 hover:bg-black px-4 pb-8 pt-2 ${
                  activeChargingPhones && "bg-black text-yellow-400"
                }`}
                onClick={() => setActiveChargingPhones(!activeChargingPhones)}
              >
                CHARGING AND POWER
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
