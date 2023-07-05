import React, { useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import Step1 from './Steps/CompanyDetails';
import Step2 from './Steps/CompanyUploads';
import Step3 from './Steps/PersonalDetails';
import Step4 from './Steps/Partnership';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const JointVenture = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 4;
    const gaps = totalSteps - 1;
    const progress = Math.round((currentStep / gaps) * 100);
    const [formData, setFormData] = useState({
        // 1. Company Details
        projectTenderName: "",
        companyName: "",
        pan: "",
        gst: "",
        website: "",
        workRatio: "",
        companyEmail: "",
        companyContactNo: "",
        cin: "",
        companyRegNo: "",
        companyAddress: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        tenderName: "",
        // 2. Company Uploads
        companyUploads: [],
        // 3. Personal Details
        directors: [
            {
                directorName: '',
                directorAadhar: '',
                directorPan: '',
                directorDob: '',
                directorFatherName: '',
                companyPost: '',
                email: '',
                contactNumber: '',
                uploads: []
            },
        ],
        // Partnership
        companyProfile: '',
        partnershipProjectTender: '',
        requirement: {
            finance: '',
            manPower: ''
        },
        partnershipRatio: '',
        startDate: '',
        endDate: '',
        volume: '',
        workerExperience: '',
        otherDescription: ''
    });

    const stepNames = [
        'Company Details',
        'Company Uploads',
        'Personal Details',
        'Partnership'
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic
        // e.g., send form data to server
        console.log(formData);

        // Reset form data and current step
        setFormData({
            // 1. Company Details
            projectTenderName: "",
            companyName: "",
            pan: "",
            gst: "",
            website: "",
            workRatio: "",
            companyEmail: "",
            companyContactNo: "",
            cin: "",
            companyRegNo: "",
            companyAddress: "",
            country: "",
            state: "",
            city: "",
            zipCode: "",
            tenderName: "",
            // 2. Company Uploads
            companyUploads: [],
            // 3. Personal Details
            directors: [
                {
                    directorName: '',
                    directorAadhar: '',
                    directorPan: '',
                    directorDob: '',
                    directorFatherName: '',
                    companyPost: '',
                    email: '',
                    contactNumber: '',
                    uploads: []
                },
            ],
            // Partnership
            companyProfile: '',
            partnershipProjectTender: '',
            requirement: {
                finance: '',
                manPower: ''
            },
            partnershipRatio: '',
            startDate: '',
            endDate: '',
            volume: '',
            workerExperience: '',
            otherDescription: ''
        });
        setCurrentStep(0);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto mt-6 px-4 py-8 mb-6 shadow-2xl rounded-lg">
                <div className="m-10">
                    <ProgressBar
                        percent={progress}
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                    >
                        {stepNames.map((_, index) => (
                            <Step key={index}>
                                {({ accomplished }) => (
                                    <div className={`step ${accomplished ? 'completed' : null}`} />
                                )}
                            </Step>
                        ))}
                    </ProgressBar>
                    <h2 className="text-2xl font-bold mb-4 mt-4 text-center ">Joint Venture</h2>
                    <p className="text-red-700 font-thin font-serif text-sm">
                        Fields marked with an asterisk (*) are mandatory.
                    </p>
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
                                handleSubmit={handleSubmit}
                                handlePrevious={handlePrevious}
                            />
                        )}

                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JointVenture;

