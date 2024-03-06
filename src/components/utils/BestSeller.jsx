import { useContext } from "react";
import { CartState, Context } from "../../app/Context";
import { RiStarSFill } from "react-icons/ri";
export default function BestSeller({ bestSeller }) {
  const { title, items } = bestSeller;

  const { darkMode } = useContext(Context);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  return (
    <>
      <div className="max-w-6xl sm:mx-auto">
        <h1 className="text-4xl font-medium sm:text-5xl p-3 ">{title}</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center my-10 "
            >
              <img
                src={item.img}
                alt="product-image"
                className="rounded-xl hover:shadow-xl w-40 sm:w-52"
              />
              <h3 className="text-md font-medium mt-2">{item.title}</h3>
              <p className="text-md font-medium">{item.subText}</p>
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
                      ? "bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-red-500 border-red-500 text-red-500"
                      : "bg-transparent text-black shadow-md hover:shadow-md hover:shadow-red-500 border-2 border-red-500 text-red-500"
                  }  px-3 py-1 mt-1 rounded-lg `}
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
                      ? "bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-green-500 hover:border-green-500 hover:text-green-500"
                      : "bg-transparent text-black shadow-md hover:shadow-md hover:shadow-black border-2 border-black hover:shadow-green-500 hover:border-green-600 hover:text-green-700"
                  }  px-3 py-1 mt-1 rounded-lg `}
                >
                  {item.btn}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
