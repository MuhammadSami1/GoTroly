import React from "react";
import FlashSalesCard from "../components/Layout/FlashSalesCard";
import FlashSalesOffers from "../components/Layout/FlashSalesOffers";
import Slide2 from "../images/Slide2.jpg";

const FlashSales = () => {

  return (
    <>
      {/* Flash Sales Card Component*/}
      <div className="flex flex-wrap justify-center bg-yellow-400 gap-x-16 gap-y-6 py-6 px-6">
        <FlashSalesCard />
        <FlashSalesCard />
        <FlashSalesCard />
        <FlashSalesCard />
        <FlashSalesCard />
        <FlashSalesCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        <div>
          <img src={Slide2} alt="slide" />
        </div>
        <div className="bg-black text-yellow-400">
          <h3 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl py-7  tracking-tighter uppercase lg:py-20">Big Offer!</h3>
          <p className="uppercase text-2xl sm:text-4xl md:text-3xl lg:text-5xl tracking-tighter font-bold">Camera lens now 10% off on</p>
          <p className="uppercase text-2xl sm:text-4xl md:text-3xl  lg:text-5xl tracking-tighter sm:pt-1 pt-3 font-bold">entire stock !!!</p>
        </div>
      </div>


      {/* Flash Sales Offers Component */}
      <div>
        <div className="text-center p-5 text-2xl font-bold uppercase">
          <h1>More Offers</h1>
        </div>
        <div className="mb-7">
          <FlashSalesOffers />
        </div>
      </div>
    </>
  );
};

export default FlashSales;
