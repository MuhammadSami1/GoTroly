import ProductCard from "./ProductCard";

function DailyDeals() {
  return (
    <div className="flex flex-wrap justify-center mb-2">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default DailyDeals;
