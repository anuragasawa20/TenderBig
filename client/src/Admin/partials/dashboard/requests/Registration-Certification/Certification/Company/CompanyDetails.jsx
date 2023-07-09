import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="font-bold p-4 border">CIN Registration</th>
                                                <td className="p-4 border">{formData.cinReg}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Company Name</th>
                                                <td className="p-4 border">{formData.companyName}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Company Profile</th>
                                                <td className="p-4 border">{formData.companyProfile}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Contact Number</th>
                                                <td className="p-4 border">{formData.contactNumber}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Contract Person Name</th>
                                                <td className="p-4 border">{formData.contractPName}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Email</th>
                                                <td className="p-4 border">{formData.email}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">GST</th>
                                                <td className="p-4 border">{formData.gst}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">PAN</th>
                                                <td className="p-4 border">{formData.pan}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Request License</th>
                                                <td className="p-4 border">{formData.requestLicense}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Selected Positions</th>
                                                <td className="p-4 border">{formData.selectedPositions}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Website</th>
                                                <td className="p-4 border"><a href={formData.website} target="_blank" rel="noopener noreferrer">{formData.website}</a></td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Working Field</th>
                                                <td className="p-4 border">{formData.workingField}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Document URL</th>
                                                <td className="p-4 border"><a href={formData.docUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">PAN URL</th>
                                                <td className="p-4 border"><a href={formData.panUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">GST URL</th>
                                                <td className="p-4 border"><a href={formData.gstUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                            </tr>
                                            <tr>
                                                <th className="font-bold p-4 border">Others</th>
                                                <td className="p-4 border">{formData.others}</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
