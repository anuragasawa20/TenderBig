import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const SeekerFormDetail = () => {
    const [formData, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/seeker/forms/${id}`)
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
                                    <h2 className="text-xl font-bold mb-4">Seeker Detail</h2>
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
                                <h2 className="text-xl font-bold mb-4">Seeker Detail</h2>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="font-bold">Personal Information</p>
                                        <p>Name: {formData.name}</p>
                                        <p>Father's Name: {formData.fathername}</p>
                                        <p>Aadhar: {formData.aadhar}</p>
                                        <p>Mobile: {formData.mobile}</p>
                                        <p>Email: {formData.email}</p>
                                    </div>
                                    <div>
                                        <div>
                                            <p>10th Mark: {formData.tenMark}{formData.tenMarkType === "percentage" && "%"}</p>
                                            <p>12th Mark: {formData.twelveMark}{formData.twelveMarkType === "percentage" && "%"}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold">Employment Details</p>
                                        <p>Job Post: {formData.jobpost}</p>
                                        <p>Job Experience: {formData.jobexp}</p>
                                        <p>Company: {formData.company}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Address</p>
                                        <p>Address: {formData.address}</p>
                                        <p>City: {formData.city}</p>
                                        <p>State: {formData.state}</p>
                                        <p>Country: {formData.country}</p>
                                        <p>ZIP: {formData.zip}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-bold">Other Information</p>
                                    <p>Past Salary: {formData.pastSalary}</p>
                                    <p>Expected Salary: {formData.expectedSalary}</p>
                                    <p>PAN: {formData.pan}</p>
                                    <p>Hobies: {formData.hobbies}</p>
                                    <div className="flex items-baseline">
                                            <strong>Resume: </strong>
                                            <button
                                                className="text-blue-600 underline"
                                            >
                                                <a href={formData.resumeUrl} target="_blank" rel="noopener noreferrer"> Click Here</a>
                                            </button>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong>Photo: </strong>
                                            <button
                                                className="text-blue-600 underline"
                                            >
                                                <a href={formData.photoUrl} target="_blank" rel="noopener noreferrer"> Click Here</a>
                                            </button>
                                        </div>
                                        <div className="flex items-baseline">
                                            <strong>Aadhar: </strong>
                                            <button
                                                className="text-blue-600 underline"
                                            >
                                                <a href={formData.aadharUrl} target="_blank" rel="noopener noreferrer"> Click Here</a>
                                            </button>
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

export default SeekerFormDetail;
