import React, { useEffect, useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Step1 from './Steps/TenderDetails';
import Step2 from './Steps/WorkExperience';
import Step3 from './Steps/DirectorDetails';
import Step4 from './Steps/CompanyInfo';
import Step5 from './Steps/AuctionMaterial';
import axios from "axios";
import uploadFileToS3 from "../../../pages/file-uploading/FileUpload";
import payment from '../../../components/payment';

const uploadMultipleFilesToS3 = async (files) => {
  const uploadPromises = files.map(async (file) => {
    const result = await uploadFileToS3(file);
    return result;
  });

  const results = await Promise.all(uploadPromises);
  return results;
};


const AuctionMaterialForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [auctionMaterials, setAuctionMaterials] = useState([]);

  useEffect(() => {
    fetchAuctionMaterial();
  }, []);


  const fetchAuctionMaterial = async () => {
    const response = await axios.get("http://localhost:5000/apiTender/options/alloptions?array=AuctionMaterials");
    setAuctionMaterials(response.data[0].AuctionMaterials);
  }

  const totalSteps = 5;
  const gaps = totalSteps - 1;
  const progress = Math.round((currentStep / gaps) * 100);
  const [formData, setFormData] = useState({
    // 1. Tender Details
    tenderNumber: '',
    tenderLink: '',
    companyName: '',
    cinReg: '',
    gst: '',
    pan: '',
    // 2. Work Experience
    workExperience: [],
    // 3. Director Details
    directors: [
      {
        directorName: '',
        directorAadhar: '',
        directorPan: '',
        directorDob: '',
        directorFatherName: '',
      },
    ],
    // Company Information
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    website: '',
    projectMailId: '',
    contactPersonName: '',
    contactPersonNumber: '',
    // Auction Material
    auctionMaterial: [],
    otherDescription: '',
  });

  const stepNames = [
    'Tender Details',
    'Work Experience',
    'Director Details',
    'Company Information',
    'Auction Material',
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const updatedFiles = Array.from(files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedFiles,
    }));
  };

  const resetForm = () => {
    setFormData({
      tenderNumber: '',
      tenderLink: '',
      companyName: '',
      cinReg: '',
      gst: '',
      pan: '',
      workExperience: [],
      directors: [
        {
          directorName: '',
          directorAadhar: '',
          directorPan: '',
          directorDob: '',
          directorFatherName: '',
        },
      ],
      address: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      website: '',
      projectMailId: '',
      contactPersonName: '',
      contactPersonNumber: '',
      auctionMaterial: [],
      otherDescription: '',
    });
    setCurrentStep(0);
  }
  const getAmount=async()=>{
    const {data:{price}} = await axios.get("http://localhost:5000/apiTender/formprice/Auction%20Material/price");
    return price;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const price = await getAmount();
    const receipt = "Auction Material";
    payment(price,receipt)
      .then(async success => {
        console.log('Payment success:', success);
        var requestBody = formData;

        const workExperienceFiles = requestBody.workExperience.workExperience;
        const workOrderSamplesFiles = requestBody.workExperience.workOrderSamples;
        const workProfilesFiles = requestBody.workExperience.workProfiles;

        const workExperienceUrls = await uploadMultipleFilesToS3(workExperienceFiles);
        const workOrderSamplesUrls = await uploadMultipleFilesToS3(workOrderSamplesFiles);
        const workProfilesUrls = await uploadMultipleFilesToS3(workProfilesFiles);

        requestBody.workExperience.workExperience = workExperienceUrls;
        requestBody.workExperience.workOrderSamples = workOrderSamplesUrls;
        requestBody.workExperience.workProfiles = workProfilesUrls;
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/apiTender/services/aumt/auction-material', requestBody, {
          headers: {
            'auth': token
          }
        });
        if (response.data.success) {
          alert('Submitted');
          resetForm();
        } else {
          alert('Something went wrong. Try again.');
        }
      })
      .catch(error => {
        console.error('Payment error:', error);
        // Handle the error if the payment fails
      });

  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 border-2 border-gray-900 rounded-md">
        <div className="m-10">
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

          <form onSubmit={handleSubmit}>
            {currentStep === 0 && (
              <Step1
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNext}
              />
            )}

            {currentStep === 1 && (
              <Step2
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                handleFileChange={handleFileChange}
              />
            )}

            {currentStep === 2 && (
              <Step3
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                setFormData={setFormData}
              />
            )}

            {currentStep === 3 && (
              <Step4
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />
            )}

            {currentStep === 4 && (
              <Step5
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handlePrevious={handlePrevious}
                auctionMaterials={auctionMaterials}
              />
            )}

          </form>
        </div>
      </div>
    </>
  );
};

export default AuctionMaterialForm;

