import React from 'react'
import AudioFilters from '../components/Layout/AudioFilters'
import AudioProducts from '../components/Layout/AudioProducts'

const Audio = () => {
  return (
    <div className='bg-black pt-12 pb-16 px-12 grid grid-cols-8'>
      <div className='col-span-6'>
        <AudioProducts />
      </div>
      <div className='col-span-2'>
        <AudioFilters />
      </div>
    </div>
  )
}

export default Audio
