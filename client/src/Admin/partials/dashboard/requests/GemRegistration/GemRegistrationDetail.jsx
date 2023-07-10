import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";
import { Country, State, City } from 'country-state-city';

const GemRegistrationDetail = () => {
    const [data, setFormData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:3000/apiTender/services/gem/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const countryData = Country.getAllCountries();
    const countryNames = Object.values(countryData).map((country) => country.name);

    let stateNames = [];
    if (data?.country) {
        const countryCode = countryData.find((country) => country.name === data.country)?.isoCode;
        const stateData = State.getStatesOfCountry(countryCode);
        stateNames = Array.from(new Set(Object.values(stateData).map((state) => state.name)));
    }

    let cityNames = [];
    if (data?.country) {
        const countryCode = countryData.find((country) => country.name === data.country)?.isoCode;
        const cityData = City.getCitiesOfCountry(countryCode);
        cityNames = Array.from(new Set(Object.values(cityData).map((city) => city.name)));
    }

    const formatReceivedAt = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        return formattedDate;
    };

    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!data) {
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
                                    <h2 className="text-xl font-bold mb-4">Gem Registration Detail</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

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
                                {/* Global Section */}
                                <h2 className="text-2xl font-bold mb-4 text-center">Gem Registration</h2>

                                <div className="p-2 rounded-lg">
                                    <p className="text-blue-700 font-thin font-serif text-sm">
                                        Fields marked with an asterisk (*) are mandatory.
                                    </p>
                                    {/* Name */}
                                    <label className="block mb-2 font-semibold relative">
                                        Full Name
                                        <span className="text-blue-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            readOnly
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                            placeholder="Project"
                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold relative">
                                        Email
                                        <span className="text-blue-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            readOnly
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold relative">
                                        Contact Number
                                        <span className="text-blue-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="tel"
                                            name="contact"
                                            value={data.contact}
                                            readOnly
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                            placeholder="Mobile"
                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold relative">
                                        Aadhar Number
                                        <span className="text-blue-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="aadhar"
                                            value={data.aadhar}
                                            readOnly
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                            placeholder="Aadhar Number"
                                        />
                                    </label>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="relative">
                                            <label className="block mb-2 font-semibold">
                                                Company Name
                                                <span className="text-blue-700 relative top-0 right-0">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="companyName"
                                                value={data.companyName}
                                                readOnly
                                                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="relative">
                                            <label className="block mb-2 font-semibold">
                                                PAN Number
                                            </label>
                                            <input
                                                type="text"
                                                name="panNumber"
                                                value={data.panNumber}
                                                readOnly
                                                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                placeholder="Enter PAN No"
                                            />
                                        </div>
                                        <div className="relative">
                                            <label className="block mb-2 font-semibold">
                                                Website Address
                                            </label>
                                            <input
                                                type="URL"
                                                name="websiteAddress"
                                                value={data.websiteAddress}
                                                readOnly
                                                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                placeholder="Website URL"
                                            />
                                        </div>
                                        <label className="block mb-2 font-semibold">
                                            GST Number
                                            <span className="text-blue-700 relative top-0 right-0">*</span>
                                            <input
                                                required
                                                type="text"
                                                name="gst"
                                                value={data.gst}
                                                readOnly
                                                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                placeholder="GST number"
                                            />
                                        </label>
                                        <div className="grid gap-4 mt-1.5 mb-1.5">
                                            <label className="block font-semibold">
                                                Business Start Date
                                                <span className="text-blue-700 relative top-0 right-0">*</span>
                                                <input
                                                    type="date"
                                                    name="startDate"
                                                    value={data.startDate}
                                                    readOnly
                                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                    placeholder="Enter Start Date"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="p-2 rounded-lg mt-2">
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4">Business Office Building</h2>
                                            <label className="block mb-2 font-semibold relative">
                                                Address
                                                <span className="text-blue-700 relative top-0 right-0">*</span>
                                                <input
                                                    required
                                                    type="text"
                                                    name="address"
                                                    value={data.address}
                                                    readOnly
                                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                    placeholder="Enter Address"
                                                />
                                            </label>

                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="block mb-2 font-semibold relative">
                                                    Country
                                                    <span className="text-blue-700 relative top-0 right-0">*</span>
                                                    <select
                                                        required
                                                        name="country"
                                                        value={data.country}
                                                        readOnly
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                    >
                                                        <option value="">Select a country</option>
                                                        {countryNames.map((country) => (
                                                            <option key={country} value={country}>
                                                                {country}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </label>

                                                <label className="block mb-2 font-semibold relative">
                                                    State
                                                    <span className="text-blue-700 relative top-0 right-0">*</span>
                                                    <select
                                                        required
                                                        name="state"
                                                        value={data.state}
                                                        readOnly
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                    >
                                                        <option value="">Select a state</option>
                                                        {stateNames.map((state) => (
                                                            <option key={state} value={state}>
                                                                {state}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </label>

                                                <label className="block mb-2 font-semibold relative">
                                                    City
                                                    <span className="text-blue-700 relative top-0 right-0">*</span>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={data.city}
                                                        readOnly
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                        placeholder="Enter a city"
                                                        autoComplete="off"
                                                        list="cityNamesList"
                                                    />
                                                    <datalist id="cityNamesList">
                                                        {cityNames.map((city) => (
                                                            <option key={city} value={city} />
                                                        ))}
                                                    </datalist>
                                                </label>

                                                <label className="block mb-2 font-semibold relative">
                                                    ZIP Code
                                                    <span className="text-blue-700 relative top-0 right-0">*</span>
                                                    <input
                                                        required
                                                        type="number"
                                                        name="zip"
                                                        value={data.zip}
                                                        readOnly
                                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                                                        placeholder="Enter ZIP"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-3 font-bold">
                                    <p>Cost of Registration: <span className="text-blue-600">xyzw</span></p>
                                </div>
                                <div className="flex m-3">
                                    <input type="checkbox" readOnly />
                                    <p className="mx-2">Do you agree to the terms and conditions?</p>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GemRegistrationDetail;
