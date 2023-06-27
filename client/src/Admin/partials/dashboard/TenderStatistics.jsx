import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
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
          "/apiTender/tenderdetails/statistics",
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
          ],
          backgroundColor: "#6CA0DC",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    };

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    return <Bar data={chartData} options={chartOptions} />;
  };

  return (
    <div>
      <div className="p-4 border-gray-200 border rounded-lg dark:border-gray-200">
        <h1 className="text-2xl font-bold mb-6">Tender Statistics</h1>

        {statistics ? (
          <div className="flex flex-wrap my-5">
            <div className="w-full sm:w-1/2 md:w-auto bg-white rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4 sm:mb-0 sm:mr-4 grow">
              <p className="text-lg mb-2 text-gray-500">Total Tenders</p>
              <hr />
              <p className="text-lg font-bold">{statistics.totalCount}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto bg-white rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4 sm:mb-0 sm:mr-4 grow">
              <p className="text-lg mb-2 text-gray-500">Reviewed & Approved Tenders</p>
              <hr />
              <p className="text-lg font-bold">{statistics.activeApprovedCount}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto bg-white rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4 sm:mb-0 sm:mr-4 grow">
              <p className="text-lg mb-2 text-gray-500">Reviewed Tenders</p>
              <hr />
              <p className="text-lg font-bold">{statistics.activeCount}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto bg-white rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4 sm:mb-0 sm:mr-4 grow">
              <p className="text-lg mb-2 text-gray-500">Approved Tenders</p>
              <hr />
              <p className="text-lg font-bold">{statistics.approvedCount}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto bg-white rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] grow">
              <p className="text-lg mb-2 text-gray-500">Contractor Tenders</p>
              <hr />
              <p className="text-lg font-bold">{statistics.contractorCount}</p>
            </div>
          </div>
        ) : (
          <p className="text-2xl font-bold">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TenderStatistics;
