import React from 'react'
import ProductsFilters from '../components/Layout/ProductsFilters'
import ProductsSection from '../components/Layout/ProductsSection'

const Products = () => {
  return (
    <div className='bg-black pt-12 pb-16 pr-6 grid grid-cols-12'>
      <div className='col-span-8'>
        <ProductsSection />
      </div>
      <div className='col-span-4'>
        <ProductsFilters />
      </div>
    </div>
  );
};

export default Products;
