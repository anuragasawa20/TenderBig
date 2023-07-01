const CertificationForm = require('../../models/services/Registration&Certification/certificationModel');

// Controller for submitting a certification form
const submitForm = async (req, res) => {
  try {
    // Extract the form data from the request body
    const {
      userId,
      name,
      company,
      mobile,
      email,
      regno
    } = req.body;

    // Create a new instance of the CertificationForm model
    const certification = new CertificationForm({
      userId,
      name,
      company,
      mobile,
      email,
      regno
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
    const forms = await CertificationForm.find();
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
    const form = await CertificationForm.findById(id);
    
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
