const IndividualForm = require('../../models/services/Registration&Certification/indivisualCertificationModel');
const { getFileByFilename, uploadFileToS3, getLink } = require('../../config/s3function')

// Controller for submitting a certification form
const submitForm = async (req, res) => {
  try {
    const {
      name,
      fatherName,
      dob,
      aadharNumber,
      panNumber,
      workingField,
      companyaddress1,
      companyaddress2,
      companycity,
      companystate,
      zipcode,
      companycountry,
      others,
      mobileNumber,
      email,
      requestLicense,
    } = req.body;
console.log(req.body)
    const newForm = await IndividualForm.create({
      name,
      fatherName,
      dob,
      aadharNumber,
      panNumber,
      workingField,
      companyaddress1,
      companyaddress2,
      companycity,
      companystate,
      zipcode,
      companycountry,
      others,
      mobileNumber,
      email,
      requestLicense,
    });

    res.status(201).json({ success: true, data: newForm });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for getting all certification forms
const getAllForms = async (req, res) => {
  try {
    const forms = await IndividualForm.find().select('address name mobileNumber workingField createdAt');
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
