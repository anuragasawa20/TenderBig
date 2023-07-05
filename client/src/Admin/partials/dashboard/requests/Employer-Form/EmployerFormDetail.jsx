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
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Employer Form Detail</h2>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="font-bold">Company Information</p>
                                        <p>Company: {formData.company}</p>
                                        <p>Mobile: {formData.mobile}</p>
                                        <p>Email: {formData.email}</p>
                                        <p>Company Work: {formData.cwork}</p>
                                        <p>Job Post: {formData.jobpost}</p>
                                        <p>Experience: {formData.experience}</p>
                                        <p>Salary: {formData.salary}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Company Profile</p>
                                        <p>Company Profile: {formData.companyprofile}</p>
                                        <p>Contact Phone Number: {formData.contactpnumber}</p>
                                        <p>Registration Number: {formData.regno}</p>
                                        <p>PAN: {formData.PAN}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="font-bold">Address Information</p>
                                        <p>Address: {formData.address}</p>
                                        <p>City: {formData.city}</p>
                                        <p>ZIP Code: {formData.zipcode}</p>
                                        <p>State: {formData.state}</p>
                                        <p>Country: {formData.country}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Office Information</p>
                                        <p>Office Timing: {formData.officetiming}</p>
                                        <p>Holidays: {formData.holidays}</p>
                                        <p>Working Days: {formData.workingdays}</p>
                                        <p>Seeker Post: {formData.seekerpost}</p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="font-bold">GST Information</p>
                                    <p>GST: {formData.GST}</p>
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
