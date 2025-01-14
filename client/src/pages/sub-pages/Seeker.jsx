import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import uploadFileToS3 from "../file-uploading/FileUpload";
import { ProgressBar, Step } from 'react-step-progress-bar';
import { Country, State, City } from 'country-state-city';
import payment from "../../components/payment"
import axios from "axios";

const Secondpage = ({ formData, handleChange, previousPage }) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Seeker Space</h2>
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
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter Salary"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    Hobbies
                    <input
                        required
                        type="text"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter Hobbies"
                    />
                </label>
                <label className="block mb-2 font-semibold">
                    PAN Number
                    <span className="text-red-700 relative top-0 right-0">*</span>
                    <input
                        required
                        type="number"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        placeholder="Enter PAN"
                    />
                </label>
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label htmlFor="file-input" className="block mb-2 font-semibold">
                        Upload Resume
                        <span className="text-red-700 relative top-0 right-0">*</span>
                    </label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        required
                        id="resume"
                        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="file-input" className="block mb-2 font-semibold">
                        Upload Profile Photo
                        <span className="text-red-700 relative top-0 right-0">*</span>
                    </label>
                    <input
                        type="file"
                        name="profilePhoto"
                        accept=".jpg,.jpeg,.png"
                        required
                        id="profilePhoto"
                        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="file-input" className="block mb-2 font-semibold">
                        Upload Aadhar
                        <span className="text-red-700 relative top-0 right-0">*</span>
                    </label>
                    <input
                        type="text"
                        name="aadhar"
                        required
                        pattern="\d{16}"
                        title="Aadhar number must be 16 digits"
                        id="aadhar"
                        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
                    />
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

const Seeker = () => {
    const [isFormValid, setIsFormValid] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        fathername: "",
        aadhar: "",
        tenMarkType: "",
        tenMark: "",
        twelveMarkType: "",
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
        expectedSalary: "",
        hobbies: "",
        pan: "",
        resumeUrl: "",
        photoUrl: "",
        aadharUrl: ""
    });

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
            expectedSalary: "",
            hobbies: "",
            pan: "",
            resumeUrl: "",
            photoUrl: "",
            aadharUrl: ""
        });
        setCurrentPage(0);
    }

    const validateForm = () => {
        const requiredFields = ["name", "fathername", "aadhar", "tenMark", "twelveMark", "jobpost", "jobexp", "address", "company", "city", "state", "country", "mobile"];
        for (const field of requiredFields) {
            if (!formData[field]) {
                return false;
            }
        }
        return true;
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        setIsFormValid(validateForm());
    };


    const getAmount = async () => {
        const { data: { price } } = await axios.get("http://localhost:5000/apiTender/formprice/Seeker/price");
        return price;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const price = await getAmount();
        const receipt = "Seeker Form";
        payment(price, receipt)
            .then(async success => {
                console.log('Payment success:', success);
                const resume = e.target.resume.files[0];
                const profilePhoto = e.target.profilePhoto.files[0];
                const aadhar = e.target.aadhar.files[0];

                const resumeUrl = await uploadFileToS3(resume);
                const photoUrl = await uploadFileToS3(profilePhoto);
                const aadharUrl = await uploadFileToS3(aadhar);

                const requestBody = formData;
                requestBody.resumeUrl = resumeUrl;
                requestBody.photoUrl = photoUrl;
                requestBody.aadharUrl = aadharUrl;
                StoreAtDB(requestBody);
            })
            .catch(error => {
                console.error('Payment error:', error);
                // Handle the error if the payment fails
            });
    }

    const StoreAtDB = (requestBody) => {

        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/apiTender/services/seeker/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                auth: token
            },
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    alert('Submitted');
                    clearInputs();
                } else {
                    alert('Something went wrong. Try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops, something went wrong!!!');
            });
    };

    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => {
        setCurrentPage(1);
    };

    const previousPage = () => {
        setCurrentPage(0);
    };

    const totalSteps = 2;
    const gaps = totalSteps - 1;
    const progress = Math.round((currentPage / gaps) * 100);

    const stepNames = [
        '0',
        '1',
    ];

    return (
        <>
            <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 border-2 border-gray-900 rounded-md">
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
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-1" >
                        {/* Global Section */}
                        <h2 className="text-2xl font-bold mb-4 text-center ">Seeker Space</h2>
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
                                Father Name
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
                                        10th Score
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                    </label>
                                    <div className="flex">
                                        <select
                                            required
                                            name="tenMarkType"
                                            value={formData.tenMarkType}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 w-24 text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        >
                                            <option value="fixed">Fixed</option>
                                            <option value="percentage">Percentage</option>
                                        </select>
                                        <input
                                            required
                                            type="number"
                                            name="tenMark"
                                            value={formData.tenMark}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 flex-grow text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder={
                                                formData.tenMarkType === "fixed"
                                                    ? "Enter Fixed Score"
                                                    : "Enter Percentage"
                                            }
                                            maxLength={2}
                                            minLength={2}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block mb-2 font-semibold">
                                        12th Score
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                    </label>
                                    <div className="flex">
                                        <select
                                            required
                                            name="twelveMarkType"
                                            value={formData.twelveMarkType}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 w-24 text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        >
                                            <option value="fixed">Fixed</option>
                                            <option value="percentage">Percentage</option>
                                        </select>
                                        <input
                                            required
                                            type="number"
                                            name="twelveMark"
                                            value={formData.twelveMark}
                                            onChange={handleChange}
                                            className="border rounded-sm px-3 py-2 mt-1 flex-grow text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder={
                                                formData.tenMarkType === "fixed"
                                                    ? "Enter Fixed Score"
                                                    : "Enter Percentage"
                                            }
                                            maxLength={2}
                                            minLength={2}
                                        />
                                    </div>
                                </div>

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
                                        type="number"
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
                                <label className="block mb-2 font-semibold">
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
                                <label className="block mb-2 font-semibold">
                                    Mobile Number
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="number"
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
                            disabled={!isFormValid} // Disable the button if the form is not valid
                        >
                            Next
                        </button>


                    </form>
                )}

                {currentPage === 1 && (
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
        </>
    );
};

export default Seeker;
