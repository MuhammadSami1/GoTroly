import React from "react";
import ProductsFilters from "../components/Layout/ProductsFilters";
import ProductsSection from "../components/Layout/ProductsSection";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="bg-black flex justify-end px-6 py-3">
        <Link
          to="/cart"
          className="text-black px-4 py-1 font-semibold hover:text-lg text-md bg-white"
        >
          CART
        </Link>
      </div>
      <div className="bg-black pb-16 pr-6 grid grid-cols-12">
        <div className="col-span-8">
          <ProductsSection />
        </div>
        <div className="col-span-4">
          <ProductsFilters />
        </div>
      </div>
    </>
  );
};

export default Products;
