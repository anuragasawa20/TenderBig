import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Step3 = ({ formData, handleChange, handleNext, handlePrevious, setFormData }) => {
  const handleDirectorChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDirectors = [...formData.directors];
    updatedDirectors[index][name] = value;
    setFormData({ ...formData, directors: updatedDirectors });
  };

  const handleDirectorFileChange = (index, fileType, event) => {
    const { name, files } = event.target;
    const updatedDirectors = [...formData.directors];
    const file = files[0];

    updatedDirectors[index].uploads[fileType] = file;

    setFormData({ ...formData, directors: updatedDirectors });
  };

  const addDirector = () => {
    const updatedDirectors = [...formData.directors];
    updatedDirectors.push({
      directorName: '',
      directorAadhar: '',
      directorPan: '',
      directorDob: '',
      directorFatherName: '',
      companyPost: '',
      email: '',
      contactNumber: '',
      uploads: {
        gst: null,
        pan: null,
        aadhar: null,
        photo: null,
      },
    });
    setFormData({ ...formData, directors: updatedDirectors });
  };

  const removeDirector = (index) => {
    const updatedDirectors = [...formData.directors];
    updatedDirectors.splice(index, 1);
    setFormData({ ...formData, directors: updatedDirectors });
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 ">Personal Details</h2>
      {formData.directors.map((director, index) => (
        <div key={index}>
          <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2 font-semibold relative">
              Director Name
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="text"
                name="directorName"
                value={director.directorName}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Director Name"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Director Aadhar No
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="text"
                name="directorAadhar"
                value={director.directorAadhar}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Number"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Director PAN No
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="text"
                name="directorPan"
                value={director.directorPan}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Number"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Director DOB
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="date"
                name="directorDob"
                value={director.directorDob}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Father's Name
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="text"
                name="directorFatherName"
                value={director.directorFatherName}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Name"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Company Post
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="text"
                name="companyPost"
                value={director.companyPost}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Post"
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Email
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                type="email"
                name="email"
                value={director.email}
                onChange={(event) => handleDirectorChange(index, event)}
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Enter Email"
                required
              />
            </label>
            <label className="block mb-2 font-semibold">
              Contact Number
              <span className="text-red-700 relative top-0 right-0">*</span>
              <input
                className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                placeholder="Enter Phone Number"
                onChange={(event) => handleDirectorChange(index, event)}
                required
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              GST Certificate
              <input
                type="file"
                name="uploads.gst"
                onChange={(event) => handleDirectorFileChange(index, 'gst', event)}
                className="mt-1"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              PAN Card
              <input
                type="file"
                name="uploads.pan"
                onChange={(event) => handleDirectorFileChange(index, 'pan', event)}
                className="mt-1"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Aadhar Card
              <input
                type="file"
                name="uploads.aadhar"
                onChange={(event) => handleDirectorFileChange(index, 'aadhar', event)}
                className="mt-1"
              />
            </label>
            <label className="block mb-2 font-semibold relative">
              Photo
              <input
                type="file"
                name="uploads.photo"
                onChange={(event) => handleDirectorFileChange(index, 'photo', event)}
                className="mt-1"
              />
            </label>
            <div></div>
            {index > 0 && (
              <button type="button" onClick={() => removeDirector(index)}>
                <FontAwesomeIcon icon={faTrash} /> Remove
              </button>
            )}
          </div>
          <hr className="border-gray-900 border-2 mb-4"/>
        </div>
      ))}

      <div className="mt-4">
        <button type="button" onClick={addDirector}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
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
              onClick={handleNext}
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

export default Step3;
