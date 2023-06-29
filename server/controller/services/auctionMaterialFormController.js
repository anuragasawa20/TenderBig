const AuctionMaterialForm = require('../../models/services/AuctionMaterials/auctionmaterials');

// Controller for submitting an auction material form
const submitForm = async (req, res) => {
  try {
    const { userId, tenderBidNo, url, docurl } = req.body;

    const auctionMaterialForm = new AuctionMaterialForm({
      userId,
      tenderBidNo,
      url,
      docurl,
    });

    const savedForm = await auctionMaterialForm.save();
    res.json(savedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting all auction material forms
const getAllForms = async (req, res) => {
  try {
    const forms = await AuctionMaterialForm.find();
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting a single auction material form by ID
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await AuctionMaterialForm.findById(id);
    
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
