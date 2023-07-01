// import { useState } from "react";
// import Navbar from "../../components/Navbar";
// import { locations } from "../../constants/countriesData"
// import Footer from "../../components/Footer";
// import { GrFormPrevious } from 'react-icons/gr';
// import PropTypes from "prop-types";
// import FileUpload from "../file-uploading/FileUpload";

// const OtherInformationAndPurchaserDetail = ({
//     handleSubmit,
//     previousPage,
// }) => {
//     OtherInformationAndPurchaserDetail.propTypes = {
//         formData: PropTypes.shape({
//             // Include all the properties from the formData object
//             noticeType: PropTypes.string.isRequired,
//             totNo: PropTypes.string.isRequired,
//             documentNo: PropTypes.string.isRequired,
//             competition: PropTypes.string.isRequired,
//             financier: PropTypes.string.isRequired,
//             ownership: PropTypes.string.isRequired, // Add this line for formData.ownership
//             tenderValue: PropTypes.string.isRequired,
//             purchaser: PropTypes.string.isRequired,
//             paddress: PropTypes.string.isRequired,
//             pcity: PropTypes.string.isRequired,
//             pdistrict: PropTypes.string.isRequired,
//             pstate: PropTypes.string.isRequired,
//             ppin: PropTypes.string.isRequired,
//             ptelfax: PropTypes.string.isRequired,
//             email: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//             GSTnumber: PropTypes.string.isRequired,
//             PANnumber: PropTypes.string.isRequired
//         }).isRequired,
//         handleChange: PropTypes.func.isRequired,
//         handleSubmit: PropTypes.func.isRequired,
//         previousPage: PropTypes.func.isRequired,
//     };

//     return (
//         <>
//             <h2 className="text-2xl font-bold mb-4 text-center">
//                 Joint venture Request
//             </h2>
//             {/* otherInformation and purchaserDetail Sections */}
//             <div>
//                 <p className="flex justify-center m-5">
//                     Upload Necessary Licences
//                     <span className="text-red-700 relative top-0 right-0">*</span>
//                 </p>
//                 <hr />
//                 <FileUpload />
//             </div>

//             <div className="flex justify-between items-center w-full">
//                 <div className="w-1/4">
//                     <button
//                         type="button"
//                         onClick={previousPage}
//                         className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//                     >
//                         <span style={{ color: "white" }}>
//                             <GrFormPrevious />
//                         </span>
//                     </button>
//                 </div>

//                 <div className="w-3/4">
//                     <button
//                         type="submit"
//                         onClick={handleSubmit}
//                         className="bg-red-700 mx-6 text-white px-4 py-2 mt-8 rounded-lg font-semibold hover:bg-red-800 w-2/4"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// const JointVenture = () => {
//     const [formData, setFormData] = useState({
//         summary: "",
//         sector: "",
//         PANnumber: "",
//         pnumber: "",
//         name: "",
//         aadhar: "",
//         companyaddress1: "",
//         companyaddress2: "",
//         companycity: "",
//         zipcode: "",
//         tendername: "",
//         CIN: "",
//         webAddress: "",
//         GSTnumber: "",
//         workratio: "",
//         userCategory: "",
//         TotalValuation: "",
//         CRegnumber: "",
//         country: "",
//         state: "",
//         city: "",
//         procurementSummarySummary: "",
//         procurementSummaryDeadline: "",
//         noticeType: "",
//         totNo: "",
//         documentNo: "",
//         competition: "",
//         financier: "",
//         ownership: "",
//         tenderValue: "",
//         purchaser: "",
//         paddress: "",
//         pcity: "",
//         pdistrict: "",
//         pstate: "",
//         ppin: "",
//         ptelfax: "",
//         email: "",
//         url: "",
//         description: "",
//         organization: "",
//         tenderDetailNoticeType: "",
//     });

//     const clearInputs = () => {
//         setFormData({
//             summary: "",
//             sector: "",
//             PANnumber: "",
//             pnumber: "",
//             name: "",
//             CIN: "",
//             companyaddress1: "",
//             companyaddress2: "",
//             companycity: "",
//             zipcode: "",
//             tendername: "",
//             CRegnumber: "",
//             webAddress: "",
//             aadhar: "",
//             GSTnumber: "",
//             workratio: "",
//             userCategory: "",
//             TotalValuation: "",
//             country: "",
//             state: "",
//             city: "",
//             procurementSummarySummary: "",
//             procurementSummaryDeadline: "",
//             noticeType: "",
//             totNo: "",
//             documentNo: "",
//             competition: "",
//             financier: "",
//             ownership: "",
//             tenderValue: "",
//             purchaser: "",
//             paddress: "",
//             pcity: "",
//             pdistrict: "",
//             pstate: "",
//             ppin: "",
//             ptelfax: "",
//             email: "",
//             url: "",
//             description: "",
//             organization: "",
//             tenderDetailNoticeType: "",
//         });
//     }

//     const [currentPage, setCurrentPage] = useState(1);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);

//         const token = localStorage.getItem("token");

//         const requestBody = JSON.stringify(formData);

//         fetch("/apiTender/tenderdetails/add-tender", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 auth: token,
//             },
//             body: requestBody,
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Success:", data);
//                 alert("Submitted")
//                 clearInputs();
//                 window.location.href = '/forms';
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Oops something went wrong!!!");
//                 clearInputs();
//                 window.location.href = '/forms';
//             });
//     };


//     const nextPage = () => {
//         setCurrentPage(2);
//     };

//     const previousPage = () => {
//         setCurrentPage(1);
//     };


//     return (
//         <>
//             <Navbar />
//             <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">

//                 <form onSubmit={handleSubmit}>
//                     {/* Global Section */}
//                     <h2 className="text-2xl font-bold mb-4 text-center ">Joint Venture Request</h2>

//                     <div className="p-2 rounded-lg">
//                         <h2 className="text-2xl font-bold mb-4">Company details</h2>
//                         <p className="text-red-700 font-thin font-serif text-sm">
//                             Fields marked with an asterisk (*) are mandatory.
//                         </p>
//                         <label className="block mb-2 font-semibold relative">
//                             Name of the interested Project/Tender
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="summary"
//                                 value={formData.summary}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                             />
//                         </label>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="relative">
//                                 <label className="block mb-2 font-semibold">
//                                     Company Name
//                                     <span className="text-red-700 relative top-0 right-0">*</span>
//                                 </label>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="sector"
//                                     value={formData.sector}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </div>
//                             <div className="relative">
//                                 <label className="block mb-2 font-semibold">
//                                     PAN Number
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="PANnumber"
//                                     value={formData.PANnumber}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </div>
//                             <div className="relative">
//                                 <label className="block mb-2 font-semibold">
//                                     Website Address
//                                 </label>
//                                 <input
//                                     type="URL"
//                                     name="webAddress"
//                                     value={formData.webAddress}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </div>
//                             <label className="block mb-2 font-semibold">
//                                 Total Valuation
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="number"
//                                     name="TotalValuation"
//                                     value={formData.TotalValuation}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 GST Number
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="number"
//                                     name="GSTnumber"
//                                     value={formData.GSTnumber}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 Work Ratio
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="workRatio"
//                                     value={formData.workRatio}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>

//                             <label className="block mb-2 font-semibold">
//                                 Company Email
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 Company Contact Number
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="number"
//                                     name="number"
//                                     value={formData.pnumber}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 CIN
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="number"
//                                     name="CIN"
//                                     value={formData.CIN}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 Company Registration Number
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="number"
//                                     name="CRegnumber"
//                                     value={formData.CRegnumber}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <h1>
//                                 Company Address
//                             </h1>
//                             <label className="block mb-2 font-semibold">
//                                 Address Line 1
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="companyaddress1"
//                                     value={formData.companyaddress1}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 Address Line 2
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="companyaddress2"
//                                     value={formData.companyaddress2}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 City
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="companycity"
//                                     value={formData.companycity}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>
//                             <label className="block mb-2 font-semibold">
//                                 Zip Code
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="zipcode"
//                                     value={formData.zipcode}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>

//                             <label className="block mb-2 font-semibold">
//                                 Tender Name
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="tendername"
//                                     value={formData.tendername}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>

//                             <label className="block mb-2 font-semibold">
//                                 Country
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="text"
//                                     name="country"
//                                     value={formData.country}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                                 />
//                             </label>

//                             <div>
//                                 <p className="font-bold">Upload the following documents :</p>
//                                 <ul>
//                                     <li>CIN</li>
//                                     <li>GST</li>
//                                     <li>PAN</li>
//                                 </ul>
//                             </div>
//                             <FileUpload />
//                         </div>
//                     </div>


//                     <form className="p-2 rounded-lg">
//                         <h2 className="text-2xl font-bold mb-4">Personal details</h2>
//                         <label className="block mb-2 font-semibold relative">
//                             Full Name
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                 placeholder="Name"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Father's Name
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Director / Company Post
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Email
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Contact Number
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="tel"
//                                 name="number"
//                                 value={formData.number}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             16-Digit Aadhar Number
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="aadhar"
//                                 value={formData.aadhar}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                 placeholder="Aadhar Number"
//                             />
//                         </label>

//                         <div>
//                             <p className="font-bold">Upload you passport size photo</p>
//                         </div>
//                         <FileUpload />
//                     </form>

//                     <form className="p-2 rounded-lg">
//                         <h2 className="text-2xl font-bold mb-4">Partnership</h2>
//                         <label className="block mb-2 font-semibold relative">
//                             Company profile
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Partnership project / tender
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Requirement : Finance / manpower (select one)
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                 placeholder="Name"
//                             />
//                         </label>

//                         <div className="grid grid-cols-2 gap-4 mt-1.5 mb-1.5">
//                             <label className="block font-semibold">
//                                 Start Date
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     type="date"
//                                     name="startDate"
//                                     value={formData.startDate}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                     placeholder="Enter Start Date"
//                                 />
//                             </label>
//                             <label className="block font-semibold">
//                                 End Date
//                                 <span className="text-red-700 relative top-0 right-0">*</span>
//                                 <input
//                                     required
//                                     type="date"
//                                     name="endDate"
//                                     value={formData.endDate}
//                                     onChange={handleChange}
//                                     className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                     placeholder="Enter End Date"
//                                 />
//                             </label>
//                         </div>

//                         <label className="block mb-2 font-semibold">
//                             Volume
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="number"
//                                 name="TotalValuation"
//                                 value={formData.TotalValuation}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                             />
//                         </label>

//                         <label className="block mb-2 font-semibold relative">
//                             Work experience (if man-power required)
//                             <span className="text-red-700 relative top-0 right-0">*</span>
//                             <input
//                                 required
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                                 placeholder="Email"
//                             />
//                         </label>
//                     </form>



//                     <button
//                         type="button"
//                         onClick={nextPage}
//                         className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//                     >
//                         Next
//                     </button>
//                 </form>

//                 {currentPage === 2 && (
//                     <form onSubmit={handleSubmit}>
//                         <OtherInformationAndPurchaserDetail
//                             formData={formData}
//                             handleChange={handleChange}
//                             handleSubmit={handleSubmit}
//                             previousPage={previousPage}
//                         />
//                     </form>
//                 )}
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default JointVenture;

const JointVenture = () => {
  return (
    <div>
      
    </div>
  )
}

export default JointVenture;