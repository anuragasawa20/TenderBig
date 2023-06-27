import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

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
      <div className="p-4">
        {statistics ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-left">Tender Statistics</h1>

            <div className="p-4 rounded-lg dark:border-gray-700">

              <div className="grid grid-cols-3 gap-20 mb-4">

                <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                  <h3 className="text-lg font-bold mb-2 border-b-2 border-gray-200 py-2 text-stone-500">Total Tenders</h3>
                  <h1 className="text-2xl font-bold ">{statistics.totalCount}</h1>
                </div>


                <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                  <h3 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Reviewed and Approved Tenders</h3>
                  <h1 className="text-2xl font-bold">{statistics.activeApprovedCount}</h1>
                </div>

                <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                  <h2 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Admin Tenders</h2>
                  <h1 className="text-2xl font-bold">{statistics.adminCount}</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-20 mb-4">

                <div className="flex items-center justify-center rounded h-68 bg-white">
                  <div className="container">
                    <h1 className="text-lg font-bold text-stone-500 text-left mx-5">Tender Statistics</h1>
                    {renderChart()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 p-2">

                  <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 mt-3 hover:border-4 hover:shadow-lg text-center">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Reviewed Tenders</h2>
                      <h1 className="text-2xl font-bold"> {statistics.activeCount} </h1>
                  </div>

                  <div className="bg-white shadow-lg p-2 border-2 mt-3 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Approved Tenders</h2>
                    <h1 className="text-2xl font-bold">{statistics.approvedCount}</h1>
                  </div>

                  <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Contractor Tenders</h2>
                    <h1 className="text-2xl font-bold">{statistics.contractorCount}</h1>
                  </div>

                  <div className="bg-white shadow-lg p-2 border-2 hover:border-blue-500 hover:border-4 hover:shadow-lg text-center">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-gray-300 py-2 text-stone-500">Subcontractor Tenders</h2>
                    <h1 className="text-2xl font-bold">{statistics.subcontractorCount}</h1>
                  </div>

                </div>
              </div>

            </div>
          </>
        ) : (
          <p className="text-2xl font-bold">Loading...</p>
        )}
      </div>

    </div>
  );
};

export default TenderStatistics;
