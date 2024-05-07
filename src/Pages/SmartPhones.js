import React from "react";
import SmartPhonesFilters from "../components/Layout/SmartPhonesFilters";
import SmartPhonesProducts from "../components/Layout/SmartPhonesProducts";

const SmartPhones = () => {
  return (
    <div className="bg-black pt-12 pb-16 pr-6 grid grid-cols-12">
      <div className="col-span-8">
        <SmartPhonesProducts />
      </div>
      <div className="col-span-4">
        <SmartPhonesFilters />
      </div>
    </div>
  );
};

export default SmartPhones;
