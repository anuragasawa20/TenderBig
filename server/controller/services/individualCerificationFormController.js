const IndividualForm = require('../../models/services/Registration&Certification/indivisualCertificationModel');
const { getFileByFilename, uploadFileToS3, getLink } = require('../../config/s3function')

// Controller for submitting a certification form
const submitForm = async (req, res) => {
  try {
    const {
      aadharNumber,
      address,
      dob,
      email,
      fatherName,
      mobileNumber,
      name,
      panNumber,
      requestLicense,
      workingField
    } = req.body;

    const docFile = getFileByFilename(req.files, 'doc');
    const docUrl = (await uploadFileToS3(docFile));

    // Create a new instance of the ModelName model
    const data = new IndividualForm({
      aadharNumber,
      address,
      dob,
      email,
      fatherName,
      mobileNumber,
      name,
      panNumber,
      requestLicense,
      workingField,
      url:docUrl
    });

    // Save the form data to the database
    const savedData = await data.save();

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      data: savedData,
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
    const forms = await IndividualForm.find().select('address name mobileNumber workingField');
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
    const form = await IndividualForm.findById(id);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    form.url = await getLink(form.url)
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
