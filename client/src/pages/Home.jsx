import { useState } from "react";
import { useDispatch } from "react-redux";
import { setKeywords } from "../Redux/store";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchKeywords, setSearchKeywords] = useState("");

  const handleSearch = () => {
    const keywordsArray = searchKeywords.split(" ").map((keyword) => keyword.trim());
    dispatch(setKeywords(keywordsArray));
    // Clear the search input
    setSearchKeywords("");
    navigate("/advance-search")
  };


  return (
    <>
      <div className="px-3 md:p-4 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center  ">
          <div className="w-full md:w-1/4 hidden sm:grid mt-10 ">
            <ul className=" ">
              <h1 className="text-2xl font-bold  text-gray-700 ">
                Our Services
              </h1>

              <li className=" pb-2 border-white border-2 hover:border-red-700  mt-6">
                <hr className="border-gray-400 pb-3 " />
                <NavLink
                  to="/careerandmanpower"
                  className="text-gray-600  flex items-center justify-between"
                >
                  <span className="px-1">Career & ManPower</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700  hover:bg-blu">
                <NavLink
                  to="/regandcert"
                  className="text-gray-600  flex items-center justify-between"
                >
                  <span>Registration/Certification</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700 ">
                <NavLink
                  to="/contact"
                  className="text-gray-600  flex items-center justify-between"
                >
                  <span>License</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700 ">
                <NavLink
                  to="/auctionmaterial"
                  className="text-gray-600  flex items-center justify-between"
                >
                  <span>Auction Material</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700 ">
                <NavLink
                  to="/jointventure"
                  className="text-gray-600  flex items-center justify-between"
                >
                  <span>Joint Venture</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700 ">
                <NavLink
                  to="/tenderfilling"
                  className="text-gray-600 flex items-center justify-between"
                >
                  <span>Tender Filling</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-red-700 ">
                <NavLink
                  to="/gemregistration"
                  className="text-gray-600 flex items-center justify-between"
                >
                  <span>Gem Registration</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </NavLink>
              </li>
              <hr className="border-gray-400" />
              <hr className="border-gray-100" />
            </ul>
          </div>
          <div className="w-full md:w-3/4 px-4">
            <div className="py-3 md:py-12 sm:px-6 lg:px-8 ">
              <h1 className=" text-2xl md:text-4xl font-extrabold md:leading-normal">
                {" "}
                <span className="border-b-4 border-red-700">
                  Best eTender
                </span>{" "}
                Procurement Portal for RFP, Bids and etendering Opps{" "}
              </h1>
              <h1 className="mt-2">
                Tenders Search Engine for e Tender Procurement Notices
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="flex items-center rounded-lg bg-white w-full max-w-ls py-4 ">
                  <input
                    type="text"
                    placeholder="Enter your keywords separated by commas"
                    value={searchKeywords}
                    onChange={(e) => setSearchKeywords(e.target.value)}
                    className="w-full md:w-2/3 lg:w-full py-2 px-4 border-2 border-red-700 rounded-l focus:outline-none focus:border-red-700 bg-transparent text-gray-800 placeholder-gray-400"
                  />
                  <button
                    className="ml-0 md:mt-0 bg-red-700 hover:text-black text-white py-2 md:py-[8px] px-2 md:px-[50px] shadow-lg transition-colors border-[2px] border-red-700"
                    onClick={handleSearch}
                  >
                    Search
                  </button>

                </div>
              </div>
              <div className="flex justify-end">
                <NavLink to="/advance-search">
                  <button className="mb-2 ml-0 mr-3  md:ml-2 md:mt-0 text-red-700  hover:text-red-700 py-2 px-2 rounded-lg shadow-lg transition-colors border-[2px]">
                    Advance search
                  </button>
                </NavLink>
              </div>
              <div className="flex flex-wrap justify-center ">
                <div className="py-1 md:p-3 px-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-1 md:py-4 border-[2px] px-4 text-center shadow-lg">
                    <p className="text-xl md:text-4xl font-bold">45,000+</p>
                    <p className="text-gray-700">New Tenders Per Day</p>
                  </div>
                </div>
                <div className="py-1 md:p-3 px-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-1 md:py-4 border-[2px] px-4 text-center shadow-lg">
                    <p className="text-xl md:text-4xl font-bold">25+</p>
                    <p className="text-gray-700">Years Of Experience</p>
                  </div>
                </div>

                <div className="py-1 md:p-3 px-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-4 md:py-4 border-[2px] px-4 text-center shadow-lg">
                    <p className="text-xl md:text-4xl font-bold">240</p>
                    <p className="text-gray-700">Countries</p>
                  </div>
                </div>
                <div className="py-1 md:p-3 px-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-1 md:py-4 border-[2px] px-4 text-center shadow-lg">
                    <p className="text-xl md:text-4xl font-bold">10,000+</p>
                    <p className="text-gray-700">Registered Clients</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-5 md:mt-8">
                <Link to="/gemregistration">
                  <button className="bg-red-700  text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
                    Gem Registration
                  </button>
                </Link>
                <Link to="/tenders">
                  <button className="ml-4 bg-red-700  text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
                    Tenders Database
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <Home2 />
      <Home3 />
      <Home4 />
    </>
  );
};

export default HomePage;
