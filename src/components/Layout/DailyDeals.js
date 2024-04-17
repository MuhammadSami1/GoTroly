import ProductCard from "./ProductCard";

function DailyDeals() {
  // This setup creates a grid with 1 column by default, 2 columns on medium screens,
  // and 4 columns on large screens.
  return (
    <div className="flex justify-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default DailyDeals;
