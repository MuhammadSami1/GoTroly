import React from "react";
// import { useState } from "react";


import Slide2 from "../../images/Slide2.jpg";
import Slide3 from "../../images/Slide3.jpg";
import Slide4 from "../../images/Slide4.jpg";

const CarouselComponent = () => {
  // const imageUrls = [Slide1, Slide2, Slide3, Slide4];
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const totalSlides = imageUrls.length;

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  return (
    // <div className="relative  overflow-hidden">
    //   <div className="flex">
    //     <img
    //       src={imageUrls[currentSlide]}
    //       alt={`Slide ${currentSlide + 1}`}
    //       className="w-full"
    //       style={{ height: "600px" }} // Apply inline style for height
    //     />
    //   </div>
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-0 top-1/2 -translate-y-1/2 bg-inherit bg-opacity-75 p-3 text-white text-4xl hover:bg-opacity-100 focus:outline-none"
    //   >
    //     &#10094;
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-0 top-1/2 -translate-y-1/2 bg-inherit bg-opacity-75 p-3 text-white text-4xl hover:bg-opacity-100 focus:outline-none"
    //   >
    //     &#10095;
    //   </button>
    // </div>


    <div id="controls-carousel" class="relative w-full " data-carousel="static">

      <div class="relative h-56 overflow-hidden md:h-screen">

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={Slide2} class="absolute  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src={Slide3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={Slide4} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={Slide2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={Slide3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>

      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

  );
};

export default CarouselComponent;
