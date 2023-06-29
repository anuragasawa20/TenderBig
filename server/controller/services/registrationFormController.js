const RegistrationForm = require('../../models/services/Registration&Certification/registrationModel');

// Controller for submitting a registration form
const submitForm = async (req, res) => {
    try {
        const { name, userId, company, mobile, email, gst, pan, aadhar, url } = req.body;

        const registrationForm = new RegistrationForm({
            name,
            userId,
            company,
            mobile,
            email,
            gst,
            pan,
            aadhar,
            url,
        });

        const savedForm = await registrationForm.save();
        res.json(savedForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
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
