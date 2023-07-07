import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const AuctionMaterialDetail = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/aumt/auction-material/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data.data))
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
                                    <h2 className="text-xl font-bold mb-4">Auction Material Detail</h2>
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
                                <h2 className="text-xl font-bold mb-4">Auction Material Detail</h2>
                                <p className="font-bold">Tender Number: {formData.tenderNumber}</p>
                                <p className="font-bold">Tender Link: <a href={formData.tenderLink} target="_blank" rel="noopener noreferrer">{formData.tenderLink}</a></p>
                                <p className="font-bold">Company Name: {formData.companyName}</p>
                                <p className="font-bold">CIN Registration: {formData.cinReg}</p>
                                <p className="font-bold">GST: {formData.gst}</p>
                                <p className="font-bold">PAN: {formData.pan}</p>

                                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                                {formData.workExperience.map((exp) => (
                                    <div key={exp._id}>
                                        <h3 className="text-lg font-bold">Work Experience</h3>
                                        <ul className="list-disc ml-6">
                                            {exp.workExperience.map((url) => (
                                                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                                            ))}
                                        </ul>

                                        <h3 className="text-lg font-bold mt-2">Work Order Samples</h3>
                                        <ul className="list-disc ml-6">
                                            {exp.workOrderSamples.map((url) => (
                                                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                                            ))}
                                        </ul>

                                        <h3 className="text-lg font-bold mt-2">Work Profiles</h3>
                                        <ul className="list-disc ml-6">
                                            {exp.workProfiles.map((url) => (
                                                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <h2 className="text-2xl font-bold mb-4">Directors</h2>

                                {formData.directors.map((director, index) => (
                                    <div key={director._id.$oid}>
                                        <h3 className="text-lg font-bold">Director {index + 1}</h3>
                                        <p className="font-bold">Director Name: {director.directorName}</p>
                                        <p className="font-bold">Director Aadhar: {director.directorAadhar}</p>
                                        <p className="font-bold">Director PAN: {director.directorPan}</p>
                                        <p className="font-bold">Director DOB: {director.directorDob}</p>
                                        <p className="font-bold">Director Father's Name: {director.directorFatherName}</p>
                                    </div>
                                ))}


                                <p className="font-bold">Address: {formData.address}</p>
                                <p className="font-bold">Country: {formData.country}</p>
                                <p className="font-bold">State: {formData.state}</p>
                                <p className="font-bold">City: {formData.city}</p>
                                <p className="font-bold">Zip Code: {formData.zipCode}</p>
                                <p className="font-bold">Website: <a href={formData.website} target="_blank" rel="noopener noreferrer">{formData.website}</a></p>
                                <p className="font-bold">Project Mail ID: {formData.projectMailId}</p>
                                <p className="font-bold">Contact Person Name: {formData.contactPersonName}</p>
                                <p className="font-bold">Contact Person Number: {formData.contactPersonNumber}</p>
                                <p className="font-bold">Auction Material: {formData.auctionMaterial}</p>
                                <p className="font-bold">Other Description: {formData.otherDescription}</p>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AuctionMaterialDetail;
