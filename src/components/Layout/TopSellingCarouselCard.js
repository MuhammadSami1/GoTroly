import Slide4 from "../../images/Slide4.jpg";

const TopSellingCarouselCard = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide4,
    price: 5000,
    newPrice: 2500,
    off: "-15%",
  };

  const { name, image, price, newPrice, off } = product;

  return (
    <div className="max-w-md overflow-hidden shadow-lg bg-black">
      <img
        className="w-full object-cover px-6 pt-6"
        style={{ height: "350px" }}
        src={image}
        alt={name}
      />
      <div className="px-6 pt-5 pb-2">
        <div className="font-medium text-xl sm:text-2xl mb-2 text-white tracking-tight">
          {name}
        </div>
      </div>
      <div className="px-6 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="text-sm sm:text-2xl font-bold text-white line-through">
            RS {price}
          </div>
          <div className="text-sm sm:text-md font-bold text-white">
            RS {newPrice}
          </div>
        </div>

        <div className="bg-yellow-400 px-2 py-1 text-2xl font-bold text-black">
          {off}
        </div>
      </div>
    </div>
  );
};

export default TopSellingCarouselCard;
