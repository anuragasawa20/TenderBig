import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FileUpload from "../file-uploading/FileUpload";

const Employer = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [gst, setGST] = useState("");
    const [fname, setFname] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [tenmarks, setTenmarks] = useState("");
    const [twelvemarks, setTwelvemarks] = useState("");
    const [jobpost, setJobpost] = useState("");
    const [jobexp, setJobexp] = useState("");
    const [addressline1, setAddressline1] = useState("");
    const [addressline2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pastsalary, setPastSalary] = useState("");
    const [expectedsalary, setExpectedSalary] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [pan, setPAN] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendDataToAPI();
        setName("");
        setCompany("");
        setMobile("");
        setEmail("");
        setGST("");
        setPAN("");
        setFname("");
        setAadhar("");
        setTenmarks("");
        setTwelvemarks("");
        setJobpost("");
        setJobexp("");
        setAddressline1("");
        setAddressLine2("");
        setCity("");
        setState("");
        setZipcode("");
        setCountry("");
        setPastSalary("");
        setExpectedSalary("");
        setHobbies("");
    };

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

    const sendDataToAPI = () => {
        const formData = {
            name,
            company,
            mobile,
            email,
            gst,
            pan,
            fname,
            aadhar,
            tenmarks,
            twelvemarks,
            jobexp,
            jobpost,
            addressline1,
            addressline2,
            city,
            state,
            zipcode,
            country,
            pastsalary,
            expectedsalary,
            hobbies,
        };

        axios
            .post("http://localhost:5000/apiTender/services/employer/submit-form", formData)
            .then((response) => {
                console.log("Form data sent successfully:", response.data);
                alert("We will contact you soon!!!");
                setIsVisible(false);
            })
            .catch((error) => {
                console.error("Error sending form data:", error);
                alert("Oops something went wrong!!!");
            });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-8 md:max-w-7xl">
                <div className="space-y-8">
                    <div className="flex items-center justify-center flex-col md:flex-row">
                        {/* <img
                            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1687066253~exp=1687066853~hmac=42f23f007ad72bd2ca440a69684ce6508082c1182b3c54179addffc4163960af"
                            className="w-4/5 md:w-1/2"
                            alt="Contact illustration"
                        /> */}
                        <form
                            onSubmit={handleFormSubmit}
                            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
                        >
                            <h1 className="text-3xl font-bold text-center mb-4">
                                Employer Space
                            </h1>
                            <div className="mb-4">
                                <label htmlFor="name" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fname" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Father Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="fname"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={fname}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="aadhar" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    16-Digit aadhar Number
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="aadhar"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={aadhar}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex">
                                <div className="mb- basis-1/2 mx-1">
                                    <label htmlFor="tenmarks" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        10th marks(%)
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="tenmarks"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={tenmarks}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="twelvemarks" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        12th marks(%)
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="twelvemarks"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={twelvemarks}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company" className="flex items-center">
                                    <RiBuilding2Line className="mr-2" />
                                    Company Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="company"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="jobpost" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Job Post
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="jobpost"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={jobpost}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="jobexp" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Job Experience(yrs)
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="jobexp"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={jobexp}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="addressline1" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Address Line 1
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="addressline1"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={addressline1}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="addressline2" className="flex items-center">
                                    <AiOutlineUser className="mr-2" />
                                    Address Line 2
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="addressline2"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={addressline2}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="city" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        City
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="city"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={city}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="zipcode" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Zip Code
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="zipcode"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={zipcode}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="state" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        State
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="state"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={state}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="country" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Country
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="country"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={country}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="pastsalary" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Past Salary
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="pastsalary"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={pastsalary}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="expectedsalary" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Expected Salary
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="expectedsalary"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={expectedsalary}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="hobbies" className="flex items-center">
                                    <RiBuilding2Line className="mr-2" />
                                    Hobbies
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="hobbies"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={hobbies}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="flex items-center">
                                    <AiOutlinePhone className="mr-2" />
                                    Mobile Number
                                </label>
                                <input
                                    required
                                    type="number"
                                    id="mobile"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="flex items-center">
                                    <AiOutlineMail className="mr-2" />
                                    Email Address
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="GST" className="flex items-center">
                                    <AiOutlineMail className="mr-2" />
                                    GST
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="GST"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={gst}
                                    onChange={(e) => setGST(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="PAN" className="flex items-center">
                                    <AiOutlineMail className="mr-2" />
                                    PAN Number
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="PAN"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={pan}
                                    onChange={(e) => setPAN(e.target.value)}
                                />
                            </div>

                            <p className="font-bold mx-2=1">Upload Documents (CV, photo, aadhar)</p>
                            <FileUpload />

                            <button
                                type="submit"
                                className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                            >
                                Submit
                            </button>
                        </form>
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

export default Employer;
