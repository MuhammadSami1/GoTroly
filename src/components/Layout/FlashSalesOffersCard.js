import Slide3 from "../../images/Slide3.jpg";
const FlashSalesOffersCard = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide3,
    sale: "SALE ENDING IN 00:17:20",
  };

  const { name, image, sale } = product;
  return (
    <div className="max-w-lg  overflow-hidden shadow-lg bg-yellow-400">
      <img
        className="w-full object-cover p-2"
        style={{ height: "350px" }}
        src={image}
        alt={name}
      />
      <div className="px-6 pt-10 pb-5">
        <div className="font-extrabold text-xl sm:text-4xl mb-2 text-black text-center">
          {name}
        </div>
      </div>
      <div className="px-4  pb-2 flex justify-end items-center">
        <div className="text-sm sm:text-lg font-bold text-black tracking-tighter">
          {sale}
        </div>
      </div>
    </div>
  );
};

export default FlashSalesOffersCard;
