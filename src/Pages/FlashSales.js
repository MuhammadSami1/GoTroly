import React from "react";
import FlashSalesCard from "../components/Layout/FlashSalesCard";

const FlashSales = () => {
  return (
    <div className="flex flex-wrap justify-center bg-yellow-400 gap-6 py-6">
      <FlashSalesCard />
      <FlashSalesCard />
      <FlashSalesCard />
      <FlashSalesCard />
      <FlashSalesCard />
      <FlashSalesCard />
    </div>
  );
};

export default FlashSales;
