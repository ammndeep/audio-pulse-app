import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { CartState, Context } from "../../app/Context";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  const {
    state: { cart },
  } = CartState();

  const { darkMode, toggleTheme } = useContext(Context);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-5 left-0 right-0 opacity-100 z-50 "
            : "fixed top-0 left-0 right-0 h-[8vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between container">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl gradient-text font-bold">audioPulse</h1>
            </Link>
          </div>
          <ul className="flex items-center gap-4 justify-center">
            <li className="grid items-center">
              {darkMode ? (
                <BsMoonStarsFill
                  size={23}
                  color={darkMode ? "white" : "currentColor"}
                  className="icon-style"
                  onClick={toggleTheme}
                />
              ) : (
                <MdOutlineLightMode
                  size={23}
                  color={darkMode ? "white" : "currentColor"}
                  className="icon-style "
                  onClick={toggleTheme}
                />
              )}
            </li>
            <li className="grid items-center">
              <FaRegHeart
                size={23}
                color={darkMode ? "white" : "currentColor"}
                className="icon-style"
              />
            </li>
            <li className="grid items-center">
              <Link to="/cart">
                <HiOutlineShoppingCart
                  size={23}
                  color={darkMode ? "white" : "currentColor"}
                  className="icon-style"
                />
              </Link>
              <span className="absolute ml-3 mb-4 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-600 border-black rounded-full ">
                {cart.length}
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
