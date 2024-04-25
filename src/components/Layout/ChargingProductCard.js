import React from 'react';
import Slide6 from "../../images/Slide6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ChargingProductCard = () => {
    const product = {
        name: "HEAD PHONES",
        image: Slide6,
        price: 15000,
    };

    const { name, image, price } = product;

    return (
        <>
            <div className="max-w-sm  overflow-hidden shadow-lg bg-yellow-400">
                <img
                    className="w-full object-cover h-96"
                    src={image}
                    alt={name}
                />
                <div className="px-6 pt-3">
                    <div className="font-extrabold text-xl sm:text-2xl mb-2 text-black">
                        {name}
                    </div>
                    <div className='flex gap-1'>
                        <FontAwesomeIcon icon={faStar} size='2xl' />
                        <FontAwesomeIcon icon={faStar} size='2xl' />
                        <FontAwesomeIcon icon={faStar} size='2xl' />
                        <FontAwesomeIcon icon={faStar} size='2xl' />
                        <FontAwesomeIcon icon={faStar} size='2xl' />
                    </div>
                </div>
                <div className="px-4 pb-5 flex justify-end items-center">
                    <div className="text-md sm:text-3xl font-bold text-black tracking-tighter">
                        RS {price}
                    </div>

                </div>
            </div>
        </>
    );
}

export default ChargingProductCard;
