import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const AllUsersSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const usersPerPage = 8;

  const handleNextClick = () => {
    setStartIndex(prevIndex => prevIndex + usersPerPage);
  };

  const handlePrevClick = () => {
    setStartIndex(prevIndex => prevIndex - usersPerPage);
  };

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/apiTender/userdetails/allusers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              auth: localStorage.getItem("token")
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const showDetails = (userId) => {
    console.log(userId);
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('all');
  const [subscriptionStatus, setSubscriptionStatus] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubscriptionStatusChange = (e) => {
    setSubscriptionStatus(e.target.value);
  };

  const filteredData = userData.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const userTypeMatch =
      userType === 'all' ||
      (userType === 'admin' && user.userRole === 'admin') ||
      (userType === 'hr' && user.userRole === 'hr') ||
      (userType === 'user' && user.userRole === 'user') ||
      (userType === 'employee' && user.userRole === 'employee');
    const subscriptionStatusMatch =
      subscriptionStatus === 'all' ||
      (subscriptionStatus === 'subscribed' && user.subscription && user.subscription.status === 'active') ||
      (subscriptionStatus === 'notSubscribed' && (!user.subscription || user.subscription.status === 'inactive'));

    return nameMatch && emailMatch && userTypeMatch && subscriptionStatusMatch;
  });

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="flex mb-4">
        {/* Search bar */}
        <input
          type="text"
          className="w-64 px-4 py-2 mr-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded shadow focus:outline-none"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* User type select bar */}
        <select
          className="w-32 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none"
          value={userType}
          onChange={handleUserTypeChange}
        >
          <option value="all">All Users</option>
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
          <option value="usr">User</option>
          <option value="employee">Employee</option>
        </select>
        {/* Subscription status select bar */}
        {userType !== 'all' && (
          <select
            className="w-32 px-4 py-2 ml-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none"
            value={subscriptionStatus}
            onChange={handleSubscriptionStatusChange}
          >
            <option value="all">All Subscriptions</option>
            <option value="active">Subscribed</option>
            <option value="inactive">Not Subscribed</option>
          </select>
        )}
      </div>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <div className="table-container overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Subscription</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredData.map((user) => (
                  <tr className="text-gray-700" key={user._id}>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div onClick={() => { showDetails(user.userId) }}>
                          <p className="font-semibold text-black">{user.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">{user.userRole}</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{user.email}</td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{user.phoneNumber}</span>
                    </td>
                    <td className="px-4 py-3 text-sm border">{user.country}</td>
                    <td className="px-4 py-3 text-sm border">{user.city}</td>
                    <td className="px-4 py-3 text-xs border">
                      <span className={`px-2 py-1 font-semibold leading-tight ${!user.subscription || user.subscription.status === 'inactive' ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'} rounded-sm`}>
                        {user.subscription && user.subscription.status !== 'inactive' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrevClick}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextClick}
          disabled={startIndex + usersPerPage >= filteredData.length}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default AllUsersSection;
