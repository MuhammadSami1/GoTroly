import Slide3 from "../../images/Slide3.jpg";

const NewArrivalsCategories = () => {
  const product = {
    name: "HEAD PHONES",
    image: Slide3,
  };

  const { name, image } = product;

  return (
    <div className="max-w-lg  overflow-hidden shadow-lg bg-yellow-400">
      <img
        className="w-full object-cover p-2"
        style={{ height: "350px" }}
        src={image}
        alt={name}
      />
      <div className="px-6 pt-4 pb-5">
        <div className="font-extrabold text-xl sm:text-4xl mb-2 text-black text-center">
          {name}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCategories;
