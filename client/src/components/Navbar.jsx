import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleServiceSelect = (event) => {
    const selectedService = event.target.value;
    if (selectedService) {
      navigate(selectedService);
    }
  };

  return (
    <div className="">
      <nav className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:bg-white ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-3xl font-bold tracking-wider text-red-700"
              >
                <img className="w-[120px]" src={logo} alt="logo" />
              </a>
            </div>
            <div className="flex-1 flex items-center  sm:items-stretch justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div>
                    <Link
                      to="/"
                      className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                    >
                      Home
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/tenders"
                      className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                    >
                      Tenders
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/forms"
                      className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                    >
                      Apply For Tender
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/category"
                      className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                    >
                      Tender by category
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                    >
                      Contact
                    </Link>
                  </div>
                  <select
                    onChange={handleServiceSelect}
                    className="bg-white border-[2px] border-red-700"
                  >
                    <option value="" className="text-white bg-red-700 text-xl p-2 focus:bg-white focus:text-black">Services</option>

                    <option value="/career-manpower" className="text-white bg-red-700 text-xl p-2">Career & Man Power</option>
                    <option value="/registration-certificate" className="text-white bg-red-700 text-xl p-2">
                      Registration / Certificate
                    </option>
                    <option value="/license" className="text-white bg-red-700 text-xl p-2">License</option>
                  </select>
                  {auth ? (
                    <>
                      <Link
                        onClick={logout}
                        className="bg-red-700 text-lg font-medium transition-colors duration-300 text-white hover:text-white px-3 py-2 rounded-md w-[90px]"
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="bg-red-700 text-lg font-medium transition-colors duration-300 text-white hover:text-white px-3 py-2 rounded-md w-[90px]"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="sm:hidden ml-6 fixed">
                <button
                  type="button"
                  className="text-gray-600 hover:text-red-700 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img
                    src="https://www.svgrepo.com/show/12219/menu.svg"
                    alt="Toggle Menu"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </nav>
      {menuOpen && (
        <div className="flex justify-end ">
          <div className="mt-12 sm:hidden overflow bg-red-700 max-w-[250px] p-2 text-white fixed ">
            <div className="space-y-2 mt-2">
              <div>
                <Link
                  to="/"
                  className="mt-2 hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md w-[90px]"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>

              <div>
                <Link
                  to="/tenders"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md w-[90px]"
                  onClick={toggleMenu}
                >
                  Tenders
                </Link>
              </div>
              <div>
                <Link
                  to="/forms"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md w-[90px]"
                >
                  Apply For Tender
                </Link>
              </div>
              <div>
                <Link
                  to="/about"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md w-[90px]"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="/login"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md w-[90px]  bg-red-700"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
