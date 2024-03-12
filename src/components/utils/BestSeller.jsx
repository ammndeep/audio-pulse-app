import { RiStarSFill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../app/CartSlice";
import { FaRegHeart } from "react-icons/fa";
import { addToWishlist, removeFromWishlist } from "../../app/Wishlist";

export default function BestSeller({ bestSeller }) {
  const { title, items } = bestSeller;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const { cart } = useSelector((state) => state.allCart);
  const { wishlist } = useSelector((state) => state.wishlist);

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
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={`${
                    darkMode
                      ? "bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-red-500 border-red-500 text-red-500"
                      : "bg-transparent text-black shadow-md hover:shadow-md hover:shadow-red-500 border-2 border-red-500 text-red-500"
                  }  px-3 py-1 mt-1 rounded-lg `}
                >
                  Remove From Cart
                </button>
              ) : (
                <div className="flex gap-4">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className={`${
                      darkMode
                        ? "bg-transparent text-white border-2 shadow-sm hover:shadow-md hover:shadow-green-500 hover:border-green-500 hover:text-green-500"
                        : "bg-transparent text-black shadow-md hover:shadow-md hover:shadow-black border-2 border-black hover:shadow-green-500 hover:border-green-600 hover:text-green-700"
                    }  px-3 py-1 mt-1 rounded-lg `}
                  >
                    {item.btn}
                  </button>

                  {wishlist.some((p) => p.id === item.id) ? (
                    <button onClick={() => dispatch(removeFromWishlist(item))}>
                      <BsFillHeartFill
                        size={30}
                        className="cursor-pointer transition-all duration-100 active:scale-110 leading-tight"
                      />
                    </button>
                  ) : (
                    <button onClick={() => dispatch(addToWishlist(item))}>
                      <FaRegHeart
                        size={30}
                        className="cursor-pointer transition-all duration-100 active:scale-110 leading-tight"
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
