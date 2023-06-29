import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

const RegAndCert = () => {
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

  const sendDataToAPI = (selectedService) => {
    const formData = {
      name,
      company,
      mobile,
      email,
      selectedService,
    };

    axios
      .post("http://localhost:5000/apiTender/post-contactform", formData)
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

      <div className="container mx-auto py-8 md:max-w-7xl">
        <div className="space-y-8">
          <div className="flex items-center justify-center flex-col md:flex-row">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1687066253~exp=1687066853~hmac=42f23f007ad72bd2ca440a69684ce6508082c1182b3c54179addffc4163960af"
              className="w-4/5 md:w-1/2"
              alt="Contact illustration"
            />
            <form
              onSubmit={handleFormSubmit}
              className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
            >
              <h1 className="text-3xl font-bold text-center mb-4">
                Registration / Certification
              </h1>

              <p className="flex justify-center p-2">State you Designation</p>
              <Link to="/registration">
                <button
                  type="submit"
                  className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                >
                  Registration
                </button>
              </Link>
              <p className="flex justify-center p-3">OR</p>
              <Link to="/certification">
                <button
                  type="submit"
                  className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
                >
                  Certification
                </button>
              </Link>
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

export default RegAndCert;