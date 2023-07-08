import { useState } from "react";
import { locations } from "../constants/countriesData"
import { Country, State, City } from 'country-state-city';

const JointVenture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    aadhar: "",
    companyName: "",
    panNumber: "",
    websiteAddress: "",
    gst: "",
    startDate: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  });

  const clearInputs = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      aadhar: "",
      companyName: "",
      panNumber: "",
      websiteAddress: "",
      gst: "",
      startDate: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zip: "",
    });
  }

  const countryData = Country.getAllCountries();
  const countryNames = Object.values(countryData).map((country) => country.name);

  let stateNames = [];
  if (formData.country) {
    const countryCode = countryData.find((country) => country.name === formData.country)?.isoCode;
    const stateData = State.getStatesOfCountry(countryCode);
    stateNames = Array.from(new Set(Object.values(stateData).map((state) => state.name)));
  }

  let cityNames = [];
  if (formData.country) {
    const countryCode = countryData.find((country) => country.name === formData.country)?.isoCode;
    const cityData = City.getCitiesOfCountry(countryCode);
    cityNames = Array.from(new Set(Object.values(cityData).map((city) => city.name)));
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
    const token = localStorage.getItem("token");

    const requestBody = JSON.stringify(formData);

    fetch("http://localhost:5000/apiTender/services/gem/submit", {
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
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Oops something went wrong!!!");
        clearInputs();
      });
  };

  return (
    <>
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
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Mobile"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Aadhar Number
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
                  name="companyName"
                  value={formData.companyName}
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
                  name="panNumber"
                  value={formData.panNumber}
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
                  name="websiteAddress"
                  value={formData.websiteAddress}
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
                  type="text"
                  name="gst"
                  value={formData.gst}
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
                  Address
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <input
                    required
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    placeholder="Enter Address"
                  />
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block mb-2 font-semibold relative">
                    Country
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <select
                      required
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    >
                      <option value="">Select a country</option>
                      {countryNames.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block mb-2 font-semibold relative">
                    State
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <select
                      required
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    >
                      <option value="">Select a state</option>
                      {stateNames.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block mb-2 font-semibold relative">
                    City
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                      placeholder="Enter a city"
                      autoComplete="off"
                      list="cityNamesList"
                    />
                    <datalist id="cityNamesList">
                      {cityNames.map((city) => (
                        <option key={city} value={city} />
                      ))}
                    </datalist>
                  </label>

                  <label className="block mb-2 font-semibold relative">
                    ZIP Code
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                      required
                      type="number"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                      placeholder="Enter ZIP"
                    />
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
    </>
  );
};

export default JointVenture;
