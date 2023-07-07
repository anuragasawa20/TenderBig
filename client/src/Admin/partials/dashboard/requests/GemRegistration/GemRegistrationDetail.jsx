import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const GemRegistrationDetail = () => {
    const [data, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/gem/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const formatReceivedAt = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        return formattedDate;
    };

    const [sidebarOpen, setSidebarOpen] = useState(false);
    if (!data) {
        return (
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                    <main>
                        {/* Site header */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            <div className="flex justify-center">
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h2 className="text-xl font-bold mb-4">Gem Registration Detail</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        );
    }
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                <main>
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="flex justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Gem Registration Detail</h2>
                                <div className="grid grid-cols-2">
                                    <p><strong>Name:</strong> {data.name}</p>
                                    <p><strong>Email:</strong> {data.email}</p>
                                    <p><strong>Contact:</strong> {data.contact}</p>
                                    <p><strong>Aadhar:</strong> {data.aadhar}</p>
                                    <p><strong>Company Name:</strong> {data.companyName}</p>
                                    <p><strong>PAN Number:</strong> {data.panNumber}</p>
                                    <p><strong>Website Address:</strong> {data.websiteAddress}</p>
                                    <p><strong>GST:</strong> {data.gst}</p>
                                    <p><strong>Start Date:</strong>{formatReceivedAt(data.startDate)}</p>
                                    <p><strong>Address:</strong> {data.address}</p>
                                    <p><strong>Country:</strong> {data.country}</p>
                                    <p><strong>State:</strong> {data.state}</p>
                                    <p><strong>City:</strong> {data.city}</p>
                                    <p><strong>Zip:</strong> {data.zip}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GemRegistrationDetail;
