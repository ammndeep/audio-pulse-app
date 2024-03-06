/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";
import { bestSeller, newArrivals } from "../Data/Data";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [...bestSeller.items, ...newArrivals.items],
    cart: [],
  });
  // console.log(state);

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((state) => !state);
  };

  return (
    <Context.Provider value={{ darkMode, toggleTheme, state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };

export const CartState = () => {
  return useContext(Context);
};
