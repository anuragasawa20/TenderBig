import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

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

        const response = await axios.get(
          "http://localhost:5000/apiTender/tenderdetails/statistics",
          config
        );
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching tender statistics:", error);
      }
    };

    fetchTenderStatistics();
    const interval = setInterval(fetchTenderStatistics, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderChart = () => {
    if (!statistics) {
      return null;
    }

    const chartData = {
      labels: [
        "Reviewed and Approved Tenders",
        "Reviewed Tenders",
        "Approved Tenders",
        "Contractor Tenders",
        "Subcontractor Tenders",
        "Admin Tenders",
        "HR Tenders",
        "Employee Tenders"
      ],
      datasets: [
        {
          label: "Tender Statistics",
          data: [
            statistics.activeApprovedCount,
            statistics.activeCount,
            statistics.approvedCount,
            statistics.contractorCount,
            statistics.subcontractorCount,
            statistics.adminCount,
            statistics.hrCount,
            statistics.employeeCount
          ],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    };

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    };

    return <Bar data={chartData} options={chartOptions} />;
  };

  return (
    <div className="p-4 border-gray-200 border rounded-lg dark:border-gray-700">
      <h1 className="text-2xl font-bold mb-6">Tender Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 md:h-68">
          <div className="container">
            {renderChart()}
          </div>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 md:h-68">
          {statistics ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Total Tenders</h2>
                <p className="text-lg font-bold">{statistics.totalCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Reviewed and Approved Tenders</h2>
                <p className="text-lg font-bold">{statistics.activeApprovedCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Reviewed Tenders</h2>
                <p className="text-lg font-bold">{statistics.activeCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Approved Tenders</h2>
                <p className="text-lg font-bold">{statistics.approvedCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Contractor Tenders</h2>
                <p className="text-lg font-bold">{statistics.contractorCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Subcontractor Tenders</h2>
                <p className="text-lg font-bold">{statistics.subcontractorCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Admin Tenders</h2>
                <p className="text-lg font-bold">{statistics.adminCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">HR Tenders</h2>
                <p className="text-lg font-bold">{statistics.hrCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-2 border-2 border-red-800">
                <h2 className="text-lg font-semibold mb-2">Employee Tenders</h2>
                <p className="text-lg font-bold">{statistics.employeeCount}</p>
              </div>
            </div>
          ) : (
            <p className="text-2xl font-bold">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenderStatistics;
