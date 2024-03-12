import {
  heroapi,
  newArrivals,
  shopCollection,
  bestSeller,
  services,
  newsFeed,
} from "./Data/Data";
import BestSeller from "./components/utils/BestSeller";
import Footer from "./components/utils/Footer";
import Hero from "./components/utils/Hero";
import Navbar from "./components/utils/Navbar";
import NewArrivals from "./components/utils/NewArrivals";
import NewsFeed from "./components/utils/NewsFeed";
import SaleBanner from "./components/utils/SaleBanner";
import Services from "./components/utils/Services";
import ShopCollection from "./components/utils/ShopCollection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { useSelector } from "react-redux";
import Wishlist from "./components/wishlist/Wishlist";

export default function App() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={` min-h-screen overflow-y-auto absolute top-0 left-0 right-0 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero heroapi={heroapi} />
                    <NewArrivals newArrivals={newArrivals} />
                    <ShopCollection shopCollection={shopCollection} />
                    <BestSeller bestSeller={bestSeller} />
                    <SaleBanner />
                    <Services services={services} />
                    <NewsFeed newsFeed={newsFeed} />
                    <Footer />
                  </>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
