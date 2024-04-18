import React from "react";
import Slide4 from "../../images/Slide4.jpg";

const FlashSalesCard = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide4,
    price: 5000,
    off: "-10%",
    description: "A classic analog HeadSet with a very good base.",
  };

  const { name, image, price, off } = product;

  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white w-full">
      <div className="flex">
        <img
          className="w-28 object-cover px-2 pt-2 pb-4 h-auto "
          src={image}
          alt={name}
        />
        <div className="px-2 py-2 font-bold text-lg mb-2 textblack">
          {name}
          <div className=" pt-4 pb-2 flex justify-between items-center">
            <div className="text-lg  font-bold text-black">RS {price}</div>

            <div className="bg-yellow-400 px-1 py-1 text-sm font-bold text-black">
              {off}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesCard;
