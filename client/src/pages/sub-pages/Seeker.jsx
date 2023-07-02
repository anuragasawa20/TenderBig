import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Seeker = () => {

    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [cwork, setCwork] = useState("");
    const [jobpost, setJobpost] = useState("");
    const [experience, setExperience] = useState("");
    const [salary, setSalary] = useState("");
    const [curl, setCurl] = useState("");
    const [companyprofile, setCompanyprofile] = useState("");
    const [contactpnumber, setContactpnumber] = useState("");
    const [regno, setRegno] = useState("");
    const [GST, setGST] = useState("");
    const [PAN, setPAN] = useState("");
    const [addressline1, setAddressline1] = useState("");
    const [addressline2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [officetiming, setOfficetiming] = useState("");
    const [holidays, setHolidays] = useState("");
    const [workingdays, setWorkingdays] = useState("");
    const [seekerpost, setSeekerpost] = useState("");
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
        setCompany("");
        setMobile("");
        setEmail("");
        setCwork("");
        setJobpost("");
        setExperience("");
        setSalary("");
        setCurl("");
        setCompanyprofile("");
        setContactpnumber("");
        setRegno("");
        setGST("");
        setPAN("");
        setAddressline1("");
        setAddressLine2("");
        setCity("");
        setZipcode("");
        setState("");
        setCountry("");
        setOfficetiming("");
        setHolidays("");
        setWorkingdays("");
        setSeekerpost("");
    };

    const sendDataToAPI = () => {
        const formData = {
            company,
            mobile,
            email,
            cwork,
            jobpost,
            experience,
            salary,
            curl,
            companyprofile,
            contactpnumber,
            regno,
            GST,
            PAN,
            addressline1,
            addressline2,
            city,
            zipcode,
            state,
            country,
            officetiming,
            holidays,
            workingdays,
            seekerpost
        };

        axios
            .post("http://localhost:5000/apiTender/services/seeker/submit-form", formData)
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
                        <form
                            onSubmit={handleFormSubmit}
                            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
                        >
                            <h1 className="text-3xl font-bold text-center mb-4">
                                Seeker Space
                            </h1>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
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
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="mobile" className="flex items-center">
                                        <AiOutlinePhone className="mr-2" />
                                        Contact Number
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
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
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
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="cwork" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Company Work
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cwork"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={cwork}
                                        onChange={(e) => setCwork(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="jobpost" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Job Post
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="jobpost"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={jobpost}
                                        onChange={(e) => setJobpost(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="experience" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Experience
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="experience"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="salary" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Salary
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="salary"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="curl" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Website
                                    </label>
                                    <input
                                        required
                                        type="URL"
                                        id="curl"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={curl}
                                        onChange={(e) => setCurl(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="companyprofile" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Profile
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="companyprofile"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={companyprofile}
                                        onChange={(e) => setCompanyprofile(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="contactpnumber" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Contact P Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="contactpnumber"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={contactpnumber}
                                        onChange={(e) => setContactpnumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="regno" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Registration Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="regno"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={regno}
                                        onChange={(e) => setRegno(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="GST" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        GST Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="GST"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={GST}
                                        onChange={(e) => setGST(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="PAN" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        PAN Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="PAN"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={PAN}
                                        onChange={(e) => setPAN(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
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
                                        onChange={(e) => setAddressline1(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
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
                                        onChange={(e) => setAddressLine2(e.target.value)}
                                    />
                                </div>
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
                                        onChange={(e) => setCity(e.target.value)}
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
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </div>
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
                                        onChange={(e) => setState(e.target.value)}
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
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="officetiming" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Office Timing
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="officetiming"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={officetiming}
                                        onChange={(e) => setOfficetiming(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="holidays" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Holidays
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="holidays"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={holidays}
                                        onChange={(e) => setHolidays(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="workingdays" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Working Days
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="workingdays"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={workingdays}
                                        onChange={(e) => setWorkingdays(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="seekerpost" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Post of the seeker
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="seekerpost"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={seekerpost}
                                        onChange={(e) => setSeekerpost(e.target.value)}
                                    />
                                </div>
                            </div>

                            <label className="block mb-2 font-semibold">
                                Upload Resume
                                <span className="text-red-700 relative top-0 right-0">* - </span>
                                <input type="file" name="resume" accept=".pdf" required />
                            </label>

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

export default Seeker;
