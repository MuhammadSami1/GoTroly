import React from 'react';
import { Carousel } from "antd";
import ProductsSectionCards from './ProductsSectionCards';


const ProductsSection = () => {
    return (
        <>
            <style>
                {`
          /* Overriding default slick carousel button colors */
          .ant-carousel .slick-dots li button {
              background-color: white; /* Black color for inactive dots */
              width: 20px;  /* Dot size for round shape */
              height: 20px; /* Dot size for round shape */
              border-radius: 50%; /* Circle shape */
              display: block; /* Correct display handling */
              border: none; /* Remove any border */
              
          }

          /* Ensuring hover state has the same styling as normal state */
          .ant-carousel .slick-dots li button:hover {
              background-color: white; /* Maintain black color on hover for inactive dots */
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
              color: white; /* Black color for arrows */
          }

          /* Remove hover effects from arrows */
          .ant-carousel .slick-prev:hover:before,
          .ant-carousel .slick-next:hover:before {
              color: white; /* Maintain black color on hover for arrows */
          }
        `}
            </style>

            <Carousel autoplay>
                <div>
                    <div className="flex flex-wrap justify-center pb-12 gap-14">
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center pb-12 gap-14">
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center pb-12 gap-14">
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center pb-12 gap-14">
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                        <ProductsSectionCards />
                    </div>
                </div>
            </Carousel>
        </>
    );
}

export default ProductsSection;
