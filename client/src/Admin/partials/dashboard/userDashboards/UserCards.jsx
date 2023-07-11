import { useState } from "react";
import { Link } from "react-router-dom";
import demoImg from "./docIcon.png";
import PropTypes from "prop-types";

const UserCards = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [dropdownOpen5, setDropdownOpen5] = useState(false);
    const [dropdownOpen6, setDropdownOpen6] = useState(false);
    const [dropdownOpen7, setDropdownOpen7] = useState(false);
    const [dropdownOpen8, setDropdownOpen8] = useState(false);
    const [dropdownOpen9, setDropdownOpen9] = useState(false);

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };
    const toggleDropdown3 = () => {
        setDropdownOpen3(!dropdownOpen3);
    };
    const toggleDropdown4 = () => {
        setDropdownOpen4(!dropdownOpen4);
    };
    const toggleDropdown5 = () => {
        setDropdownOpen5(!dropdownOpen5);
    };
    const toggleDropdown6 = () => {
        setDropdownOpen6(!dropdownOpen6);
    };
    const toggleDropdown7 = () => {
        setDropdownOpen7(!dropdownOpen7);
    };
    const toggleDropdown8 = () => {
        setDropdownOpen8(!dropdownOpen8);
    };
    const toggleDropdown9 = () => {
        setDropdownOpen9(!dropdownOpen9);
    };

    return (
        <>
            <div className="flex">
                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Career & Manpower
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown1}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen1 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen1 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Registrations
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown2}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen2 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen2 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Certifications
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown3}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen3 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen3 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    License
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown4}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen4 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen4 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Auction Materials
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown5}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen5 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen5 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Joint Ventures
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown6}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen6 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen6 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Online Tender Filling
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown7}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen7 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen7 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Offline Tender Filling
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown8}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen8 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen8 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="basis-1/2 m-5">
                    <div className="max-w-xs w-full lg:max-w-xs lg:flex border border-gray-400 bg-white rounded">
                        <div className="h-32 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                            <img src={demoImg} className="ml-6 mt-11 w-16" alt="Document Icon" />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal ml-3">
                            <div className="mb-2">
                                <p className="text-xs text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-2 h-2 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Gem Registrations
                                </p>
                                <div className="text-gray-900 font-bold text-sm">
                                    {/* { props.updates } */}
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown9}
                                        className="bg-red-700 px-2 py-1 text-sm font-medium transition-colors duration-300 rounded-md text-white"
                                    >
                                        options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className={`ml-1 h-3 w-3 inline-block transform ${dropdownOpen9 ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* <input type="date" className="mt-2" /> */}
                                    {dropdownOpen9 && (
                                        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                Auto
                                            </Link>
                                            <Link
                                                to="#"
                                                className="block px-2 py-1 text-sm font-medium transition-colors duration-300 hover:bg-red-700 hover:text-white"
                                            >
                                                New
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};


UserCards.propTypes = {
    title: PropTypes.string.isRequired,
};


export default UserCards;
