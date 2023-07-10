import { useEffect, useState } from "react";
import Sidebar from "../../../Sidebar";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

const EmployerForms = () => {
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:3000/apiTender/services/employer/forms")
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
        navigate(`/dashboard/employerrequests/${id}`)
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
                        <h1 className="text-xl font-bold mb-4">Employer Requests</h1>

                        {/* Table */}
                        <div className="shadow overflow-hidden rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Company
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Company Work
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Job Post
                                        </th>
                                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Company Profile
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
                                                {form.company}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.cwork}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.jobpost}
                                            </td>
                                            <td className="py-2 px-4 whitespace-nowrap border-b">
                                                {form.companyprofile}
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

export default EmployerForms;
