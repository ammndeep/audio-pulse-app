import { FaArrowRightLong } from "react-icons/fa6";

export default function ShopCollection({ shopCollection }) {
  const { heading, items } = shopCollection;

  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="text-4xl font-medium sm:text-5xl p-3">{heading}</h1>
      <div className="my-8 flex flex-col sm:flex-row items-start sm:items-center justify-center mx-4 sm:mx-0">
        {/* Render the first item with special styling for larger screens */}
        <div className="relative flex items-start sm:items-center sm:m-0 mb-4">
          <img
            src={items[0].img}
            alt="shop-collection-images"
            className="rounded-lg hover:shadow-lg sm:max-h-[470px]"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <h1 className="text-left font-medium text-xl">{items[0].title}</h1>
            <div className="flex items-center gap-2">
              <h2 className="text-left font-normal text-black text-lg border-b-2 border-black ">
                {items[0].subtitle}
              </h2>
              <FaArrowRightLong className="text-black" />
            </div>
          </div>
        </div>

        {/* Render the other two items in a grid layout for smaller screens */}
        <div className="sm:ml-4 grid grid-cols-1 gap-4 sm:gap-5 sm:w-1/3 ">
          {items.slice(1).map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-start ">
              <img
                src={item.img}
                alt="shop-collection-images"
                className="rounded-lg hover:shadow-lg h-auto"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-left font-medium text-xl">{item.title}</h1>
                <div className="flex items-center gap-2">
                  <h2 className="text-left font-normal text-black text-lg border-b-2 border-black ">
                    {item.subtitle}
                  </h2>
                  <FaArrowRightLong className="text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
