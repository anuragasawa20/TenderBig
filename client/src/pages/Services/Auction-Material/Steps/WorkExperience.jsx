import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Step2 = ({ formData, handleChange, handleNext, handlePrevious }) => {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const updatedFiles = Array.from(files);
    setFileList((prevFileList) => ({
      ...prevFileList,
      [name]: updatedFiles,
    }));
  };

  const handleNextClick = () => {
    handleChange({
      target: {
        name: 'workExperience',
        value: fileList,
      },
    });
    handleNext();
  };

  return (
    <div className="mt-4">
      <div className="p-2 rounded-lg">

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-semibold">
              Work Experience
              <span className="text-red-700 relative top-0 right-0">*</span>
            </label>
            <input
              required
              type="file"
              id="workExperience"
              name="workExperience"
              accept='.pdf'
              multiple
              onChange={handleFileChange}
              className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Work Order Samples
              <span className="text-red-700 relative top-0 right-0">*</span>
            </label>
            <input
              required
              type="file"
              id="workOrderSamples"
              name="workOrderSamples"
              accept='.pdf'
              multiple
              onChange={handleFileChange}
              className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
            Work Profiles
              <span className="text-red-700 relative top-0 right-0">*</span>
            </label>
            <input
              required
              type="file"
              id="workProfiles"
              name="workProfiles"
              accept='.pdf'
              multiple
              onChange={handleFileChange}             
              className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-red-900 focus:ring-red-900 dark:bg-red-100 dark:border-red-700 dark:text-black file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-red-700 dark:file:text-white"
            />
          </div>

        </div>
      </div>

      <div className="center flex flex-col items-center">
        <div className="flex justify-between w-full">
          <div className="w-1/4">
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 mt-8 rounded align-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="w-1/4 flex justify-end">
            <button
              type="button"
              onClick={handleNextClick}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 mt-8 rounded align-center"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Step2;
