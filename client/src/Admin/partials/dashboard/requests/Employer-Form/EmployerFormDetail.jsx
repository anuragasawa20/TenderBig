import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployerFormDetail = () => {
    const [formData, setFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:5000/apiTender/services/employer/forms/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.log(error));
        console.log(formData);
    }, [id]);


    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = (id) => {
        // Perform update logic here with the updated form data
        // You can send a request to the API to update the data
        // After updating, set isEditing to false to exit editing mode
        setIsEditing(false);
    };

    function updateDetails() {
        fetch(`http://localhost:5000/apiTender/services/employer/forms/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Replace formData with the updated data object
        })
            .then((response) => response.json())
            .then((data) => {
                alert("form submitted");
                console.log(data);
                // Perform any necessary actions after successful update
                // For example, you can navigate to a different page or display a success message
            })
            .catch((error) => console.log(error));
    }


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
                                    <h2 className="text-xl font-bold mb-4">
                                        Auction Material Detail
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
    const stepNames = ["Tender Name", "Company Name" /* Add step names here */];

    const progress = Math.round(
        (formData.currentStep / (stepNames.length - 1)) * 100
    );
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
                            <div className="bg-white rounded-lg  p-20 shadow-2xl w-3/4">
                                <ProgressBar
                                    percent={progress}
                                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                                >
                                    {stepNames.map((_, index) => (
                                        <Step key={index}>
                                            {({ accomplished }) => (
                                                <div
                                                    className={`step ${accomplished ? "completed" : null
                                                        }`}
                                                />
                                            )}
                                        </Step>
                                    ))}
                                </ProgressBar>
                                <h2 className="text-3xl font-bold mb-4 mt-6 text-center">
                                    Employer Information
                                </h2>
                                {/* <div className="grid grid-cols-2 gap-11  "> */}
                                <div className="w-full">
                                    <label className="block mb-2 text-xl font-medium ">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border text-lg border-gray-300 py-4 bg-gray-200 rounded-md px-9 p-2 me-12 w-full"
                                        value={formData.company}
                                        readOnly={!isEditing}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                    />
                                </div>

                                {/* </div> */}
                                <div className="grid grid-cols-2 mb-4 mt-4 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Contact Number
                                        </label>
                                        <input
                                            type="number"
                                            className="border text-lg  border-gray-300 rounded-md p-2  py-4 w-full bg-gray-200"
                                            value={formData.mobile}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, mobile: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.email}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Company Work
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full  bg-gray-200"
                                            value={formData.cwork}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, cwork: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Experience
                                        </label>
                                        <input
                                            type="number"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.experience}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, experience: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            {" "}
                                            Salary
                                        </label>
                                        <input
                                            type="number"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.salary}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, salary: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Company Website
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.curl}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, curl: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Company Profile
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.companyprofile}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, companyprofile: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Contact Person Number
                                        </label>
                                        <input
                                            type="number"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.contactpnumber}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, contactpnumber: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Registration Number
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.regno}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, regno: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            {" "}
                                            PAN Number
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.PAN}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, PAN: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            GST Number
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 py-4 bg-gray-200 rounded-md p-2 w-full"
                                            value={formData.GST}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, GST: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.addressline1}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, addressline1: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            {" "}
                                            Address Line 2
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.addressline2}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, addressline2: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.city}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, city: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Zip Code
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.zipcode}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, zipcode: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.state}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, state: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-11">
                                    <div>
                                        <label className="block mb-2 text-xl font-medium">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                                            value={formData.country}
                                            readOnly={!isEditing}
                                            onChange={(e) =>
                                                setFormData({ ...formData, country: e.target.value })
                                            }
                                        />
                                    </div>
                                    {/* <div> */}
                                    {/* <label className="block mb-2 text-xl font-medium">Manpower Requirement:</label>
                    <input
                      type="text"
                      className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                      value={data.requirement.manpower}
                      readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <div>
                    <label className="block mb-2 text-xl font-medium">CIN Upload:</label>
                    <input
                      type="text"
                      className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                      value={data.companyUploads.cinUpload[0]}
                      readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xl font-medium">GST Upload:</label>
                    <input
                      type="text"
                      className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                      value={data.companyUploads.gstUpload[0]}
                      readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <div>
                    <label className="block mb-2 text-xl font-medium">PAN Upload:</label>
                    <input
                      type="text"
                      className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                      value={data.companyUploads.panUpload[0]}
                      readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xl font-medium">PAN:</label>
                    <input
                      type="text"
                      className="border text-lg border-gray-300 rounded-md p-2 py-4 w-full bg-gray-200"
                      value={data.pan}
                      readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    />
                  </div>
                </div> */}

                                    <div className="flex justify-end mt-4">
                                        {isEditing ? (
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleUpdate(formData._id)}
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={handleEdit}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                                Edit
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            className="bg-[#182235] hover:bg-[#111a2b] text-white font-bold py-2 px-4
                                             ml-28 rounded focus:outline-none focus:ring-2"
                                            onClick={() => updateDetails(formData._id)}
                                        >
                                            Submit
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

export default EmployerFormDetail;
