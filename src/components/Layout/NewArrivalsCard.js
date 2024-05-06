import React from "react";
import Slide2 from "../../images/Slide2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const NewArrivalsCard = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide2,
    price: 5000,
  };

  const { name, image, price } = product;

  return (
    <div className="max-w-lg overflow-hidden shadow-lg bg-white pt-2">
      <div className="flex">
        <img
          className="w-48 object-cover px-2 pt-2 pb-4 "
          src={image}
          alt={name}
        />
        <div className="px-2 py-2 font-extrabold text-2xl mb-2 textblack tracking-tighter">
          {name}
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className=" pt-24 pb-2 flex justify-between items-center">
            <div className="text-2xl font-bold text-black">RS {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
