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
        name: 'companyUploads',
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
            <label htmlFor='gstUpload' className="block mb-2 font-semibold relative">
              GST
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="file"
                id="gstUpload"
                name="gstUpload"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="panUpload" className="block mb-2 font-semibold relative">
             PAN Card
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                required
                type="file"
                id="panUpload"
                name="panUpload"
                onChange={handleFileChange}
              /></label>
          </div>
          <div>
            <label htmlFor="cinUpload" className="block mb-2 font-semibold relative">
              CIN
              <input
                required
                type="file"
                id="cinUpload"
                name="cinUpload"
                onChange={handleFileChange}
              /></label>
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
