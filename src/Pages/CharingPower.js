import React from 'react'
import ChargingPowerProducts from '../components/Layout/ChargingPowerProducts'
import ChargingPowerFilters from '../components/Layout/ChargingPowerFilters'

const ChargingPower = () => {
  return (
    <div className='bg-black pt-12 pb-16 px-12 grid grid-cols-8'>
      <div className='col-span-6'>
        <ChargingPowerProducts />
      </div>
      <div className='col-span-2'>
        <ChargingPowerFilters />
      </div>
    </div>
  )
}

export default ChargingPower
