import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { locations } from '../../../../../constants/countriesData';
import { RiBuilding2Line } from "react-icons/ri";

import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const EmployerFormDetail = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:3000/apiTender/services/employer/forms/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    if (!formData) {
        return (
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                    <main>
                        {/* Site header */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            <div className="flex justify-center">
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h2 className="text-xl font-bold mb-4">Employer Form Detail</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        );
    }
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                    <main>
                        {/* Site header */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                        <div className="p-4 ">
                            <div className="flex items-center justify-center h-36 mb-4 rounded ">
                                <h1 className="text-2xl font-bold mb-4">Employer Information</h1>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center justify-center rounded border-2">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="items-center justify-center">
                                        <h1 className="text-3xl font-bold text-center mb-4">
                                Employer Space
                            </h1>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="company" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="company"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.company}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="mobile" className="flex items-center">
                                        <AiOutlinePhone className="mr-2" />
                                        Contact Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="mobile"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.mobile}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="email" className="flex items-center">
                                        <AiOutlineMail className="mr-2" />
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.email}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="cwork" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Company Work
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cwork"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.cwork}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="jobpost" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Job Post
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="jobpost"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.jobpost}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="experience" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Experience
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="experience"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.experience}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="salary" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Salary
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="salary"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.salary}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="curl" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Website
                                    </label>
                                    <input
                                        required
                                        type="URL"
                                        id="curl"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.curl}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="companyprofile" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Profile
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="companyprofile"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.companyprofile}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="contactpnumber" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Contact Person Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="contactpnumber"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.contactpnumber}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="regno" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Registration Number
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="regno"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.regno}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="PAN" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        PAN Number
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="PAN"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.PAN}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="PAN" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        GST Number
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="GST"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.GST}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="addressline1" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Address Line 1
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="addressline1"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.addressline1}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="addressline2" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Address Line 2
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="addressline2"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.addressline2}
                                        readOnly                                    />
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="md:flex">
                                    <div className="mb-4 basis-1/2 mx-1">
                                        <label htmlFor="city" className="flex items-center">
                                            <AiOutlineUser className="mr-2" />
                                            City
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="city"
                                            className="border border-gray-300 rounded px-3 py-2 w-full"
                                            value={formData.city}
                                            readOnly                                        />
                                    </div>
                                    <div className="mb-4 basis-1/2 mx-1">
                                        <label htmlFor="zipcode" className="flex items-center">
                                            <AiOutlineUser className="mr-2" />
                                            Zip Code
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="zipcode"
                                            className="border border-gray-300 rounded px-3 py-2 w-full"
                                            value={formData.zipcode}
                                            readOnly                                        />
                                    </div>
                                    <div className="mb-4 basis-1/2 mx-1">
                                        <label className="block mb-2 font-semibold">
                                            State
                                            <span className="text-red-700 relative top-0 right-0">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            readOnly                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            placeholder="Enter State"
                                        />
                                    </div>
                                    <div className="mb-4 basis-1/2 mx-1">
                                        <label className="block mb-2 font-semibold">
                                            Country
                                            <span className="text-red-700 relative top-0 right-0">*</span>
                                        </label>
                                        <select
                                            required
                                            name="country"
                                            value={formData.country}
                                            readOnly                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        >
                                            {locations.map((country, index) => (
                                                <option key={index} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="md:flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="officetiming" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Office Timing
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="officetiming"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.officetiming}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="holidays" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Holidays
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="holidays"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.holidays}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="workingdays" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Working Days
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="workingdays"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.workingdays}
                                        readOnly                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="seekerpost" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Employer Post
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="seekerpost"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={formData.seekerpost}
                                        readOnly                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-5">

                                <div>
                                    <label htmlFor="file-input" className="block mb-2 font-semibold">
                                        Upload Resume
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                    </label>
                                    <input
                                        type="file" name="resume" accept=".pdf" required
                                        id="resume"
                                        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="file-input" className="block mb-2 font-semibold">
                                        Other File
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                    </label>
                                    <input
                                        type="file" name="other" accept=".pdf"
                                        id="other"
                                        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
                                    />
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                            >
                                Submit
                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </main>
                </div>
            </div>
        </>
    );
};

export default EmployerFormDetail;