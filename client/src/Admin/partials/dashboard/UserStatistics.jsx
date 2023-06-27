import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
Chart.register(...registerables);

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
        '/apiTender/userdetails/statistics',
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
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
    <div className="p-4 mt-6">
      {statistics ? (
        <>
          <h1 className="text-2xl font-bold mb-6">User Statistics</h1>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                <div>
                  <h2 className="text-lg font-semibold">Total Users</h2>
                  <p className="text-lg font-bold">{statistics.totalCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                <div>
                  <h2 className="text-lg font-semibold">Admin Users</h2>
                  <p className="text-lg font-bold">{statistics.adminCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                <div>
                  <h2 className="text-lg font-semibold">Employee Users</h2>
                  <p className="text-lg font-bold">{statistics.employeeCount}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center rounded w-2/3 bg-gray-50 h-68">
              <div className="container">{renderChart()}</div>
            </div>

            <div className="flex items-center rounded bg-gray-50 h-68 w-1/3 ">

              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 w-full">
                <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300 w-full">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                    <div>
                      <h2 className="text-lg font-semibold">HR Users</h2>
                      <p className="text-lg font-bold">{statistics.hrCount}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300 w-full">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                    <div>
                      <h2 className="text-lg font-semibold">Regular Users</h2>
                      <p className="text-lg font-bold">{statistics.userCount}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-2 border-2 hover:shadow-lg hover:scale-105 transition duration-300 w-full">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faFile} className="mr-2 text-2xl" />
                    <div>
                      <h2 className="text-lg font-semibold">Subscription Active</h2>
                      <p className="text-lg font-bold">{statistics.activeSubscriptionCount}</p>
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
