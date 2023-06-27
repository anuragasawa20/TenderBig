import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";

const ContactFormList = () => {
const [contactForms, setContactForms] = useState([]);
const [sortOption, setSortOption] = useState("receivedAt");
const [isDescending, setIsDescending] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [formsPerPage] = useState(10);
const [selectedService, setSelectedService] = useState("All");

useEffect(() => {
fetchContactForms();
}, []);

const fetchContactForms = async () => {
try {
const token = localStorage.getItem("token");
const response = await axios.get(
  "/apiTender/get-allcontactforms",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      const response = await axios.get(
        "http://localhost:5000/apiTender/get-allcontactforms",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter by selected services
      const selectedServices = [
        "Career & Man Power",
        "Registration / Certificate",
        "License",
        "Auction Material",
        "Joint Venture",
        "Online Bidding",
        "Tender Result",
      ];
      const filteredForms = response.data.filter((form) =>
        selectedServices.includes(form.selectedService)
      );

      // Sort by selected sort option
      const sortedForms = sortForms(filteredForms, sortOption, isDescending);

      setContactForms(sortedForms);
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
      // Add more cases for other sorting options if needed
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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pagination
  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = contactForms.slice(indexOfFirstForm, indexOfLastForm);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => {
                      setSortOption("name");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "name", !isDescending));
                    }}
                  >
                    Name
                  </th>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => {
                      setSortOption("company");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "company", !isDescending));
                    }}
                  >
                    Company
                  </th>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => {
                      setSortOption("email");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "email", !isDescending));
                    }}
                  >
                    Email
                  </th>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => {
                      setSortOption("mobile");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "mobile", !isDescending));
                    }}
                  >
                    Mobile
                  </th>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => {
                      setSortOption("receivedAt");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "receivedAt", !isDescending));
                    }}
                  >
                    Received At
                  </th>
                  <th
                    className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => {
                      setSortOption("selectedServices");
                      setIsDescending(!isDescending);
                      setContactForms(sortForms(contactForms, "selectedServices", !isDescending));
                    }}
                  >
                    Services
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentForms.map((form) => (
                  <tr key={form.id}>
                    <td className="py-2 px-4 whitespace-nowrap">{form.name}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{form.company}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{form.email}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{form.mobile}</td>
                    <td className="py-2 px-4 whitespace-nowrap">
                      {formatReceivedAt(form.createdAt)}
                    </td>

                    <td className="py-2 px-4 whitespace-nowrap">{form.selectedService}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-4 sm:px-6 lg:px-8 py-2 flex justify-center">
            <nav className="flex items-center">
              <ul className="pagination flex space-x-3">
                {Array.from({ length: Math.ceil(contactForms.length / formsPerPage) }).map(
                  (_, index) => (
                    <li key={index}>
                      <button
                        className={`pagination-link ${currentPage === index + 1 ? "pagination-link-active" : ""}`}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

        </main>
      </div>
    </div>
  );
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
.filter((form) =>
selectedService === "All" ? true : form.selectedService === selectedService
)
.slice(indexOfFirstForm, indexOfLastForm);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <label htmlFor="service" className="text-sm font-medium">
              Select Service:
            </label>
            <select
              id="service"
              name="service"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={selectedService}
              onChange={(e) => handleServiceChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Career & Man Power">Career & Man Power</option>
              <option value="Registration / Certificate">Registration / Certificate</option>
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSortOptionChange("name")}
              >
                Name
              </th>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSortOptionChange("company")}
              >
                Company
              </th>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSortOptionChange("email")}
              >
                Email
              </th>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSortOptionChange("mobile")}
              >
                Mobile
              </th>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSortOptionChange("receivedAt")}
              >
                Received At
              </th>
              <th
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSortOptionChange("selectedService")}
              >
                Services
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentForms.map((form) => (
              <tr key={form.id}>
                <td className="py-2 px-4 whitespace-nowrap">{form.name}</td>
                <td className="py-2 px-4 whitespace-nowrap">{form.company}</td>
                <td className="py-2 px-4 whitespace-nowrap">{form.email}</td>
                <td className="py-2 px-4 whitespace-nowrap">{form.mobile}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {formatReceivedAt(form.createdAt)}
                </td>
                <td className="py-2 px-4 whitespace-nowrap">{form.selectedService}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-4 sm:px-6 lg:px-8 py-2 flex justify-center">
          <nav className="flex items-center">
            <ul className="pagination flex space-x-3">
              {Array.from({ length: Math.ceil(contactForms.length / formsPerPage) }).map(
                (_, index) => (
                  <li key={index}>
                    <button
                      className={`pagination-link ${
                        currentPage === index + 1 ? "pagination-link-active" : ""
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  </div>
</div>
);
};

export default ContactFormList;