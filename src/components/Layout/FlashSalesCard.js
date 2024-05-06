import React from "react";
import Slide4 from "../../images/Slide4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="max-w-sm overflow-hidden shadow-lg bg-white ">
      <div className="flex">
        <img
          className="w-40 object-cover px-2 pt-2 pb-4"
          src={image}
          alt={name}
        />
        <div className="px-2 py-2 font-bold text-lg textblack">
          {name}
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="pt-4 pb-2 flex">
            <div className="text-sm  font-bold text-black">RS {price}</div>
            <div className="pl-28">
              <div className="bg-yellow-400 px-1 py-1 text-sm font-bold text-black">
                {off}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesCard;
