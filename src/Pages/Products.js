import React from 'react'
import ProductsFilters from '../components/Layout/ProductsFilters'
import ProductsSection from '../components/Layout/ProductsSection'

const Products = () => {
  return (
    <div className='bg-black pt-12 pb-16 px-12 grid grid-cols-8'>
      <div className='col-span-6'>
        <ProductsSection />
      </div>
      <div className='col-span-2'>
        <ProductsFilters />
      </div>
    </div>
  );
};

export default Products;
