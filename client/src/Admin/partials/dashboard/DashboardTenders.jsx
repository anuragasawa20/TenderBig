import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AllTendersSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const tendersPerPage = 8;

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + tendersPerPage);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => prevIndex - tendersPerPage);
  };

  const [tenderData, setTenderData] = useState([]);
  const [userCategoryFilter, setUserCategoryFilter] = useState("");
  const [approvedFilter, setApprovedFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    const fetchTenderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/apiTender/tenderdetails/all-tenders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              auth: localStorage.getItem("token"),
            },
          }
        );
        console.log(response.data);
        setTenderData(response.data.tenders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTenderData();
  }, []);

  const filteredTenderData = tenderData.filter((tender) => {
    if (
      tender.userCategory.includes(userCategoryFilter) &&
      (approvedFilter === "" || tender.approvedStatus === approvedFilter) &&
      (activeFilter === "" || tender.active === activeFilter)
    ) {
      return true;
    }
    return false;
  });

  const filteredAndPaginatedTenders = filteredTenderData.slice(
    startIndex,
    startIndex + tendersPerPage
  );

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
              <section className="container mx-auto p-6 font-mono overflow-x-auto">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg overflow-x-auto">
                  <div className="w-full overflow-x-auto">
                    <div className="table-container overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Summary</th>
                            <th className="px-4 py-3">Sector</th>
                            <th className="px-4 py-3">Deadline</th>
                            <th className="px-4 py-3">Publish Date</th>
                            <th className="px-4 py-3">User Category</th>
                            <th className="px-4 py-3">Approved</th>
                            <th className="px-4 py-3">Active</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {filteredAndPaginatedTenders.map((tender) => (
                            <tr className="text-gray-700" key={tender._id}>
                              <td className="px-4 py-3 border">{tender.summary}</td>
                              <td className="px-4 py-3 border">{tender.sector}</td>
                              <td className="px-4 py-3 border">
                                {tender.procurementSummary.deadline}
                              </td>
                              <td className="px-4 py-3 border">{tender.tenderDetail.publishDate}</td>
                              <td className="px-4 py-3 border">{tender.userCategory}</td>
                              <td className="px-4 py-3 border">
                                {tender.approvedStatus ? "Yes" : "No"}
                              </td>
                              <td className="px-4 py-3 border">
                                {tender.active ? "Yes" : "No"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handlePrevClick}
                    disabled={startIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextClick}
                    disabled={startIndex + tendersPerPage >= filteredTenderData.length}
                  >
                    Next
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllTendersSection;
