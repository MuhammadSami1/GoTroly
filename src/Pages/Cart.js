import Slide3 from "../images/Slide3.jpg";

const Cart = () => {
  return (
    <>
      <div className="px-16 py-16 bg-black">
        <div className="grid grid-cols-6 gap-5 text-white">
          <div className="col-span-4 rounded-md bg-white">
            <div className="px-5 py-4">
              <div className="text-black pb-2 text-lg">CART ITEM</div>
              <hr class="border-t-2 border-gray-400 "></hr>
              <Column1 />
            </div>
          </div>
          <div className="col-span-2 self-start rounded-md bg-white">
            <Column2 />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Cart;

export const Column1 = () => {
  return (
    <>
      <div className="py-4 flex justify-between overflow-auto">
        <img src={Slide3} alt={Slide3} className="w-40 h-40" />
        <div className="text-black flex justify-between flex-grow">
          <div className="px-4">
            <div className="uppercase">Blue denim shirt</div>
            <button className="pt-20 text-blue-500">Remove</button>
          </div>
          <div>
            <div className="flex">
              <button className="bg-black text-white px-4 py-1">-</button>
              <div className="mx-2">Quantity</div>
              <button className="bg-black text-white px-4 py-1">+</button>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-t-2 border-gray-400 "></hr>
    </>
  );
};

export const Column2 = () => {
  return (
    <>
      <div className="px-5 py-4 overflow-auto">
        <div className="text-black pb-2 text-lg">SUMMARY</div>
        <hr class="border-t-2 border-gray-400"></hr>
        <div className="text-black pt-7 pb-3">
          <div className="flex justify-between py-1 text-sm">
            <div>Total Quantity</div>
            <div>0</div>
          </div>
          <div className="flex justify-between py-1 text-sm font-semibold">
            <div>Total Amount</div>
            <div>0</div>
          </div>
        </div>
        <button className="text-white bg-black w-full py-2 rounded-md text-sm">
          GO TO CHECKOUT
        </button>
      </div>
    </>
  );
};
