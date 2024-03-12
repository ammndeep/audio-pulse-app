import { useDispatch, useSelector } from "react-redux";
import EmptyWishlist from "./EmptyWishlist";
import { removeFromWishlist } from "../../app/Wishlist";

export default function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlist);
  const darkMode = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  return (
    <>
      {wishlist.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-start sm:gap-20  my-20 sm:p-4">
          <div className="flex flex-col  justify- items-center gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex justify-start items-center gap-5 py-1 rounded-lg w-[500px] px-3"
              >
                <div>
                  <img
                    src={product.img}
                    alt="product-image"
                    className="rounded-lg"
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold mt-4">{product.title}</h1>
                  <p className="text-[13px] italic text-slate-400 mb-2">
                    {product.subtext}
                  </p>
                  <span className="bg-gray-600  p-1 rounded-md text-white mt-1">
                    ${product.price}
                  </span>
                  <br />

                  <button
                    onClick={() => dispatch(removeFromWishlist(product))}
                    className={`${
                      darkMode
                        ? "bg-transparent text-white border-2 border-white shadow-sm hover:shadow-md hover:text-red-500 hover:border-red-500"
                        : "bg-transparent text-black shadow-md border-black border-2"
                    }  px-1 py-1 mt-3 rounded-lg hover:text-red-500 hover:border-red-500 text-sm`}
                  >
                    Remove From Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
