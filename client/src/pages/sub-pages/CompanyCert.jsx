import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CompanyCert = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [cname, setCname] = useState("");
    const [cprofile, setCprofile] = useState("");
    const [CINnum, setCINnum] = useState("");
    const [GSTnum, setGSTnum] = useState("");
    const [PANnum, setPANnum] = useState("");
    const [workingfield, setWorkingfield] = useState("");
    const [companywebsite, setCompanywebsite] = useState("");
    const [contractno, setContractno] = useState("");
    const [contractpno, setContractpno] = useState("");
    const [descriptionbox, setDescriptionbox] = useState("");
    const [registration, setRegistration] = useState("");
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendDataToAPI();
        setName("");
        setCompany("");
        setMobile("");
        setEmail("");
        setRegistration("");
        setCname("");
        setCprofile("");
        setCINnum("");
        setGSTnum("");
        setPANnum("");
        setWorkingfield("");
        setCompanywebsite("");
        setContractno("");
        setContractpno("");
        setDescriptionbox("");
    };

    const sendDataToAPI = () => {
        const formData = {
            name,
            company,
            mobile,
            email,
            regno: registration
        };

        axios
            .post("http://localhost:5000/apiTender/services/cert/certification", formData)
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
                        <img
                            src={`${import.meta.env.BASE_URL}illustartion/cert.jpg`}
                            className="w-4/5 md:w-1/2"
                            alt="Contact illustration"
                        />
                        <form
                            onSubmit={handleFormSubmit}
                            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
                        >
                            <h1 className="text-3xl font-bold text-center mb-4">
                                Company
                            </h1>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="cname" className="flex items-center">
                                        Company Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cname"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={cname}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="cprofile" className="flex items-center">
                                        Company Profile
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cprofile"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={cprofile}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="CINnum" className="flex items-center">
                                        CIN / Registration No.
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="CINnum"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={CINnum}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="workingfield" className="flex items-center">
                                        Working Field
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="workingfield"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={workingfield}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="GSTnum" className="flex items-center">
                                        GST Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="GSTnum"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={GSTnum}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="PANnum" className="flex items-center">
                                        PAN Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="PANnum"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={PANnum}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="companywebsite" className="flex items-center">
                                        Website URL
                                    </label>
                                    <input
                                        required
                                        type="URL"
                                        id="companywebsite"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={companywebsite}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label className="block mb-2">
                                        Select License
                                        <select required
                                            name="country"
                                            // value={formData.country}
                                            // onChange={handleChange}
                                            className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        >
                                            {/* {locations.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))} */}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="email" className="flex items-center">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={email}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="contractno" className="flex items-center">
                                        Contract Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="contractno"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={contractno}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* dropdown for Request license */}
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="contractpno" className="flex items-center">
                                        Contract P No.
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="contractpno"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={contractpno}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="descriptionbox" className="flex items-center">
                                        Description Box
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="descriptionbox"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={descriptionbox}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
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
                                <button
                                    type="submit"
                                    className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                                >
                                    Submit
                                </button>
                            </div>
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

export default CompanyCert;
