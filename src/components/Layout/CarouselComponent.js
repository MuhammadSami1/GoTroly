import React from "react";
import { useState } from "react";

import Slide2 from "../../images/Slide2.jpg";
import Slide3 from "../../images/Slide3.jpg";

const CarouselComponent = () => {
  const imageUrls = [Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = imageUrls.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <div className="relative  overflow-hidden">
        <div className="flex">
          <img
            src={imageUrls[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full"
            style={{ height: "450px" }} // Apply inline style for height
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-inherit bg-opacity-75 p-3 text-white text-lg hover:bg-opacity-100 focus:outline-none lg:text-9xl"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-inherit bg-opacity-75 p-3 text-white text-lg hover:bg-opacity-100 focus:outline-none lg:text-9xl"
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
