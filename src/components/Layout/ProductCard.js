import React from "react";
import Slide4 from "../../images/Slide4.jpg";

const ProductCard = ({ title, price, newprice, off }) => {
  const product = {
    image: Slide4,
  };

  const { image } = product;

  return (
    <div className="max-w-md overflow-hidden shadow-lg bg-black">
      <img
        className="w-full object-cover px-6 pt-6"
        style={{ height: '450px' }}
        src={image}
        alt={title}
      />
      <div className="px-6 pt-5 pb-5">
        <div className="font-medium text-xl sm:text-2xl mb-2 text-white tracking-tight">
          {title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="text-sm sm:text-3xl font-bold text-white line-through">
            {price}
          </div>
          <div className="text-sm sm:text-lg font-bold text-white">
            {newprice}
          </div>
        </div>

        <div className="bg-yellow-400 px-2 py-1 text-2xl font-bold text-black">
          {off}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
