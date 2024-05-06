import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import DailyDeals from "./DailyDeals";
import CustomerReview from "./CustomerReview";
function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="sticky top-0 z-10 w-full bg-white  text-2xl text-black font-semibold h-auto my-6">
        <ul className="flex justify-start px-6 ">
          <li className="border-r-2 border-black py-3 pr-4">
            <Link to="/newarrivals" className="cursor-pointer">
              DAILY DEALS
            </Link>
          </li>
          <li className="border-r-2 border-black py-3 px-4">
            <Link to="/flashsales">FLASH SALES</Link>
          </li>
          <li className="py-3 px-4">
            <Link to="/newarrivals" className="cursor-pointer">
              VIEW MORE
            </Link>
          </li>
        </ul>
      </div>
      <DailyDeals />
      <CustomerReview />
    </>
  );
}
export default Home;
