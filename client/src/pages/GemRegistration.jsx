import { useState } from "react";
import Navbar from "../components/Navbar";
import { locations } from "../constants/countriesData"
import Footer from "../components/Footer";

const JointVenture = () => {
  const [formData, setFormData] = useState({
    summary: "",
    sector: "",
    PANnumber: "",
    name: "",
    aadhar: "",
    webAddress: "",
    GSTnumber: "",
    workratio: "",
    userCategory: "",
    TotalValuation: "",
    country: "",
    state: "",
    city: "",
    addressline1: "",
    addressline2: "",
    zipcode: "",
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
      PANnumber: "",
      name: "",
      webAddress: "",
      aadhar: "",
      GSTnumber: "",
      workratio: "",
      userCategory: "",
      TotalValuation: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      addressline1: "",
      addressline2: "",
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

  // const [currentPage, setCurrentPage] = useState(1);
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleCheckbox(e) {
    setCheckbox(e.target.checked);
  }
  <input value="test" type="checkbox" onChange={handleChange} />

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const token = localStorage.getItem("token");

    const requestBody = JSON.stringify(formData);

    fetch("/apiTender/tenderdetails/add-tender", {
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

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* Global Section */}
          <h2 className="text-2xl font-bold mb-4 text-center ">Gem Registration</h2>

          <div className="p-2 rounded-lg">
            <p className="text-red-700 font-thin font-serif text-sm">
              Fields marked with an asterisk (*) are mandatory.
            </p>
            <label className="block mb-2 font-semibold relative">
              Full Name
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Project"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Email
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Email"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Contact Number
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Mobile"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              16-Digit Aadhar Number
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Aadhar Number"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block mb-2 font-semibold">
                  Company Name
                  <span className="text-red-700 relative top-0 right-0">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                  placeholder="Company Name"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 font-semibold">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="PANnumber"
                  value={formData.PANnumber}
                  onChange={handleChange}
                  className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                  placeholder="Enter PAN No"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 font-semibold">
                  Website Address
                </label>
                <input
                  type="URL"
                  name="webAddress"
                  value={formData.webAddress}
                  onChange={handleChange}
                  className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                  placeholder="Website URL"
                />
              </div>
              <label className="block mb-2 font-semibold">
                GST Number
                <span className="text-red-700 relative top-0 right-0">*</span>
                <input
                  required
                  type="number"
                  name="GSTnumber"
                  value={formData.GSTnumber}
                  onChange={handleChange}
                  className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                  placeholder="GST number"
                />
              </label>
              <div className="grid gap-4 mt-1.5 mb-1.5">
                <label className="block font-semibold">
                  Bussiness Start Date
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    placeholder="Enter Start Date"
                  />
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className=" p-2 rounded-lg mt-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Business Office Building</h2>
                <label className="block mb-2 font-semibold relative">
                  Address Line 1
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <input
                    required
                    type="text"
                    name="addressline1"
                    value={formData.addressline1}
                    onChange={handleChange}
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    placeholder="Project"
                  />
                </label>
                <label className="block mb-2 font-semibold relative">
                  Adress Line 2
                  <input
                    required
                    type="text"
                    name="addressline2"
                    value={formData.addressline2}
                    onChange={handleChange}
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    placeholder="Project"
                  />
                </label>
                <div className="flex">
                  <div className="grid gap-4 mt-1.5 mb-1.5 basis-1/2 m-1">
                    <label className="block font-semibold">
                      City
                      <span className="text-red-700 relative top-0 right-0">*</span>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter City"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 mt-1.5 mb-1.5 basis-1/2 m-1">
                    <label className="block font-semibold">
                      Zip Code
                      <span className="text-red-700 relative top-0 right-0">*</span>
                      <input
                        type="number"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter City"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <label className="block font-semibold py-2 basis-1/2 m-1">
                    State
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input required
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                      placeholder="Enter State"
                    />
                  </label>
                  <label className="block font-semibold py-2 basis-1/2 m-1">
                    Country
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <select required
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    >
                      {locations.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3 font-bold">
            <p>Cost of Registration : <span className="text-red-600">xyzw</span></p>
          </div>
          <div className="flex m-3">
            <input value="test" type="checkbox" onChange={handleCheckbox} />
            <p className="mx-2">Do you agree to the terms and conditions?</p>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JointVenture;
