import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { navigateToContactPage } from "../components/utils.js";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get("service");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigateToContactPage(selectedService);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedServiceFromLink = queryParams.get("service");
    if (
      selectedServiceFromLink &&
      [
        "Career&ManPower",
        "Registration/Certificate",
        "License",
        "Auction (Material)",
        "Joint Venture",
        "Online Bidding",
      ].includes(selectedServiceFromLink)
    ) {
      setSelectedService(selectedServiceFromLink);
    }
  }, [location]);

  return (
    <>
      <Navbar selectedService={selectedService} />

      <div className="container mx-auto py-8 md:max-w-7xl">
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
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
            <div className="mb-4">
              <label htmlFor="name" className="flex items-center">
                <AiOutlineUser className="mr-2" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                <span>Company Name</span>
              </label>
              <input
                type="text"
                id="company"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                aria-label="Company Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                <span>Mobile Number</span>
              </label>
              <input
                type="text"
                id="mobile"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                aria-label="Mobile Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center">
                <AiOutlineMail className="mr-2" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="services" className="flex items-center">
                Select Services
              </label>
              <select
                id="services"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="">Select an option</option>
                <option value="Career&ManPower">Career & Man Power</option>
                <option value="Registration/Certificate">Registration / Certificate</option>
                <option value="Earn Gems">Earn Gems</option>
                <option value="Joint Venture">License</option>
                <option value="Auction (Material)">Auction Material</option>
                <option value="Joint Venture">Joint Venture</option>
                <option value="Tender Result">Online Bidding</option>
                <option value="Tender Result">Tender Result</option>
              </select>

            </div>
            <button
              type="submit"
              className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center">
            <AiOutlinePhone className="text-red-700 text-3xl mb-2" />
            <span className="font-semibold">Phone</span>
            <p className="mt-2">Sales: 8875515555</p>
            {/*<p>Support: 8875515555 </p>*/}
          </div>
          <div className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center">
            <RiMapPin2Line className="text-red-700 text-3xl mb-2" />
            <span className="font-semibold">Address</span>
            <p className="mt-2">
              S-3, Vinayak Jaipur, fwefsdfrgh, loream dndnvnuidnvuwzxm,njd n
              sjvbvsbdj vvjhbwejk as, 300000
            </p>
          </div>
          <div className="bg-white p-8 border-2 rounded-lg shadow-lg flex items-center justify-center flex-col text-center">
            <AiOutlineMail className="text-red-700 text-3xl mb-2" />
            <span className="font-semibold">E-Mail</span>
            <p className="mt-2">Info@tender.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
