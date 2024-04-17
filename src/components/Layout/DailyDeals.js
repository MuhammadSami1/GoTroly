import React from "react";
import ProductCard from "./ProductCard";
import { Carousel } from "antd";

function DailyDeals() {
  return (
    <>
      <style>
        {`
          /* Overriding default slick carousel button colors */
          .ant-carousel .slick-dots li button {
              background-color: #000000; /* Black color for dots */
              width: 20px;  /* Make dots round */
              height: 20px; /* Make dots round */
              border-radius: 50%; /* Circle shape */
              display: block; /* Correct display handling */
              border: none; /* Remove any border */
          }

          .ant-carousel .slick-dots li.slick-active button {
              background-color: #facc15; /* yellow-500 for the active dot */
          }

          /* Customizing arrow colors */
          .ant-carousel .slick-prev:before,
          .ant-carousel .slick-next:before {
              color: #000000; /* Black color for arrows */
          }
        `}
      </style>
      <Carousel autoplay>
        <div>
          <div className="flex flex-wrap justify-center mb-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default DailyDeals;
