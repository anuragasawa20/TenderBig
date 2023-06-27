import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
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
<<<<<<< HEAD
        'http://localhost:3000/apiTender/userdetails/statistics',
=======
        '/apiTender/userdetails/statistics',
>>>>>>> b0c65e6572290f603089c8e12ee23845966f2d80
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
    <div className="p-4 border-gray-200 border rounded-lg dark:border-gray-200 mt-6">
      <h1 className="text-2xl font-bold mb-6">User Statistics</h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">Total Users</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.totalCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">Admin Users</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.adminCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">Employee Users</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.employeeCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">HR Users</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.hrCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">Regular Users</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.userCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300 mb-4 sm:mb-0 sm:mr-4 p-4">
          <h2 className="text-lg text-gray-400">Subscription Active</h2>
          <hr />
          <p className="text-lg font-bold">{statistics?.activeSubscriptionCount}</p>
        </div>
      </div>
      {/* Graph */}
      <div className="mb-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-2">
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
