import { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { locations } from "../../../constants/countriesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const AddProject = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden ">
            {/* Sidebar */}

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <main>
                    {/*  Site header 
      import Header from '../partials/Header';
      */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Dashboard actions */}

                        {/* Cards */}
                        <div className="grid grid-cols-15 gap-6">
                            {/*---------> Table (Top Channels) */}

                            <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
                                    <form onSubmit={handleSubmit}>
                                        {/* Global Section */}
                                        <h2 className="text-2xl font-bold mb-4 text-center ">Add Project</h2>
                                        <p className="text-red-700 font-thin font-serif text-sm">
                                            Fields marked with an asterisk (*) are mandatory.
                                        </p>
                                        <div className="p-2 rounded-lg">
                                            <label className="block mb-2 font-semibold relative">
                                                PNR
                                                <span className="text-red-700 relative top-0 right-0">*</span>
                                                <input
                                                    required
                                                    type="text"
                                                    name="pnr"
                                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                    placeholder="Enter Summary"
                                                />
                                            </label>
                                            <div className=" grid grid-cols-2 gap-4 ">
                                                <div className="relative">
                                                    <label className="block mb-2 font-semibold">
                                                        Company Name
                                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="companyName"
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                        placeholder="Enter Sector"
                                                    />
                                                </div>

                                                <label className="block mb-2 font-semibold">
                                                    Project Detail
                                                    <input
                                                        type="text"
                                                        name="projectDetail"
                                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                        placeholder="Enter CPV No"
                                                    />
                                                </label>

                                                <label className="block mb-2 font-semibold">
                                                    Project Value
                                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                                    <input required
                                                        type="text"
                                                        name="value"
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                        placeholder="Enter Product"
                                                    />
                                                </label>
                                                <label className="block mb-2 font-semibold">
                                                    Project Status
                                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                                    <input required
                                                        type="text"
                                                        name="status"
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                        placeholder="Enter Product"
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                            <div className=" p-2 rounded-lg mt-2">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <label className="block font-semibold">
                                                        Country
                                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                                        <select required
                                                            name="country"
                                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                        >
                                                            {locations.map((country, index) => (
                                                                <option key={index} value={country}>
                                                                    {country}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>

                                                    <label className="block font-semibold">
                                                        Project State
                                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                                        <input required
                                                            type="text"
                                                            name="state"
                                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                            placeholder="Enter State"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 mt-1.5 mb-1.5">
                                                    <label className="block font-semibold">
                                                        City
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                            placeholder="Enter City"
                                                        />
                                                    </label>
                                                    <label className="block font-semibold">
                                                        Sector
                                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                                        <input required
                                                            type="date"
                                                            name="procurementSummaryDeadline"
                                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                            placeholder="Enter Deadline"
                                                        />
                                                    </label>
                                                </div>


                                        </div>
                                        <div className="w-3/4">

                                            <button
                                                type="submit"
                                                className="bg-[#182235] hover:bg-[#111a2b] mx-6 text-white px-4 py-2 mt-8 rounded-lg font-semibold w-2/4"
                                            >
                                                Submit
                                            </button>

                                        </div>
                                    </form>


                            </div>

                        </div>
                    </div>
                </main>

            </div>
        </div>


    );
};

export default AddProject;




