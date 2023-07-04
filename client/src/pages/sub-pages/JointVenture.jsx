// import { useState } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import FileUpload from "../file-uploading/FileUpload";
// import { Link } from "react-router-dom";
// import { MultiStepProgressBar } from "../../components/Progressbar";
// import Directors from "../DynamicOpt/directors";


// function FinanceForm({ onSubmit }) {
//   const [financeval, setFinanceval] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       financeval
//     };

//     var requestBody = new FormData();

//     // Append form data to the request body
//     Object.entries(data).forEach(([key, value]) => {
//       requestBody.append(key, value);
//     });
//     console.log(requestBody.get("cinReg"))
//     requestBody.append("doc", event.target.doc.files[0]);

//     onSubmit(requestBody);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div>
//           <input required
//             type="text"
//             name="companyName"
//             className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none" value={financeval} onChange={(e) => setFinanceval(e.target.value)}
//             placeholder="Enter Finance Required"
//           />
//         </div>
//       </form>
//     </>
//   )
// }

// function ManpowerForm({ onSubmit }) {
//   const [manpowerval, setmanpowerval] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       manpowerval
//     };

//     var requestBody = new FormData();

//     // Append form data to the request body
//     Object.entries(data).forEach(([key, value]) => {
//       requestBody.append(key, value);
//     });
//     console.log(requestBody.get("cinReg"))
//     requestBody.append("doc", event.target.doc.files[0]);

//     onSubmit(requestBody);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div>
//           <input required
//             type="text"
//             name="companyName"
//             className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none" value={manpowerval} onChange={(e) => setmanpowerval(e.target.value)}
//             placeholder="Enter Experience of worker"
//           />
//         </div>
//       </form>
//     </>
//   )
// }



// const JointVenture3 = () => {

//   const [selectedOption, setSelectedOption] = useState('Finance');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleFinanceFormSubmit = (data) => {

//     const token = localStorage.getItem('token');

//     fetch('http://localhost:5000/apiTender/services/ccert/certification', {
//       method: 'POST',
//       headers: {
//         auth: token,
//       },
//       body: data,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success == true) {
//           alert('Submitted');
//           window.location.href = '/certification';
//         }
//         else {
//           alert('Something went wrong.Try Again.');
//           window.location.href = '/certification';
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Oops something went wrong!!!');
//       });
//   };
//   const handleManpowerFormSubmit = (data) => {

//     const token = localStorage.getItem('token');

//     fetch('http://localhost:5000/apiTender/services/icert/certification', {
//       method: 'POST',
//       headers: {
//         auth: token,
//       },
//       body: data,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success == true) {
//           alert('Submitted');
//           window.location.href = '/certification';
//         }
//         else {
//           alert('Something went wrong.Try Again.');
//           window.location.href = '/certification';
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Oops something went wrong!!!');
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     const token = localStorage.getItem("token");

//     const requestBody = JSON.stringify(formData);

//     fetch("/apiTender/tenderdetails/add-tender", {
//       method: "POST",
//       headers: {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": token,
//         },
//       },
//       body: requestBody,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Submitted")
//         window.location.href = '/forms';
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Oops something went wrong!!!");
//         window.location.href = '/forms';
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
//         <div className="my-5">
//           <MultiStepProgressBar step={3} />
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* Global Section */}
//           <h2 className="text-2xl font-bold mb-4">Partnership</h2>
//           <label className="block mb-2 font-semibold relative">
//             Company profile
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//             />
//           </label>

//           <label className="block mb-2 font-semibold relative">
//             Partnership project / tender
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//             />
//           </label>

//           <label className="block mb-2 font-semibold relative">
//             Requirement : Finance / manpower (select one)
//             <span className="text-red-700 relative top-0 right-0">*</span>
//           </label>

//           <div className="flex">
//             <div className="w-full">
//               <div className="mb-4">
//                 <input
//                   type="radio"
//                   id="company"
//                   name="option"
//                   value="company"
//                   checked={selectedOption === 'company'}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="company" className="ml-2 mr-4">Finance</label>

//                 <input
//                   type="radio"
//                   id="individual"
//                   name="option"
//                   value="individual"
//                   checked={selectedOption === 'individual'}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="individual" className="ml-2">Manpower</label>
//               </div>
//             </div>
//           </div>

//           <div className="flex">
//             <div className="w-full">
//               {/* Render the selected form */}
//               {selectedOption === 'company' && <FinanceForm onSubmit={handleFinanceFormSubmit} />}
//               {selectedOption === 'individual' && <ManpowerForm onSubmit={handleManpowerFormSubmit} />}
//             </div>
//           </div>

//           <label className="block mb-2 font-semibold">
//             Partnership Ratio
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <div className="flex">
//               <input
//                 required
//                 type="number"
//                 name="RatioNumerator"
//                 value={formData.RatioNumerator}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none mr-2"
//               />
//               <span className="text-lg font-semibold">:</span>
//               <input
//                 required
//                 type="number"
//                 name="RatioDenominator"
//                 value={formData.RatioDenominator}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none ml-2"
//               />
//             </div>
//           </label>


//           <div className="grid grid-cols-2 gap-4 mt-1.5 mb-1.5">
//             <label className="block font-semibold">
//               Start Date
//               <span className="text-red-700 relative top-0 right-0">*</span>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                 placeholder="Enter Start Date"
//               />
//             </label>
//             <label className="block font-semibold">
//               End Date
//               <span className="text-red-700 relative top-0 right-0">*</span>
//               <input
//                 required
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                 placeholder="Enter End Date"
//               />
//             </label>
//           </div>

//           <label className="block mb-2 font-semibold">
//             Volume
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="number"
//               name="TotalValuation"
//               value={formData.TotalValuation}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//             />
//           </label>

//           <label className="block mb-2 font-semibold relative">
//             Work experience (if man-power required)
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//               placeholder="Email"
//             />
//           </label>
//           <Link to='/JointVenture2'>
//             <button
//               type="button"
//               className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//             >
//               Previous
//             </button>
//           </Link>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-red-700 mx-2 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }


// const JointVenture2 = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
//         <div className="my-5">
//           <MultiStepProgressBar step={2} />
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* Global Section */}
//           <h2 className="text-2xl font-bold mb-4">Personal details</h2>
//           <Directors onDirectorSubmit={handleDirectorSubmit} />

//           <label className="block mb-2 font-semibold relative">
//             Director / Company Post
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="text"
//               name="directorname"
//               value={formData.directorname}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//             />
//           </label>

//           <div className="flex">
//             <label className="block mb-2 font-semibold relative basis-1/2">
//               Email
//               <span className="text-red-700 relative top-0 right-0">*</span>
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//               />
//             </label>

//             <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
//               Contact Number
//               <span className="text-red-700 relative top-0 right-0">*</span>
//               <input
//                 required
//                 type="number"
//                 name="pnumber"
//                 value={formData.pnumber}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//               />
//             </label>
//           </div>

//           <label className="block mb-2 font-semibold relative">
//             16-Digit Aadhar Number
//             <span className="text-red-700 relative top-0 right-0">*</span>
//             <input
//               required
//               type="text"
//               name="aadhar"
//               value={formData.aadhar}
//               onChange={handleChange}
//               className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//               placeholder="Aadhar Number"
//             />
//           </label>

//           <label className="block mb-2 font-semibold">
//             Director GST
//             <span className="text-red-700 relative top-0 right-0">* - </span>
//             <input type="file" name="resume" accept=".pdf" required />
//           </label>

//           <label className="block mb-2 font-semibold">
//             Director PAN
//             <span className="text-red-700 relative top-0 right-0">* - </span>
//             <input type="file" name="resume" accept=".pdf" required />
//           </label>

//           <label className="block mb-2 font-semibold">
//             Director aadhar
//             <span className="text-red-700 relative top-0 right-0">* - </span>
//             <input type="file" name="resume" accept=".pdf" required />
//           </label>

//           <label className="block mb-2 font-semibold">
//             Director photo
//             <span className="text-red-700 relative top-0 right-0">* - </span>
//             <input type="file" name="resume" accept=".pdf" required />
//           </label>

//           <Link to="/jointventure1">
//             <button
//               type="button"
//               className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800 mx-1"
//             >
//               Previous
//             </button>
//           </Link>
//           <Link to='/JointVenture3'>
//             <button
//               type="button"
//               className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//             >
//               Next
//             </button>
//           </Link>
//         </form>
//       </div>
//       <Footer />
//     </>
//   )
// }


// const JointVenture1 = () => {
//   const [formData, setFormData] = useState({
//     summary: "",
//     sector: "",
//     PANnumber: "",
//     pnumber: "",
//     name: "",
//     aadhar: "",
//     companyaddress1: "",
//     companyaddress2: "",
//     companycity: "",
//     zipcode: "",
//     tendername: "",
//     CIN: "",
//     webAddress: "",
//     GSTnumber: "",
//     workRatio: "",
//     userCategory: "",
//     TotalValuation: "",
//     CRegnumber: "",
//     country: "",
//     state: "",
//     city: "",
//     procurementSummarySummary: "",
//     procurementSummaryDeadline: "",
//     noticeType: "",
//     totNo: "",
//     documentNo: "",
//     competition: "",
//     financier: "",
//     ownership: "",
//     tenderValue: "",
//     purchaser: "",
//     paddress: "",
//     pcity: "",
//     pdistrict: "",
//     pstate: "",
//     ppin: "",
//     ptelfax: "",
//     email: "",
//     url: "",
//     description: "",
//     organization: "",
//     tenderDetailNoticeType: "",
//   });

//   const clearInputs = () => {
//     setFormData({
//       summary: "",
//       sector: "",
//       PANnumber: "",
//       pnumber: "",
//       name: "",
//       CIN: "",
//       companyaddress1: "",
//       companyaddress2: "",
//       companycity: "",
//       zipcode: "",
//       tendername: "",
//       CRegnumber: "",
//       webAddress: "",
//       aadhar: "",
//       GSTnumber: "",
//       workRatio: "",
//       userCategory: "",
//       TotalValuation: "",
//       country: "",
//       state: "",
//       city: "",
//       procurementSummarySummary: "",
//       procurementSummaryDeadline: "",
//       noticeType: "",
//       totNo: "",
//       documentNo: "",
//       competition: "",
//       financier: "",
//       ownership: "",
//       tenderValue: "",
//       purchaser: "",
//       paddress: "",
//       pcity: "",
//       pdistrict: "",
//       pstate: "",
//       ppin: "",
//       ptelfax: "",
//       email: "",
//       url: "",
//       description: "",
//       organization: "",
//       tenderDetailNoticeType: "",
//     });
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     const token = localStorage.getItem("token");

//     const requestBody = JSON.stringify(formData);

//     fetch("/apiTender/tenderdetails/add-tender", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         auth: token,
//       },
//       body: requestBody,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Submitted")
//         clearInputs();
//         window.location.href = '/forms';
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Oops something went wrong!!!");
//         clearInputs();
//         window.location.href = '/forms';
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
//         <div className="my-5">
//           <MultiStepProgressBar step={1} />
//         </div>
//         {/* Global Section */}
//         <h2 className="text-2xl font-bold mb-4 text-center ">Joint Venture Request</h2>
//         <form>
//           <div className="p-2 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Company details</h2>
//             <p className="text-red-700 font-thin font-serif text-sm">
//               Fields marked with an asterisk (*) are mandatory.
//             </p>
//             <label className="block mb-2 font-semibold relative">
//               Name of the interested Project/Tender
//               <span className="text-red-700 relative top-0 right-0">*</span>
//               <input
//                 required
//                 type="text"
//                 name="summary"
//                 value={formData.summary}
//                 onChange={handleChange}
//                 className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//               />
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative">
//                 <label className="block mb-2 font-semibold">
//                   Company Name
//                   <span className="text-red-700 relative top-0 right-0">*</span>
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="sector"
//                   value={formData.sector}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </div>
//               <div className="relative">
//                 <label className="block mb-2 font-semibold">
//                   PAN Number
//                 </label>
//                 <input
//                   type="number"
//                   name="PANnumber"
//                   value={formData.PANnumber}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </div>
//               <div className="relative">
//                 <label className="block mb-2 font-semibold">
//                   Website Address
//                 </label>
//                 <input
//                   type="URL"
//                   name="webAddress"
//                   value={formData.webAddress}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </div>
//               <label className="block mb-2 font-semibold">
//                 GST Number
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="number"
//                   name="GSTnumber"
//                   value={formData.GSTnumber}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 Work Ratio
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="workRatio"
//                   value={formData.workRatio}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>

//               <label className="block mb-2 font-semibold">
//                 Company Email
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 Company Contact Number
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="number"
//                   name="number"
//                   value={formData.pnumber}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 CIN
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="number"
//                   name="CIN"
//                   value={formData.CIN}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 Company Registration Number
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="number"
//                   name="CRegnumber"
//                   value={formData.CRegnumber}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <h1>
//                 Company Address
//               </h1>
//               <label className="block mb-2 font-semibold">
//                 Address Line 1
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="companyaddress1"
//                   value={formData.companyaddress1}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 Address Line 2
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="companyaddress2"
//                   value={formData.companyaddress2}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 City
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="companycity"
//                   value={formData.companycity}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>
//               <label className="block mb-2 font-semibold">
//                 Zip Code
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="zipcode"
//                   value={formData.zipcode}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>

//               <label className="block mb-2 font-semibold">
//                 Tender Name
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="tendername"
//                   value={formData.tendername}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>

//               <label className="block mb-2 font-semibold">
//                 Country
//                 <span className="text-red-700 relative top-0 right-0">*</span>
//                 <input
//                   required
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

//                 />
//               </label>

//               <div>
//                 <p className="font-bold">Upload the following documents :</p>
//                 <ul>
//                   <li>CIN</li>
//                   <li>GST</li>
//                   <li>PAN</li>
//                 </ul>
//               </div>
//               <FileUpload />
//               <Link to="/jointventure2">
//                 <button
//                   type="button"
//                   className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
//                 >
//                   Next
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div >
//       <Footer />
//     </>
//   )
// };






import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JointVenture1 from './JointVenture1';
import JointVenture2 from './JointVenture2';
import JointVenture3 from './JointVenture3';

const JointVenture = () => {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <JointVenture1 />;
      case 2:
        return <JointVenture2 />;
      case 3:
        return <JointVenture3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Render the current step */}
      {renderStep()}

      {/* Add navigation buttons */}
      {currentStep > 1 && (
        <button onClick={goToPreviousStep}>Previous</button>
      )}
      {currentStep < 3 && (
        <button onClick={goToNextStep}>Next</button>
      )}
      {currentStep === 3 && (
        <button onClick={() => history.push('/jointventure')}>
          Submit
        </button>
      )}
    </div>
  );
};

export default JointVenture;
