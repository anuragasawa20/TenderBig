const gemregistrationForm = require("../../models/services/GemRegistration/gemregistration");

// Submit Joint Venture form
const submitForm = async (req, res) => {
    try {
        const {
          name,
          email,
          contact,
          aadhar,
          companyName,
          panNumber,
          websiteAddress,
          gst,
          startDate,
          address,
          country,
          state,
          city,
          zip,
        } = req.body;
    
        const gemregistration = new gemregistrationForm({
          name,
          email,
          contact,
          aadhar,
          companyName,
          panNumber,
          websiteAddress,
          gst,
          startDate,
          address,
          country,
          state,
          city,
          zip,
        });
    
        const savedForm = await gemregistration.save();
    
        res.status(200).json({
          success: true,
          message: "Gem registration form submitted successfully",
          data: savedForm,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "An error occurred while submitting the gem registration form",
          error: error.message,
        });
      }
};

// Get all Joint Venture forms
const getAllForms = async (req, res) => {
    try {
        const forms = await gemregistrationForm.find();
        res.json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

// Get a single Joint Venture form
const getFormById = async (req, res) => {
    try {
        const formId = req.params.id;
        const form = await gemregistrationForm.findById(formId);
        if (!form) {
            return res.status(404).json({ error: "Form not found" });
        }
        res.json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = { submitForm, getAllForms, getFormById };
