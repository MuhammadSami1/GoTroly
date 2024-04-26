import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import DailyDeals from "./DailyDeals";
import CustomerReview from "./CustomerReview";
function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="sticky top-0 z-10 w-full bg-white  text-2xl text-black font-semibold h-auto my-4">
        <ul className="flex justify-start px-10">
          <li className="border-r-2 border-black p-3">
            <Link to="/newarrivals" className="cursor-pointer">DAILY DEALS</Link>
          </li>
          <li className="border-r-2 border-black p-3">
            <Link to="/flashsales">FLASH SALES</Link>
          </li>
          <li className="p-3">
            <Link to="/newarrivals" className="cursor-pointer">VIEW MORE</Link>
          </li>
        </ul>
      </div>
      <DailyDeals />
      <CustomerReview />
    </>
  );
}
export default Home;
