import React from 'react';
import Slide6 from "../../images/Slide6.jpeg";

const SmartPhonesProductCard = () => {
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
                <div className="px-6 pt-3 pb-2">
                    <div className="font-extrabold text-xl sm:text-2xl mb-2 text-black">
                        {name}
                    </div>
                </div>
                <div className="px-4 pt-2 pb-2 flex justify-end items-center">
                    <div className="text-md sm:text-3xl font-bold text-black tracking-tighter">
                        RS {price}
                    </div>

                </div>
            </div>
        </>
    );
}

export default SmartPhonesProductCard;
