const AuctionMaterialForm = require('../../models/services/AuctionMaterials/auctionmaterials');

// Controller for submitting a form
const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    const newForm = await AuctionMaterialForm.create(formData);
    res.status(201).json({ success: true, data: newForm });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller for getting all forms
const getAllForms = async (req, res) => {
  try {
    const forms = await AuctionMaterialForm.find();
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    console.error('Error getting forms:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Controller for getting a form by ID
const getFormById = async (req, res) => {
  try {
    const formId = req.params.id;
    const form = await AuctionMaterialForm.findById(formId);
    
    if (!form) {
      return res.status(404).json({ success: false, error: 'Form not found' });
    }
    
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    console.error('Error getting form:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  submitForm,
  getAllForms,
  getFormById,
};
