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
                                <table className="w-full">
                                    <tbody >
                                        
                                        <tr className='border '>
                                            <td className='p-3'>Company</td>
                                            <td className='p-4'>{formData.company}</td>
                                        </tr>
                                        <tr className='border'>
                                            <td className='p-3'>Mobile</td>
                                            <td className='p-4'>{formData.mobile}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Secondary Mobile</td>
                                        <td className='p-4'>{formData.secMobile}</td>
                                        </tr>
                                        <tr className='border'> 
                                        <td className='p-3'>Email</td>
                                        <td className='p-4'>{formData.email}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Website</td>
                                        <td className='p-4'><a href={formData.cwebsite} target="_blank" rel="noopener noreferrer">{formData.cwebsite}</a></td>
                                        </tr >
                                        <tr className='border'> 
                                        <td className='p-3'>CIN</td>
                                        <td className='p-4'>{formData.CIN}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Work Mobile</td>
                                        <td className='p-4'>{formData.wmobile}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Company Profile</td>
                                        <td className='p-4'>{formData.cprofile}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Company Established</td>
                                        <td className='p-4'>{formData.companyEstd}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Other Details</td>
                                        <td className='p-4'>{formData.otherDetails}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Company Post</td>
                                        <td className='p-4'>{formData.companypost}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>License</td>
                                        <td className='p-4'>{formData.liscence}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Contact Person Name</td>
                                        <td className='p-4'>{formData.cpname}</td>
                                        </tr>
                                        <tr className='border'>
                                            <td className='p-3'>Category</td>
                                            <td className='p-4'>{formData.category}</td>
                                        </tr>
                                        <tr className='border'>
                                            <td className='p-3'>Father's Name</td>
                                            <td className='p-4'>{formData.fname}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>GST</td>
                                        <td className='p-4'>{formData.GST}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>PAN</td>
                                        <td className='p-4'>{formData.PAN}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Address</td>
                                        <td className='p-4'>{formData.address}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Country</td>
                                        <td className='p-4'>{formData.companycountry}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>City</td>
                                        <td className='p-4'>{formData.companycity}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>State</td>
                                        <td className='p-4'>{formData.companystate}</td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>Registration URL</td>
                                            <td className='p-4'><a href={formData.regUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>GST URL</td>
                                        <td className='p-4'><a href={formData.gstUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                        </tr>
                                        <tr className='border'>
                                        <td className='p-3'>PAN URL</td>
                                        <td className='p-4'><a href={formData.panUrl} target="_blank" rel="noopener noreferrer">Click Here</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RegistrationDetails;
