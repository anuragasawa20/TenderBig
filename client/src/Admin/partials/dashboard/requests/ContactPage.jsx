import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import { faArrowLeft, faArrowRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ContactFormList = () => {
  const [contactForms, setContactForms] = useState([]);
  const [sortOption, setSortOption] = useState("receivedAt");
  const [isDescending, setIsDescending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [formsPerPage] = useState(10);
  const [selectedService, setSelectedService] = useState("All")


  useEffect(() => {
    fetchContactForms();
  }, []);

  const fetchContactForms = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/apiTender/get-allcontactforms",
        {
          headers: {
            auth: token,
          },
        }
      );

      setContactForms(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const sortForms = (forms, option, isDescending) => {
    switch (option) {
      case "receivedAt":
        return forms.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return isDescending ? dateB - dateA : dateA - dateB;
        });
      case "name":
        return forms.sort((a, b) => a.name.localeCompare(b.name));
      case "company":
        return forms.sort((a, b) => a.company.localeCompare(b.company));
      case "email":
        return forms.sort((a, b) => a.email.localeCompare(b.email));
      case "mobile":
        return forms.sort((a, b) => a.mobile.localeCompare(b.mobile));
      case "selectedService":
        return forms.sort((a, b) =>
          a.selectedService.localeCompare(b.selectedService)
        );
      default:
        return forms;
    }
  };

  const formatReceivedAt = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const handleResetFilters = () => {
    setSelectedService("All");
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pagination
  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = contactForms
    .filter(
      (form) =>
        selectedService === "All" ? true : form.selectedService === selectedService
    )
    .slice(indexOfFirstForm, indexOfLastForm);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPages = Math.ceil(contactForms.length / formsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };



  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Contact Requests</h1>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-4">
              <div>
                <label htmlFor="service" className="text-lg font-medium">
                  Select Service:
                </label>
                <select
                  id="service"
                  name="service"
                  className="block w-full  py-2 px-3 border shadow-xl border-gray-300 bg-white rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Career & Man Power">Career & Man Power</option>
                  <option value="Registration / Certificate">
                    Registration / Certificate
                  </option>
                  <option value="License">License</option>
                  <option value="Auction Material">Auction Material</option>
                  <option value="Joint Venture">Joint Venture</option>
                  <option value="Online Bidding">Online Bidding</option>
                  <option value="Tender Result">Tender Result</option>
                </select>
              </div>
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-primary-500 focus:outline-none"
                onClick={handleResetFilters}
              >
                Reset Filters
              </button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg border shadow-2xl">
              <table className="min-w-full divide-y py-3 divide-gray-200 table-fixed">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("name")}
                    >
                      Name
                    </th>
                    <th
                      className="py-3 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("company")}
                    >
                      Company
                    </th>
                    <th
                      className="py-3 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("email")}
                    >
                      Email
                    </th>
                    <th
                      className="py-3 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("mobile")}
                    >
                      Mobile
                    </th>
                    <th
                      className="py-3 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("receivedAt")}
                    >
                      Received At
                    </th>
                    <th
                      className="py-3 px-6 text-left text-md text-gray-900 font-bold uppercase tracking-wider border-b w-1/6"
                      onClick={() => handleSortOptionChange("selectedService")}
                    >
                      Services
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentForms
                    .slice(
                      (currentPage - 1) * formsPerPage,
                      currentPage * formsPerPage
                    )
                    .map((form) => (
                      <tr key={form._id}>
                        <td
                          className="py-2 px-4 font-medium whitespace-nowrap border-b w-1/6"
                          onClick={() => viewDetails(form._id)}
                        >
                          {form.name}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/6">
                          {form.company}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/6">
                          {form.email}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/6">
                          {form.mobile}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/6">
                          {formatReceivedAt(form.createdAt)}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/6">
                          {form.selectedService}
                        </td><td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/12">
                          {/* <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => handleEdit(form._id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button> */}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap font-medium border-b w-1/12">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(form._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between px-4 py-3 bg-gray-100 border-t border-gray-200 sm:px-6">
              <div className="flex items-center">
                <button
                  className="px-3 py-1 rounded-full focus:outline-none focus:shadow-outline-purple"
                  onClick={previousPage}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <span className="px-2 text-sm">{currentPage}</span>
                <button
                  className="px-3 py-1 rounded-full focus:outline-none focus:shadow-outline-purple"
                  onClick={nextPage}
                  disabled={currentPage === Math.ceil(contactForms.length / formsPerPage)}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactFormList;
