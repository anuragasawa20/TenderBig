import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';

function UserDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem('token')
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const naviagate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/apiTender/userdetails/single-user/${userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              auth: token,
            },
          }
        );
        console.log(response.data)
        setUser(response.data.User[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleDelete = async () => {
    try {
      // Make API call to delete the tender
      await axios.delete(
        `http://localhost:5000/apiTender/userdetails/delete/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            auth: token,
          },
        }
      );

      alert("Deleted");
      naviagate("/dashboard/users");
    } catch (error) {
      console.error(error);
    }
  };


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="container mx-auto py-8 px-4">
              <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">User Details</h1>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">Name:</strong> <span className="ml-2">{user.name}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">Email:</strong> <span className="ml-2">{user.email}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">User Role:</strong> <span className="ml-2">{user.userRole}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">Phone Number:</strong> <span className="ml-2">{user.phoneNumber}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">Country:</strong> <span className="ml-2">{user.country}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">State:</strong> <span className="ml-2">{user.state}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong className="text-gray-900">City:</strong> <span className="ml-2">{user.city}</span>
                </p>
                <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDetails;
