import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../Sidebar";
import Header from "../../Header";

const Category = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    // Fetch all categories
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/apiTender/options/alloptions?array=categories");
      console.log(response.data[0].categories)
      setCategories(response.data[0].categories);
    } catch (error) {
      console.error(error);
    }
  };

  const addCategory = async () => {
    try {
      const response = await axios.post("http://localhost:5000/apiTender/options/categories", { categories: [newCategory] });
      setCategories(response.data.categories);
      setNewCategory("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (category) => {
    try {
      const response = await axios.delete(`http://localhost:5000/apiTender/options/categories/${category}`);
      setCategories(response.data.categories);
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
            <h1 className="text-xl font-bold mb-4">Category</h1>

            {/* Category list */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Existing Categories:</h2>
              {categories.length > 0 ? (
                <ul className="list-disc list-inside">
                  {categories.map((category) => (
                    <li key={category} className="flex items-center">
                      <span>{category}</span>
                      <button
                        className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                        onClick={() => deleteCategory(category)}
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
                <p>No categories found.</p>
              )}
            </div>

            {/* Add category form */}
            <div className="flex">
              <input
                type="text"
                placeholder="Enter new category"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={addCategory}
              >
                Add Category
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Category;
