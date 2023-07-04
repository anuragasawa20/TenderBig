import { useEffect, useState } from "react";
import Sidebar from "../../../../../Sidebar";
import Header from "../../../../../Header";
import { useNavigate } from "react-router-dom";

const IndividualList = () => {
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:5000/apiTender/services/icert/certification")
            .then((response) => response.json())
            .then((data) => setForms(data))
            .catch((error) => console.log(error));
    }, []);

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
        navigate(`/dashboard/individualrequests/${id}`)
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
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
                        <h1 className="text-xl font-bold mb-4">Individual Requests</h1>

                        {/* Table */}
                        <div className="shadow overflow-hidden rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Name
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Address
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Contact Number
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Working Field
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
                                                {form.name}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.address}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.mobileNumber}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.workingField}
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

export default IndividualList;
