const CertificationForm = require('../../models/services/Registration&Certification/certificationModel');

// Controller for submitting a certification form
const submitForm = async (req, res) => {
  try {
    const { name, userId, company, mobile, email, regno } = req.body;

    const certificationForm = new CertificationForm({
      name,
      userId,
      company,
      mobile,
      email,
      regno,
    });

    const savedForm = await certificationForm.save();
    res.json(savedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
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
