import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";

const AddUser = () => {
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
    <div className="container mx-auto p-4">
      <form className="mt-4">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow border-[1px]">
          <form className="space-y-4">
            <h1 className="text-4xl font-bold text-[#414141]">User Registration</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
              <div className="flex items-center">
                <label htmlFor="name" className="w-full md:w-1/4">
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="email" className="w-full md:w-1/4">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="password" className="w-full md:w-1/4">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="phone" className="w-full md:w-1/4">
                  Phone Number:
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="country" className="w-full md:w-1/4">
                  Country:
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-red-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                Register
              </button>
            </div>
          </form>
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

export default AddUser;