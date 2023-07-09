import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
Chart.register(...registerables);
import { FaUsers, FaUserTie, FaUserNinja, FaUserCog, FaUser, FaCheckCircle } from 'react-icons/fa';

const UserStatistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    fetchUserStatistics();
    const interval = setInterval(fetchUserStatistics, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchUserStatistics = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          auth: token
        }
      };

      const response = await axios.get(
        'http://localhost:5000/apiTender/userdetails/statistics',
        config
      );
      setStatistics(response.data);
    } catch (error) {
      console.log('Error fetching user statistics:', error);
    }
  };

  const renderChart = () => {
    if (!statistics) {
      return null;
    }
  
    const chartData = {
      labels: [
        'Admin Users',
        'Employee Users',
        'HR Users',
        'Regular Users',
        'Subscription Active'
      ],
      datasets: [
        {
          label: 'User Statistics',
          data: [
            statistics.adminCount,
            statistics.employeeCount,
            statistics.hrCount,
            statistics.userCount,
            statistics.activeSubscriptionCount
          ],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)'
          ],
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
          text: 'User Statistics'
        }
      }
    };
  
    return <Pie data={chartData} options={chartOptions} />;
  };
  
  return (
    <div className="p-4 mt-6">
      {statistics ? (
        <>
          <h1 className="text-2xl font-bold mb-6">User Statistics</h1>

          <div className="p-4 rounded-xl dark:border-gray-700">

              <div className="grid grid-cols-3 gap-20 mb-4">
                <div className="w-full lg:max-w-full lg:flex">
                  <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                  <FaUsers className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Total</div>
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
                    <FaUserCog  className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Admin</div>
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

                <div className="w-full lg:max-w-full lg:flex">
                  <div className="lg:h-auto flex flex-grow flex-shrink-0 justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-2 border-gray-400 rounded-sm bg-slate-300 items-center">
                    <FaUserTie  className="mr-3 text-8xl m-2" />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Employee</div>
                        <h1 className="text-2xl font-bold">{statistics.employeeCount}</h1>
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
                      <FaUserNinja  className="mr-3 text-8xl m-2" />
                    </div>

                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">

                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">HR</div>
                          <h1 className="text-2xl font-bold"> {statistics.hrCount}</h1>
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
                      <FaUser  className="mr-3 text-8xl m-2" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Regular</div>
                          <h1 className="text-2xl font-bold"> {statistics.userCount}</h1>
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
                      <FaCheckCircle className="mr-3 text-8xl m-2" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow flex-shrink-0">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">Subscription Active</div>
                          <h1 className="text-2xl font-bold"> {statistics.activeSubscriptionCount}</h1>
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
  );
};

export default UserStatistics;