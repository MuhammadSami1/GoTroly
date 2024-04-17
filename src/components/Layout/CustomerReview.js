import React from "react";
import Slide2 from "../../images/Slide2.jpg";

function CustomerReview() {
  return (
    <div>
      <h1 class="text-2xl font-bold flex justify-center mt-2">
        CUSTOMER REVIEWS
      </h1>
      <div className="flex flex-wrap justify-center mb-6">
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
    name: "HEAD SET",
    imageUrl: Slide2,
    rating: 4,
    description:
      "This is a sample description of the product, highlighting its features, uses, and details.",
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-500">
        {rating > index ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg p-4 m-4 flex border-4 border-yellow-400">
      <img
        className="w-48 h-auto object-cover"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="px-6 py-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <div className="text-yellow-500 text-lg">
            {renderStars(product.rating)}
          </div>
        </div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
  );
}
