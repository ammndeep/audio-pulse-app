import ProductCard from "../ProductCard";

export default function NewArrivals({ newArrivals }) {
  const { title, items } = newArrivals;

  return (
    <>
      <div className="">
        <h1 className="text-4xl font-medium sm:text-5xl p-3 ">{title}</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
