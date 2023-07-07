import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const EmployerFormDetail = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/employer/forms/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const openPdfInBrowser = (url) => {
        window.open(url, '_blank');
      };

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
                                    <h2 className="text-xl font-bold mb-4">Employer Form Detail</h2>
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
                            <div className=" p-4">
                                <h1 className="text-2xl font-bold mb-4">Employer Information</h1>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Company:</strong>
                                            <span>{formData.company}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Mobile:</strong>
                                            <span>{formData.mobile}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Email:</strong>
                                            <span>{formData.email}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Company Work:</strong>
                                            <span>{formData.cwork}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Job Post:</strong>
                                            <span>{formData.jobpost}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Experience:</strong>
                                            <span>{formData.experience}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Salary:</strong>
                                            <span>{formData.salary}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Company URL:</strong>
                                            <a href={formData.curl} target="_blank" rel="noopener noreferrer">{formData.curl}</a>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">GST:</strong>
                                            <span>{formData.GST}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Company Profile:</strong>
                                            <span>{formData.companyprofile}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Contact Phone Number:</strong>
                                            <span>{formData.contactpnumber}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Registration Number:</strong>
                                            <span>{formData.regno}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">PAN:</strong>
                                            <span>{formData.PAN}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Address:</strong>
                                            <span>{formData.address}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">City:</strong>
                                            <span>{formData.city}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Zip Code:</strong>
                                            <span>{formData.zipcode}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">State:</strong>
                                            <span>{formData.state}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Country:</strong>
                                            <span>{formData.country}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Office Timing:</strong>
                                            <span>{formData.officetiming}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Holidays:</strong>
                                            <span>{formData.holidays}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Working Days:</strong>
                                            <span>{formData.workingdays}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Seeker Post:</strong>
                                            <span>{formData.seekerpost}</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Resume:</strong>
                                            <button
                                                className="text-blue-600 underline"
                                                onClick={() => openPdfInBrowser(formData.resumeUrl)}
                                            >
                                                Click Here
                                            </button>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong className="mr-2">Other:</strong>
                                            <button
                                                className="text-blue-600 underline"
                                                onClick={() => openPdfInBrowser(formData.otherUrl)}
                                            >
                                                Click Here
                                            </button>
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

export default EmployerFormDetail;
