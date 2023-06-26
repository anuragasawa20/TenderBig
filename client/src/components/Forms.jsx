import { useState } from "react";
import Navbar from "./Navbar";
import { locations } from "../constants/countriesData"

const OtherInformationAndPurchaserDetail = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      {/* otherInformation and purchaserDetail Sections */}
      <div className="grid grid-cols-2 gap-4">
        {/* otherInformation Section */}
        <div className="border border-gray-500 p-2 rounded-lg mt-2">
          <h2 className="text-lg font-semibold mb-4">Other Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2">
              Notice Type:
              <input
                type="text"
                name="noticeType"
                value={formData.noticeType}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Total No:
              <input
                type="text"
                name="totNo"
                value={formData.totNo}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Document No:
              <input
                type="text"
                name="documentNo"
                value={formData.documentNo}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Competition:
              <input
                type="text"
                name="competition"
                value={formData.competition}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Financier:
              <input
                type="text"
                name="financier"
                value={formData.financier}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Ownership:
              <input
                type="text"
                name="ownership"
                value={formData.ownership}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
          </div>
          <label className="block mb-2">
            Tender Value:
            <input
              type="text"
              name="tenderValue"
              value={formData.tenderValue}
              onChange={handleChange}
              className="border rounded px-3 py-2 mt-1 w-full"
            />
          </label>
        </div>

        {/* purchaserDetail Section */}
        <div className="border border-gray-500 p-2 rounded-lg mt-2">
          <h2 className="text-lg font-semibold mb-4">Purchaser Detail</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2">
              Purchaser:
              <input
                type="text"
                name="purchaser"
                value={formData.purchaser}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Address:
              <input
                type="text"
                name="paddress"
                value={formData.paddress}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              City:
              <input
                type="text"
                name="pcity"
                value={formData.pcity}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              District:
              <input
                type="text"
                name="pdistrict"
                value={formData.pdistrict}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              State:
              <input
                type="text"
                name="pstate"
                value={formData.pstate}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              PIN:
              <input
                type="text"
                name="ppin"
                value={formData.ppin}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Phone/Fax:
              <input
                type="text"
                name="ptelfax"
                value={formData.ptelfax}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded px-3 py-2 mt-1 w-full"
              />
            </label>
          </div>
          <label className="block mb-2">
            URL:
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="border rounded px-3 py-2 mt-1 w-full"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-8 mx-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </>
  );
};

const TenderForm = () => {
  const [formData, setFormData] = useState({
    summary: "",
    sector: "",
    cpvNo: "",
    userCategory: "",
    product: "",
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
  });

  const clearInputs = () => {
    setFormData({
      summary: "",
      sector: "",
      cpvNo: "",
      userCategory: "",
      product: "",
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
    });
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const token = localStorage.getItem("token");

    const requestBody = JSON.stringify(formData);

    fetch("http://localhost:5000/apiTender/tenderdetails/add-tender", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: token,
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Submitted")
        clearInputs();
        window.location.href = '/forms';
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Oops something went wrong!!!");
        clearInputs();
        window.location.href = '/forms';
      });
  };


  const nextPage = () => {
    setCurrentPage(2);
  };

  const previousPage = () => {
    setCurrentPage(1);
  };


  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8 border border-gray-700 rounded-lg shadow-lg mt-6 mb-6">
        {currentPage === 1 && (
          <form onSubmit={handleSubmit}>
            {/* Global Section */}
              <h2 className="text-lg font-semibold mb-4 text-center">Submit Tender Request</h2>
            <div className="border border-gray-500 p-2 rounded-lg">
              <label className="block mb-2">
                Summary:
                <input
                  type="text"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 mt-1 w-full"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block mb-2">
                  Sector:
                  <input
                    type="text"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  CPV No:
                  <input
                    type="text"
                    name="cpvNo"
                    value={formData.cpvNo}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  User Category:
                  <select
                    name="userCategory"
                    value={formData.userCategory}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  >
                    <option value="">Select User Category</option>
                    <option value="contractor">Contractor</option>
                    <option value="subcontractor">Subcontractor</option>
                  </select>
                </label>
                <label className="block mb-2">
                  Product:
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
              </div>
            </div>

            {/* procurementSummary and tenderDetail Sections */}
            <div className="grid grid-cols-2 gap-4">
              {/* Procurement Summary Section */}
              <div className="border border-gray-500 p-2 rounded-lg mt-2">
                <h2 className="text-lg font-semibold mb-4">Procurement Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block mb-2">
                    Country:
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 mt-1 w-full"
                    >
                      {locations.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block mb-2">
                    State:
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 mt-1 w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    City:
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 mt-1 w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Deadline:
                    <input
                      type="date"
                      name="procurementSummaryDeadline"
                      value={formData.procurementSummaryDeadline}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 mt-1 w-full"
                    />
                  </label>
                </div>
                <label className="block mb-2">
                  Summary:
                  <input
                    type="text"
                    name="procurementSummarySummary"
                    value={formData.procurementSummarySummary}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
              </div>

              {/* tenderDetail Section */}
              <div className="border border-gray-500 p-2 rounded-lg mt-2">
                <h2 className="text-lg font-semibold mb-4">Tender Detail</h2>
                <label className="block mb-2">
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Organization:
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Notice Type:
                  <input
                    type="text"
                    name="tenderDetailNoticeType"
                    value={formData.tenderDetailNoticeType}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 mt-1 w-full"
                  />
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={nextPage}
              className="bg-blue-500 text-white px-4 py-2 mt-8 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </form>
        )}

        {currentPage === 2 && (
          <form onSubmit={handleSubmit}>
            <OtherInformationAndPurchaserDetail
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <button
              type="button"
              onClick={previousPage}
              className="bg-blue-500 text-white px-4 py-2 mt-8 rounded hover:bg-blue-600"
            >
              Previous
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default TenderForm;
