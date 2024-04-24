import React from 'react'
import SmartPhonesFilters from '../components/Layout/SmartPhonesFilters';
import SmartPhonesProducts from '../components/Layout/SmartPhonesProducts';

const SmartPhones = () => {
  return (
    <div className='bg-black pt-12 pb-16 px-12 grid grid-cols-8'>
      <div className='col-span-6'>
        <SmartPhonesProducts />
      </div>
      <div className='col-span-2'>
        <SmartPhonesFilters />
      </div>
    </div>
  )
}

export default SmartPhones;
