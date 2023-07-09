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
                <div className="flex flex-wrap justify-center">
                  {/* First Table: Auction Material Detail */}
                  {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"> */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                      <h2 className="text-xl font-bold mb-4">
                        Auction Material Detail
                      </h2>
                      <table className="w-full mb-8">
                        <thead>
                          <tr>
                            <th className="font-bold border">Tender Number</th>
                            <th className="font-bold border">Tender Link</th>
                            <th className="font-bold border">Company Name</th>
                            <th className="font-bold border">CIN Registration</th>
                            <th className="font-bold border">GST</th>
                            <th className="font-bold border">PAN</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-3">{formData.tenderNumber}</td>
                            <td className="border p-3">
                              <a
                                href={formData.tenderLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {formData.tenderLink}
                              </a>
                            </td>
                            <td className="border p-3">{formData.companyName}</td>
                            <td className="border p-3">{formData.cinReg}</td>
                            <td className="border p-3">{formData.gst}</td>
                            <td className="border p-3">{formData.pan}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  {/* </div> */}
                </div>
              </div>
  
              {/* Second Table: Work Experience */}
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                  {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"> */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                      {formData.workExperience.map((exp) => (
                        <div key={exp._id}>
                          <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                          <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 mb-4">
                              <h4 className="text-md font-bold mb-2">
                                Work Experience:
                              </h4>
                              <ul className="list-disc ml-6">
                                {exp.workExperience.map((url) => (
                                  <li key={url}>
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {url}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="w-full md:w-1/2 mb-4">
                              <h4 className="text-md font-bold mb-2">
                                Work Order Samples:
                              </h4>
                              <ul className="list-disc ml-6">
                                {exp.workOrderSamples.map((url) => (
                                  <li key={url}>
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {url}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="w-full md:w-1/2 mb-4">
                              <h4 className="text-md font-bold mb-2">
                                Work Profiles:
                              </h4>
                              <ul className="list-disc ml-6">
                                {exp.workProfiles.map((url) => (
                                  <li key={url}>
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {url}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  {/* </div> */}
                </div>
              </div>
  
              {/* Third Table: Directors */}
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                  {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"> */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                      <h2 className="text-xl font-bold mb-4">Directors</h2>
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="font-bold border">Director Name</th>
                            <th className="font-bold border">Director Aadhar</th>
                            <th className="font-bold border">Director PAN</th>
                            <th className="font-bold border">Director DOB</th>
                            <th className="font-bold border">
                              Director Father's Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.directors.map((director, index) => (
                            <tr key={director._id.$oid}>
                              <td className="border p-3">{director.directorName}</td>
                              <td className="border p-3">
                                {director.directorAadhar}
                              </td>
                              <td className="border p-3">{director.directorPan}</td>
                              <td className="border p-3">{director.directorDob}</td>
                              <td className="border p-3">
                                {director.directorFatherName}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
};

export default AuctionMaterialDetail;
