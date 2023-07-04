import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Directors from "../DynamicOpt/directors";
import Docs from "../DynamicOpt/docs";
import { locations } from "../../constants/countriesData";

const AuctionMaterial = () => {
    const [tenderNumber, setTenderNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [gst, setGst] = useState('');
    const [tenderLink, setTenderLink] = useState("");
    const [panCard, setPanCard] = useState('');
    const [website, setWebsite] = useState('');
    const [companyaddress1, setAddressline1] = useState("");
    const [companyaddress2, setAddressline2] = useState("");
    const [companycity, setCity] = useState("");
    const [companystate, setState] = useState('');
    const [zipcode, setZipcode] = useState("");
    const [projectMailId, setProjectMailId] = useState("");
    const [companycountry, setCountry] = useState("");
    const [contractPName, setContractPName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [auctionMaterials, setAuctionMaterials] = useState('');
    const [otherDetails, setOtherDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formValues = {
            tenderNumber,
            tenderLink,
            companyName,
            regNumber,
            gst,
            panCard,
            companyaddress1,
            companyaddress2,
            companycity,
            companystate,
            zipcode,
            companycountry,
            website,
            projectMailId,
            contractPName,
            contactNumber,
            auctionMaterials,
            otherDetails
        };
        console.log(formValues);

        var requestBody = new FormData();

        // Append form data to the request body
        Object.entries(formValues).forEach(([key, value]) => {
            requestBody.append(key, value);
        });

        const files = e.target.doc.files;

        for (let i = 0; i < files.length; i++) {
            requestBody.append("doc", files[i]);
        }

        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/apiTender/services/aumt/auction-material', {
            method: 'POST',
            headers: {
                auth: token,
            },
            body: requestBody,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success == true) {
                    alert('Submitted');
                    window.location.href = '/employer';
                }
                else {
                    alert('Something went wrong.Try Again.');
                    window.location.href = '/employer';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops something went wrong!!!');
            });
    };

    const handleDirectorSubmit = (directorData) => {
        // Log the director data to the console
        console.log(directorData);
    };

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

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-8 md:max-w-7xl">
                <div className="shadow-2xl p-6 bg-white rounded-lg  md:flex-row">
                    <div onSubmit={handleSubmit} encType="multipart/form-data">
                        <h2 className="text-2xl font-bold mb-4 text-center">Auction Material</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className=" p-2 rounded-lg">
                                <div className="flex">
                                    <label className="block font-semibold basis-1/2 mx-1">
                                        Tender Number
                                        <span className="text-red-700">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="tenderNumber"
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            value={tenderNumber}
                                            onChange={(e) => setTenderNumber(e.target.value)}
                                            placeholder="Enter Tender Number"
                                        />
                                    </label>
                                    <label className="block font-semibold basis-1/2 mx-1">
                                        Tender Link
                                        <span className="text-red-700">*</span>
                                        <input
                                            required
                                            type="URL"
                                            name="tenderLink"
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            value={tenderLink}
                                            onChange={(e) => setTenderLink(e.target.value)}
                                            placeholder="Enter Tender Link"
                                        />
                                    </label>
                                </div>
                                <label className="block font-semibold mt-2">
                                    Company Name
                                    <span className="text-red-700">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="companyName"
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        placeholder="Enter Company Name"
                                    />
                                </label>
                                <label className="block font-semibold mt-2">
                                    Registration Number
                                    <span className="text-red-700">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="regNumber"
                                        value={regNumber}
                                        onChange={(e) => setRegNumber(e.target.value)}
                                        placeholder="Enter Registration Number"
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    />
                                </label>


                                <form id="workExp" onSubmit={handleSubmit}>
                                    <div className="flex my-2">
                                        <div>
                                            <label className="block font-semibold">
                                                Work Experience
                                                <span className="text-red-700">*</span>
                                            </label>
                                            <Docs></Docs>
                                        </div>
                                    </div>
                                </form>


                                <form id="workOrder" onSubmit={handleSubmit}>
                                    <div className="flex my-2">
                                        <div>
                                            <label className="block font-semibold">
                                                Work Order Sample
                                                <span className="text-red-700">*</span>
                                            </label>
                                            <Docs></Docs>
                                        </div>
                                    </div>
                                </form>


                                <label className="block mb-2 font-semibold mt-3">
                                    Some Work Profile (Work Order Copies)
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <hr />
                                    <input
                                        type="file"
                                        name="workOrderCopies"
                                        accept=".pdf"
                                        multiple
                                        required
                                    />
                                </label>
                                <label className="block mb-2 font-semibold mt-3">
                                    GST
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        type="text"
                                        name="gst"
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        value={gst}
                                        onChange={(e) => setGst(e.target.value)}
                                        placeholder="Enter GST"
                                        required
                                    />
                                </label>
                                <label className="block mb-2 font-semibold mt-3">
                                    PAN
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        type="text"
                                        name="panCardDirectors"
                                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        value={panCard}
                                        onChange={(e) => setPanCard(e.target.value)}
                                        placeholder="Enter PAN"
                                        required
                                    />
                                </label>

                            </div>

                            <div className="p-2 rounded-lg">
                                <Directors onDirectorSubmit={handleDirectorSubmit} />
                                <label className="block mb-2 font-semibold mt-2">
                                    Address Line 1
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="companyaddress1"
                                        value={companyaddress1}
                                        onChange={(e) => setAddressline1(e.target.value)}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Address Line 1"
                                    />
                                </label>

                                <label className="block mb-2 font-semibold">
                                    Address Line 2
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        required
                                        type="text"
                                        name="companyaddress2"
                                        value={companyaddress2}
                                        onChange={(e) => setAddressline2(e.target.value)}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        placeholder="Enter Address Line 2"
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
                                            value={companycity}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            placeholder="Enter City"
                                        />
                                    </label>
                                    <label className="block mb-2 font-semibold basis-1/2">
                                        State
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="companystate"
                                            value={companystate}
                                            onChange={(e) => setState(e.target.value)}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            placeholder="Enter State"
                                        />
                                    </label>

                                </div>

                                <label className="block mb-2 font-semibold basis-1/2">
                                        Zipcode
                                        <span className="text-red-700 relative top-0 right-0">*</span>
                                        <input
                                            required
                                            type="text"
                                            name="companystate"
                                            value={zipcode}
                                            onChange={(e) => setZipcode(e.target.value)}
                                            className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                            placeholder="Enter State"
                                        />
                                    </label>

                                <label className="block mb-2 font-semibold">
                                    Country
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <select
                                        required
                                        name="companycountry"
                                        value={companycountry}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                    >
                                        {locations.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Website
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        type="text"
                                        name="website"
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        placeholder="Enter Website"
                                        required
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Project Mail Id
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        type="email"
                                        name="projectMailId"
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        value={projectMailId}
                                        onChange={(e) => setProjectMailId(e.target.value)}
                                        placeholder="Enter Email"
                                        required
                                    />
                                </label>
                                <label className="block mb-2 font-semibold">
                                    Contract Person Name
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <input
                                        type="text"
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        name="contractPName"
                                        value={contractPName}
                                        onChange={(e) => setContractPName(e.target.value)}
                                        placeholder="Enter Name"
                                        required
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
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block mb-2 font-semibold">
                                    Auction Materials List (multiple)
                                    <span className="text-red-700 relative top-0 right-0">*</span>
                                    <select
                                        name="auctionMaterials"
                                        value={auctionMaterials}
                                        onChange={(e) => setAuctionMaterials(e.target.value)}
                                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                                        required
                                    >
                                        <option value="">Select Auction Materials</option>
                                        <option value="Material 1">Material 1</option>
                                        <option value="Material 2">Material 2</option>
                                        <option value="Material 3">Material 3</option>
                                    </select>
                                </label>
                            </div>

                        </div>
                        <label className="block mb-2 font-semibold">
                            Other Details (if required)
                            <textarea
                                name="otherDetails"
                                value={otherDetails}
                                onChange={(e) => setOtherDetails(e.target.value)}
                                placeholder="Enter Other Details"
                                className="border rounded-sm px-3 py-2 mt-1 w-full h-24 text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            ></textarea>
                        </label>
                        <div className="flex items-center justify-between mb-4">
                            <button
                                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                                type="submit"
                            >
                                Submit
                            </button>
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
            </div >

            <Footer />
        </>
    );
};

export default AuctionMaterial;
