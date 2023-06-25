import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserStatistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    fetchUserStatistics();
  }, []);

  const fetchUserStatistics = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const config = {
        headers: {
          auth: token
        }
      };

      const response = await axios.get('http://localhost:5000/apiTender/userdetails/statistics', config);
      setStatistics(response.data);
    } catch (error) {
      console.log('Error fetching user statistics:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Statistics</h1>
      {statistics ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Total Users</h2>
            <p className="text-2xl font-bold">{statistics.totalCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Admin Users</h2>
            <p className="text-2xl font-bold">{statistics.adminCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Employee Users</h2>
            <p className="text-2xl font-bold">{statistics.employeeCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">HR Users</h2>
            <p className="text-2xl font-bold">{statistics.hrCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Regular Users</h2>
            <p className="text-2xl font-bold">{statistics.userCount}</p>
          </div>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
    </div>
  );
};

export default UserStatistics;
