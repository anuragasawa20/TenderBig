import React, { useEffect, useState } from 'react';
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
    <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-6">

      <h1 className="text-2xl font-bold mb-6">User Statistics</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-68">
          <div className="container">
            {renderChart()}
          </div>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-68">
        {statistics ? (
            <>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">Total Users</h2>
              <p className="text-lg font-bold">{statistics.totalCount}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">Admin Users</h2>
              <p className="text-lg font-bold">{statistics.adminCount}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">Employee Users</h2>
              <p className="text-lg font-bold">{statistics.employeeCount}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">HR Users</h2>
              <p className="text-lg font-bold">{statistics.hrCount}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">Regular Users</h2>
              <p className="text-lg font-bold">{statistics.userCount}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">Subscription Active</h2>
              <p className="text-lg font-bold">{statistics.activeSubscriptionCount}</p>
            </div>
          </div>
        </>
      ) : (
        
            <p className="text-2xl font-bold">Loading...</p>
          
      )}
        </div>

      </div>
    </div>
  );
};

export default UserStatistics;
