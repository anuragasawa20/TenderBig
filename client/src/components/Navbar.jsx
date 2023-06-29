import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="w-[120px]" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-end sm:items-stretch">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                  >
                    Home
                  </Link>
                  
                  <Link
                    to="/tenders"
                    className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                  >
                    Tenders
                  </Link>

                  <Link
                    to="/gems"
                    className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                  >
                    Gems
                  </Link>

                  <Link
                    to="/forms"
                    className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                  >
                    Apply for Tenders
                  </Link>

                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                  >
                    Contact
                  </Link>
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="text-gray-600 hover:text-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                    >
                      Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2  bg-white border border-gray-200 rounded-md shadow-lg w-[290px] z-10">
                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Career & Man Power
                        </Link>

                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Registration / Certificate
                        </Link>

                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90}`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />{" "}
                          </svg>
                          License
                        </Link>

                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                          onClick={() => setSelectedService("License")}
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Auction Material
                        </Link>

                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Joint Venture
                        </Link>
                        
                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                      }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Online Bidding
                        </Link>
                      </div>
                    )}
                  </div>
                  {auth ? (
                    <button
                      onClick={logout}
                      className="bg-red-700 text-white px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="bg-red-700 text-white px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
              <div className="sm:hidden ml-6">
                <button
                  type="button"
                  className="text-gray-600 hover:text-red-700 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 9a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 4a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 4a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className=" bg-red-700 px-3 py-2 text-lg font-medium transition-colors duration-300 rounded-md"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`ml-1 h-4 w-4 inline-block transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2  bg-white border border-gray-200 rounded-md shadow-lg w-[290px]">
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-white bg-red-700 text-lg "
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Career & Man Power
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Registration / Certificate
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />{" "}
                      </svg>
                      License
                    </Link>

                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                      onClick={() => setSelectedService("License")}
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Auction Material
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Joint Venture
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:text-white hover:bg-red-700 text-lg text-gray-800"
                    >
                      <svg
                        xmlns="https://www.svgrepo.com/show/498932/settings.svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-1 h-4 w-4 inline-block transform -rotate-90
                      }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Online Bidding
                    </Link>
                  </div>
                )}
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
