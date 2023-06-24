import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-200">
        {/* Rest of your dashboard content */}
      </main>
    </div>
  );
};

export default Dashboard;
