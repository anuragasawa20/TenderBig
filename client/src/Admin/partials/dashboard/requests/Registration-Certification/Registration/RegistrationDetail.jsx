import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../../../Sidebar";
import Header from "../../../../Header";

const RegistrationDetails = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/register/registration/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    if (!formData) {
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
                                    <h2 className="text-xl font-bold mb-4">Registration Detail</h2>
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
                                <h2 className="text-xl font-bold mb-4">Registration Detail</h2>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p>Company Name: {formData.company}</p>
                                        <p>Company Profile: {formData.cprofile}</p>
                                        <p>Mobile: {formData.mobile}</p>
                                        <p>Secondary Mobile: {formData.secMobile}</p>
                                        <p>WhatsApp Number: {formData.wmobile}</p>
                                    </div>
                                    <div>
                                        <p>Email: {formData.email}</p>
                                        <p>Company Website: {formData.cwebsite}</p>
                                        <p>CIN: {formData.CIN}</p>
                                        <p>Company Establishment: {formData.companyEstd}</p>
                                    </div>
                                    <div>
                                        <p>Company Post: {formData.companypost}</p>
                                        <p>License: {formData.liscence}</p>
                                        <p>Contact Person Name: {formData.cpname} </p>
                                        <p>Father Name: {formData.fname}</p>
                                        <p>Category: {formData.category}</p>
                                        <p>GST: {formData.GST} </p>
                                        <p>PAN: {formData.PAN}</p>
                                        <p>Address: {formData.address}</p>
                                        <p>Country: {formData.companycountry} </p>
                                        <p>City: {formData.companycity}</p>
                                        <p>State: {formData.companystate} </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RegistrationDetails;
