import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { locations } from "../../constants/countriesData"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import FileUpload from "../file-uploading/FileUpload";

const Secondpage = ({ formData, handleChange, previousPage }) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Employer Space</h2>
            <p className="text-red-700 font-thin font-serif text-sm">
                Fields marked with an asterisk (*) are mandatory.
            </p>
            <div className=" grid grid-cols-2 gap-4 ">
                <label className="block mb-2 font-semibold">
                    Email
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter Email"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    ZIP Code
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="number"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter ZIP Code"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    Past Salary
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="number"
                        name="pastSalary"
                        value={formData.pastSalary}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter Salary"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    Expected Salary
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="number"
                        name="expactedSalary"
                        value={formData.expactedSalary}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter Salary"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    Hobbies
                    <input
                        type="text"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter Hobbies"
                    />
                </label>
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
                        placeholder="Enter GST"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    PAN Number
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter PAN"
                    />
                </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <label className="block mb-2 font-semibold">
                    Upload Resume
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input type="file" name="resume" accept=".pdf" required />
                </label>
                <label className="block mb-2 font-semibold">
                    Upload Profile Photo
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input type="file" name="profilePhoto" accept=".pdf" required />
                </label>
                <label className="block mb-2 font-semibold">
                    Upload Aadhar
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input type="file" name="aadhar" accept=".pdf" required />
                </label>
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

const Employer = () => {
    const [formData, setFormData] = useState({
        name: "",
        fathername: "",
        aadhar: "",
        tenMark: "",
        twelveMark: "",
        jobpost: "",
        jobexp: "",
        address: "",
        company: "",
        city: "",
        state: "",
        country: "",
        mobile: "",
        email: "",
        zip: "",
        pastSalary: "",
        expactedSalary: "",
        hobbies: "",
        gst: "",
        pan: "",
    });

    const clearInputs = () => {
        setFormData({
            name: "",
            fathername: "",
            aadhar: "",
            tenMark: "",
            twelveMark: "",
            jobpost: "",
            jobexp: "",
            address: "",
            company: "",
            city: "",
            state: "",
            country: "",
            mobile: "",
            email: "",
            zip: "",
            pastSalary: "",
            expactedSalary: "",
            hobbies: "",
            gst: "",
            pan: "",
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        var requestBody = new FormData();

        // Append form data to the request body
        Object.entries(formData).forEach(([key, value]) => {
            requestBody.append(key, value);
        });
        const token = localStorage.getItem('token');
        console.log(requestBody.get('gst'))
        fetch('http://localhost:5000/apiTender/services/employer/submit-form', {
            method: 'POST',
            headers: {
                auth: token,
            },
            body: requestBody,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                // alert('Submitted');
                // clearInputs();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops something went wrong!!!');
                // clearInputs();
            });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const nextPage = () => {
        setCurrentPage(2);
    };

    const previousPage = () => {
        setCurrentPage(1);
    };


    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
                {currentPage === 1 && (
                    <form onSubmit={handleSubmit} encType="multipart/form-data" >
                        {/* Global Section */}
                        <h2 className="text-2xl font-bold mb-4 text-center ">Employer Space</h2>
                        <p className="text-red-700 font-thin font-serif text-sm">
                            Fields marked with an asterisk (*) are mandatory.
                        </p>
                        <div className="p-2 rounded-lg">
                            <label className="block mb-2 font-semibold relative">
                                Name
                                <span className="text-red-700 relative top-0 right-0">*</span>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    placeholder="Enter Your Name"
                                />
                            </label>
                            <label className="block mb-2 font-semibold relative">
                                Father's Name
                                <span className="text-red-700 relative top-0 right-0">*</span>
                                <input
                                    required
                                    type="text"
                                    name="fathername"
                                    value={formData.fathername}
                                    onChange={handleChange}
                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    placeholder="Enter Name"
                                />
                            </label>
                            <label className="block mb-2 font-semibold relative">
                                Aadhar Number
                                <span className="text-red-700 relative top-0 right-0">*</span>
                                <input
                                    required
                                    type="number"
                                    name="aadhar"
                                    value={formData.aadhar}
                                    onChange={handleChange}
                                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="Enter Aadhar Number"
                                    maxLength={16}
                                    minLength={16}
                                />
                            </label>
                            <div className=" grid grid-cols-2 gap-4 ">
                                <div className="relative">
                                    <label className="block mb-2 font-semibold">
                                        10th Percentage(%)
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="number"
                                            name="tenMark"
                                            value={formData.tenMark}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="Enter Percentage"
                                            maxLength={2}
                                            minLength={2}
                                        />
                                    </label>
                                </div>


                                <label className="block mb-2 font-semibold">
                                    12th Percentage(%)
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="number"
                                        name="twelveMark"
                                        value={formData.twelveMark}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        placeholder="Enter Percentage"
                                        maxLength={2}
                                        minLength={2}
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Jop Post
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="jobpost"
                                        value={formData.jobpost}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Post"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Jop Experience
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="jobexp"
                                        value={formData.jobexp}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Experience"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Company
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Company"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
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
                                <label className="block mb-2 font-semibold">
                                    City
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter City"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    State
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter State"
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
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
                                <label className="block mb-2 font-semibold">
                                    Mobile Number
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Mobile Number"
                                    />
                                </label>
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

                {currentPage === 2 && (
                    <form onSubmit={handleSubmit}>
                        <Secondpage
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            previousPage={previousPage}
                        />
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Employer;
