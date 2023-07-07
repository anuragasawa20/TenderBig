import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const JointVentureDetail = () => {
    const [data, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/jv/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
    }, [id]);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    if (!data) {
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
                        <div className="flex justify-center flex-shrink">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Joint Venture Detail</h2>
                            <h1>Tender Name: {data.tenderName}</h1>
                            <p>Company Name: {data.companyName}</p>
                            <p>Company Address: {data.companyAddress}</p>
                            <p>City: {data.city}</p>
                            <p>Country: {data.country}</p>
                            <p>State: {data.state}</p>
                            <p>Zip Code: {data.zipCode}</p>
                            <p>Website: <a href={data.website}>{data.website}</a></p>
                            <p>Start Date: {data.startDate}</p>
                            <p>End Date: {data.endDate}</p>
                            <p>Work Ratio: {data.workRatio}</p>
                            <p>Volume: {data.volume}</p>
                            <p>GST: {data.gst}</p>
                            <p>PAN: {data.pan}</p>
                            <p>Partnership Project Tender: {data.partnershipProjectTender}</p>
                            <p>Partnership Ratio: {data.partnershipRatio}</p>
                            <p>Project Tender Name: {data.projectTenderName}</p>
                            <p>Other Description: {data.otherDescription}</p>
                            <p>Manpower Requirement: {data.requirement.manpower}</p>
                            <h2>Company Uploads</h2>
                            <p>CIN Upload: <a href={data.companyUploads.cinUpload[0]}>{data.companyUploads.cinUpload[0]}</a></p>
                            <p>GST Upload: <a href={data.companyUploads.gstUpload[0]}>{data.companyUploads.gstUpload[0]}</a></p>
                            <p>PAN Upload: <a href={data.companyUploads.panUpload[0]}>{data.companyUploads.panUpload[0]}</a></p>
                            <h2>Directors</h2>
                            {data.directors.map((director) => (
                                <div key={director._id.$oid}>
                                    <h3>Director: {director.directorName}</h3>
                                    <p>Director Aadhar: {director.directorAadhar}</p>
                                    <p>Director PAN: {director.directorPan}</p>
                                    <p>Director DOB: {director.directorDob}</p>
                                    <p>Director Father Name: {director.directorFatherName}</p>
                                    <h4>Uploads</h4>
                                    {director.uploads.map((upload) => (
                                        <div key={Object.keys(upload)[0]}>
                                            <p>{Object.keys(upload)[0]}: <a href={upload[Object.keys(upload)[0]].url}>{upload[Object.keys(upload)[0]].name}</a></p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default JointVentureDetail;
