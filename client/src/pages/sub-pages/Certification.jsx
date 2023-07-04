import {AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import {RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function CompanyForm({ onSubmit }) {
    const [companyName, setCompanyName] = useState('');
    const [companyProfile, setCompanyProfile] = useState('');
    const [cinReg, setCinReg] = useState('');
    const [workingField, setWorkingField] = useState('');
    const [gst, setGst] = useState('');
    const [pan, setPan] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [requestLicense, setRequestLicense] = useState('');
    const [selectedPositions, setSelectedPositions] = useState('');
    const [contractPName, setContractPName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            companyName,
            companyProfile,
            cinReg,
            workingField,
            gst,
            pan,
            website,
            email,
            contactNumber,
            requestLicense,
            selectedPositions,
            contractPName,
        };

        var requestBody = new FormData();

        // Append form data to the request body
        Object.entries(data).forEach(([key, value]) => {
            requestBody.append(key, value);
        });
        console.log(requestBody.get("cinReg"))
        requestBody.append("doc", event.target.doc.files[0]);

        onSubmit(requestBody);
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" p-2 rounded-lg">
                    <label className="block font-semibold">
                        Company Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="companyName"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Enter Company Name"
                        />
                    </label>
                    <label className="block font-semibold mt-2">
                        Company Profile
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="companyProfile"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={companyProfile} onChange={(e) => setCompanyProfile(e.target.value)}
                            placeholder="Enter Company Profile"
                        />
                    </label>
                    <label className="block font-semibold mt-2">
                        CIN/REG
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="cinReg"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={cinReg} onChange={(e) => setCinReg(e.target.value)}
                            placeholder="Enter CIN/REG"
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        Working Field
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="workingField"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={workingField} onChange={(e) => setWorkingField(e.target.value)}
                            placeholder="Enter Working Field"
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        GST
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="gst"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={gst} onChange={(e) => setGst(e.target.value)}
                            placeholder="Enter GST"
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        PAN
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="pan"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={pan} onChange={(e) => setPan(e.target.value)}
                            placeholder="Enter PAN"
                        />
                    </label>
                </div>

                <div className="p-2 rounded-lg">
                    <label className="block mb-2 font-semibold">
                        Website
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="website"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={website} onChange={(e) => setWebsite(e.target.value)}
                            placeholder="Enter Website"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Email
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="email"
                            name="email"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Contact Number
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            id="contactNumber"
                            name="contactNumber"
                            value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                            placeholder="Enter Contact Number"
                            required
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Request License
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <select
                            name="requestLicense"
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={requestLicense}
                            onChange={(e) => setRequestLicense(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="License1">License 1</option>
                            <option value="License2">License 2</option>
                            <option value="License3">License 3</option>
                        </select>
                    </label>
                    <label className="block mb-2 font-semibold">
                        Selected Positions
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="selectedPositions"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={selectedPositions} onChange={(e) => setSelectedPositions(e.target.value)}
                            placeholder="Enter Position"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Contract Person Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="contractPName"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={contractPName} onChange={(e) => setContractPName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </label>
                </div>
            </div>
            <label className="block mb-2 font-semibold">
                Upload Document
                <span className="text-red-700 relative top-0 right-0">*</span>
                <hr />
                <input
                    type="file"
                    name="doc"
                    accept=".pdf"
                    required
                />
            </label>

            <label className="block mb-2 font-semibold">
                GST
                <span className="text-red-700 relative top-0 right-0">* - </span>
                <input type="file" name="resume" accept=".pdf" required />
            </label>

            <label className="block mb-2 font-semibold">
                PAN
                <span className="text-red-700 relative top-0 right-0">* - </span>
                <input type="file" name="resume" accept=".pdf" required />
            </label>
            <div className="flex items-center justify-between mb-4">
                <button
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

function IndividualForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [dob, setDob] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [workingField, setWorkingField] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [requestLicense, setRequestLicense] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Prepare the data object with form values
        const data = {
            name,
            fatherName,
            dob,
            aadharNumber,
            panNumber,
            workingField,
            address,
            mobileNumber,
            email,
            requestLicense,
        };
        // Call the individual form submit handler from the parent component
        var requestBody = new FormData();

        // Append form data to the request body
        Object.entries(data).forEach(([key, value]) => {
            requestBody.append(key, value);
        });
        requestBody.append("doc", event.target.doc.files[0]);

        onSubmit(requestBody);
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" p-2 rounded-lg">
                    <label className="block font-semibold">
                        Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="name"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none" value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </label>
                    <label className="block font-semibold mt-2">
                        Father's Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="fatherName"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={fatherName} onChange={(e) => setFatherName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </label>
                    <label className="block font-semibold mt-2">
                        DOB
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="date"
                            name="dob"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={dob} onChange={(e) => setDob(e.target.value)}
                            placeholder="Enter DOB"
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        Working Field
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="workingField"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={workingField} onChange={(e) => setWorkingField(e.target.value)}
                            placeholder="Enter Working Field"
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        Address
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="address"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={address} onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter Address"
                        />
                    </label>
                </div>

                <div className="p-2 rounded-lg">
                    <label className="block mb-2 font-semibold">
                        Email
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="email"
                            name="email"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Contact Number
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}
                            placeholder="Enter Contact Number"
                            required
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Aadhar Number
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            id="aadharNumber"
                            name="aadharNumber"
                            value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)}
                            placeholder="Enter Aadhar Number"
                            required
                        />
                    </label>
                    <label className="block mb-2 font-semibold mt-2">
                        PAN
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            type="text"
                            name="panNumber"
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={panNumber} onChange={(e) => setPanNumber(e.target.value)}
                            placeholder="Enter PAN"
                        />
                    </label>

                    <label className="block mb-2 font-semibold">
                        Request License
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <select
                            name="requestLicense"
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            value={requestLicense}
                            onChange={(e) => setRequestLicense(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="License1">License 1</option>
                            <option value="License2">License 2</option>
                            <option value="License3">License 3</option>
                        </select>
                    </label>

                </div>
            </div>

            <label className="block mb-2 font-semibold">
                        Upload Photo
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="resume" accept=".pdf" required />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Upload Photos
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="aadhar" accept=".pdf" required />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Upload PAN
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="aadhar" accept=".pdf" required />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Upload Digital Signature
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="aadhar" accept=".pdf" required />
                    </label>
            <div className="flex items-center justify-between mb-4">
                <button
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

const Certification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const [selectedOption, setSelectedOption] = useState('company');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCompanyFormSubmit = (data) => {

        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/apiTender/services/ccert/certification', {
            method: 'POST',
            headers: {
                auth: token,
            },
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success == true) {
                    alert('Submitted');
                    window.location.href = '/certification';
                }
                else {
                    alert('Something went wrong.Try Again.');
                    window.location.href = '/certification';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops something went wrong!!!');
            });
    };

    const handleIndividualFormSubmit = (data) => {

        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/apiTender/services/icert/certification', {
            method: 'POST',
            headers: {
                auth: token,
            },
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success == true) {
                    alert('Submitted');
                    window.location.href = '/certification';
                }
                else {
                    alert('Something went wrong.Try Again.');
                    window.location.href = '/certification';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops something went wrong!!!');
            });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-8 md:max-w-7xl">
                <div className="space-y-8">
                    <div className="mx-auto mt-6 px-4 py-8 shadow-2xl p-6 bg-white rounded-lg flex flex-col md:flex-row">

                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <img
                                src={`${import.meta.env.BASE_URL}illustartion/cert.jpg`}
                                alt="Illustration"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4 text-center">Certification</h2>

                            <div className="flex">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <input
                                            type="radio"
                                            id="company"
                                            name="option"
                                            value="company"
                                            checked={selectedOption === 'company'}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="company" className="ml-2 mr-4">Company</label>

                                        <input
                                            type="radio"
                                            id="individual"
                                            name="option"
                                            value="individual"
                                            checked={selectedOption === 'individual'}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="individual" className="ml-2">Individual</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-full">
                                    {/* Render the selected form */}
                                    {selectedOption === 'company' && <CompanyForm onSubmit={handleCompanyFormSubmit} />}
                                    {selectedOption === 'individual' && <IndividualForm onSubmit={handleIndividualFormSubmit} />}
                                </div>
                            </div>
                        </div>

                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AiOutlinePhone className="text-red-700 text-3xl mb-2" />
                            <span className="font-semibold">Phone</span>
                            <p className="mt-2">Sales: 8875515555 </p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RiMapPin2Line className="text-red-700 text-3xl mb-2" />
                            <span className="font-semibold">Address</span>
                            <p className="mt-2">
                                S-3, Vinayak Jaipur, fwefsdfrgh, loream dndnvnuidnvuwzxm,njd n
                                sjvbvsbdj vvjhbwejk as, 300000
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AiOutlineMail className="text-red-700 text-3xl mb-2" />
                            <span className="font-semibold">E-Mail</span>
                            <p className="mt-2">Info@tender.com</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Certification;
