import React from "react";
import ChargingPowerProducts from "../components/Layout/ChargingPowerProducts";
import ChargingPowerFilters from "../components/Layout/ChargingPowerFilters";

const ChargingPower = () => {
  return (
    <div className="bg-black pt-12 pb-16 pr-6 grid grid-cols-12">
      <div className="col-span-8">
        <ChargingPowerProducts />
      </div>
      <div className="col-span-4">
        <ChargingPowerFilters />
      </div>
    </div>
  );
};

export default ChargingPower;
