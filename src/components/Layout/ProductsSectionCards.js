import { useEffect } from "react";
// import Slide6 from "../../images/Slide6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../features/productDetailSlice";

const ProductsSectionCards = () => {
  // const product = {
  //   name: "HEAD PHONES",
  //   image: Slide6,
  //   price: 15000,
  // };

  // const { name, image, price } = product;
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (error !== null) {
    return (
      <h2 className="text-3xl font-bold">
        Something went wrong with your network.
      </h2>
    );
  }

  return (
    <>
      {users.slice(0, 6).map((value) => (
        <div
          key={value.id}
          className="max-w-lg overflow-hidden bg-yellow-400 transition-transform transform hover:scale-105 duration-300"
        >
          <img
            className="w-full object-center"
            style={{ height: "250px" }}
            src={value.image}
            alt="Products"
          />
          <div className="px-4 pt-3">
            <div className="font-extrabold text-md truncate sm:text-lg text-black">
              {value.title}
            </div>
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} size="lg" />
            </div>
          </div>
          <div className="pr-3 py-1 flex justify-end items-center">
            <div className="text-md sm:text-2xl font-bold text-black tracking-tighter">
              RS {value.price}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-black text-white border-2 border-white hover:bg-gray-800 w-full py-2 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsSectionCards;
