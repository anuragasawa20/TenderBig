import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../Sidebar";
import Header from "../../Header";

const Department = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState("");

  useEffect(() => {
    // Fetch all departments
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/apiTender/options/alloptions?array=departments");
      console.log(response.data[0].departments)
      setDepartments(response.data[0].departments);
    } catch (error) {
      console.error(error);
    }
  };

  const addDepartment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/apiTender/options/departments", { departments: [newDepartment] });
      setDepartments(response.data.departments);
      setNewDepartment("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDepartment = async (department) => {
    try {
      const response = await axios.delete(`http://localhost:5000/apiTender/options/departments/${department}`);
      setDepartments(response.data.departments);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Department</h1>

            {/* Department list */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Existing Departments:</h2>
              {departments.length > 0 ? (
                <ul className="list-disc list-inside">
                  {departments.map((department) => (
                    <li key={department} className="flex items-center">
                      <span>{department}</span>
                      <button
                        className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                        onClick={() => deleteDepartment(department)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V6zm2 1v8h4V7H8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No departments found.</p>
              )}
            </div>

            {/* Add department form */}
            <div className="flex">
              <input
                type="text"
                placeholder="Enter new department"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={addDepartment}
              >
                Add Department
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Department;
