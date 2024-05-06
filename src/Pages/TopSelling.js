import React from "react";
import TopSellingProducts from "../components/Layout/TopSellingProducts";
import TopSellingCarousel from "../components/Layout/TopSellingCarousel";
import Slide2 from "../images/Slide2.jpg";
import TopSellingCategories from "../components/Layout/TopSellingCategories";

const TopSelling = () => {
  return (
    <>
      <div>
        {/* Featured Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={Slide2} alt="slide" />
          </div>
          <div className="bg-black text-yellow-400">
            <h3 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl py-7  tracking-tighter uppercase lg:py-20">
              Big Offer!
            </h3>
            <p className="uppercase text-2xl sm:text-4xl md:text-3xl lg:text-5xl tracking-tighter font-bold">
              ORDER YOURS NOW!
            </p>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="flex justify-center px-7">
          <TopSellingProducts />
          <TopSellingProducts />
          <TopSellingProducts />
          <TopSellingProducts />
        </div>

        {/* Top Selling Carousel */}
        <TopSellingCarousel />

        {/* TopSelling Categories */}
        <div className="mb-7">
          <TopSellingCategories />
        </div>
      </div>
    </>
  );
};

export default TopSelling;
