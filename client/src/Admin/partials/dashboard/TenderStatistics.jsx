import { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardCheck, faUserShield, faEye, faThumbsUp, faHammer, faTools } from '@fortawesome/free-solid-svg-icons';

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
      ],
      datasets: [
        {
          label: "Tender Data",
          data: [
            statistics.activeApprovedCount,
            statistics.activeCount,
            statistics.approvedCount,
            statistics.contractorCount,
            statistics.subcontractorCount,
            statistics.adminCount,
          ],
          backgroundColor: [
            "#6CA0DC",
            "#FFCD56",
            "#FF6384",
            "#36A2EB",
            "#9966FF",
            "#FF6384"
          ],
          borderColor: "#fff",
          borderWidth: 1
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Tender Statistics'
        }
      }
    };

    return <Pie data={chartData} options={chartOptions} />;
  };


  return (
    <div>
      <div className="p-4">
        {statistics ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Tender Statistics</h1>

            <div className="p-4 rounded-lg dark:border-gray-700">

              <div className="grid grid-cols-3 gap-20 mb-4">
                
                <div className="w-full lg:max-w-full lg:flex">
                  <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Total Tenders</div>
                        <h1 className="text-2xl font-bold">{statistics.totalCount}</h1>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-sm">
                          <a href="#">
                            <p className="text-green-500 font-bold leading-none">More Info</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex">
                  <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                  <FontAwesomeIcon icon={faClipboardCheck} className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Reviewed and </div>
                        <div className="text-gray-900 font-bold text-xl mb-2">Approved Tenders </div>
                        <h1 className="text-2xl font-bold">{statistics.activeApprovedCount}</h1>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-sm">
                          <a href="#">
                            <p className="text-green-500 font-bold leading-none">More Info</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex">
                  <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                  <FontAwesomeIcon icon={faUserShield} className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Admin Tenders</div>
                        <h1 className="text-2xl font-bold">{statistics.adminCount}</h1>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-sm">
                          <a href="#">
                            <p className="text-green-500 font-bold leading-none">More Info</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="grid grid-cols-2 gap-20 mb-4">

                <div className="flex items-center justify-center rounded h-68 bg-white">
                  <div className="container">
                    {renderChart()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 p-2">

                  <div>

                    <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                    <FontAwesomeIcon icon={faEye}  className="mr-3 text-8xl m-2" />
                    </div>

                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">

                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Reviewed Tenders</div>
                          <h1 className="text-2xl font-bold"> {statistics.activeCount}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-sm">
                            <a href="#">
                              <p className="text-green-500 font-bold leading-none">More Info</p>
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div >
                    <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                      <FontAwesomeIcon icon={faThumbsUp} className="mr-3 text-8xl m-2" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Approved Tenders</div>
                          <h1 className="text-2xl font-bold"> {statistics.approvedCount}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-sm">
                            <a href="#">
                              <p className="text-green-500 font-bold leading-none">More Info</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div>
                    <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                    <FontAwesomeIcon icon={faHammer} className="mr-3 text-8xl m-2" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Contractor Tenders</div>
                          <h1 className="text-2xl font-bold"> {statistics.contractorCount}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-sm">
                            <a href="#">
                              <p className="text-green-500 font-bold leading-none">More Info</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                    <FontAwesomeIcon icon={faTools} className="mr-3 text-8xl m-2" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Subcontractor Tenders</div>
                          <h1 className="text-2xl font-bold"> {statistics.subcontractorCount}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-sm">
                            <a href="#">
                              <p className="text-green-500 font-bold leading-none">More Info</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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