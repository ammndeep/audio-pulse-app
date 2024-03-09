import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={`w-full ${
          darkMode ? "bg-slate-800" : "bg-black"
        }  text-white`}
      >
        <div className="max-w-6xl mx-auto p-16">
          <div className="flex justify-between items-center sm:flex-row flex-col gap-5">
            <div className="flex items-center sm:flex-row flex-col">
              <h1 className="text-3xl sm:text-2xl font-medium">audioPulse</h1>
              <span className="sm:h-6 sm:border-r-2 border-slate-400 rounded-md ml-6"></span>
              <h1 className="ml-1 text-slate-300 text-sm sm:text-md">
                Headphone Store
              </h1>
            </div>

            <div className="flex items-center gap-5 sm:flex-row flex-col">
              <span>About</span>
              <span>Get Help</span>
              <span>Company</span>
            </div>
          </div>

          <hr className="mt-8 border-t-1 border-gray-500" />

          <div className="flex justify-between items-center mt-4 sm:flex-row flex-col-reverse  gap-5">
            <div className="flex gap-5 sm:flex-row flex-col-reverse justify-center items-center">
              <p className="text-gray-400 text-[12px] sm:text-[15px]">
                Copyright © 2023 audioPulse. All rights reserved
              </p>
              <div className="flex gap-5">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <FaInstagram size={24} className="icon-style-footer text-white" />
              <FaYoutube size={24} className="icon-style-footer text-white" />
              <FaFacebook size={24} className="icon-style-footer text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
