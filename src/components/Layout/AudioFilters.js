import React from "react";
import Slide3 from "../../images/Slide3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AudioFilters = () => {
  return (
    <div className="bg-yellow-400 pt-2 px-5">
      <div>
        <p className="uppercase text-2xl font-extrabold pb-2">Filters:</p>
        <p className="uppercase text-md tracking-tight font-semibold pb-2">
          product type
        </p>
        <div className="grid grid-cols-2 text-sm uppercase font-semibold gap-y-1 tracking-tighter">
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>laptop charger</p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>wireless charger</p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>power bank</p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>cabel</p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>car charger </p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>addopter</p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>vga cabel </p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
            />
            <p>charger</p>
          </div>
        </div>
        <p className="pt-5 font-semibold text-lg">Prize</p>
        <div className="flex justify-center pt-5">
          <input
            type="range"
            name="range"
            id="range"
            className="w-10/12 appearance-none bg-black h-1 cursor-pointer "
          />
        </div>
        <div className="flex justify-between pt-3 font-semibold text-md tracking-tight">
          <p>RS 35000 - RS 50000</p>
          <p>RS 100000</p>
        </div>
        <div>
          <p className="pt-7 font-semibold text-md pb-2">RATINGS</p>
          <div className="w-60">
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="text-md">5/5</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="text-md">4/5</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="text-md">3/5</p>
            </div>
          </div>
          {/* Brands Name */}
          <div className="font-bold uppercase py-4 text-md">
            <p>brands</p>
          </div>
          <div className="grid grid-cols-2 text-sm uppercase font-semibold gap-y-1 tracking-tighter">
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>laptop charger</p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>wireless charger</p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>power bank</p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>cabel</p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>car charger </p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>addopter</p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>vga cabel </p>
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer"
              />
              <p>charger</p>
            </div>
          </div>

          <div>
            <div className="font-semibold uppercase py-4 text-md ">
              <p>Sold OUT:</p>
            </div>
            <div className="flex flex-wrap gap-6 w-96">
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
              <img className="w-full h-60" src={Slide3} alt={Slide3} />
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
              <img className="w-44 h-44" src={Slide3} alt={Slide3} />
            </div>
            <div className="flex justify-end pt-5 pb-3">
              <p className="pt-5 pb-1 text-lg font-bold">ORDER ON DEMAND?</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AudioFilters;
