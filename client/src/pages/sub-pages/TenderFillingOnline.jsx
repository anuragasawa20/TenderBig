import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { locations } from "../../constants/countriesData"
import Footer from "../../components/Footer";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import uploadFileToS3 from "../../pages/file-uploading/FileUpload";
import { ProgressBar, Step } from 'react-step-progress-bar';

const uploadMultipleFilesToS3 = async (files) => {
    const uploadPromises = files.map(async (file) => {
        const result = await uploadFileToS3(file);
        return result;
    });

    const results = await Promise.all(uploadPromises);
    return results;
};

const SecondPage = ({ formData, handleChange, previousPage }) => {

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Online Tender</h2>
            <p className="text-red-700 font-thin font-serif text-sm">
                Fields marked with an asterisk (*) are mandatory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* otherInformation Section */}
                <div className="p-2 rounded-lg mt-2">
                    <h2 className="text-2xl font-bold mb-4 ">Individual Info</h2>
                    <label className="block mb-2 font-semibold relative">
                        Director Name
                        <input
                            type="text"
                            name="directorname"
                            value={formData.directorname}
                            onChange={handleChange}
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Father Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <label className="block mb-2 font-semibold">
                            DOB
                            <span className="text-red-700 relative top-0 right-0">*</span>
                            <input required
                                type="date"
                                name="iDOB"
                                value={formData.iDOB}
                                onChange={handleChange}
                                className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />
                        </label>

                    </div>
                    <label className="block mb-4 font-semibold">
                        Aadhar Card
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="number"
                            name="paadhar"
                            value={formData.paadhar}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <label className="block mb-4 font-semibold">
                        PAN card
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="ppan"
                            value={formData.ppan}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Contact Number
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input
                            required
                            type="number"
                            name="pmobile"
                            value={formData.pmobile}
                            onChange={handleChange}
                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"

                        />
                    </label>
                </div>

                {/* purchaserDetail Section */}
                <div className="p-2 rounded-lg mt-2">
                    <h2 className="text-2xl font-bold mb-4">Purchaser Detail</h2>
                    <label className="block mb-2 font-semibold">
                        Email
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="email"
                            name="pemail"
                            value={formData.pemail}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <label className="block mb-2 font-semibold basis-1/2 mx-1">
                        Account Holder Name
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="text"
                            name="accholdername"
                            value={formData.accholdername}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Account Number
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input required
                            type="number"
                            name="accnumber"
                            value={formData.accnumber}
                            onChange={handleChange}
                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        />
                    </label>
                    <div className="flex">
                        <label className="block mb-2 font-semibold basis-1/2 mx-1">
                            IFSC code
                            <span className="text-red-700 relative top-0 right-0">*</span>
                            <input required
                                type="text"
                                name="ifscCode"
                                value={formData.ifscCode}
                                onChange={handleChange}
                                className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />
                        </label>
                        <label className="block mb-2 font-semibold basis-1/2 mx-1">
                            Branch Number
                            <span className="text-red-700 relative top-0 right-0">*</span>
                            <input required
                                type="number"
                                name="branchnum"
                                value={formData.branchnum}
                                onChange={handleChange}
                                className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />
                        </label>
                    </div>


                    <label className="block mb-2 font-semibold">
                        Upload Photo
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="photo" accept=".png,.jpg,.jpeg" required />
                    </label>
                    <label className="block mb-2 font-semibold">
                        Upload Aadhar
                        <span className="text-red-700 relative top-0 right-0">*</span>
                        <input type="file" name="aadhar" accept=".pdf" required />
                    </label>
                </div>
            </div>

            <div className="center flex flex-col items-center">
                <div className="flex justify-between w-full">

                    <div className="w-1/4">
                        <button
                            type="button"
                            onClick={previousPage}
                            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 mt-8 rounded align-center"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>

                    <div className="w-3/4">

                        <button
                            type="submit"
                            className="bg-red-700 mx-6 text-white px-4 py-2 mt-8 rounded-lg font-semibold hover:bg-red-800 w-2/4"
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

const OnlineTenderForm = () => {
    const [formData, setFormData] = useState({
        cname: "",
        cPANnum: "",
        cGSTnum: "",
        des: "",
        vendor: "",
        mobile: "",
        accholdername: "",
        ifscCode: "",
        regno: "",
        knumber: "",
        companyaddress1: "",
        companyaddress2: "",
        companycity: "",
        companystate: "",
        branchnum: "",
        ITRone: "",
        ITRtwo: "",
        ITRthree: "",
        turnover: "",
        workexp: "",
        noofworkers: "",
        directorname: "",
        fname: "",
        iDOB: "",
        pemail: "",
        paadhar: "",
        ppan: "",
        pmobile: "",
        wmobile: "",
        website: "",
        accnumber: "",
        email: "",
        gemreg: "",
        refno: "",
        requestLicense: "",
    });

    const clearInputs = () => {
        setFormData({
            cname: "",
            cPANnum: "",
            cGSTnum: "",
            des: "",
            vendor: "",
            mobile: "",
            accholdername: "",
            ifscCode: "",
            regno: "",
            knumber: "",
            companyaddress1: "",
            companyaddress2: "",
            companycity: "",
            companystate: "",
            branchnum: "",
            ITRone: "",
            ITRtwo: "",
            ITRthree: "",
            turnover: "",
            workexp: "",
            noofworkers: "",
            directorname: "",
            fname: "",
            iDOB: "",
            pemail: "",
            paadhar: "",
            ppan: "",
            pmobile: "",
            wmobile: "",
            website: "",
            accnumber: "",
            email: "",
            gemreg: "",
            refno: "",
            requestLicense: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const token = localStorage.getItem("token");

        var requestBody = formData;

        const biddingDocs = requestBody.biddingDocs;
        const rent = requestBody.rent;
        const work = requestBody.work;
        const tenderDocs = requestBody.tenderDocs;

        const biddingDocsUrls = await uploadMultipleFilesToS3(biddingDocs);
        const rentUrls = await uploadMultipleFilesToS3(rent);
        const workUrls = await uploadMultipleFilesToS3(work);
        const tenderDocsUrls = await uploadMultipleFilesToS3(tenderDocs);

        requestBody.biddingDocs = biddingDocsUrls;
        requestBody.rent = rentUrls;
        requestBody.work = workUrls;
        requestBody.tenderDocs = tenderDocsUrls;

        const response = await axios.post('http://localhost:5000/apiTender/services/tender/online', requestBody);
        if (response.data.success) {
            alert('Submitted');
            clearInputs();
        } else {
            alert('Something went wrong. Try again.');
        }
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;

        const updatedFiles = Array.from(files);
        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedFiles,
        }));
    };

    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => {
        setCurrentPage(1);
    };

    const previousPage = () => {
        setCurrentPage(0);
    };

    
    const stepNames = [
        '0',
        '1',
    ];

    const totalSteps = 2;
    const gaps = totalSteps - 1;
    const progress = Math.round((currentPage / gaps) * 100);

    return (
        <>
            <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">

            <ProgressBar
                    percent={progress}
                    filledBackground="linear-gradient(to right, #E97451, #D22B2B)"
                >
                    {stepNames.map((_, index) => (
                        <Step key={index}>
                            {({ accomplished }) => (
                                <div className={`step ${accomplished ? 'completed' : null}`} />
                            )}
                        </Step>
                    ))}
                </ProgressBar>

                {currentPage === 0 && (
                    <form onSubmit={handleSubmit} className="mt-2">
                        {/* Global Section */}
                        <h2 className="text-2xl font-bold mb-4 text-center ">Online Tender</h2>
                        <p className="text-red-700 font-thin font-serif text-sm">
                            Fields marked with an asterisk (*) are mandatory.
                        </p>
                        <div className="p-2 rounded-lg">
                            <div className="flex">
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Company name
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="cname"
                                        value={formData.cname}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <label className="block mb-2 font-semibold basis-1/2 mx-1">
                                    Registration No.
                                    <input
                                        type="text"
                                        name="regno"
                                        value={formData.regno}
                                        onChange={handleChange}
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                            </div>
                            <div className="flex">
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Company PAN
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="cPANnum"
                                        value={formData.cPANnum}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Company GST
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="cGSTnum"
                                        value={formData.cGSTnum}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                            </div>
                            <div className="flex">
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Contact No.
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Email
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                            </div>
                            <div className="flex">
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    WhatsApp No.
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="number"
                                        name="wmobile"
                                        value={formData.wmobile}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <label className="block mb-2 font-semibold relative basis-1/2 mx-1">
                                    Website URL
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="URL"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className=" p-2 rounded-lg mt-2">
                                <div className="grid grid-cols-2 gap-4">

                                    <label className="block font-semibold">
                                        ITR (Year 1)
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input required
                                            type="number"
                                            name="ITRone"
                                            value={formData.ITRone}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block font-semibold">
                                        ITR (Year 2)
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input required
                                            type="number"
                                            name="ITRtwo"
                                            value={formData.ITRtwo}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block font-semibold">
                                        ITR (Year 3)
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input required
                                            type="number"
                                            name="ITRthree"
                                            value={formData.ITRthree}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block font-semibold">
                                        Vendor Code
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input required
                                            type="text"
                                            name="vendor"
                                            value={formData.vendor}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-1.5 mb-1.5">
                                    <label className="block font-semibold">
                                        Company Turnover
                                        <input
                                            type="number"
                                            name="turnover"
                                            value={formData.turnover}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block font-semibold">
                                        No. of workers
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input required
                                            type="number"
                                            name="noofworkers"
                                            value={formData.noofworkers}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                </div>
                                <div className="flex">
                                    <label className="block mb-2 font-semibold basis-1/2 mx-1">
                                        Work Exp.
                                        <input
                                            type="number"
                                            name="workexp"
                                            value={formData.workexp}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold basis-1/2 mx-1">
                                        Gem Reg No.
                                        <input
                                            type="number"
                                            name="gemreg"
                                            value={formData.gemreg}
                                            onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                </div>
                                <label className="block mb-2 font-semibold">
                                    Address Line 1
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="companyaddress1"
                                        value={formData.companyaddress1}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Address Line 2
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="companyaddress2"
                                        value={formData.companyaddress2}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <div className="flex">
                                    <label className="block mb-2 font-semibold basis-1/2 mx-1">
                                        City
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="companycity"
                                            value={formData.companycity}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold basis-1/2">
                                        State
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="companystate"
                                            value={formData.companystate}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                        />
                                    </label>
                                </div>

                                <label className="block mb-2 font-semibold">
                                    Country
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <select required
                                        name="country"
                                        value={formData.companycountry}
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

                            {/* tenderDetail Section */}
                            <div className="p-2 rounded-lg mt-2">
                                <label className="block mb-2 font-semibold">
                                    Reference No.
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input required
                                        type="number"
                                        name="refno"
                                        value={formData.refno}
                                        onChange={handleChange}
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"

                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Others
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input required
                                        type="description"
                                        name="des"
                                        value={formData.des}
                                        onChange={handleChange}
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    K number
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input required
                                        type="description"
                                        name="knumber"
                                        value={formData.knumber}
                                        onChange={handleChange}
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    />
                                </label>

                                <div className="flex">
                                    <div>
                                        <label className="block mb-2 font-semibold">
                                            Rent Agreements
                                            <span className="text-red-700">*</span>
                                            <input
                                                type="file"
                                                name="rent"
                                                accept=".pdf"
                                                required
                                                onChange={handleFileChange}
                                            />
                                        </label>

                                        <label className="block mb-2 font-semibold">
                                            Old Work Sample
                                            <span className="text-red-700">*</span>
                                            <input
                                                type="file"
                                                name="work"
                                                accept=".pdf"
                                                required
                                                onChange={handleFileChange}
                                            />
                                        </label>

                                        <div className="dropdown my-3 font-semibold">
                                            Bidding Documents
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                multiple
                                                name="biddingDocs"
                                                onChange={handleFileChange}
                                            />
                                        </div>

                                        <div className="dropdown font-semibold">
                                            Tender Docs with Stamps
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                multiple
                                                name="tenderDocs"
                                                onChange={handleFileChange}
                                            />
                                        </div>

                                        <div className="dropdown my-3 font-semibold">
                                            Required Licenses
                                            <select
                                                name="requestLicense"
                                                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                                required
                                                value={formData.requestLicense}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select License</option>
                                                <option value="Licence 1">Option 1</option>
                                                <option value="Licence 2">Option 2</option>
                                                <option value="Licence 3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={nextPage}
                            className="bg-red-700 text-white px-4 py-2 mt-8 rounded hover:bg-red-800"
                        >
                            Next
                        </button>
                    </form>
                )}

                {currentPage === 1 && (
                    <form onSubmit={handleSubmit}>
                        <SecondPage
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            previousPage={previousPage}
                        />
                    </form>
                )}
            </div>
        </>
    );
};

export default OnlineTenderForm;
