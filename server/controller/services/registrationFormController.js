const RegistrationForm = require('../../models/services/Registration&Certification/registrationModel');

// Controller for submitting a registration form
const submitForm = async (req, res) => {
  try {
    // Extract the form data from the request body
    const {
      userId,
      name,
      Gem,
      company,
      mobile,
      secMobile,
      email,
      CIN,
      wmobile,
      cprofile,
      companyEstd,
      companypost,
      liscence,
      cpname,
      fname,
      GST,
      PAN,
    } = req.body;

    // Create a new instance of the RegistrationForm model
    const registration = new RegistrationForm({
      userId,
      name,
      Gem,
      company,
      mobile,
      secMobile,
      email,
      CIN,
      wmobile,
      cprofile,
      companyEstd,
      companypost,
      liscence,
      cpname,
      fname,
      GST,
      PAN,
    });

    // Save the registration form data to the database
    const savedForm = await registration.save();

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

// Controller for getting all registration forms
const getAllForms = async (req, res) => {
  try {
    const forms = await RegistrationForm.find();
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting a single registration form by ID
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await RegistrationForm.findById(id);

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
