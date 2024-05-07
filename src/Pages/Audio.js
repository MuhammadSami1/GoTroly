import React from "react";
import AudioFilters from "../components/Layout/AudioFilters";
import AudioProducts from "../components/Layout/AudioProducts";

const Audio = () => {
  return (
    <div className="bg-black pt-12 pb-16 pr-6 grid grid-cols-12">
      <div className="col-span-8">
        <AudioProducts />
      </div>
      <div className="col-span-4">
        <AudioFilters />
      </div>
    </div>
  );
};

export default Audio;
