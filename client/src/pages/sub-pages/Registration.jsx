import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FileUpload from "../file-uploading/FileUpload";

const Registration = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [cprofile, setCprofile] = useState("");
    const [companyEstd, setCompanyEstd] = useState("");
    const [CIN, setCIN] = useState("");
    const [liscence, setLiscence] = useState("");
    const [cpname, setCpname] = useState("");
    const [fname, setFname] = useState("");
    const [companypost, setCompanypost] = useState("");
    const [GST, setGST] = useState("");
    const [PAN, setPAN] = useState("");
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
        setCIN("");
        setCprofile("");
        setCompanyEstd("");
        setCompanypost("");
        setLiscence("");
        setCpname("");
        setFname("");
        setGST("");
        setPAN("");
    };

    const sendDataToAPI = () => {
        const formData = {
            name,
            company,
            mobile,
            email,
            CIN,
            cprofile,
            companyEstd,
            companypost,
            liscence,
            cpname,
            fname,
            GST,
            PAN,
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
                                Registration
                            </h1>
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

                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="mobile" className="flex items-center">
                                        <AiOutlinePhone className="mr-2" />
                                        WhatsApp no.
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
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="email" className="flex items-center">
                                        <AiOutlineMail className="mr-2" />
                                        Secondary Number
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
                            </div>

                            <div className="mb-4">
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
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="cprofile" className="flex items-center">
                                        <AiOutlineUser className="mr-2" />
                                        Company Profile
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="cprofile"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={cprofile}
                                        onChange={(e) => setCprofile(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="companyEstd" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Company Establishment Year
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="companyEstd"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={companyEstd}
                                        onChange={(e) => setCompanyEstd(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="CIN" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        CIN / Registration Number
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="CIN"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={CIN}
                                        onChange={(e) => setCIN(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="liscence" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Lisence
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="liscence"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={liscence}
                                        onChange={(e) => setLiscence(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="liscence" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="liscence"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={liscence}
                                        onChange={(e) => setLiscence(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 basis-1/2 mx-1">
                                    <label htmlFor="liscence" className="flex items-center">
                                        <RiBuilding2Line className="mr-2" />
                                        Gem
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="liscence"
                                        className="border border-gray-300 rounded px-3 py-2 w-full"
                                        value={liscence}
                                        onChange={(e) => setLiscence(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cpname" className="flex items-center">
                                    <RiBuilding2Line className="mr-2" />
                                    Director / Name of the contacting Person
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="cpname"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={cpname}
                                    onChange={(e) => setCpname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fname" className="flex items-center">
                                    <RiBuilding2Line className="mr-2" />
                                    Father Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="fname"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="companypost" className="flex items-center">
                                    <RiBuilding2Line className="mr-2" />
                                    Post Of Company
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="companypost"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={companypost}
                                    onChange={(e) => setCompanypost(e.target.value)}
                                />
                            </div>
                            <div className="flex">
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

                            <label className="block mb-2 font-semibold">
                                Reg No.
                                <span className="text-red-700 relative top-0 right-0">* - </span>
                                <input type="file" name="resume" accept=".pdf" required />
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

export default Registration;
