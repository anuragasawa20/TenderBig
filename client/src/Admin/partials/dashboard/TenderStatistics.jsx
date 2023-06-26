import React, { useState, useEffect } from "react";
import axios from "axios";

const TenderStatistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchTenderStatistics = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            auth: token
          }
        };

        const response = await axios.get("http://localhost:5000/apiTender/tenderdetails/statistics", config);
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching tender statistics:", error);
      }
    };

    fetchTenderStatistics();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tender Statistics</h1>
      {statistics ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Total Tenders</h2>
            <p className="text-2xl font-bold">{statistics.totalCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Reviewed and Approved Tenders</h2>
            <p className="text-2xl font-bold">{statistics.activeApprovedCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Reviewed Tenders</h2>
            <p className="text-2xl font-bold">{statistics.activeCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Approved Tenders</h2>
            <p className="text-2xl font-bold">{statistics.approvedCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Contractor Tenders</h2>
            <p className="text-2xl font-bold">{statistics.contractorCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Subcontractor Tenders</h2>
            <p className="text-2xl font-bold">{statistics.subcontractorCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Admin Tenders</h2>
            <p className="text-2xl font-bold">{statistics.adminCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">HR Tenders</h2>
            <p className="text-2xl font-bold">{statistics.hrCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Employee Tenders</h2>
            <p className="text-2xl font-bold">{statistics.employeeCount}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <p className="text-2xl font-bold"></p>
          </div>
        </div>
      )}
    </div>

  );
};

export default TenderStatistics;
