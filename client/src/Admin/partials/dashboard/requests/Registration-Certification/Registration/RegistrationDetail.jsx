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
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-bold">Company: {formData.company}</p>
                                        <p className="font-bold">Mobile: {formData.mobile}</p>
                                        <p className="font-bold">Secondary Mobile: {formData.secMobile}</p>
                                        <p className="font-bold">Email: {formData.email}</p>
                                        <p className="font-bold">Website: <a href={formData.cwebsite} target="_blank" rel="noopener noreferrer">{formData.cwebsite}</a></p>
                                        <p className="font-bold">CIN: {formData.CIN}</p>
                                        <p className="font-bold">Work Mobile: {formData.wmobile}</p>
                                        <p className="font-bold">Company Profile: {formData.cprofile}</p>
                                        <p className="font-bold">Company Established: {formData.companyEstd}</p>
                                        <p className="font-bold">Other Details: {formData.otherDetails}</p>
                                        <p className="font-bold">Company Post: {formData.companypost}</p>
                                        <p className="font-bold">License: {formData.liscence}</p>
                                        <p className="font-bold">Contact Person Name: {formData.cpname}</p>
                                        <p className="font-bold">Category: {formData.category}</p>
                                        <p className="font-bold">Father's Name: {formData.fname}</p>
                                        <p className="font-bold">GST: {formData.GST}</p>
                                        <p className="font-bold">PAN: {formData.PAN}</p>
                                        <p className="font-bold">Address: {formData.address}</p>
                                        <p className="font-bold">Country: {formData.companycountry}</p>
                                        <p className="font-bold">City: {formData.companycity}</p>
                                        <p className="font-bold">State: {formData.companystate}</p>
                                    </div>

                                    <div>
                                        <p className="font-bold">Registration URL: <a href={formData.regUrl} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                                        <p className="font-bold">GST URL: <a href={formData.gstUrl} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                                        <p className="font-bold">PAN URL: <a href={formData.panUrl} target="_blank" rel="noopener noreferrer">Click Here</a></p>
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
