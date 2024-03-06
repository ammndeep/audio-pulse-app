import SaleImg from "../../assets/sale-banner.png";
export default function SaleBanner() {
  return (
    <>
      <div
        className="flex flex-col-reverse sm:flex-row items-center w-full my-8 "
        style={{ backgroundColor: "#f7c152" }}
      >
        <div className="sm:w-1/2">
          <img src={SaleImg} alt="sale-banner" height={430} width={530} />
        </div>
        <div className="p-6 sm:w-1/2">
          <span className="text-blue-600 font-bold text-lg">PROMOTION</span>
          <h1 className="text-4xl text-black font-bold mb-2">
            Hurry Up! 40% OFF
          </h1>
          <p className="text-black text-sm mb-6">
            Thousands of high tech are waiting for you
          </p>
          <p className="text-black font-medium mb-2">Offer expires in:</p>
          <h1 className="text-3xl font-bold  bg-white w-fit p-2 rounded-md mb-4 text-black">
            2 Days Left.!
          </h1>
          <button className="bg-black text-white px-3 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
