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
                style={{ height: "500px" }}
                src={image}
                alt={name}
            />
            <div className="px-6 pt-10 pb-10">
                <div className="font-extrabold text-xl sm:text-5xl mb-2 text-black text-center">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default NewArrivalsCategories;
