import { useEffect, useState } from "react";
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

const JointVenture = () => {
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:5000/apiTender/services/jv/getjv")
            .then((response) => response.json())
            .then((data) => setForms(data))
            .catch((error) => console.log(error));
    }, []);
console.log(forms)
    const formatReceivedAt = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        return formattedDate;
    };

    const viewDetails = (id) => {
        navigate(`/dashboard/jointventurerequests/${id}`)
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!forms) {
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
                                    <h2 className="text-xl font-bold mb-4">Joint Venture</h2>
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
                        <h1 className="text-xl font-bold mb-4">Joint Venture</h1>
                        {/* Table */}
                        <div className="shadow overflow-hidden rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Company Name
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Contact Profile
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Tender Name
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Country
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer border-b">
                                            Received At
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {forms.map((form) => (
                                        <tr key={form._id}>
                                            <td className="py-2 px-4 whitespace-nowrap border-b cursor-pointer" onClick={() => viewDetails(form._id)}>
                                                {form.companyName}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.companyProfile}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.tenderName}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.country}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {formatReceivedAt(form.createdAt)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default JointVenture;
