const CompanyForm = require('../../models/services/Registration&Certification/companyCertificationModel');
const { getFileByFilename, uploadFileToS3, getLink } = require('../../config/s3function')

// Controller for submitting a certification form
const submitForm = async (req, res) => {
  try {
    const {
      cinReg,
      companyName,
      companyProfile,
      contactNumber,
      contractPName,
      email,
      gst,
      pan,
      requestLicense,
      selectedPositions,
      website,
      workingField,
      others,
      docUrl,
      gstUrl,
      panUrl
    } = req.body;

    // Create a new instance of the CertificationForm model
    const certification = new CompanyForm({
      cinReg,
      companyName,
      companyProfile,
      contactNumber,
      contractPName,
      email,
      gst,
      pan,
      requestLicense,
      selectedPositions,
      website,
      workingField,
      others,
      docUrl,
      gstUrl,
      panUrl
    });

    // Save the certification form data to the database
    const savedForm = await certification.save();

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      data: savedForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form",
      error: error.message,
    });
  }
};

// Controller for getting all certification forms
const getAllForms = async (req, res) => {
  try {
    const forms = await CompanyForm.find().select('companyName companyProfile workingField contactNumber createdAt');
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting a single certification form by ID
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await CompanyForm.findById(id);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  submitForm,
  getAllForms,
  getFormById,
};
