import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Forms = () => {
  const [formValues, setFormValues] = useState({
    summary: "",
    sector: "",
    cpvNo: "",
    country: "",
    state: "",
    city: "",
    procurementSummarySummary: "",
    procurementSummaryDeadline: "",
    noticeType: "",
    totNo: "",
    documentNo: "",
    competition: "",
    financier: "",
    ownership: "",
    tenderValue: "",
    purchaser: "",
    paddress: "",
    pcity: "",
    pdistrict: "",
    pstate: "",
    ppin: "",
    ptelfax: "",
    email: "",
    url: "",
    description: "",
    organization: "",
    tenderDetailNoticeType: "",
    product: "",
  });

  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const clearInputValue = () => {
    setFormValues((prevValues) => {
      const clearedValues = {};
      for (const key in prevValues) {
        clearedValues[key] = "";
      }
      return clearedValues;
    });
  };

  const totalPages = Math.ceil(Object.keys(formValues).length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const formFields = Object.keys(formValues).slice(startIndex, endIndex);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formValues).every(
      (value) => value !== ""
    );
    if (!isFormValid) {
      setIsError(true);
      return;
    }
    const token = localStorage.getItem("token")
    const response = await fetch(
      "/apiTender/tenderdetails/add-tender",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth: token
        },
        body: JSON.stringify(formValues),
      }
    );

    console.log(response);
    clearInputValue();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 max-w-7xl ">
        <h1 className="text-2xl font-bold mt-4 mb-8">Tender Form</h1>
        {isError && (
          <div className="text-white bg-red-700 text-xl p-3 mb-4 rounded-lg shadow-lg">
            ALL FIELDS ARE MANDATORY
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          {formFields.map((field) => (
            <div key={field} className="mb-6">
              <label htmlFor={field} className="font-medium text-gray-800">
                {field}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formValues[field]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          ))}

          <div className="flex justify-between">
            <div className="grid grid-cols-2">
              <button
                type="button"
                onClick={goToPreviousPage}
                className={`px-4 py-2 rounded-md ${currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                  }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={goToNextPage}
                className={`px-4 py-2 md:mx-6 mx-3 rounded-md ${currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                  }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div className="flex justify-end ">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-green-500 text-white"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={clearInputValue}
                className="ml-4 px-4 py-2 rounded-md bg-red-500 text-white"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
