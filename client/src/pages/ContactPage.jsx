import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendDataToAPI(selectedService);
    setName("");
    setCompany("");
    setMobile("");
    setEmail("");
    setSelectedService("");
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

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedServiceFromNavbar = queryParams.get("service");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const sendDataToAPI = (selectedService) => {
    const formData = {
      name,
      company,
      mobile,
      email,
      selectedService,
    };

    axios
      .post("/apiTender/post-contactform", formData)
      .then((response) => {
        console.log("Form data sent successfully:", response.data);
        alert("We will contact you soon!!!")
        setIsVisible(false);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
        alert("Oops something went wrong!!!")
      });
  };

  return (
    <>
      <Navbar selectedService={selectedService} />

      <div className='m-10 place-content-center flex justify-center'>
        <div className="mx-auto mt-6 px-4 py-8 shadow-2xl p-6 bg-white rounded-lg flex flex-col md:flex-row place-content-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 m-2">
            <img className="w-90"
              src={`${import.meta.env.BASE_URL}contact.jpg`}
              alt="login"
            />
          </div>

          <div className="w-full md:w-1/2 m-2">
            <form
              onSubmit={handleFormSubmit}
            >
              <h2 className="text-2xl font-bold mb-4 text-center ">Contact Us</h2>

              <div className="mb-4">
                <label className="block mb-2 font-semibold relative">
                  Name
                  <span className="text-red-700 relative top-0 right-0">*</span>

                  <input required
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold relative">
                  Company Name
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <input
                    required
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold" htmlFor="phoneNumber">
                  Phone Number
                  <span className="text-red-700 relative top-0 right-0">*</span>

                  <input
                    type="text"
                    id="mobile"
                    className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold">
                  Email
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <input required
                    type="email"
                    id="email"
                    className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label htmlFor="services" className="block mb-2 font-semibold">
                  Select Services
                  <span className="text-red-700 relative top-0 right-0">*</span>
                  <select required
                    id="services"
                    className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    value={selectedService || selectedServiceFromNavbar}
                    onChange={handleServiceChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Career&ManPower">Career & Man Power</option>
                    <option value="Registration/Certificate">
                      Registration / Certificate
                    </option>
                    <option value="Joint Venture">License</option>
                    <option value="Auction (Material)">Auction Material</option>
                    <option value="Joint Venture">Joint Venture</option>
                    <option value="Tender Result">Online Bidding</option>
                    <option value="Tender Result">Tender Result</option>
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
      <div>
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
            {/*<p>Support: 8875515555 </p>*/}
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
    </>
  );
};

export default ContactUsPage;