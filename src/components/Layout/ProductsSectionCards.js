import React from 'react';
import Slide6 from "../../images/Slide6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductsSectionCards = () => {
    const product = {
        name: "HEAD PHONES",
        image: Slide6,
        price: 15000,
    };

    const { name, image, price } = product;

    return (
        <>
            <div className="max-w-lg  overflow-hidden shadow-lg bg-yellow-400">
                <img
                    className="w-38 object-cover"
                    style={{ height: "250px" }}
                    src={image}
                    alt={name}
                />
                <div className="px-4 pt-3">
                    <div className="font-extrabold text-xl sm:text-2xl text-black">
                        {name}
                    </div>
                    <div className="flex gap-1">
                        <FontAwesomeIcon icon={faStar} size="lg" />
                        <FontAwesomeIcon icon={faStar} size="lg" />
                        <FontAwesomeIcon icon={faStar} size="lg" />
                        <FontAwesomeIcon icon={faStar} size="lg" />
                        <FontAwesomeIcon icon={faStar} size="lg" />
                    </div>
                </div>
                <div className="px-4 pb-5 flex justify-end items-center">
                    <div className="text-md sm:text-2xl font-bold text-black tracking-tighter">
                        RS {price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsSectionCards;
