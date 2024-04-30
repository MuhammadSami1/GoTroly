import React from 'react';
import Slide3 from "../../images/Slide3.jpg";

const AudioFilters = () => {
    return (
        <div className='bg-yellow-400 pt-2 px-5'>
            <div>
                <p className='uppercase text-2xl font-extrabold pb-2'>Filters:</p>
                <p className='uppercase text-lg font-bold pb-2'>product type</p>
                <div className='grid grid-cols-2 text-lg uppercase font-semibold gap-y-2 tracking-tighter'>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>laptop charger</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>wireless charger</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>power bank</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>cabel</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>car charger </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>addopter</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>vga cabel </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                        <p>charger</p>
                    </div>
                </div>
                <p className='pt-5 font-semibold text-2xl'>Prize</p>
                <div className='flex justify-center pt-5'>
                    <input type="range" name="range" id="range" className='w-10/12 appearance-none bg-black h-1 cursor-pointer ' />
                </div>
                <div className='flex justify-between pt-3 font-semibold text-lg'>
                    <p>RS 35000 - RS 50000</p>
                    <p>RS 100000</p>
                </div>
                <div>
                    <p className='pt-7 font-bold text-lg'>RATINGS</p>
                    <div>
                        <div className='grid grid-cols-2 space-x-10 py-2'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                            </div>
                            <p className='text-2xl pt-1'>5/5</p>
                        </div>
                        <div className='grid grid-cols-2 space-x-10 py-2'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>

                            </div>
                            <p className='text-2xl pt-1'>4/5</p>
                        </div>
                        <div className='grid grid-cols-2 space-x-10 py-2'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star"><path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>

                            </div>
                            <p className='text-2xl pt-1'>3/5</p>
                        </div>
                    </div>

                    {/* Brands Name */}
                    <div className='font-bold uppercase py-4 text-lg'>
                        <p>brands</p>
                    </div>
                    <div className='grid grid-cols-2 text-lg uppercase font-semibold gap-y-2 tracking-tighter'>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>laptop charger</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>wireless charger</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>power bank</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>cabel</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>car charger </p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>addopter</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>vga cabel </p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input type="checkbox" className='appearance-none border border-black checked:bg-yellow-600 w-5 h-5 cursor-pointer' />
                            <p>charger</p>
                        </div>
                    </div>

                    <div>
                        <div className='font-semibold uppercase py-4 text-lg'>
                            <p>Sold OUT:</p>
                        </div>
                        <div className='flex flex-wrap gap-6'>
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                            <img
                                className="w-48 h-48"
                                src={Slide3}
                                alt={Slide3}
                            />
                        </div>
                        <div className='flex justify-end pt-20 pb-2'>
                            <p className='pt-16 pb-4 text-lg font-bold'>ORDER ON DEMAND?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioFilters;
