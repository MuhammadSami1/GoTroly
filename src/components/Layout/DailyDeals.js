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
              background-color: #000000; /* Black color for inactive dots */
              width: 20px;  /* Dot size for round shape */
              height: 20px; /* Dot size for round shape */
              border-radius: 50%; /* Circle shape */
              display: block; /* Correct display handling */
              border: none; /* Remove any border */
          }

          /* Ensuring hover state has the same styling as normal state */
          .ant-carousel .slick-dots li button:hover {
              background-color: #000000; /* Maintain black color on hover for inactive dots */
          }

          /* Styling for active dot */
          .ant-carousel .slick-dots li.slick-active button {
              background-color: #facc15; /* yellow-500 for the active dot */
          }

          /* Remove hover effects for the active dot */
          .ant-carousel .slick-dots li.slick-active button:hover {
              background-color: #facc15; /* Maintain yellow-500 color on hover for active dot */
          }

          /* Customizing arrow colors */
          .ant-carousel .slick-prev:before,
          .ant-carousel .slick-next:before {
              color: #000000; /* Black color for arrows */
          }

          /* Remove hover effects from arrows */
          .ant-carousel .slick-prev:hover:before,
          .ant-carousel .slick-next:hover:before {
              color: #000000; /* Maintain black color on hover for arrows */
          }
        `}
      </style>
      <Carousel autoplay>
        <div>
          <div className="flex flex-wrap justify-center mb-12">
            <ProductCard title="Charger and power bank" price="RS 2300" newprice="RS 2000" off="-23%" />
            <ProductCard title="CHARGING AND DATA CABLE" price="RS 1500" newprice="RS 1460" off="-10%" />
            <ProductCard title="MINIMAL PHONE CASE" price="RS 1200" newprice="RS 1150" off="-15%" />
            <ProductCard title="CABLES" price="RS 3500" newprice="RS 3450" off="-10%" />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-12">
            <ProductCard title="Charger and power bank " price="RS 2300" newprice="RS 2000" off="-23%" />
            <ProductCard title="CHARGING AND DATA CABLE" price="RS 1500" newprice="RS 1460" off="-10%" />
            <ProductCard title="MINIMAL PHONE CASE" price="RS 1200" newprice="RS 1150" off="-15%" />
            <ProductCard title="CABLES" price="RS 3500" newprice="RS 3450" off="-10%" />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-12">
            <ProductCard title="Charger and power bank " price="RS 2300" newprice="RS 2000" off="-23%" />
            <ProductCard title="CHARGING AND DATA CABLE" price="RS 1500" newprice="RS 1460" off="-10%" />
            <ProductCard title="MINIMAL PHONE CASE" price="RS 1200" newprice="RS 1150" off="-15%" />
            <ProductCard title="CABLES" price="RS 3500" newprice="RS 3450" off="-10%" />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-12">
            <ProductCard title="Charger and power bank " price="RS 2300" newprice="RS 2000" off="-23%" />
            <ProductCard title="CHARGING AND DATA CABLE" price="RS 1500" newprice="RS 1460" off="-10%" />
            <ProductCard title="MINIMAL PHONE CASE" price="RS 1200" newprice="RS 1150" off="-15%" />
            <ProductCard title="CABLES" price="RS 3500" newprice="RS 3450" off="-10%" />
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default DailyDeals;
