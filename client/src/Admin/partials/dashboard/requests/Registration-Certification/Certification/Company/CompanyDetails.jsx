import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Sidebar from "../../../../../Sidebar";
import Header from "../../../../../Header";

const CompanyDetails = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/ccert/certification/${id}`)
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
                                    <h2 className="text-xl font-bold mb-4">Company Detail</h2>
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
                            <h2 className="text-xl font-bold mb-4">Company Detail</h2>
                            <div className="grid grid-cols-2">
                                <div>
                                    <p>CIN/Registration No: {formData.cinReg}</p>
                                    <p>Company Name: {formData.companyName}</p>
                                    <p>Company Profile: {formData.companyProfile}</p>
                                    <p>Mobile: {formData.contactNumber}</p>
                                    <p>Contact Person Name: {formData.contractPName}</p>
                                </div>
                                <div>
                                    <p>Email: {formData.email}</p>
                                    <p>GST: {formData.gst}</p>
                                    <p>PAN: {formData.pan}</p>
                                </div>
                                <div>
                                    <p>Request License: {formData.requestLicense}</p>
                                    <p>Selected Position: {formData.selectedPositions}</p>
                                    <p>Website: <a href={formData.website} target="_blank" rel="noopener noreferrer"></a>{formData.website} </p>
                                    <p>Working Field: {formData.workingField}</p>
                                    <p>Document: <a href={formData.url} target="_blank" rel="noopener noreferrer">Here</a></p>
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

export default CompanyDetails;
