import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../../../../Sidebar";
import Header from "../../../../../Header";

const IndividualDetails = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/icert/certification/${id}`)
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
                                    <h2 className="text-xl font-bold mb-4">Individual Detail</h2>
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
                                <h2 className="text-xl font-bold mb-4">Individual Detail</h2>
                                <div className="grid grid-cols-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-bold">Name: {formData.name}</p>
                                            <p className="font-bold">Father's Name: {formData.fatherName}</p>
                                            <p className="font-bold">Date of Birth: {formData.dob}</p>
                                            <p className="font-bold">Aadhar Number: {formData.aadharNumber}</p>
                                            <p className="font-bold">PAN Number: {formData.panNumber}</p>
                                            <p className="font-bold">Working Field: {formData.workingField}</p>
                                            <p className="font-bold">Company Address 1: {formData.companyaddress1}</p>
                                            <p className="font-bold">Company Address 2: {formData.companyaddress2}</p>
                                            <p className="font-bold">City: {formData.companycity}</p>
                                            <p className="font-bold">State: {formData.companystate}</p>
                                            <p className="font-bold">Zip Code: {formData.zipcode}</p>
                                            <p className="font-bold">Country: {formData.companycountry}</p>
                                            <p className="font-bold">Others: {formData.others}</p>
                                        </div>

                                        <div>
                                            <p className="font-bold">Mobile Number: {formData.mobileNumber}</p>
                                            <p className="font-bold">Email: {formData.email}</p>
                                            <p className="font-bold">Request License: {formData.requestLicense}</p>
                                            <p className="font-bold">Photo:</p>
                                            <img src={formData.photoUrl} alt="Photo" className="max-w-full h-auto" />
                                            <p className="font-bold">Aadhar Card:</p>
                                            <img src={formData.aadharUrl} alt="Aadhar Card" className="max-w-full h-auto" />
                                            <p className="font-bold">PAN Card:</p>
                                            <img src={formData.panUrl} alt="PAN Card" className="max-w-full h-auto" />
                                            <p className="font-bold">Signature:</p>
                                            <img src={formData.signatureUrl} alt="Signature" className="max-w-full h-auto" />
                                        </div>
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

export default IndividualDetails;
