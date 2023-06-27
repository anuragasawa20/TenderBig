import { useState } from 'react';
import Sidebar from "../Sidebar";
import Header from "../Header";

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        country: '',
        state: '',
        city: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make API request with form data
        fetch('http://localhost:5000/apiTender/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle response data
                console.log(data);
                setSuccessMessage(data.success);
                // Clear input fields
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    country: '',
                    state: '',
                    city: ''
                });
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
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
                            <div className="min-h-screen flex justify-center items-center">
                                <div className="w-1/2 bg-white">
                                    <h1 className="text-3xl font-bold mb-4">Add User</h1>
                                    {successMessage && (
                                        <div className="mb-4 text-green-500">{successMessage}</div>
                                    )}
                                    <div className="flex">
                                        <div className="w-1/2 pr-2">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        placeholder="Enter your name"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                                        Email
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        placeholder="Enter your email"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                        Password
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        value={formData.password}
                                                        placeholder="Enter your password"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        type="text"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        placeholder="Enter your phone number"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <button
                                                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        type="submit"
                                                    >
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                                    Country
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    type="text"
                                                    id="country"
                                                    name="country"
                                                    value={formData.country}
                                                    placeholder="Enter your country"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                                    State
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    placeholder="Enter your state"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                                    City
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    placeholder="Enter your city"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default AddUser;
