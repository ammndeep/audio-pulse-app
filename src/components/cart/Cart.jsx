import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import CartEmpty from "./CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increasedQty, removeFromCart } from "../../app/CartSlice";

export default function Cart() {
  const { cart } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.Qty, 0)
    );
  }, [cart]);
  return (
    <>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-start sm:gap-20  my-20  p-4">
          <div className="flex flex-col justify- items-center gap-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-start items-start gap-5 hover:bg-slate-500 py-1 rounded-lg w-[500px] px-3"
              >
                <div>
                  <img
                    src={product.img}
                    alt="product_img"
                    height={100}
                    width={100}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold mt-2">{product.title}</h1>
                  <p className="text-[13px] italic text-slate-400 mb-1">
                    {product.subtext}
                  </p>
                  <span className="bg-gray-600  p-1 rounded-md text-white">
                    ${product.price}
                  </span>
                  <br />
                  <button
                    className="p-1 mt-2 cart-btn mr-3 px-2 hover:bg-green-600"
                    onClick={() => dispatch(increasedQty(product.id))}
                  >
                    +
                  </button>
                  <span className="text-2xl font-bold mr-3">{product.Qty}</span>
                  <button
                    className="p-1 mt-2 cart-btn mr-3 px-2 hover:bg-red-600"
                    onClick={() => dispatch(decreaseQty(product.id))}
                  >
                    -
                  </button>

                  <button className="p-1 mt-2 mr-3 px-2 cart-btn hover:bg-red-600">
                    <MdDelete
                      className="hover:text-white inline-flex"
                      size={22}
                      onClick={() => dispatch(removeFromCart(product.id))}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* summary  */}
          <div className="border-2 bg-slate-800 relative top-28 mb-10  sm:top-0 rounded-lg sm:w-auto w-full p-3 text-white">
            <h2 className="text-3xl sm:text-2xl text-medium my-2">
              Total Price :)
            </h2>
            <span className="text-3xl mb-2">${total}</span> <br />
            <button className="bg-transparent border-2 rounded-md p-2 my-3 hover:bg-slate-100 hover:text-black">
              Proceed To Payment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
