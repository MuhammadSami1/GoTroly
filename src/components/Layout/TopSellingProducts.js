import React from 'react';
import Slide3 from "../../images/Slide3.jpg";

const TopSellingProducts = () => {
    const product = {
        name: "HEAD PHONES",
        image: Slide3,
        price: 5000,
    };

    const { name, image, price } = product;
    return (
        <div className="max-w-md overflow-hidden shadow-lg bg-yellow-400 mt-10">
            <img
                className="w-full object-cover px-6 pt-6"
                style={{ height: "600px" }}
                src={image}
                alt={name}
            />
            <div className="px-6 pt-2 pb-5">
                <div className="font-medium text-xl sm:text-2xl mb-2 text-black tracking-tight">
                    {name}
                </div>
                <div className="pt-5 text-md sm:text-3xl font-bold text-black">
                    RS {price}
                </div>
            </div>
        </div>
    );
}

export default TopSellingProducts;
