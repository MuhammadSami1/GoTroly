import React from "react";
import Slide2 from "../../images/Slide2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CustomerReview() {
  return (
    <div>
      <h1 class="text-2xl font-bold flex justify-center my-7">
        CUSTOMER REVIEWS
      </h1>
      <div className="flex justify-center gap-4 px-6 mb-10">
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
      </div>
    </div>
  );
}

export default CustomerReview;

function CustomerReviewCard() {
  const product = {
    name: "Ahmad raza",
    imageUrl: Slide2,
    rating: 4,
    description:
      "really satesfired. I just gor my order from gotrolly and i completely love it ",
  };

  // Function to render stars based on rating
  // const renderStars = (rating) => {
  //   return Array.from({ length: 5 }, (_, index) => (
  //     <span key={index} className="text-yellow-500">
  //       {rating > index ? "★" : "☆"}
  //     </span>
  //   ));
  // };

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg  flex border-4 border-yellow-400">
      <img
        className="w-36 h-32 object-cover p-2"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="px-2 flex flex-col justify-between">
        <div>
          <div className="font-bold text-md md:text-lg uppercase tracking-tight pt-2">
            {product.name}
          </div>
          <div>
            {/* {renderStars(product.rating)} */}
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
            </div>
          </div>
        </div>
        <p className="text-gray-700 uppercase text-xs">{product.description}</p>
      </div>
    </div>
  );
}
