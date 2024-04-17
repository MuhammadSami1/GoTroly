import React from "react";
import Slide4 from "../../images/Slide4.jpg";

const ProductCard = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide4,
    price: 5000,
    newPrice: 2500,
    off: "50%",
    description: "A classic analog HeadSet with a very good base.",
  };

  const { name, image, price, newPrice, off } = product;

  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-black">
      <img
        className="w-full object-cover p-4"
        style={{ height: "auto" }}
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl sm:text-2xl mb-2 text-white">
          {name}
        </div>
      </div>
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        <div className="text-sm sm:text-2xl font-bold text-white">
          RS {price}
        </div>
        <div className="text-xs sm:text-lg font-bold text-white">
          RS {newPrice}
        </div>
        <div className="bg-yellow-400 px-2 py-1 text-xl font-bold text-black">
          {off}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
