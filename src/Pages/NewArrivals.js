import React from 'react'
import NewArrivalsCard from '../components/Layout/NewArrivalsCard'
import Slide2 from "../images/Slide2.jpg";
import Slide3 from "../images/Slide3.jpg";
import NewArrivalsCategories from '../components/Layout/NewArrivalsCategories';

const NewArrivals = () => {
  return (
    <>
      {/* New Arrivals Card */}
      <div className='flex flex-wrap justify-center bg-yellow-400 gap-16 py-10 px-10'>
        <NewArrivalsCard />
        <NewArrivalsCard />
        <NewArrivalsCard />
        <NewArrivalsCard />
        <NewArrivalsCard />
        <NewArrivalsCard />
      </div>

      {/* New Arrivals TrendingPage */}
      <div className="text-center p-6 text-2xl font-bold">
        <h1>TRENDING NOW</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={Slide2} alt="slide" />
        </div>
        <div className="bg-black text-yellow-400">
          <h3 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl py-7  tracking-tighter uppercase lg:py-20">Big Offer!</h3>
          <p className="uppercase text-2xl sm:text-4xl md:text-3xl lg:text-5xl tracking-tighter font-bold">ONLY 7 LEFT IN STOCK!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-7">
        <div className="bg-black text-yellow-400 text-center">
          <h3 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl py-7  tracking-tighter uppercase lg:py-20">Head Phones</h3>
          <p className="uppercase text-2xl sm:text-4xl md:text-3xl lg:text-5xl tracking-tighter font-bold">OWNED BY 79K PEOPLE NOW!</p>
        </div>
        <div>
          <img src={Slide3} alt="slide" />
        </div>
      </div>

      <div className="relative">
        <img src={Slide2} alt="slide" className="w-full max-h-96 " />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter pb-4 text-yellow-400">Phone Cases</h3>
          <p className='text-sm sm:text-lg md:text-3xl lg:text-5xl font-bold tracking-tighter text-yellow-400'>OWNED BY150K PEOPLE NOW!</p>
        </div>
      </div>

      {/* New Arrivals Categories */}
      <div className="text-center p-6 text-2xl font-bold">
        <h1>CATEGORIES</h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-16 gap-5">
        <NewArrivalsCategories />
        <NewArrivalsCategories />
        <NewArrivalsCategories />
      </div>
    </>
  )
}

export default NewArrivals
