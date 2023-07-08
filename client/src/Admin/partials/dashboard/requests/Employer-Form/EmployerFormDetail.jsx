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
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
                    <main>
                        {/* Site header */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                        <div className="p-4 ">
                            <div className="flex items-center justify-center h-36 mb-4 rounded ">
                                <h1 className="text-2xl font-bold mb-4">Employer Information</h1>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center justify-center rounded border-2">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="items-center justify-center">
                                            <div>
                                                <strong className="mr-2">Company:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Mobile:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Email:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Company Work:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Job Post:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Experience:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Salary:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Company URL:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">GST:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Company Profile:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Contact Phone Number:</strong>
                                            </div>

                                        </div>

                                        <div className="items-center justify-center ">
                                            <div>
                                                <span>{formData.company}</span>
                                            </div>
                                            <div>
                                                <span>{formData.mobile}</span>
                                            </div>
                                            <div>
                                                <span>{formData.email}</span>
                                            </div>
                                            <div>
                                                <span>{formData.cwork}</span>
                                            </div>
                                            <div>
                                                <span>{formData.jobpost}</span>
                                            </div>
                                            <div>
                                                <span>{formData.experience}</span>
                                            </div>
                                            <div>
                                                <span>{formData.salary}</span>
                                            </div>
                                            <div>
                                                <a href={formData.curl} target="_blank" rel="noopener noreferrer">Click Here</a>
                                            </div>
                                            <div>
                                                <span>{formData.GST}</span>
                                            </div>
                                            <div>
                                                <span>{formData.companyprofile}</span>
                                            </div>
                                            <div>
                                                <span>{formData.contactpnumber}</span>
                                            </div>
                                            <div>

                                            </div>  </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center rounded border-2">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="items-center justify-center">
                                            <div>
                                                <strong className="mr-2">Registration Number:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">PAN:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Address:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">City:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Zip Code:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">State:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Country:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Office Timing:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Holidays:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Working Days:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Seeker Post:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Resume:</strong>
                                            </div>
                                            <div>
                                                <strong className="mr-2">Other:</strong>
                                            </div>

                                        </div>

                                        <div className="items-center justify-center ">

                                            <div>
                                                <span>{formData.regno}</span>
                                            </div>
                                            <div>
                                                <span>{formData.PAN}</span>
                                            </div>
                                            <div>
                                                <span>{formData.address}</span>
                                            </div>
                                            <div>
                                                <span>{formData.city}</span>
                                            </div>
                                            <div>
                                                <span>{formData.zipcode}</span>
                                            </div>
                                            <div>
                                                <span>{formData.state}</span>
                                            </div>
                                            <div>
                                                <span>{formData.country}</span>
                                            </div>
                                            <div>
                                                <span>{formData.officetiming}</span>
                                            </div>
                                            <div>
                                                <span>{formData.holidays}</span>
                                            </div>
                                            <div>
                                                <span>{formData.workingdays}</span>
                                            </div>
                                            <div>
                                                <span>{formData.seekerpost}</span>
                                            </div>
                                            <div>
                                                <a href={formData.resumeUrl} target="_blank" rel="noopener noreferrer">Click Here</a>
                                            </div>
                                            <div>
                                                <a href={formData.otherUrl} target="_blank" rel="noopener noreferrer">Click Here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </main>
                </div>
            </div>
        </>
    );
};

export default EmployerFormDetail;
