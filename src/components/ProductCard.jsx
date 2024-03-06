import { useContext } from "react";
import { RiStarSFill } from "react-icons/ri";
import { CartState, Context } from "../app/Context";
export default function ProductCard({ item }) {
  const { darkMode } = useContext(Context);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="flex flex-col items-center justify-center my-5 order-2">
        <img
          src={item.img}
          alt="product-image"
          className="rounded-xl hover:shadow-xl w-40 sm:w-52"
        />
        <h3 className="text-md font-medium mt-2">{item.title}</h3>
        <p className="text-md font-medium">{item.subtext}</p>
        <p className="text-md font-medium">${item.price}</p>
        <p className="text-md font-medium flex items-center">
          {item.rating}
          <RiStarSFill className="ml-1" size={19} color="#f5ee45" />
        </p>
        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              })
            }
            className={`${
              darkMode
                ? " bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-white hover:shadow-red-500 hover:border-red-500 hover:text-red-500"
                : "bg-transparent text-black border-2 border-black shadow-md hover:shadow-md hover:shadow-black hover:shadow-red-500 hover:border-red-500 hover:text-red-500"
            }  px-3 py-1 mt-1 rounded-lg`}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              })
            }
            className={`${
              darkMode
                ? "bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-white hover:shadow-green-500 hover:border-green-500 hover:text-green-500"
                : "bg-transparent text-black border-2 border-black shadow-md hover:shadow-md hover:shadow-black hover:shadow-green-500 hover:border-green-600 hover:text-green-700"
            }  px-3 py-1 mt-1 rounded-lg`}
          >
            {item.btn}
          </button>
        )}
      </div>
    </>
  );
}
