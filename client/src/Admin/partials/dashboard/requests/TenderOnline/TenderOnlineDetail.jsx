import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";

const TenderOnlineDetail = () => {
    const [data, setFormData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/tender/online/${id}`)
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
                                <h1>{data.cname}</h1>
                                <p>Company PAN Number: {data.cPANnum}</p>
                                <p>Company GST Number: {data.cGSTnum}</p>
                                <p>Description: {data.des}</p>
                                <p>Vendor: {data.vendor}</p>
                                <p>Mobile: {data.mobile}</p>
                                <p>Account Holder Name: {data.accholdername}</p>
                                <p>IFSC Code: {data.ifscCode}</p>
                                <p>Registration Number: {data.regno}</p>
                                <p>K-Number: {data.knumber}</p>
                                <p>Company Address 1: {data.companyaddress1}</p>
                                <p>Company Address 2: {data.companyaddress2}</p>
                                <p>Company City: {data.companycity}</p>
                                <p>Company State: {data.companystate}</p>
                                <p>Country: {data.country}</p>
                                <p>Branch Number: {data.branchnum}</p>
                                <p>ITR One: {data.ITRone}</p>
                                <p>ITR Two: {data.ITRtwo}</p>
                                <p>ITR Three: {data.ITRthree}</p>
                                <p>Turnover: {data.turnover}</p>
                                <p>Work Experience: {data.workexp}</p>
                                <p>Number of Workers: {data.noofworkers}</p>
                                <p>Director Name: {data.directorname}</p>
                                <p>Father's Name: {data.fname}</p>
                                <p>Date of Birth: {data.iDOB}</p>
                                <p>Primary Email: {data.pemail}</p>
                                <p>Primary Aadhar: {data.paadhar}</p>
                                <p>Primary PAN: {data.ppan}</p>
                                <p>Primary Mobile: {data.pmobile}</p>
                                <p>Work Mobile: {data.wmobile}</p>
                                <p>Website: <a href={data.website}>{data.website}</a></p>
                                <p>Account Number: {data.accnumber}</p>
                                <p>Email: {data.email}</p>
                                <p>GEM Registration: {data.gemreg}</p>
                                <p>Reference Number: {data.refno}</p>
                                <p>Requested License: {data.requestLicense}</p>
                                <h2>Rent</h2>
                                <p>Rent Document: <a href={data.rent[0]}>{data.rent[0]}</a></p>
                                <h2>Work</h2>
                                <p>Work Document: <a href={data.work[0]}>{data.work[0]}</a></p>
                                <h2>Bidding Documents</h2>
                                <p>Bidding Document: <a href={data.biddingDocs[0]}>{data.biddingDocs[0]}</a></p>
                                <h2>Tender Documents</h2>
                                <p>Tender Document: <a href={data.tenderDocs[0]}>{data.tenderDocs[0]}</a></p>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TenderOnlineDetail;
