import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../Sidebar";
import Header from "../../Header";

const Sector = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [newSector, setNewSector] = useState("");

  useEffect(() => {
    // Fetch all sectors
    fetchSectors();
  }, []);

  const fetchSectors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/apiTender/options/alloptions?array=sectors");
      console.log(response.data[0].sectors);
      setSectors(response.data[0].sectors);
    } catch (error) {
      console.error(error);
    }
  };

  const addSector = async () => {
    try {
      const response = await axios.post("http://localhost:5000/apiTender/options/sectors", { sectors: [newSector] });
      setSectors(response.data.sectors);
      setNewSector("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSector = async (sector) => {
    try {
      const response = await axios.delete(`http://localhost:5000/apiTender/options/sectors/${sector}`);
      setSectors(response.data.sectors);
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
            <h1 className="text-xl font-bold mb-4">Sector</h1>

            {/* Add sector form */}
            <div className="flex">
              <input
                type="text"
                placeholder="Enter new sector"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                value={newSector}
                onChange={(e) => setNewSector(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={addSector}
              >
                Add Sector
              </button>
            </div>

            {/* Sector list */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Existing Sectors:</h2>
              {sectors.length > 0 ? (
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-gray-100 border-b font-medium text-gray-700">Sector Name</th>
                      <th className="py-2 px-4 bg-gray-100 border-b"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectors.map((sector) => (
                      <tr key={sector}>
                        <td className="py-2 px-4 border-b">{sector}</td>
                        <td className="py-2 px-4 border-b">
                          <button
                            className="text-red-600 hover:text-red-800 focus:outline-none"
                            onClick={() => deleteSector(sector)}
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No sectors found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sector;
